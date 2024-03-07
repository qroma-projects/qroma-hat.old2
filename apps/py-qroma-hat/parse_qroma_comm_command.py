import base64
from py_qroma.qroma_comm_proto import qroma_comm_pb2
from qroma_proto import my_project_messages_pb2


MESSAGE_BASE64 = """
Cg4iDAoKL2Jsb2IuZGdzcg==
"""

b = base64.b64decode(MESSAGE_BASE64.strip())

qc_command = qroma_comm_pb2.QromaCommCommand()
qc_command.ParseFromString(b)

print("QromaComm Command")
print(qc_command)
print()

app_command_bytes = qc_command.appCommandBytes

app_command = my_project_messages_pb2.MyProjectCommand()
app_command.ParseFromString(app_command_bytes)

print("MyProjectCommand")
print(app_command)
