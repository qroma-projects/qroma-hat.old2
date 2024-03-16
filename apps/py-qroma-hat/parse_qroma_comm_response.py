import base64
from py_qroma.qroma_comm_proto import qroma_comm_pb2
from qroma_proto import my_project_messages_pb2


RESPONSE_BASE64 = """
EgcSBQjAARAB
"""

b = base64.b64decode(RESPONSE_BASE64.strip())

qc_response = qroma_comm_pb2.QromaCommResponse()
qc_response.ParseFromString(b)

print("QromaComm Response")
print(qc_response)


app_response_bytes = qc_response.appResponseBytes
print(app_response_bytes)

app_response = my_project_messages_pb2.MyProjectResponse()
app_response.ParseFromString(app_response_bytes)

print("MyProjectResponse")
print(app_response)
