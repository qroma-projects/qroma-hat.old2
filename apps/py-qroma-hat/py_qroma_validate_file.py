import asyncio
# from py_qroma.qroma_comm.qcio_serial import QcioSerial
from py_qroma.qroma_comm.qcio_serial_b64 import QcioSerial
from settings import QROMA_ACTIVE_COM_PORT

from py_qroma.qroma_comm_proto import qroma_comm_pb2

from qroma_proto import my_project_messages_pb2


def create_validate_dgsr_file_command(file_path):
    command = my_project_messages_pb2.GetDgsrImageValidationResultCommand()
    command.imagePath = file_path

    my_project_command = my_project_messages_pb2.MyProjectCommand()
    my_project_command.getDgsrImageValidationResult.CopyFrom(command)

    msg_bytes = my_project_command.SerializeToString()
    return msg_bytes


async def monitor(com_port: str):
    print("STARTING QROMA MONITOR")

    qcio = QcioSerial(com_port)
    asyncio.create_task(qcio.run())

    await qcio.is_ready()

    # print("MONITOR READY")
    # i = 0
    # while i < 5:
    #     if i % 2 == 0:
    #         msg_bytes = create_validate_dgsr_file_command("/qroma_hat.dgsr")
    #         await qcio.send_app_command_bytes(msg_bytes)
    #
    #     data = await qcio.read_bytes_until_timeout(1.0)
    #     print(f"LINE RECEIVED: {data}")
    #     i = i + 1

    msg_bytes = create_validate_dgsr_file_command("/qroma_hat.dgsr")
    await qcio.send_app_command_bytes(msg_bytes)

    data = await qcio.read_bytes_until_timeout(10.0)
    print(f"LINE RECEIVED: {data}")

    print("STOPPING MONITOR")
    qcio.stop()

    print("DONE")


if __name__ == "__main__":
    asyncio.run(monitor(QROMA_ACTIVE_COM_PORT))