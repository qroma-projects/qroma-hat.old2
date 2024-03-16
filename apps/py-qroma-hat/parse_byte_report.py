import zlib


with open("image_byte_report.txt") as f:
    l = f.read()
    the_bytes = [int(x[1:]) for x in l.split("\\r\\n") if len(x) > 0]
    print(the_bytes)
    print(len(the_bytes))
    byte_array = bytearray(the_bytes)
    print(len(byte_array))
    crc = zlib.crc32(byte_array)
    print(crc)


with open("qroma_hat.dgsr", "br") as f:
    the_bytes = bytearray(f.read())
    print(len(the_bytes))
    crc = zlib.crc32(the_bytes)
    print(crc)


with open("qroma_hat_from_esp32.dgsr", "br") as f:
    the_bytes = bytearray(f.read())
    print(len(the_bytes))
    crc = zlib.crc32(the_bytes)
    print(crc)

with open("qroma_hat_from_app.dgsr", "br") as f:
    the_bytes = bytearray(f.read())
    print(len(the_bytes))
    crc = zlib.crc32(the_bytes)
    print(crc)