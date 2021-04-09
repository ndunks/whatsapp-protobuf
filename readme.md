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
``` patch
diff --git a/index.ts b/index.ts
index 676f7c0..ce61387 100644
--- a/index.ts
+++ b/index.ts
@@ -1302,6 +1302,9 @@ export class ImageMessage extends pb_1.Message {
     set midQualityFileEncSha256(value: Uint8Array) {
         pb_1.Message.setField(this, 24, value);
     }
+    addScanLengths(value: number, index?: number) {
+        pb_1.Message.addToRepeatedField(this, 22, value, index);
+    }
     toObject() {
         return {
             url: this.url,
@@ -1436,7 +1439,7 @@ export class ImageMessage extends pb_1.Message {
                     message.scansSidecar = reader.readBytes();
                     break;
                 case 22:
-                    message.scanLengths = reader.readPackedUint32();
+                    message.addScanLengths(reader.readUint32());
                     break;
                 case 23:
                     message.midQualityFileSha256 = reader.readBytes();
```
