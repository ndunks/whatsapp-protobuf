# WhatsApp Web Protol Buffer

This contain prebuild WhatsApp Web Protocol Buffer for NodeJS, so you don't need to do anything, just import.

## If You Want to Rebuild

- Download Protocol Buffer for you Machine (protoc).
  here: [github.com/protocolbuffers/protobuf/releases](https://github.com/protocolbuffers/protobuf/releases)
- Install depencies:  `yarn install` or `npm install`
- Build it: `./build.sh`

## How to Update `whatsapp.proto` to The Latest Version?

You can update it by extracting from web.whatsapp.com with the **extractor tool** by [Sigalor](https://github.com/sigalor).
Check here: [github.com/sigalor/whatsapp-web-reveng](https://github.com/sigalor/whatsapp-web-reveng/tree/master/doc/spec/protobuf-extractor)

**Rebuild proto notes**
Some Protobuf Builder ignore the syntax=proto2, so I need to enhanced whatsapp.proto like this:
```
# from 
repeated uint32 scanLengths = 22;
# to
repeated uint32 scanLengths = 22 [packed=false];
```
and also I modified generated ts file manually, because `protoc-gen-ts` 
has problem dealing with `repeated integer fields` on protobuf version 2.
this the patch:
``` 
# REPLACE
message.scanLengths = reader.readUint32();
# WITH
pb_1.Message.addToRepeatedField(message, 22, reader.readUint32());
```
I have replaced it in `build.sh` using sed.
