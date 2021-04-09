
const assert = require("assert");
const fs = require("fs");
const pr = require("..");
let msg, buf = fs.readFileSync('test/test.bin');

assert.doesNotThrow(() => msg = pr.WebMessageInfo.deserialize(buf));
/** @type {import('..').WebMessageInfo} */
const actual = msg.toObject();
const expected = JSON.parse(fs.readFileSync('test/test.json'));

assert.strictEqual(actual.key.remoteJid, expected.key.remotejid);
assert.strictEqual(actual.key.fromMe, expected.key.fromme);
assert.strictEqual(actual.key.id, expected.key.id);

assert.strictEqual(actual.message.imageMessage.url, expected.message.imagemessage.url);
assert.strictEqual(actual.message.imageMessage.mimetype, expected.message.imagemessage.mimetype);
assert.strictEqual(actual.message.imageMessage.fileLength, expected.message.imagemessage.filelength);
assert.strictEqual(actual.message.imageMessage.height, expected.message.imagemessage.height);
assert.strictEqual(actual.message.imageMessage.width, expected.message.imagemessage.width);
assert.notStrictEqual(actual.message.imageMessage.interactiveAnnotations, expected.message.imagemessage.interactiveannotationsList);
assert.strictEqual(actual.message.imageMessage.directPath, expected.message.imagemessage.directpath);
assert.strictEqual(actual.message.imageMessage.mediaKeyTimestamp, expected.message.imagemessage.mediakeytimestamp);
assert.strictEqual(actual.message.imageMessage.firstScanLength, expected.message.imagemessage.firstscanlength);
assert.strictEqual(actual.message.imageMessage.scanLengths[0], expected.message.imagemessage.scanlengthsList[0]);

