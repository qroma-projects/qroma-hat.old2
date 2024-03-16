import asyncio
from settings import QROMA_ACTIVE_COM_PORT, TEST_FILE

from py_qroma.qroma_comm_proto import qroma_comm_pb2
from py_qroma.qroma_comm_proto import qroma_types_pb2
from py_qroma.qroma_comm_proto import qroma_streams_pb2
from py_qroma.qroma_comm import utils

import base64
import zlib
import time
import aioserial


class UploadEvents:
    rx_ready: asyncio.Event = asyncio.Event()

    init_sent: asyncio.Event = asyncio.Event()
    ack_received: asyncio.Event = asyncio.Event()

    file_sent: asyncio.Event = asyncio.Event()
    file_response_received: asyncio.Event = asyncio.Event()

    upload_complete: asyncio.Event = asyncio.Event()


class UploadFileDetails:
    local_file_name: str
    upload_path: str
    crc: int
    file_bytes: bytes


class UploadDetails:
    events: UploadEvents
    file_details: UploadFileDetails
    serial: aioserial.AioSerial
    file_stream_id: str


def create_stream_file_contents_bytes(file_details: UploadFileDetails, file_stream_id):
    file_data = qroma_types_pb2.FileData()
    file_data.filename = file_details.upload_path
    file_data.filesize = len(file_details.file_bytes)
    file_data.checksum = file_details.crc

    write_stream_command = qroma_streams_pb2.InitWriteFileStreamCommand()
    write_stream_command.fileStreamId = file_stream_id
    write_stream_command.fileData.CopyFrom(file_data)

    qs_command = qroma_streams_pb2.QromaStreamCommand()
    qs_command.initWriteFileStreamCommand.CopyFrom(write_stream_command)

    qroma_message = qroma_comm_pb2.QromaCommCommand()
    qroma_message.streamCommand.CopyFrom(qs_command)

    print(qroma_message)

    msg_bytes = qroma_message.SerializeToString()
    return msg_bytes


async def upload_file_script(upload_details: UploadDetails):
    upload_events = upload_details.events
    serial = upload_details.serial

    await upload_events.rx_ready.wait()

    msg_bytes = create_stream_file_contents_bytes(upload_details.file_details, upload_details.file_stream_id)
    b64_msg_bytes = base64.b64encode(msg_bytes) + b"\n"

    await serial.write_async(b64_msg_bytes)

    await upload_events.ack_received.wait()

    print("STARTING UPLOAD")
    file_bytes = upload_details.file_details.file_bytes
    await serial.write_async(file_bytes)
    upload_events.file_sent.set()

    print("FILE BYTES SENT - WAITING FOR RESPONSE")
    await upload_events.file_response_received.wait()


async def monitor_for_messages(upload_details: UploadDetails):
    print("STARTING MONITOR")

    upload_events = upload_details.events
    serial = upload_details.serial

    read_buffer = bytearray()

    while not upload_events.ack_received.is_set():
        upload_events.rx_ready.set()
        data: bytes = await serial.read_async()
        read_buffer.extend(data)
        qc_response, read_buffer = utils.process_buffer_for_qc_response(read_buffer)
        if qc_response:
            print(f"RESPONSE: {qc_response}")
            print(type(qc_response))

            upload_events.ack_received.set()


if __name__ == "__main__":
    FILE_STREAM_ID = int(time.time())
    FILE_PATH = f"/upload_{FILE_STREAM_ID}.txt"

    with open(TEST_FILE, "rb") as f:
        fileBytes = bytearray(f.read())
        expectedCrc = zlib.crc32(fileBytes)

    uploadFileDetails: UploadFileDetails = UploadFileDetails()
    uploadFileDetails.local_file_name = TEST_FILE
    uploadFileDetails.upload_path = FILE_PATH
    uploadFileDetails.file_bytes = fileBytes
    uploadFileDetails.crc = expectedCrc

    aioserialInstance: aioserial.AioSerial = aioserial.AioSerial(
        port=QROMA_ACTIVE_COM_PORT,
        baudrate=115200,
        )

    uploadDetails = UploadDetails()
    uploadDetails.events = UploadEvents()
    uploadDetails.file_details = uploadFileDetails
    uploadDetails.serial = aioserialInstance
    uploadDetails.file_stream_id = FILE_STREAM_ID

    async def do_main():
        await asyncio.gather(
            upload_file_script(uploadDetails),
            monitor_for_messages(uploadDetails),
        )

    asyncio.run(do_main())

    # print(FILE_PATH)
    # print(len(file_bytes))
    # print(f"FILE_STREAM_ID: {FILE_STREAM_ID}")
    # print(f"EXPECTED CRC: {expected_crc}")

    # buffer = b"STREAM COMMANDQromaCommProcessor::startStreamReadingMode\r\nKg8KDQgBENe6sa8GGgNBQ0s=\nDONE STREAM COMMAND\nWRITING FINAL STREAM BYTES: 240\r\nQromaCommProcessor::endStreamReadingMode\r\nKj8SPQgBENe6sa8GGhlGaWxlIHdyaXR0ZW4gc3VjY2Vzc2Z1bGx5IhgKDS8yNDBieXRlcy50eHQQ8AEY1/nCxAk=\nrxNeedsDelay\r\nrxNeedsDelay\r\nrxNeedsDelay\r\nrxNeedsDelay\r\nrxNeedsDelay\r\nrxNeedsDelay\r\nrxNeedsDelay\r\nrxNeedsDelay\r\nrxNeedsDelay\r\nqroma-hat loop >> 13918\r\nrxNeedsDelay\r\nrxNeedsDelay\r\nrxNeedsDelay\r\nrxNeedsDelay\r\nrxNeedsDela"
    # qc_response, leftover_buffer = utils.process_buffer_for_qc_response(buffer)
    # print(qc_response)
    # print(leftover_buffer)
