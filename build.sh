#!/bin/sh
set -e

if ! which protoc > /dev/null; then
    echo "Missing protoc, please install it"
    echo "See: https://github.com/protocolbuffers/protobuf/releases"
    exit 1
fi

if which protoc-gen-ts > /dev/null; then
    PROTOC_GEN_TS_PATH=$(which protoc-gen-ts)
elif [ -x node_modules/.bin/protoc-gen-ts ]; then
    PROTOC_GEN_TS_PATH=node_modules/.bin/protoc-gen-ts
else
    echo "Missing protoc-gen-ts, please install it by running command 'yarn install' or 'npm install'"
    exit 1
fi

OUT_DIR="."
PROTO_FILE="whatsapp.proto"
protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --ts_out="${OUT_DIR}" \
    $PROTO_FILE

mv -f whatsapp.ts index.ts
sed -i \
    's/message.scanLengths = reader.readUint32();/pb_1.Message.addToRepeatedField(message, 22, reader.readUint32());/' \
    index.ts
