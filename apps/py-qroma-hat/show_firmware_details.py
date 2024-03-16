import asyncio
import aioserial

from py_qroma.qroma_comm_proto import qroma_comm_pb2
from py_qroma.qroma_comm import utils

from qroma_proto import my_project_messages_pb2
import base64

from settings import QROMA_ACTIVE_COM_PORT


class IoEvents:
    rx_ready: asyncio.Event = asyncio.Event()

    get_details_sent: asyncio.Event = asyncio.Event()
    get_details_received: asyncio.Event = asyncio.Event()


def create_get_firmware_details_bytes() -> bytes:
    my_project_command = my_project_messages_pb2.MyProjectCommand()

    my_project_command.noArgCommand = my_project_messages_pb2.Nac_GetFirmwareDetails

    app_command_bytes = my_project_command.SerializeToString()

    qroma_message = qroma_comm_pb2.QromaCommCommand()
    qroma_message.appCommandBytes = app_command_bytes

    msg_bytes = qroma_message.SerializeToString()
    return msg_bytes


async def run_script(io_events: IoEvents, serial: aioserial.AioSerial):

    await io_events.rx_ready.wait()

    msg_bytes = create_get_firmware_details_bytes()
    b64_msg_bytes = base64.b64encode(msg_bytes) + b"\n"

    await serial.write_async(b64_msg_bytes)

    print("GET FIRMWARE DETAILS REQUEST SENT")


async def monitor_for_messages(io_events: IoEvents, serial: aioserial.AioSerial):
    print("STARTING MONITOR")

    read_buffer = bytearray()

    while not io_events.get_details_received.is_set():
        io_events.rx_ready.set()
        data: bytes = await serial.read_async()
        read_buffer.extend(data)
        qc_response, read_buffer = utils.process_buffer_for_qc_response(read_buffer)
        if qc_response:
            print(f"RESPONSE: {qc_response}")
            io_events.get_details_received.set()


if __name__ == "__main__":

    aioserialInstance: aioserial.AioSerial = aioserial.AioSerial(
        port=QROMA_ACTIVE_COM_PORT,
        baudrate=115200,
    )

    ioEvents = IoEvents()

    async def do_main():
        await asyncio.gather(
            run_script(ioEvents, aioserialInstance),
            monitor_for_messages(ioEvents, aioserialInstance),
        )


    asyncio.run(do_main())
