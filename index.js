"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebFeatures = exports.MessageKey = exports.Message = exports.DeviceSentMessage = exports.GroupInviteMessage = exports.ProductMessage = exports.ProductSnapshot = exports.CatalogSnapshot = exports.TemplateButtonReplyMessage = exports.TemplateMessage = exports.HydratedFourRowTemplate = exports.FourRowTemplate = exports.StickerMessage = exports.LiveLocationMessage = exports.CancelPaymentRequestMessage = exports.DeclinePaymentRequestMessage = exports.RequestPaymentMessage = exports.SendPaymentMessage = exports.HighlyStructuredMessage = exports.HSMLocalizableParameter = exports.HSMDateTime = exports.HSMDateTimeUnixEpoch = exports.HSMDateTimeComponent = exports.HSMCurrency = exports.ContactsArrayMessage = exports.HistorySyncNotification = exports.ProtocolMessage = exports.Chat = exports.Call = exports.VideoMessage = exports.AudioMessage = exports.DocumentMessage = exports.ExtendedTextMessage = exports.LocationMessage = exports.ContactMessage = exports.ImageMessage = exports.SenderKeyDistributionMessage = exports.ContextInfo = exports.AdReplyInfo = exports.InteractiveAnnotation = exports.Point = exports.Location = exports.TemplateButton = exports.CallButton = exports.URLButton = exports.QuickReplyButton = exports.HydratedTemplateButton = exports.HydratedCallButton = exports.HydratedURLButton = exports.HydratedQuickReplyButton = void 0;
exports.WebMessageInfo = exports.PaymentInfo = exports.WebNotificationsInfo = exports.NotificationMessageInfo = exports.TabletNotificationsInfo = void 0;
const pb_1 = require("google-protobuf");
class HydratedQuickReplyButton extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayText = data.displayText;
            this.id = data.id;
        }
    }
    get displayText() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set displayText(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            displayText: this.displayText,
            id: this.id
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.displayText === "string" && this.displayText.length)
            writer.writeString(1, this.displayText);
        if (typeof this.id === "string" && this.id.length)
            writer.writeString(2, this.id);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HydratedQuickReplyButton();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.displayText = reader.readString();
                    break;
                case 2:
                    message.id = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.HydratedQuickReplyButton = HydratedQuickReplyButton;
class HydratedURLButton extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayText = data.displayText;
            this.url = data.url;
        }
    }
    get displayText() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set displayText(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get url() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set url(value) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            displayText: this.displayText,
            url: this.url
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.displayText === "string" && this.displayText.length)
            writer.writeString(1, this.displayText);
        if (typeof this.url === "string" && this.url.length)
            writer.writeString(2, this.url);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HydratedURLButton();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.displayText = reader.readString();
                    break;
                case 2:
                    message.url = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.HydratedURLButton = HydratedURLButton;
class HydratedCallButton extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayText = data.displayText;
            this.phoneNumber = data.phoneNumber;
        }
    }
    get displayText() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set displayText(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get phoneNumber() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set phoneNumber(value) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            displayText: this.displayText,
            phoneNumber: this.phoneNumber
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.displayText === "string" && this.displayText.length)
            writer.writeString(1, this.displayText);
        if (typeof this.phoneNumber === "string" && this.phoneNumber.length)
            writer.writeString(2, this.phoneNumber);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HydratedCallButton();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.displayText = reader.readString();
                    break;
                case 2:
                    message.phoneNumber = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.HydratedCallButton = HydratedCallButton;
class HydratedTemplateButton extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.index = data.index;
            this.quickReplyButton = data.quickReplyButton;
            this.urlButton = data.urlButton;
            this.callButton = data.callButton;
        }
    }
    get index() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set index(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get quickReplyButton() {
        return pb_1.Message.getWrapperField(this, HydratedQuickReplyButton, 1);
    }
    set quickReplyButton(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get urlButton() {
        return pb_1.Message.getWrapperField(this, HydratedURLButton, 2);
    }
    set urlButton(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get callButton() {
        return pb_1.Message.getWrapperField(this, HydratedCallButton, 3);
    }
    set callButton(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    toObject() {
        return {
            index: this.index,
            quickReplyButton: this.quickReplyButton && this.quickReplyButton.toObject(),
            urlButton: this.urlButton && this.urlButton.toObject(),
            callButton: this.callButton && this.callButton.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.index !== undefined)
            writer.writeUint32(4, this.index);
        if (this.quickReplyButton !== undefined)
            writer.writeMessage(1, this.quickReplyButton, () => this.quickReplyButton.serialize(writer));
        if (this.urlButton !== undefined)
            writer.writeMessage(2, this.urlButton, () => this.urlButton.serialize(writer));
        if (this.callButton !== undefined)
            writer.writeMessage(3, this.callButton, () => this.callButton.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HydratedTemplateButton();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.index = reader.readUint32();
                    break;
                case 1:
                    reader.readMessage(message.quickReplyButton, () => message.quickReplyButton = HydratedQuickReplyButton.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.urlButton, () => message.urlButton = HydratedURLButton.deserialize(reader));
                    break;
                case 3:
                    reader.readMessage(message.callButton, () => message.callButton = HydratedCallButton.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.HydratedTemplateButton = HydratedTemplateButton;
class QuickReplyButton extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayText = data.displayText;
            this.id = data.id;
        }
    }
    get displayText() {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 1);
    }
    set displayText(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            displayText: this.displayText && this.displayText.toObject(),
            id: this.id
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.displayText !== undefined)
            writer.writeMessage(1, this.displayText, () => this.displayText.serialize(writer));
        if (typeof this.id === "string" && this.id.length)
            writer.writeString(2, this.id);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new QuickReplyButton();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.displayText, () => message.displayText = HighlyStructuredMessage.deserialize(reader));
                    break;
                case 2:
                    message.id = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.QuickReplyButton = QuickReplyButton;
class URLButton extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayText = data.displayText;
            this.url = data.url;
        }
    }
    get displayText() {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 1);
    }
    set displayText(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get url() {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 2);
    }
    set url(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    toObject() {
        return {
            displayText: this.displayText && this.displayText.toObject(),
            url: this.url && this.url.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.displayText !== undefined)
            writer.writeMessage(1, this.displayText, () => this.displayText.serialize(writer));
        if (this.url !== undefined)
            writer.writeMessage(2, this.url, () => this.url.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new URLButton();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.displayText, () => message.displayText = HighlyStructuredMessage.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.url, () => message.url = HighlyStructuredMessage.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.URLButton = URLButton;
class CallButton extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayText = data.displayText;
            this.phoneNumber = data.phoneNumber;
        }
    }
    get displayText() {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 1);
    }
    set displayText(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get phoneNumber() {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 2);
    }
    set phoneNumber(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    toObject() {
        return {
            displayText: this.displayText && this.displayText.toObject(),
            phoneNumber: this.phoneNumber && this.phoneNumber.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.displayText !== undefined)
            writer.writeMessage(1, this.displayText, () => this.displayText.serialize(writer));
        if (this.phoneNumber !== undefined)
            writer.writeMessage(2, this.phoneNumber, () => this.phoneNumber.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new CallButton();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.displayText, () => message.displayText = HighlyStructuredMessage.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.phoneNumber, () => message.phoneNumber = HighlyStructuredMessage.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.CallButton = CallButton;
class TemplateButton extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.index = data.index;
            this.quickReplyButton = data.quickReplyButton;
            this.urlButton = data.urlButton;
            this.callButton = data.callButton;
        }
    }
    get index() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set index(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get quickReplyButton() {
        return pb_1.Message.getWrapperField(this, QuickReplyButton, 1);
    }
    set quickReplyButton(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get urlButton() {
        return pb_1.Message.getWrapperField(this, URLButton, 2);
    }
    set urlButton(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get callButton() {
        return pb_1.Message.getWrapperField(this, CallButton, 3);
    }
    set callButton(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    toObject() {
        return {
            index: this.index,
            quickReplyButton: this.quickReplyButton && this.quickReplyButton.toObject(),
            urlButton: this.urlButton && this.urlButton.toObject(),
            callButton: this.callButton && this.callButton.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.index !== undefined)
            writer.writeUint32(4, this.index);
        if (this.quickReplyButton !== undefined)
            writer.writeMessage(1, this.quickReplyButton, () => this.quickReplyButton.serialize(writer));
        if (this.urlButton !== undefined)
            writer.writeMessage(2, this.urlButton, () => this.urlButton.serialize(writer));
        if (this.callButton !== undefined)
            writer.writeMessage(3, this.callButton, () => this.callButton.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TemplateButton();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.index = reader.readUint32();
                    break;
                case 1:
                    reader.readMessage(message.quickReplyButton, () => message.quickReplyButton = QuickReplyButton.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.urlButton, () => message.urlButton = URLButton.deserialize(reader));
                    break;
                case 3:
                    reader.readMessage(message.callButton, () => message.callButton = CallButton.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.TemplateButton = TemplateButton;
class Location extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.degreesLatitude = data.degreesLatitude;
            this.degreesLongitude = data.degreesLongitude;
            this.name = data.name;
        }
    }
    get degreesLatitude() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set degreesLatitude(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get degreesLongitude() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set degreesLongitude(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set name(value) {
        pb_1.Message.setField(this, 3, value);
    }
    toObject() {
        return {
            degreesLatitude: this.degreesLatitude,
            degreesLongitude: this.degreesLongitude,
            name: this.name
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.degreesLatitude !== undefined)
            writer.writeDouble(1, this.degreesLatitude);
        if (this.degreesLongitude !== undefined)
            writer.writeDouble(2, this.degreesLongitude);
        if (typeof this.name === "string" && this.name.length)
            writer.writeString(3, this.name);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Location();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.degreesLatitude = reader.readDouble();
                    break;
                case 2:
                    message.degreesLongitude = reader.readDouble();
                    break;
                case 3:
                    message.name = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.Location = Location;
class Point extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.xDeprecated = data.xDeprecated;
            this.yDeprecated = data.yDeprecated;
            this.x = data.x;
            this.y = data.y;
        }
    }
    get xDeprecated() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set xDeprecated(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get yDeprecated() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set yDeprecated(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get x() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set x(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get y() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set y(value) {
        pb_1.Message.setField(this, 4, value);
    }
    toObject() {
        return {
            xDeprecated: this.xDeprecated,
            yDeprecated: this.yDeprecated,
            x: this.x,
            y: this.y
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.xDeprecated !== undefined)
            writer.writeInt32(1, this.xDeprecated);
        if (this.yDeprecated !== undefined)
            writer.writeInt32(2, this.yDeprecated);
        if (this.x !== undefined)
            writer.writeDouble(3, this.x);
        if (this.y !== undefined)
            writer.writeDouble(4, this.y);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Point();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.xDeprecated = reader.readInt32();
                    break;
                case 2:
                    message.yDeprecated = reader.readInt32();
                    break;
                case 3:
                    message.x = reader.readDouble();
                    break;
                case 4:
                    message.y = reader.readDouble();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.Point = Point;
class InteractiveAnnotation extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [1], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.polygonVertices = data.polygonVertices;
            this.location = data.location;
        }
    }
    get polygonVertices() {
        return pb_1.Message.getRepeatedWrapperField(this, Point, 1);
    }
    set polygonVertices(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    get location() {
        return pb_1.Message.getWrapperField(this, Location, 2);
    }
    set location(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    toObject() {
        return {
            polygonVertices: this.polygonVertices.map((item) => item.toObject()),
            location: this.location && this.location.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.polygonVertices !== undefined)
            writer.writeRepeatedMessage(1, this.polygonVertices, (item) => item.serialize(writer));
        if (this.location !== undefined)
            writer.writeMessage(2, this.location, () => this.location.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new InteractiveAnnotation();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.polygonVertices, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Point.deserialize(reader), Point));
                    break;
                case 2:
                    reader.readMessage(message.location, () => message.location = Location.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.InteractiveAnnotation = InteractiveAnnotation;
class AdReplyInfo extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.advertiserName = data.advertiserName;
            this.mediaType = data.mediaType;
            this.jpegThumbnail = data.jpegThumbnail;
            this.caption = data.caption;
        }
    }
    get advertiserName() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set advertiserName(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get mediaType() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set mediaType(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get jpegThumbnail() {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined);
    }
    set jpegThumbnail(value) {
        pb_1.Message.setField(this, 16, value);
    }
    get caption() {
        return pb_1.Message.getFieldWithDefault(this, 17, undefined);
    }
    set caption(value) {
        pb_1.Message.setField(this, 17, value);
    }
    toObject() {
        return {
            advertiserName: this.advertiserName,
            mediaType: this.mediaType,
            jpegThumbnail: this.jpegThumbnail,
            caption: this.caption
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.advertiserName === "string" && this.advertiserName.length)
            writer.writeString(1, this.advertiserName);
        if (this.mediaType !== undefined)
            writer.writeEnum(2, this.mediaType);
        if (this.jpegThumbnail !== undefined)
            writer.writeBytes(16, this.jpegThumbnail);
        if (typeof this.caption === "string" && this.caption.length)
            writer.writeString(17, this.caption);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new AdReplyInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.advertiserName = reader.readString();
                    break;
                case 2:
                    message.mediaType = reader.readEnum();
                    break;
                case 16:
                    message.jpegThumbnail = reader.readBytes();
                    break;
                case 17:
                    message.caption = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.AdReplyInfo = AdReplyInfo;
(function (AdReplyInfo) {
    let AD_REPLY_INFO_MEDIATYPE;
    (function (AD_REPLY_INFO_MEDIATYPE) {
        AD_REPLY_INFO_MEDIATYPE[AD_REPLY_INFO_MEDIATYPE["NONE"] = 0] = "NONE";
        AD_REPLY_INFO_MEDIATYPE[AD_REPLY_INFO_MEDIATYPE["IMAGE"] = 1] = "IMAGE";
        AD_REPLY_INFO_MEDIATYPE[AD_REPLY_INFO_MEDIATYPE["VIDEO"] = 2] = "VIDEO";
    })(AD_REPLY_INFO_MEDIATYPE = AdReplyInfo.AD_REPLY_INFO_MEDIATYPE || (AdReplyInfo.AD_REPLY_INFO_MEDIATYPE = {}));
})(AdReplyInfo = exports.AdReplyInfo || (exports.AdReplyInfo = {}));
class ContextInfo extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [15], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.stanzaId = data.stanzaId;
            this.participant = data.participant;
            this.quotedMessage = data.quotedMessage;
            this.remoteJid = data.remoteJid;
            this.mentionedJid = data.mentionedJid;
            this.conversionSource = data.conversionSource;
            this.conversionData = data.conversionData;
            this.conversionDelaySeconds = data.conversionDelaySeconds;
            this.forwardingScore = data.forwardingScore;
            this.isForwarded = data.isForwarded;
            this.quotedAd = data.quotedAd;
            this.placeholderKey = data.placeholderKey;
            this.expiration = data.expiration;
            this.ephemeralSettingTimestamp = data.ephemeralSettingTimestamp;
            this.ephemeralSharedSecret = data.ephemeralSharedSecret;
        }
    }
    get stanzaId() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set stanzaId(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get participant() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set participant(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get quotedMessage() {
        return pb_1.Message.getWrapperField(this, Message, 3);
    }
    set quotedMessage(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get remoteJid() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set remoteJid(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get mentionedJid() {
        return pb_1.Message.getField(this, 15);
    }
    set mentionedJid(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get conversionSource() {
        return pb_1.Message.getFieldWithDefault(this, 18, undefined);
    }
    set conversionSource(value) {
        pb_1.Message.setField(this, 18, value);
    }
    get conversionData() {
        return pb_1.Message.getFieldWithDefault(this, 19, undefined);
    }
    set conversionData(value) {
        pb_1.Message.setField(this, 19, value);
    }
    get conversionDelaySeconds() {
        return pb_1.Message.getFieldWithDefault(this, 20, undefined);
    }
    set conversionDelaySeconds(value) {
        pb_1.Message.setField(this, 20, value);
    }
    get forwardingScore() {
        return pb_1.Message.getFieldWithDefault(this, 21, undefined);
    }
    set forwardingScore(value) {
        pb_1.Message.setField(this, 21, value);
    }
    get isForwarded() {
        return pb_1.Message.getFieldWithDefault(this, 22, undefined);
    }
    set isForwarded(value) {
        pb_1.Message.setField(this, 22, value);
    }
    get quotedAd() {
        return pb_1.Message.getWrapperField(this, AdReplyInfo, 23);
    }
    set quotedAd(value) {
        pb_1.Message.setWrapperField(this, 23, value);
    }
    get placeholderKey() {
        return pb_1.Message.getWrapperField(this, MessageKey, 24);
    }
    set placeholderKey(value) {
        pb_1.Message.setWrapperField(this, 24, value);
    }
    get expiration() {
        return pb_1.Message.getFieldWithDefault(this, 25, undefined);
    }
    set expiration(value) {
        pb_1.Message.setField(this, 25, value);
    }
    get ephemeralSettingTimestamp() {
        return pb_1.Message.getFieldWithDefault(this, 26, undefined);
    }
    set ephemeralSettingTimestamp(value) {
        pb_1.Message.setField(this, 26, value);
    }
    get ephemeralSharedSecret() {
        return pb_1.Message.getFieldWithDefault(this, 27, undefined);
    }
    set ephemeralSharedSecret(value) {
        pb_1.Message.setField(this, 27, value);
    }
    toObject() {
        return {
            stanzaId: this.stanzaId,
            participant: this.participant,
            quotedMessage: this.quotedMessage && this.quotedMessage.toObject(),
            remoteJid: this.remoteJid,
            mentionedJid: this.mentionedJid,
            conversionSource: this.conversionSource,
            conversionData: this.conversionData,
            conversionDelaySeconds: this.conversionDelaySeconds,
            forwardingScore: this.forwardingScore,
            isForwarded: this.isForwarded,
            quotedAd: this.quotedAd && this.quotedAd.toObject(),
            placeholderKey: this.placeholderKey && this.placeholderKey.toObject(),
            expiration: this.expiration,
            ephemeralSettingTimestamp: this.ephemeralSettingTimestamp,
            ephemeralSharedSecret: this.ephemeralSharedSecret
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.stanzaId === "string" && this.stanzaId.length)
            writer.writeString(1, this.stanzaId);
        if (typeof this.participant === "string" && this.participant.length)
            writer.writeString(2, this.participant);
        if (this.quotedMessage !== undefined)
            writer.writeMessage(3, this.quotedMessage, () => this.quotedMessage.serialize(writer));
        if (typeof this.remoteJid === "string" && this.remoteJid.length)
            writer.writeString(4, this.remoteJid);
        if (this.mentionedJid !== undefined)
            writer.writeRepeatedString(15, this.mentionedJid);
        if (typeof this.conversionSource === "string" && this.conversionSource.length)
            writer.writeString(18, this.conversionSource);
        if (this.conversionData !== undefined)
            writer.writeBytes(19, this.conversionData);
        if (this.conversionDelaySeconds !== undefined)
            writer.writeUint32(20, this.conversionDelaySeconds);
        if (this.forwardingScore !== undefined)
            writer.writeUint32(21, this.forwardingScore);
        if (this.isForwarded !== undefined)
            writer.writeBool(22, this.isForwarded);
        if (this.quotedAd !== undefined)
            writer.writeMessage(23, this.quotedAd, () => this.quotedAd.serialize(writer));
        if (this.placeholderKey !== undefined)
            writer.writeMessage(24, this.placeholderKey, () => this.placeholderKey.serialize(writer));
        if (this.expiration !== undefined)
            writer.writeUint32(25, this.expiration);
        if (this.ephemeralSettingTimestamp !== undefined)
            writer.writeInt64(26, this.ephemeralSettingTimestamp);
        if (this.ephemeralSharedSecret !== undefined)
            writer.writeBytes(27, this.ephemeralSharedSecret);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ContextInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.stanzaId = reader.readString();
                    break;
                case 2:
                    message.participant = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.quotedMessage, () => message.quotedMessage = Message.deserialize(reader));
                    break;
                case 4:
                    message.remoteJid = reader.readString();
                    break;
                case 15:
                    pb_1.Message.addToRepeatedField(message, 15, reader.readString());
                    break;
                case 18:
                    message.conversionSource = reader.readString();
                    break;
                case 19:
                    message.conversionData = reader.readBytes();
                    break;
                case 20:
                    message.conversionDelaySeconds = reader.readUint32();
                    break;
                case 21:
                    message.forwardingScore = reader.readUint32();
                    break;
                case 22:
                    message.isForwarded = reader.readBool();
                    break;
                case 23:
                    reader.readMessage(message.quotedAd, () => message.quotedAd = AdReplyInfo.deserialize(reader));
                    break;
                case 24:
                    reader.readMessage(message.placeholderKey, () => message.placeholderKey = MessageKey.deserialize(reader));
                    break;
                case 25:
                    message.expiration = reader.readUint32();
                    break;
                case 26:
                    message.ephemeralSettingTimestamp = reader.readInt64();
                    break;
                case 27:
                    message.ephemeralSharedSecret = reader.readBytes();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.ContextInfo = ContextInfo;
class SenderKeyDistributionMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.groupId = data.groupId;
            this.axolotlSenderKeyDistributionMessage = data.axolotlSenderKeyDistributionMessage;
        }
    }
    get groupId() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set groupId(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get axolotlSenderKeyDistributionMessage() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set axolotlSenderKeyDistributionMessage(value) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            groupId: this.groupId,
            axolotlSenderKeyDistributionMessage: this.axolotlSenderKeyDistributionMessage
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.groupId === "string" && this.groupId.length)
            writer.writeString(1, this.groupId);
        if (this.axolotlSenderKeyDistributionMessage !== undefined)
            writer.writeBytes(2, this.axolotlSenderKeyDistributionMessage);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new SenderKeyDistributionMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.groupId = reader.readString();
                    break;
                case 2:
                    message.axolotlSenderKeyDistributionMessage = reader.readBytes();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.SenderKeyDistributionMessage = SenderKeyDistributionMessage;
class ImageMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [10, 22], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.url = data.url;
            this.mimetype = data.mimetype;
            this.caption = data.caption;
            this.fileSha256 = data.fileSha256;
            this.fileLength = data.fileLength;
            this.height = data.height;
            this.width = data.width;
            this.mediaKey = data.mediaKey;
            this.fileEncSha256 = data.fileEncSha256;
            this.interactiveAnnotations = data.interactiveAnnotations;
            this.directPath = data.directPath;
            this.mediaKeyTimestamp = data.mediaKeyTimestamp;
            this.jpegThumbnail = data.jpegThumbnail;
            this.contextInfo = data.contextInfo;
            this.firstScanSidecar = data.firstScanSidecar;
            this.firstScanLength = data.firstScanLength;
            this.experimentGroupId = data.experimentGroupId;
            this.scansSidecar = data.scansSidecar;
            this.scanLengths = data.scanLengths;
            this.midQualityFileSha256 = data.midQualityFileSha256;
            this.midQualityFileEncSha256 = data.midQualityFileEncSha256;
        }
    }
    get url() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set url(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get mimetype() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set mimetype(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get caption() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set caption(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get fileSha256() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set fileSha256(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get fileLength() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set fileLength(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get height() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set height(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get width() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set width(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get mediaKey() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set mediaKey(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get fileEncSha256() {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined);
    }
    set fileEncSha256(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get interactiveAnnotations() {
        return pb_1.Message.getRepeatedWrapperField(this, InteractiveAnnotation, 10);
    }
    set interactiveAnnotations(value) {
        pb_1.Message.setRepeatedWrapperField(this, 10, value);
    }
    get directPath() {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined);
    }
    set directPath(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get mediaKeyTimestamp() {
        return pb_1.Message.getFieldWithDefault(this, 12, undefined);
    }
    set mediaKeyTimestamp(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get jpegThumbnail() {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined);
    }
    set jpegThumbnail(value) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo() {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17);
    }
    set contextInfo(value) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    get firstScanSidecar() {
        return pb_1.Message.getFieldWithDefault(this, 18, undefined);
    }
    set firstScanSidecar(value) {
        pb_1.Message.setField(this, 18, value);
    }
    get firstScanLength() {
        return pb_1.Message.getFieldWithDefault(this, 19, undefined);
    }
    set firstScanLength(value) {
        pb_1.Message.setField(this, 19, value);
    }
    get experimentGroupId() {
        return pb_1.Message.getFieldWithDefault(this, 20, undefined);
    }
    set experimentGroupId(value) {
        pb_1.Message.setField(this, 20, value);
    }
    get scansSidecar() {
        return pb_1.Message.getFieldWithDefault(this, 21, undefined);
    }
    set scansSidecar(value) {
        pb_1.Message.setField(this, 21, value);
    }
    get scanLengths() {
        return pb_1.Message.getField(this, 22);
    }
    set scanLengths(value) {
        pb_1.Message.setField(this, 22, value);
    }
    get midQualityFileSha256() {
        return pb_1.Message.getFieldWithDefault(this, 23, undefined);
    }
    set midQualityFileSha256(value) {
        pb_1.Message.setField(this, 23, value);
    }
    get midQualityFileEncSha256() {
        return pb_1.Message.getFieldWithDefault(this, 24, undefined);
    }
    set midQualityFileEncSha256(value) {
        pb_1.Message.setField(this, 24, value);
    }
    addScanLengths(value, index) {
        pb_1.Message.addToRepeatedField(this, 22, value, index);
    }
    toObject() {
        return {
            url: this.url,
            mimetype: this.mimetype,
            caption: this.caption,
            fileSha256: this.fileSha256,
            fileLength: this.fileLength,
            height: this.height,
            width: this.width,
            mediaKey: this.mediaKey,
            fileEncSha256: this.fileEncSha256,
            interactiveAnnotations: this.interactiveAnnotations.map((item) => item.toObject()),
            directPath: this.directPath,
            mediaKeyTimestamp: this.mediaKeyTimestamp,
            jpegThumbnail: this.jpegThumbnail,
            contextInfo: this.contextInfo && this.contextInfo.toObject(),
            firstScanSidecar: this.firstScanSidecar,
            firstScanLength: this.firstScanLength,
            experimentGroupId: this.experimentGroupId,
            scansSidecar: this.scansSidecar,
            scanLengths: this.scanLengths,
            midQualityFileSha256: this.midQualityFileSha256,
            midQualityFileEncSha256: this.midQualityFileEncSha256
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.url === "string" && this.url.length)
            writer.writeString(1, this.url);
        if (typeof this.mimetype === "string" && this.mimetype.length)
            writer.writeString(2, this.mimetype);
        if (typeof this.caption === "string" && this.caption.length)
            writer.writeString(3, this.caption);
        if (this.fileSha256 !== undefined)
            writer.writeBytes(4, this.fileSha256);
        if (this.fileLength !== undefined)
            writer.writeUint64(5, this.fileLength);
        if (this.height !== undefined)
            writer.writeUint32(6, this.height);
        if (this.width !== undefined)
            writer.writeUint32(7, this.width);
        if (this.mediaKey !== undefined)
            writer.writeBytes(8, this.mediaKey);
        if (this.fileEncSha256 !== undefined)
            writer.writeBytes(9, this.fileEncSha256);
        if (this.interactiveAnnotations !== undefined)
            writer.writeRepeatedMessage(10, this.interactiveAnnotations, (item) => item.serialize(writer));
        if (typeof this.directPath === "string" && this.directPath.length)
            writer.writeString(11, this.directPath);
        if (this.mediaKeyTimestamp !== undefined)
            writer.writeInt64(12, this.mediaKeyTimestamp);
        if (this.jpegThumbnail !== undefined)
            writer.writeBytes(16, this.jpegThumbnail);
        if (this.contextInfo !== undefined)
            writer.writeMessage(17, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (this.firstScanSidecar !== undefined)
            writer.writeBytes(18, this.firstScanSidecar);
        if (this.firstScanLength !== undefined)
            writer.writeUint32(19, this.firstScanLength);
        if (this.experimentGroupId !== undefined)
            writer.writeUint32(20, this.experimentGroupId);
        if (this.scansSidecar !== undefined)
            writer.writeBytes(21, this.scansSidecar);
        if (this.scanLengths !== undefined)
            writer.writeRepeatedUint32(22, this.scanLengths);
        if (this.midQualityFileSha256 !== undefined)
            writer.writeBytes(23, this.midQualityFileSha256);
        if (this.midQualityFileEncSha256 !== undefined)
            writer.writeBytes(24, this.midQualityFileEncSha256);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ImageMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.url = reader.readString();
                    break;
                case 2:
                    message.mimetype = reader.readString();
                    break;
                case 3:
                    message.caption = reader.readString();
                    break;
                case 4:
                    message.fileSha256 = reader.readBytes();
                    break;
                case 5:
                    message.fileLength = reader.readUint64();
                    break;
                case 6:
                    message.height = reader.readUint32();
                    break;
                case 7:
                    message.width = reader.readUint32();
                    break;
                case 8:
                    message.mediaKey = reader.readBytes();
                    break;
                case 9:
                    message.fileEncSha256 = reader.readBytes();
                    break;
                case 10:
                    reader.readMessage(message.interactiveAnnotations, () => pb_1.Message.addToRepeatedWrapperField(message, 10, InteractiveAnnotation.deserialize(reader), InteractiveAnnotation));
                    break;
                case 11:
                    message.directPath = reader.readString();
                    break;
                case 12:
                    message.mediaKeyTimestamp = reader.readInt64();
                    break;
                case 16:
                    message.jpegThumbnail = reader.readBytes();
                    break;
                case 17:
                    reader.readMessage(message.contextInfo, () => message.contextInfo = ContextInfo.deserialize(reader));
                    break;
                case 18:
                    message.firstScanSidecar = reader.readBytes();
                    break;
                case 19:
                    message.firstScanLength = reader.readUint32();
                    break;
                case 20:
                    message.experimentGroupId = reader.readUint32();
                    break;
                case 21:
                    message.scansSidecar = reader.readBytes();
                    break;
                case 22:
                    message.addScanLengths(reader.readUint32());
                    break;
                case 23:
                    message.midQualityFileSha256 = reader.readBytes();
                    break;
                case 24:
                    message.midQualityFileEncSha256 = reader.readBytes();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.ImageMessage = ImageMessage;
class ContactMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayName = data.displayName;
            this.vcard = data.vcard;
            this.contextInfo = data.contextInfo;
        }
    }
    get displayName() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set displayName(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get vcard() {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined);
    }
    set vcard(value) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo() {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17);
    }
    set contextInfo(value) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    toObject() {
        return {
            displayName: this.displayName,
            vcard: this.vcard,
            contextInfo: this.contextInfo && this.contextInfo.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.displayName === "string" && this.displayName.length)
            writer.writeString(1, this.displayName);
        if (typeof this.vcard === "string" && this.vcard.length)
            writer.writeString(16, this.vcard);
        if (this.contextInfo !== undefined)
            writer.writeMessage(17, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ContactMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.displayName = reader.readString();
                    break;
                case 16:
                    message.vcard = reader.readString();
                    break;
                case 17:
                    reader.readMessage(message.contextInfo, () => message.contextInfo = ContextInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.ContactMessage = ContactMessage;
class LocationMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.degreesLatitude = data.degreesLatitude;
            this.degreesLongitude = data.degreesLongitude;
            this.name = data.name;
            this.address = data.address;
            this.url = data.url;
            this.isLive = data.isLive;
            this.accuracyInMeters = data.accuracyInMeters;
            this.speedInMps = data.speedInMps;
            this.degreesClockwiseFromMagneticNorth = data.degreesClockwiseFromMagneticNorth;
            this.comment = data.comment;
            this.jpegThumbnail = data.jpegThumbnail;
            this.contextInfo = data.contextInfo;
        }
    }
    get degreesLatitude() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set degreesLatitude(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get degreesLongitude() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set degreesLongitude(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set name(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get address() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set address(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get url() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set url(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get isLive() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set isLive(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get accuracyInMeters() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set accuracyInMeters(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get speedInMps() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set speedInMps(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get degreesClockwiseFromMagneticNorth() {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined);
    }
    set degreesClockwiseFromMagneticNorth(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get comment() {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined);
    }
    set comment(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get jpegThumbnail() {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined);
    }
    set jpegThumbnail(value) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo() {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17);
    }
    set contextInfo(value) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    toObject() {
        return {
            degreesLatitude: this.degreesLatitude,
            degreesLongitude: this.degreesLongitude,
            name: this.name,
            address: this.address,
            url: this.url,
            isLive: this.isLive,
            accuracyInMeters: this.accuracyInMeters,
            speedInMps: this.speedInMps,
            degreesClockwiseFromMagneticNorth: this.degreesClockwiseFromMagneticNorth,
            comment: this.comment,
            jpegThumbnail: this.jpegThumbnail,
            contextInfo: this.contextInfo && this.contextInfo.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.degreesLatitude !== undefined)
            writer.writeDouble(1, this.degreesLatitude);
        if (this.degreesLongitude !== undefined)
            writer.writeDouble(2, this.degreesLongitude);
        if (typeof this.name === "string" && this.name.length)
            writer.writeString(3, this.name);
        if (typeof this.address === "string" && this.address.length)
            writer.writeString(4, this.address);
        if (typeof this.url === "string" && this.url.length)
            writer.writeString(5, this.url);
        if (this.isLive !== undefined)
            writer.writeBool(6, this.isLive);
        if (this.accuracyInMeters !== undefined)
            writer.writeUint32(7, this.accuracyInMeters);
        if (this.speedInMps !== undefined)
            writer.writeFloat(8, this.speedInMps);
        if (this.degreesClockwiseFromMagneticNorth !== undefined)
            writer.writeUint32(9, this.degreesClockwiseFromMagneticNorth);
        if (typeof this.comment === "string" && this.comment.length)
            writer.writeString(11, this.comment);
        if (this.jpegThumbnail !== undefined)
            writer.writeBytes(16, this.jpegThumbnail);
        if (this.contextInfo !== undefined)
            writer.writeMessage(17, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new LocationMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.degreesLatitude = reader.readDouble();
                    break;
                case 2:
                    message.degreesLongitude = reader.readDouble();
                    break;
                case 3:
                    message.name = reader.readString();
                    break;
                case 4:
                    message.address = reader.readString();
                    break;
                case 5:
                    message.url = reader.readString();
                    break;
                case 6:
                    message.isLive = reader.readBool();
                    break;
                case 7:
                    message.accuracyInMeters = reader.readUint32();
                    break;
                case 8:
                    message.speedInMps = reader.readFloat();
                    break;
                case 9:
                    message.degreesClockwiseFromMagneticNorth = reader.readUint32();
                    break;
                case 11:
                    message.comment = reader.readString();
                    break;
                case 16:
                    message.jpegThumbnail = reader.readBytes();
                    break;
                case 17:
                    reader.readMessage(message.contextInfo, () => message.contextInfo = ContextInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.LocationMessage = LocationMessage;
class ExtendedTextMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.text = data.text;
            this.matchedText = data.matchedText;
            this.canonicalUrl = data.canonicalUrl;
            this.description = data.description;
            this.title = data.title;
            this.textArgb = data.textArgb;
            this.backgroundArgb = data.backgroundArgb;
            this.font = data.font;
            this.previewType = data.previewType;
            this.jpegThumbnail = data.jpegThumbnail;
            this.contextInfo = data.contextInfo;
            this.doNotPlayInline = data.doNotPlayInline;
        }
    }
    get text() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set text(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get matchedText() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set matchedText(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get canonicalUrl() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set canonicalUrl(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get description() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set description(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get title() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set title(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get textArgb() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set textArgb(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get backgroundArgb() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set backgroundArgb(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get font() {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined);
    }
    set font(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get previewType() {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined);
    }
    set previewType(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get jpegThumbnail() {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined);
    }
    set jpegThumbnail(value) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo() {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17);
    }
    set contextInfo(value) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    get doNotPlayInline() {
        return pb_1.Message.getFieldWithDefault(this, 18, undefined);
    }
    set doNotPlayInline(value) {
        pb_1.Message.setField(this, 18, value);
    }
    toObject() {
        return {
            text: this.text,
            matchedText: this.matchedText,
            canonicalUrl: this.canonicalUrl,
            description: this.description,
            title: this.title,
            textArgb: this.textArgb,
            backgroundArgb: this.backgroundArgb,
            font: this.font,
            previewType: this.previewType,
            jpegThumbnail: this.jpegThumbnail,
            contextInfo: this.contextInfo && this.contextInfo.toObject(),
            doNotPlayInline: this.doNotPlayInline
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.text === "string" && this.text.length)
            writer.writeString(1, this.text);
        if (typeof this.matchedText === "string" && this.matchedText.length)
            writer.writeString(2, this.matchedText);
        if (typeof this.canonicalUrl === "string" && this.canonicalUrl.length)
            writer.writeString(4, this.canonicalUrl);
        if (typeof this.description === "string" && this.description.length)
            writer.writeString(5, this.description);
        if (typeof this.title === "string" && this.title.length)
            writer.writeString(6, this.title);
        if (this.textArgb !== undefined)
            writer.writeFixed32(7, this.textArgb);
        if (this.backgroundArgb !== undefined)
            writer.writeFixed32(8, this.backgroundArgb);
        if (this.font !== undefined)
            writer.writeEnum(9, this.font);
        if (this.previewType !== undefined)
            writer.writeEnum(10, this.previewType);
        if (this.jpegThumbnail !== undefined)
            writer.writeBytes(16, this.jpegThumbnail);
        if (this.contextInfo !== undefined)
            writer.writeMessage(17, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (this.doNotPlayInline !== undefined)
            writer.writeBool(18, this.doNotPlayInline);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ExtendedTextMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.text = reader.readString();
                    break;
                case 2:
                    message.matchedText = reader.readString();
                    break;
                case 4:
                    message.canonicalUrl = reader.readString();
                    break;
                case 5:
                    message.description = reader.readString();
                    break;
                case 6:
                    message.title = reader.readString();
                    break;
                case 7:
                    message.textArgb = reader.readFixed32();
                    break;
                case 8:
                    message.backgroundArgb = reader.readFixed32();
                    break;
                case 9:
                    message.font = reader.readEnum();
                    break;
                case 10:
                    message.previewType = reader.readEnum();
                    break;
                case 16:
                    message.jpegThumbnail = reader.readBytes();
                    break;
                case 17:
                    reader.readMessage(message.contextInfo, () => message.contextInfo = ContextInfo.deserialize(reader));
                    break;
                case 18:
                    message.doNotPlayInline = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.ExtendedTextMessage = ExtendedTextMessage;
(function (ExtendedTextMessage) {
    let EXTENDED_TEXT_MESSAGE_FONTTYPE;
    (function (EXTENDED_TEXT_MESSAGE_FONTTYPE) {
        EXTENDED_TEXT_MESSAGE_FONTTYPE[EXTENDED_TEXT_MESSAGE_FONTTYPE["SANS_SERIF"] = 0] = "SANS_SERIF";
        EXTENDED_TEXT_MESSAGE_FONTTYPE[EXTENDED_TEXT_MESSAGE_FONTTYPE["SERIF"] = 1] = "SERIF";
        EXTENDED_TEXT_MESSAGE_FONTTYPE[EXTENDED_TEXT_MESSAGE_FONTTYPE["NORICAN_REGULAR"] = 2] = "NORICAN_REGULAR";
        EXTENDED_TEXT_MESSAGE_FONTTYPE[EXTENDED_TEXT_MESSAGE_FONTTYPE["BRYNDAN_WRITE"] = 3] = "BRYNDAN_WRITE";
        EXTENDED_TEXT_MESSAGE_FONTTYPE[EXTENDED_TEXT_MESSAGE_FONTTYPE["BEBASNEUE_REGULAR"] = 4] = "BEBASNEUE_REGULAR";
        EXTENDED_TEXT_MESSAGE_FONTTYPE[EXTENDED_TEXT_MESSAGE_FONTTYPE["OSWALD_HEAVY"] = 5] = "OSWALD_HEAVY";
    })(EXTENDED_TEXT_MESSAGE_FONTTYPE = ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE || (ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE = {}));
    let EXTENDED_TEXT_MESSAGE_PREVIEWTYPE;
    (function (EXTENDED_TEXT_MESSAGE_PREVIEWTYPE) {
        EXTENDED_TEXT_MESSAGE_PREVIEWTYPE[EXTENDED_TEXT_MESSAGE_PREVIEWTYPE["NONE"] = 0] = "NONE";
        EXTENDED_TEXT_MESSAGE_PREVIEWTYPE[EXTENDED_TEXT_MESSAGE_PREVIEWTYPE["VIDEO"] = 1] = "VIDEO";
    })(EXTENDED_TEXT_MESSAGE_PREVIEWTYPE = ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE || (ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE = {}));
})(ExtendedTextMessage = exports.ExtendedTextMessage || (exports.ExtendedTextMessage = {}));
class DocumentMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.url = data.url;
            this.mimetype = data.mimetype;
            this.title = data.title;
            this.fileSha256 = data.fileSha256;
            this.fileLength = data.fileLength;
            this.pageCount = data.pageCount;
            this.mediaKey = data.mediaKey;
            this.fileName = data.fileName;
            this.fileEncSha256 = data.fileEncSha256;
            this.directPath = data.directPath;
            this.mediaKeyTimestamp = data.mediaKeyTimestamp;
            this.jpegThumbnail = data.jpegThumbnail;
            this.contextInfo = data.contextInfo;
        }
    }
    get url() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set url(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get mimetype() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set mimetype(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get title() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set title(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get fileSha256() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set fileSha256(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get fileLength() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set fileLength(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get pageCount() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set pageCount(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get mediaKey() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set mediaKey(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get fileName() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set fileName(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get fileEncSha256() {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined);
    }
    set fileEncSha256(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get directPath() {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined);
    }
    set directPath(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get mediaKeyTimestamp() {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined);
    }
    set mediaKeyTimestamp(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get jpegThumbnail() {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined);
    }
    set jpegThumbnail(value) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo() {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17);
    }
    set contextInfo(value) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    toObject() {
        return {
            url: this.url,
            mimetype: this.mimetype,
            title: this.title,
            fileSha256: this.fileSha256,
            fileLength: this.fileLength,
            pageCount: this.pageCount,
            mediaKey: this.mediaKey,
            fileName: this.fileName,
            fileEncSha256: this.fileEncSha256,
            directPath: this.directPath,
            mediaKeyTimestamp: this.mediaKeyTimestamp,
            jpegThumbnail: this.jpegThumbnail,
            contextInfo: this.contextInfo && this.contextInfo.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.url === "string" && this.url.length)
            writer.writeString(1, this.url);
        if (typeof this.mimetype === "string" && this.mimetype.length)
            writer.writeString(2, this.mimetype);
        if (typeof this.title === "string" && this.title.length)
            writer.writeString(3, this.title);
        if (this.fileSha256 !== undefined)
            writer.writeBytes(4, this.fileSha256);
        if (this.fileLength !== undefined)
            writer.writeUint64(5, this.fileLength);
        if (this.pageCount !== undefined)
            writer.writeUint32(6, this.pageCount);
        if (this.mediaKey !== undefined)
            writer.writeBytes(7, this.mediaKey);
        if (typeof this.fileName === "string" && this.fileName.length)
            writer.writeString(8, this.fileName);
        if (this.fileEncSha256 !== undefined)
            writer.writeBytes(9, this.fileEncSha256);
        if (typeof this.directPath === "string" && this.directPath.length)
            writer.writeString(10, this.directPath);
        if (this.mediaKeyTimestamp !== undefined)
            writer.writeInt64(11, this.mediaKeyTimestamp);
        if (this.jpegThumbnail !== undefined)
            writer.writeBytes(16, this.jpegThumbnail);
        if (this.contextInfo !== undefined)
            writer.writeMessage(17, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new DocumentMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.url = reader.readString();
                    break;
                case 2:
                    message.mimetype = reader.readString();
                    break;
                case 3:
                    message.title = reader.readString();
                    break;
                case 4:
                    message.fileSha256 = reader.readBytes();
                    break;
                case 5:
                    message.fileLength = reader.readUint64();
                    break;
                case 6:
                    message.pageCount = reader.readUint32();
                    break;
                case 7:
                    message.mediaKey = reader.readBytes();
                    break;
                case 8:
                    message.fileName = reader.readString();
                    break;
                case 9:
                    message.fileEncSha256 = reader.readBytes();
                    break;
                case 10:
                    message.directPath = reader.readString();
                    break;
                case 11:
                    message.mediaKeyTimestamp = reader.readInt64();
                    break;
                case 16:
                    message.jpegThumbnail = reader.readBytes();
                    break;
                case 17:
                    reader.readMessage(message.contextInfo, () => message.contextInfo = ContextInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.DocumentMessage = DocumentMessage;
class AudioMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.url = data.url;
            this.mimetype = data.mimetype;
            this.fileSha256 = data.fileSha256;
            this.fileLength = data.fileLength;
            this.seconds = data.seconds;
            this.ptt = data.ptt;
            this.mediaKey = data.mediaKey;
            this.fileEncSha256 = data.fileEncSha256;
            this.directPath = data.directPath;
            this.mediaKeyTimestamp = data.mediaKeyTimestamp;
            this.contextInfo = data.contextInfo;
            this.streamingSidecar = data.streamingSidecar;
        }
    }
    get url() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set url(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get mimetype() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set mimetype(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get fileSha256() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set fileSha256(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get fileLength() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set fileLength(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get seconds() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set seconds(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get ptt() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set ptt(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get mediaKey() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set mediaKey(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get fileEncSha256() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set fileEncSha256(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get directPath() {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined);
    }
    set directPath(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get mediaKeyTimestamp() {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined);
    }
    set mediaKeyTimestamp(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get contextInfo() {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17);
    }
    set contextInfo(value) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    get streamingSidecar() {
        return pb_1.Message.getFieldWithDefault(this, 18, undefined);
    }
    set streamingSidecar(value) {
        pb_1.Message.setField(this, 18, value);
    }
    toObject() {
        return {
            url: this.url,
            mimetype: this.mimetype,
            fileSha256: this.fileSha256,
            fileLength: this.fileLength,
            seconds: this.seconds,
            ptt: this.ptt,
            mediaKey: this.mediaKey,
            fileEncSha256: this.fileEncSha256,
            directPath: this.directPath,
            mediaKeyTimestamp: this.mediaKeyTimestamp,
            contextInfo: this.contextInfo && this.contextInfo.toObject(),
            streamingSidecar: this.streamingSidecar
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.url === "string" && this.url.length)
            writer.writeString(1, this.url);
        if (typeof this.mimetype === "string" && this.mimetype.length)
            writer.writeString(2, this.mimetype);
        if (this.fileSha256 !== undefined)
            writer.writeBytes(3, this.fileSha256);
        if (this.fileLength !== undefined)
            writer.writeUint64(4, this.fileLength);
        if (this.seconds !== undefined)
            writer.writeUint32(5, this.seconds);
        if (this.ptt !== undefined)
            writer.writeBool(6, this.ptt);
        if (this.mediaKey !== undefined)
            writer.writeBytes(7, this.mediaKey);
        if (this.fileEncSha256 !== undefined)
            writer.writeBytes(8, this.fileEncSha256);
        if (typeof this.directPath === "string" && this.directPath.length)
            writer.writeString(9, this.directPath);
        if (this.mediaKeyTimestamp !== undefined)
            writer.writeInt64(10, this.mediaKeyTimestamp);
        if (this.contextInfo !== undefined)
            writer.writeMessage(17, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (this.streamingSidecar !== undefined)
            writer.writeBytes(18, this.streamingSidecar);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new AudioMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.url = reader.readString();
                    break;
                case 2:
                    message.mimetype = reader.readString();
                    break;
                case 3:
                    message.fileSha256 = reader.readBytes();
                    break;
                case 4:
                    message.fileLength = reader.readUint64();
                    break;
                case 5:
                    message.seconds = reader.readUint32();
                    break;
                case 6:
                    message.ptt = reader.readBool();
                    break;
                case 7:
                    message.mediaKey = reader.readBytes();
                    break;
                case 8:
                    message.fileEncSha256 = reader.readBytes();
                    break;
                case 9:
                    message.directPath = reader.readString();
                    break;
                case 10:
                    message.mediaKeyTimestamp = reader.readInt64();
                    break;
                case 17:
                    reader.readMessage(message.contextInfo, () => message.contextInfo = ContextInfo.deserialize(reader));
                    break;
                case 18:
                    message.streamingSidecar = reader.readBytes();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.AudioMessage = AudioMessage;
class VideoMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [12], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.url = data.url;
            this.mimetype = data.mimetype;
            this.fileSha256 = data.fileSha256;
            this.fileLength = data.fileLength;
            this.seconds = data.seconds;
            this.mediaKey = data.mediaKey;
            this.caption = data.caption;
            this.gifPlayback = data.gifPlayback;
            this.height = data.height;
            this.width = data.width;
            this.fileEncSha256 = data.fileEncSha256;
            this.interactiveAnnotations = data.interactiveAnnotations;
            this.directPath = data.directPath;
            this.mediaKeyTimestamp = data.mediaKeyTimestamp;
            this.jpegThumbnail = data.jpegThumbnail;
            this.contextInfo = data.contextInfo;
            this.streamingSidecar = data.streamingSidecar;
            this.gifAttribution = data.gifAttribution;
        }
    }
    get url() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set url(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get mimetype() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set mimetype(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get fileSha256() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set fileSha256(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get fileLength() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set fileLength(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get seconds() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set seconds(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get mediaKey() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set mediaKey(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get caption() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set caption(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get gifPlayback() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set gifPlayback(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get height() {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined);
    }
    set height(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get width() {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined);
    }
    set width(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get fileEncSha256() {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined);
    }
    set fileEncSha256(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get interactiveAnnotations() {
        return pb_1.Message.getRepeatedWrapperField(this, InteractiveAnnotation, 12);
    }
    set interactiveAnnotations(value) {
        pb_1.Message.setRepeatedWrapperField(this, 12, value);
    }
    get directPath() {
        return pb_1.Message.getFieldWithDefault(this, 13, undefined);
    }
    set directPath(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get mediaKeyTimestamp() {
        return pb_1.Message.getFieldWithDefault(this, 14, undefined);
    }
    set mediaKeyTimestamp(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get jpegThumbnail() {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined);
    }
    set jpegThumbnail(value) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo() {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17);
    }
    set contextInfo(value) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    get streamingSidecar() {
        return pb_1.Message.getFieldWithDefault(this, 18, undefined);
    }
    set streamingSidecar(value) {
        pb_1.Message.setField(this, 18, value);
    }
    get gifAttribution() {
        return pb_1.Message.getFieldWithDefault(this, 19, undefined);
    }
    set gifAttribution(value) {
        pb_1.Message.setField(this, 19, value);
    }
    toObject() {
        return {
            url: this.url,
            mimetype: this.mimetype,
            fileSha256: this.fileSha256,
            fileLength: this.fileLength,
            seconds: this.seconds,
            mediaKey: this.mediaKey,
            caption: this.caption,
            gifPlayback: this.gifPlayback,
            height: this.height,
            width: this.width,
            fileEncSha256: this.fileEncSha256,
            interactiveAnnotations: this.interactiveAnnotations.map((item) => item.toObject()),
            directPath: this.directPath,
            mediaKeyTimestamp: this.mediaKeyTimestamp,
            jpegThumbnail: this.jpegThumbnail,
            contextInfo: this.contextInfo && this.contextInfo.toObject(),
            streamingSidecar: this.streamingSidecar,
            gifAttribution: this.gifAttribution
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.url === "string" && this.url.length)
            writer.writeString(1, this.url);
        if (typeof this.mimetype === "string" && this.mimetype.length)
            writer.writeString(2, this.mimetype);
        if (this.fileSha256 !== undefined)
            writer.writeBytes(3, this.fileSha256);
        if (this.fileLength !== undefined)
            writer.writeUint64(4, this.fileLength);
        if (this.seconds !== undefined)
            writer.writeUint32(5, this.seconds);
        if (this.mediaKey !== undefined)
            writer.writeBytes(6, this.mediaKey);
        if (typeof this.caption === "string" && this.caption.length)
            writer.writeString(7, this.caption);
        if (this.gifPlayback !== undefined)
            writer.writeBool(8, this.gifPlayback);
        if (this.height !== undefined)
            writer.writeUint32(9, this.height);
        if (this.width !== undefined)
            writer.writeUint32(10, this.width);
        if (this.fileEncSha256 !== undefined)
            writer.writeBytes(11, this.fileEncSha256);
        if (this.interactiveAnnotations !== undefined)
            writer.writeRepeatedMessage(12, this.interactiveAnnotations, (item) => item.serialize(writer));
        if (typeof this.directPath === "string" && this.directPath.length)
            writer.writeString(13, this.directPath);
        if (this.mediaKeyTimestamp !== undefined)
            writer.writeInt64(14, this.mediaKeyTimestamp);
        if (this.jpegThumbnail !== undefined)
            writer.writeBytes(16, this.jpegThumbnail);
        if (this.contextInfo !== undefined)
            writer.writeMessage(17, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (this.streamingSidecar !== undefined)
            writer.writeBytes(18, this.streamingSidecar);
        if (this.gifAttribution !== undefined)
            writer.writeEnum(19, this.gifAttribution);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new VideoMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.url = reader.readString();
                    break;
                case 2:
                    message.mimetype = reader.readString();
                    break;
                case 3:
                    message.fileSha256 = reader.readBytes();
                    break;
                case 4:
                    message.fileLength = reader.readUint64();
                    break;
                case 5:
                    message.seconds = reader.readUint32();
                    break;
                case 6:
                    message.mediaKey = reader.readBytes();
                    break;
                case 7:
                    message.caption = reader.readString();
                    break;
                case 8:
                    message.gifPlayback = reader.readBool();
                    break;
                case 9:
                    message.height = reader.readUint32();
                    break;
                case 10:
                    message.width = reader.readUint32();
                    break;
                case 11:
                    message.fileEncSha256 = reader.readBytes();
                    break;
                case 12:
                    reader.readMessage(message.interactiveAnnotations, () => pb_1.Message.addToRepeatedWrapperField(message, 12, InteractiveAnnotation.deserialize(reader), InteractiveAnnotation));
                    break;
                case 13:
                    message.directPath = reader.readString();
                    break;
                case 14:
                    message.mediaKeyTimestamp = reader.readInt64();
                    break;
                case 16:
                    message.jpegThumbnail = reader.readBytes();
                    break;
                case 17:
                    reader.readMessage(message.contextInfo, () => message.contextInfo = ContextInfo.deserialize(reader));
                    break;
                case 18:
                    message.streamingSidecar = reader.readBytes();
                    break;
                case 19:
                    message.gifAttribution = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.VideoMessage = VideoMessage;
(function (VideoMessage) {
    let VIDEO_MESSAGE_ATTRIBUTION;
    (function (VIDEO_MESSAGE_ATTRIBUTION) {
        VIDEO_MESSAGE_ATTRIBUTION[VIDEO_MESSAGE_ATTRIBUTION["NONE"] = 0] = "NONE";
        VIDEO_MESSAGE_ATTRIBUTION[VIDEO_MESSAGE_ATTRIBUTION["GIPHY"] = 1] = "GIPHY";
        VIDEO_MESSAGE_ATTRIBUTION[VIDEO_MESSAGE_ATTRIBUTION["TENOR"] = 2] = "TENOR";
    })(VIDEO_MESSAGE_ATTRIBUTION = VideoMessage.VIDEO_MESSAGE_ATTRIBUTION || (VideoMessage.VIDEO_MESSAGE_ATTRIBUTION = {}));
})(VideoMessage = exports.VideoMessage || (exports.VideoMessage = {}));
class Call extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.callKey = data.callKey;
        }
    }
    get callKey() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set callKey(value) {
        pb_1.Message.setField(this, 1, value);
    }
    toObject() {
        return {
            callKey: this.callKey
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.callKey !== undefined)
            writer.writeBytes(1, this.callKey);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Call();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.callKey = reader.readBytes();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.Call = Call;
class Chat extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayName = data.displayName;
            this.id = data.id;
        }
    }
    get displayName() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set displayName(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            displayName: this.displayName,
            id: this.id
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.displayName === "string" && this.displayName.length)
            writer.writeString(1, this.displayName);
        if (typeof this.id === "string" && this.id.length)
            writer.writeString(2, this.id);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Chat();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.displayName = reader.readString();
                    break;
                case 2:
                    message.id = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.Chat = Chat;
class ProtocolMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.key = data.key;
            this.type = data.type;
            this.ephemeralExpiration = data.ephemeralExpiration;
            this.ephemeralSettingTimestamp = data.ephemeralSettingTimestamp;
            this.historySyncNotification = data.historySyncNotification;
        }
    }
    get key() {
        return pb_1.Message.getWrapperField(this, MessageKey, 1);
    }
    set key(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get type() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set type(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get ephemeralExpiration() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set ephemeralExpiration(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get ephemeralSettingTimestamp() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set ephemeralSettingTimestamp(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get historySyncNotification() {
        return pb_1.Message.getWrapperField(this, HistorySyncNotification, 6);
    }
    set historySyncNotification(value) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    toObject() {
        return {
            key: this.key && this.key.toObject(),
            type: this.type,
            ephemeralExpiration: this.ephemeralExpiration,
            ephemeralSettingTimestamp: this.ephemeralSettingTimestamp,
            historySyncNotification: this.historySyncNotification && this.historySyncNotification.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.key !== undefined)
            writer.writeMessage(1, this.key, () => this.key.serialize(writer));
        if (this.type !== undefined)
            writer.writeEnum(2, this.type);
        if (this.ephemeralExpiration !== undefined)
            writer.writeUint32(4, this.ephemeralExpiration);
        if (this.ephemeralSettingTimestamp !== undefined)
            writer.writeInt64(5, this.ephemeralSettingTimestamp);
        if (this.historySyncNotification !== undefined)
            writer.writeMessage(6, this.historySyncNotification, () => this.historySyncNotification.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ProtocolMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.key, () => message.key = MessageKey.deserialize(reader));
                    break;
                case 2:
                    message.type = reader.readEnum();
                    break;
                case 4:
                    message.ephemeralExpiration = reader.readUint32();
                    break;
                case 5:
                    message.ephemeralSettingTimestamp = reader.readInt64();
                    break;
                case 6:
                    reader.readMessage(message.historySyncNotification, () => message.historySyncNotification = HistorySyncNotification.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.ProtocolMessage = ProtocolMessage;
(function (ProtocolMessage) {
    let PROTOCOL_MESSAGE_TYPE;
    (function (PROTOCOL_MESSAGE_TYPE) {
        PROTOCOL_MESSAGE_TYPE[PROTOCOL_MESSAGE_TYPE["REVOKE"] = 0] = "REVOKE";
        PROTOCOL_MESSAGE_TYPE[PROTOCOL_MESSAGE_TYPE["EPHEMERAL_SETTING"] = 3] = "EPHEMERAL_SETTING";
        PROTOCOL_MESSAGE_TYPE[PROTOCOL_MESSAGE_TYPE["EPHEMERAL_SYNC_RESPONSE"] = 4] = "EPHEMERAL_SYNC_RESPONSE";
        PROTOCOL_MESSAGE_TYPE[PROTOCOL_MESSAGE_TYPE["HISTORY_SYNC_NOTIFICATION"] = 5] = "HISTORY_SYNC_NOTIFICATION";
    })(PROTOCOL_MESSAGE_TYPE = ProtocolMessage.PROTOCOL_MESSAGE_TYPE || (ProtocolMessage.PROTOCOL_MESSAGE_TYPE = {}));
})(ProtocolMessage = exports.ProtocolMessage || (exports.ProtocolMessage = {}));
class HistorySyncNotification extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.fileSha256 = data.fileSha256;
            this.fileLength = data.fileLength;
            this.mediaKey = data.mediaKey;
            this.fileEncSha256 = data.fileEncSha256;
            this.directPath = data.directPath;
            this.syncType = data.syncType;
            this.chunkOrder = data.chunkOrder;
            this.originalMessageId = data.originalMessageId;
        }
    }
    get fileSha256() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set fileSha256(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get fileLength() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set fileLength(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get mediaKey() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set mediaKey(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get fileEncSha256() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set fileEncSha256(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get directPath() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set directPath(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get syncType() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set syncType(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get chunkOrder() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set chunkOrder(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get originalMessageId() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set originalMessageId(value) {
        pb_1.Message.setField(this, 8, value);
    }
    toObject() {
        return {
            fileSha256: this.fileSha256,
            fileLength: this.fileLength,
            mediaKey: this.mediaKey,
            fileEncSha256: this.fileEncSha256,
            directPath: this.directPath,
            syncType: this.syncType,
            chunkOrder: this.chunkOrder,
            originalMessageId: this.originalMessageId
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.fileSha256 !== undefined)
            writer.writeBytes(1, this.fileSha256);
        if (this.fileLength !== undefined)
            writer.writeUint64(2, this.fileLength);
        if (this.mediaKey !== undefined)
            writer.writeBytes(3, this.mediaKey);
        if (this.fileEncSha256 !== undefined)
            writer.writeBytes(4, this.fileEncSha256);
        if (typeof this.directPath === "string" && this.directPath.length)
            writer.writeString(5, this.directPath);
        if (this.syncType !== undefined)
            writer.writeEnum(6, this.syncType);
        if (this.chunkOrder !== undefined)
            writer.writeUint32(7, this.chunkOrder);
        if (typeof this.originalMessageId === "string" && this.originalMessageId.length)
            writer.writeString(8, this.originalMessageId);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HistorySyncNotification();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.fileSha256 = reader.readBytes();
                    break;
                case 2:
                    message.fileLength = reader.readUint64();
                    break;
                case 3:
                    message.mediaKey = reader.readBytes();
                    break;
                case 4:
                    message.fileEncSha256 = reader.readBytes();
                    break;
                case 5:
                    message.directPath = reader.readString();
                    break;
                case 6:
                    message.syncType = reader.readEnum();
                    break;
                case 7:
                    message.chunkOrder = reader.readUint32();
                    break;
                case 8:
                    message.originalMessageId = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.HistorySyncNotification = HistorySyncNotification;
(function (HistorySyncNotification) {
    let HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE;
    (function (HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE) {
        HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE[HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE["INITIAL_BOOTSTRAP"] = 0] = "INITIAL_BOOTSTRAP";
        HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE[HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE["INITIAL_STATUS_V3"] = 1] = "INITIAL_STATUS_V3";
        HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE[HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE["FULL"] = 2] = "FULL";
        HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE[HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE["RECENT"] = 3] = "RECENT";
        HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE[HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE["RESEND"] = 4] = "RESEND";
    })(HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE = HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE || (HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE = {}));
})(HistorySyncNotification = exports.HistorySyncNotification || (exports.HistorySyncNotification = {}));
class ContactsArrayMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [2], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayName = data.displayName;
            this.contacts = data.contacts;
            this.contextInfo = data.contextInfo;
        }
    }
    get displayName() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set displayName(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get contacts() {
        return pb_1.Message.getRepeatedWrapperField(this, ContactMessage, 2);
    }
    set contacts(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    get contextInfo() {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17);
    }
    set contextInfo(value) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    toObject() {
        return {
            displayName: this.displayName,
            contacts: this.contacts.map((item) => item.toObject()),
            contextInfo: this.contextInfo && this.contextInfo.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.displayName === "string" && this.displayName.length)
            writer.writeString(1, this.displayName);
        if (this.contacts !== undefined)
            writer.writeRepeatedMessage(2, this.contacts, (item) => item.serialize(writer));
        if (this.contextInfo !== undefined)
            writer.writeMessage(17, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ContactsArrayMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.displayName = reader.readString();
                    break;
                case 2:
                    reader.readMessage(message.contacts, () => pb_1.Message.addToRepeatedWrapperField(message, 2, ContactMessage.deserialize(reader), ContactMessage));
                    break;
                case 17:
                    reader.readMessage(message.contextInfo, () => message.contextInfo = ContextInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.ContactsArrayMessage = ContactsArrayMessage;
class HSMCurrency extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.currencyCode = data.currencyCode;
            this.amount1000 = data.amount1000;
        }
    }
    get currencyCode() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set currencyCode(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get amount1000() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set amount1000(value) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            currencyCode: this.currencyCode,
            amount1000: this.amount1000
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.currencyCode === "string" && this.currencyCode.length)
            writer.writeString(1, this.currencyCode);
        if (this.amount1000 !== undefined)
            writer.writeInt64(2, this.amount1000);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HSMCurrency();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.currencyCode = reader.readString();
                    break;
                case 2:
                    message.amount1000 = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.HSMCurrency = HSMCurrency;
class HSMDateTimeComponent extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.dayOfWeek = data.dayOfWeek;
            this.year = data.year;
            this.month = data.month;
            this.dayOfMonth = data.dayOfMonth;
            this.hour = data.hour;
            this.minute = data.minute;
            this.calendar = data.calendar;
        }
    }
    get dayOfWeek() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set dayOfWeek(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get year() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set year(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get month() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set month(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get dayOfMonth() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set dayOfMonth(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get hour() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set hour(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get minute() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set minute(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get calendar() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set calendar(value) {
        pb_1.Message.setField(this, 7, value);
    }
    toObject() {
        return {
            dayOfWeek: this.dayOfWeek,
            year: this.year,
            month: this.month,
            dayOfMonth: this.dayOfMonth,
            hour: this.hour,
            minute: this.minute,
            calendar: this.calendar
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dayOfWeek !== undefined)
            writer.writeEnum(1, this.dayOfWeek);
        if (this.year !== undefined)
            writer.writeUint32(2, this.year);
        if (this.month !== undefined)
            writer.writeUint32(3, this.month);
        if (this.dayOfMonth !== undefined)
            writer.writeUint32(4, this.dayOfMonth);
        if (this.hour !== undefined)
            writer.writeUint32(5, this.hour);
        if (this.minute !== undefined)
            writer.writeUint32(6, this.minute);
        if (this.calendar !== undefined)
            writer.writeEnum(7, this.calendar);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HSMDateTimeComponent();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.dayOfWeek = reader.readEnum();
                    break;
                case 2:
                    message.year = reader.readUint32();
                    break;
                case 3:
                    message.month = reader.readUint32();
                    break;
                case 4:
                    message.dayOfMonth = reader.readUint32();
                    break;
                case 5:
                    message.hour = reader.readUint32();
                    break;
                case 6:
                    message.minute = reader.readUint32();
                    break;
                case 7:
                    message.calendar = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.HSMDateTimeComponent = HSMDateTimeComponent;
(function (HSMDateTimeComponent) {
    let HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE;
    (function (HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE) {
        HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE[HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE["MONDAY"] = 1] = "MONDAY";
        HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE[HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE["TUESDAY"] = 2] = "TUESDAY";
        HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE[HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE["WEDNESDAY"] = 3] = "WEDNESDAY";
        HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE[HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE["THURSDAY"] = 4] = "THURSDAY";
        HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE[HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE["FRIDAY"] = 5] = "FRIDAY";
        HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE[HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE["SATURDAY"] = 6] = "SATURDAY";
        HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE[HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE["SUNDAY"] = 7] = "SUNDAY";
    })(HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE = HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE || (HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE = {}));
    let HSM_DATE_TIME_COMPONENT_CALENDARTYPE;
    (function (HSM_DATE_TIME_COMPONENT_CALENDARTYPE) {
        HSM_DATE_TIME_COMPONENT_CALENDARTYPE[HSM_DATE_TIME_COMPONENT_CALENDARTYPE["GREGORIAN"] = 1] = "GREGORIAN";
        HSM_DATE_TIME_COMPONENT_CALENDARTYPE[HSM_DATE_TIME_COMPONENT_CALENDARTYPE["SOLAR_HIJRI"] = 2] = "SOLAR_HIJRI";
    })(HSM_DATE_TIME_COMPONENT_CALENDARTYPE = HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE || (HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE = {}));
})(HSMDateTimeComponent = exports.HSMDateTimeComponent || (exports.HSMDateTimeComponent = {}));
class HSMDateTimeUnixEpoch extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.timestamp = data.timestamp;
        }
    }
    get timestamp() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set timestamp(value) {
        pb_1.Message.setField(this, 1, value);
    }
    toObject() {
        return {
            timestamp: this.timestamp
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.timestamp !== undefined)
            writer.writeInt64(1, this.timestamp);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HSMDateTimeUnixEpoch();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.timestamp = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.HSMDateTimeUnixEpoch = HSMDateTimeUnixEpoch;
class HSMDateTime extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.component = data.component;
            this.unixEpoch = data.unixEpoch;
        }
    }
    get component() {
        return pb_1.Message.getWrapperField(this, HSMDateTimeComponent, 1);
    }
    set component(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get unixEpoch() {
        return pb_1.Message.getWrapperField(this, HSMDateTimeUnixEpoch, 2);
    }
    set unixEpoch(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    toObject() {
        return {
            component: this.component && this.component.toObject(),
            unixEpoch: this.unixEpoch && this.unixEpoch.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.component !== undefined)
            writer.writeMessage(1, this.component, () => this.component.serialize(writer));
        if (this.unixEpoch !== undefined)
            writer.writeMessage(2, this.unixEpoch, () => this.unixEpoch.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HSMDateTime();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.component, () => message.component = HSMDateTimeComponent.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.unixEpoch, () => message.unixEpoch = HSMDateTimeUnixEpoch.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.HSMDateTime = HSMDateTime;
class HSMLocalizableParameter extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.default = data.default;
            this.currency = data.currency;
            this.dateTime = data.dateTime;
        }
    }
    get default() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set default(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get currency() {
        return pb_1.Message.getWrapperField(this, HSMCurrency, 2);
    }
    set currency(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get dateTime() {
        return pb_1.Message.getWrapperField(this, HSMDateTime, 3);
    }
    set dateTime(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    toObject() {
        return {
            default: this.default,
            currency: this.currency && this.currency.toObject(),
            dateTime: this.dateTime && this.dateTime.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.default === "string" && this.default.length)
            writer.writeString(1, this.default);
        if (this.currency !== undefined)
            writer.writeMessage(2, this.currency, () => this.currency.serialize(writer));
        if (this.dateTime !== undefined)
            writer.writeMessage(3, this.dateTime, () => this.dateTime.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HSMLocalizableParameter();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.default = reader.readString();
                    break;
                case 2:
                    reader.readMessage(message.currency, () => message.currency = HSMCurrency.deserialize(reader));
                    break;
                case 3:
                    reader.readMessage(message.dateTime, () => message.dateTime = HSMDateTime.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.HSMLocalizableParameter = HSMLocalizableParameter;
class HighlyStructuredMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [3, 6], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.namespace = data.namespace;
            this.elementName = data.elementName;
            this.params = data.params;
            this.fallbackLg = data.fallbackLg;
            this.fallbackLc = data.fallbackLc;
            this.localizableParams = data.localizableParams;
            this.deterministicLg = data.deterministicLg;
            this.deterministicLc = data.deterministicLc;
            this.hydratedHsm = data.hydratedHsm;
        }
    }
    get namespace() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set namespace(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get elementName() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set elementName(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get params() {
        return pb_1.Message.getField(this, 3);
    }
    set params(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get fallbackLg() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set fallbackLg(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get fallbackLc() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set fallbackLc(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get localizableParams() {
        return pb_1.Message.getRepeatedWrapperField(this, HSMLocalizableParameter, 6);
    }
    set localizableParams(value) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    get deterministicLg() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set deterministicLg(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get deterministicLc() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set deterministicLc(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get hydratedHsm() {
        return pb_1.Message.getWrapperField(this, TemplateMessage, 9);
    }
    set hydratedHsm(value) {
        pb_1.Message.setWrapperField(this, 9, value);
    }
    toObject() {
        return {
            namespace: this.namespace,
            elementName: this.elementName,
            params: this.params,
            fallbackLg: this.fallbackLg,
            fallbackLc: this.fallbackLc,
            localizableParams: this.localizableParams.map((item) => item.toObject()),
            deterministicLg: this.deterministicLg,
            deterministicLc: this.deterministicLc,
            hydratedHsm: this.hydratedHsm && this.hydratedHsm.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.namespace === "string" && this.namespace.length)
            writer.writeString(1, this.namespace);
        if (typeof this.elementName === "string" && this.elementName.length)
            writer.writeString(2, this.elementName);
        if (this.params !== undefined)
            writer.writeRepeatedString(3, this.params);
        if (typeof this.fallbackLg === "string" && this.fallbackLg.length)
            writer.writeString(4, this.fallbackLg);
        if (typeof this.fallbackLc === "string" && this.fallbackLc.length)
            writer.writeString(5, this.fallbackLc);
        if (this.localizableParams !== undefined)
            writer.writeRepeatedMessage(6, this.localizableParams, (item) => item.serialize(writer));
        if (typeof this.deterministicLg === "string" && this.deterministicLg.length)
            writer.writeString(7, this.deterministicLg);
        if (typeof this.deterministicLc === "string" && this.deterministicLc.length)
            writer.writeString(8, this.deterministicLc);
        if (this.hydratedHsm !== undefined)
            writer.writeMessage(9, this.hydratedHsm, () => this.hydratedHsm.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HighlyStructuredMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.namespace = reader.readString();
                    break;
                case 2:
                    message.elementName = reader.readString();
                    break;
                case 3:
                    pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                    break;
                case 4:
                    message.fallbackLg = reader.readString();
                    break;
                case 5:
                    message.fallbackLc = reader.readString();
                    break;
                case 6:
                    reader.readMessage(message.localizableParams, () => pb_1.Message.addToRepeatedWrapperField(message, 6, HSMLocalizableParameter.deserialize(reader), HSMLocalizableParameter));
                    break;
                case 7:
                    message.deterministicLg = reader.readString();
                    break;
                case 8:
                    message.deterministicLc = reader.readString();
                    break;
                case 9:
                    reader.readMessage(message.hydratedHsm, () => message.hydratedHsm = TemplateMessage.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.HighlyStructuredMessage = HighlyStructuredMessage;
class SendPaymentMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.noteMessage = data.noteMessage;
            this.requestMessageKey = data.requestMessageKey;
        }
    }
    get noteMessage() {
        return pb_1.Message.getWrapperField(this, Message, 2);
    }
    set noteMessage(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get requestMessageKey() {
        return pb_1.Message.getWrapperField(this, MessageKey, 3);
    }
    set requestMessageKey(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    toObject() {
        return {
            noteMessage: this.noteMessage && this.noteMessage.toObject(),
            requestMessageKey: this.requestMessageKey && this.requestMessageKey.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.noteMessage !== undefined)
            writer.writeMessage(2, this.noteMessage, () => this.noteMessage.serialize(writer));
        if (this.requestMessageKey !== undefined)
            writer.writeMessage(3, this.requestMessageKey, () => this.requestMessageKey.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new SendPaymentMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    reader.readMessage(message.noteMessage, () => message.noteMessage = Message.deserialize(reader));
                    break;
                case 3:
                    reader.readMessage(message.requestMessageKey, () => message.requestMessageKey = MessageKey.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.SendPaymentMessage = SendPaymentMessage;
class RequestPaymentMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.noteMessage = data.noteMessage;
            this.currencyCodeIso4217 = data.currencyCodeIso4217;
            this.amount1000 = data.amount1000;
            this.requestFrom = data.requestFrom;
            this.expiryTimestamp = data.expiryTimestamp;
        }
    }
    get noteMessage() {
        return pb_1.Message.getWrapperField(this, Message, 4);
    }
    set noteMessage(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get currencyCodeIso4217() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set currencyCodeIso4217(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get amount1000() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set amount1000(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get requestFrom() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set requestFrom(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get expiryTimestamp() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set expiryTimestamp(value) {
        pb_1.Message.setField(this, 5, value);
    }
    toObject() {
        return {
            noteMessage: this.noteMessage && this.noteMessage.toObject(),
            currencyCodeIso4217: this.currencyCodeIso4217,
            amount1000: this.amount1000,
            requestFrom: this.requestFrom,
            expiryTimestamp: this.expiryTimestamp
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.noteMessage !== undefined)
            writer.writeMessage(4, this.noteMessage, () => this.noteMessage.serialize(writer));
        if (typeof this.currencyCodeIso4217 === "string" && this.currencyCodeIso4217.length)
            writer.writeString(1, this.currencyCodeIso4217);
        if (this.amount1000 !== undefined)
            writer.writeUint64(2, this.amount1000);
        if (typeof this.requestFrom === "string" && this.requestFrom.length)
            writer.writeString(3, this.requestFrom);
        if (this.expiryTimestamp !== undefined)
            writer.writeInt64(5, this.expiryTimestamp);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new RequestPaymentMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    reader.readMessage(message.noteMessage, () => message.noteMessage = Message.deserialize(reader));
                    break;
                case 1:
                    message.currencyCodeIso4217 = reader.readString();
                    break;
                case 2:
                    message.amount1000 = reader.readUint64();
                    break;
                case 3:
                    message.requestFrom = reader.readString();
                    break;
                case 5:
                    message.expiryTimestamp = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.RequestPaymentMessage = RequestPaymentMessage;
class DeclinePaymentRequestMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.key = data.key;
        }
    }
    get key() {
        return pb_1.Message.getWrapperField(this, MessageKey, 1);
    }
    set key(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    toObject() {
        return {
            key: this.key && this.key.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.key !== undefined)
            writer.writeMessage(1, this.key, () => this.key.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new DeclinePaymentRequestMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.key, () => message.key = MessageKey.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.DeclinePaymentRequestMessage = DeclinePaymentRequestMessage;
class CancelPaymentRequestMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.key = data.key;
        }
    }
    get key() {
        return pb_1.Message.getWrapperField(this, MessageKey, 1);
    }
    set key(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    toObject() {
        return {
            key: this.key && this.key.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.key !== undefined)
            writer.writeMessage(1, this.key, () => this.key.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new CancelPaymentRequestMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.key, () => message.key = MessageKey.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.CancelPaymentRequestMessage = CancelPaymentRequestMessage;
class LiveLocationMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.degreesLatitude = data.degreesLatitude;
            this.degreesLongitude = data.degreesLongitude;
            this.accuracyInMeters = data.accuracyInMeters;
            this.speedInMps = data.speedInMps;
            this.degreesClockwiseFromMagneticNorth = data.degreesClockwiseFromMagneticNorth;
            this.caption = data.caption;
            this.sequenceNumber = data.sequenceNumber;
            this.timeOffset = data.timeOffset;
            this.jpegThumbnail = data.jpegThumbnail;
            this.contextInfo = data.contextInfo;
        }
    }
    get degreesLatitude() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set degreesLatitude(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get degreesLongitude() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set degreesLongitude(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get accuracyInMeters() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set accuracyInMeters(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get speedInMps() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set speedInMps(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get degreesClockwiseFromMagneticNorth() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set degreesClockwiseFromMagneticNorth(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get caption() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set caption(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get sequenceNumber() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set sequenceNumber(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get timeOffset() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set timeOffset(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get jpegThumbnail() {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined);
    }
    set jpegThumbnail(value) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo() {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17);
    }
    set contextInfo(value) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    toObject() {
        return {
            degreesLatitude: this.degreesLatitude,
            degreesLongitude: this.degreesLongitude,
            accuracyInMeters: this.accuracyInMeters,
            speedInMps: this.speedInMps,
            degreesClockwiseFromMagneticNorth: this.degreesClockwiseFromMagneticNorth,
            caption: this.caption,
            sequenceNumber: this.sequenceNumber,
            timeOffset: this.timeOffset,
            jpegThumbnail: this.jpegThumbnail,
            contextInfo: this.contextInfo && this.contextInfo.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.degreesLatitude !== undefined)
            writer.writeDouble(1, this.degreesLatitude);
        if (this.degreesLongitude !== undefined)
            writer.writeDouble(2, this.degreesLongitude);
        if (this.accuracyInMeters !== undefined)
            writer.writeUint32(3, this.accuracyInMeters);
        if (this.speedInMps !== undefined)
            writer.writeFloat(4, this.speedInMps);
        if (this.degreesClockwiseFromMagneticNorth !== undefined)
            writer.writeUint32(5, this.degreesClockwiseFromMagneticNorth);
        if (typeof this.caption === "string" && this.caption.length)
            writer.writeString(6, this.caption);
        if (this.sequenceNumber !== undefined)
            writer.writeInt64(7, this.sequenceNumber);
        if (this.timeOffset !== undefined)
            writer.writeUint32(8, this.timeOffset);
        if (this.jpegThumbnail !== undefined)
            writer.writeBytes(16, this.jpegThumbnail);
        if (this.contextInfo !== undefined)
            writer.writeMessage(17, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new LiveLocationMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.degreesLatitude = reader.readDouble();
                    break;
                case 2:
                    message.degreesLongitude = reader.readDouble();
                    break;
                case 3:
                    message.accuracyInMeters = reader.readUint32();
                    break;
                case 4:
                    message.speedInMps = reader.readFloat();
                    break;
                case 5:
                    message.degreesClockwiseFromMagneticNorth = reader.readUint32();
                    break;
                case 6:
                    message.caption = reader.readString();
                    break;
                case 7:
                    message.sequenceNumber = reader.readInt64();
                    break;
                case 8:
                    message.timeOffset = reader.readUint32();
                    break;
                case 16:
                    message.jpegThumbnail = reader.readBytes();
                    break;
                case 17:
                    reader.readMessage(message.contextInfo, () => message.contextInfo = ContextInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.LiveLocationMessage = LiveLocationMessage;
class StickerMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.url = data.url;
            this.fileSha256 = data.fileSha256;
            this.fileEncSha256 = data.fileEncSha256;
            this.mediaKey = data.mediaKey;
            this.mimetype = data.mimetype;
            this.height = data.height;
            this.width = data.width;
            this.directPath = data.directPath;
            this.fileLength = data.fileLength;
            this.mediaKeyTimestamp = data.mediaKeyTimestamp;
            this.firstFrameLength = data.firstFrameLength;
            this.firstFrameSidecar = data.firstFrameSidecar;
            this.isAnimated = data.isAnimated;
            this.pngThumbnail = data.pngThumbnail;
            this.contextInfo = data.contextInfo;
        }
    }
    get url() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set url(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get fileSha256() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set fileSha256(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get fileEncSha256() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set fileEncSha256(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get mediaKey() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set mediaKey(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get mimetype() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set mimetype(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get height() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set height(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get width() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set width(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get directPath() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set directPath(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get fileLength() {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined);
    }
    set fileLength(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get mediaKeyTimestamp() {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined);
    }
    set mediaKeyTimestamp(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get firstFrameLength() {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined);
    }
    set firstFrameLength(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get firstFrameSidecar() {
        return pb_1.Message.getFieldWithDefault(this, 12, undefined);
    }
    set firstFrameSidecar(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get isAnimated() {
        return pb_1.Message.getFieldWithDefault(this, 13, undefined);
    }
    set isAnimated(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get pngThumbnail() {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined);
    }
    set pngThumbnail(value) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo() {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17);
    }
    set contextInfo(value) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    toObject() {
        return {
            url: this.url,
            fileSha256: this.fileSha256,
            fileEncSha256: this.fileEncSha256,
            mediaKey: this.mediaKey,
            mimetype: this.mimetype,
            height: this.height,
            width: this.width,
            directPath: this.directPath,
            fileLength: this.fileLength,
            mediaKeyTimestamp: this.mediaKeyTimestamp,
            firstFrameLength: this.firstFrameLength,
            firstFrameSidecar: this.firstFrameSidecar,
            isAnimated: this.isAnimated,
            pngThumbnail: this.pngThumbnail,
            contextInfo: this.contextInfo && this.contextInfo.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.url === "string" && this.url.length)
            writer.writeString(1, this.url);
        if (this.fileSha256 !== undefined)
            writer.writeBytes(2, this.fileSha256);
        if (this.fileEncSha256 !== undefined)
            writer.writeBytes(3, this.fileEncSha256);
        if (this.mediaKey !== undefined)
            writer.writeBytes(4, this.mediaKey);
        if (typeof this.mimetype === "string" && this.mimetype.length)
            writer.writeString(5, this.mimetype);
        if (this.height !== undefined)
            writer.writeUint32(6, this.height);
        if (this.width !== undefined)
            writer.writeUint32(7, this.width);
        if (typeof this.directPath === "string" && this.directPath.length)
            writer.writeString(8, this.directPath);
        if (this.fileLength !== undefined)
            writer.writeUint64(9, this.fileLength);
        if (this.mediaKeyTimestamp !== undefined)
            writer.writeInt64(10, this.mediaKeyTimestamp);
        if (this.firstFrameLength !== undefined)
            writer.writeUint32(11, this.firstFrameLength);
        if (this.firstFrameSidecar !== undefined)
            writer.writeBytes(12, this.firstFrameSidecar);
        if (this.isAnimated !== undefined)
            writer.writeBool(13, this.isAnimated);
        if (this.pngThumbnail !== undefined)
            writer.writeBytes(16, this.pngThumbnail);
        if (this.contextInfo !== undefined)
            writer.writeMessage(17, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new StickerMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.url = reader.readString();
                    break;
                case 2:
                    message.fileSha256 = reader.readBytes();
                    break;
                case 3:
                    message.fileEncSha256 = reader.readBytes();
                    break;
                case 4:
                    message.mediaKey = reader.readBytes();
                    break;
                case 5:
                    message.mimetype = reader.readString();
                    break;
                case 6:
                    message.height = reader.readUint32();
                    break;
                case 7:
                    message.width = reader.readUint32();
                    break;
                case 8:
                    message.directPath = reader.readString();
                    break;
                case 9:
                    message.fileLength = reader.readUint64();
                    break;
                case 10:
                    message.mediaKeyTimestamp = reader.readInt64();
                    break;
                case 11:
                    message.firstFrameLength = reader.readUint32();
                    break;
                case 12:
                    message.firstFrameSidecar = reader.readBytes();
                    break;
                case 13:
                    message.isAnimated = reader.readBool();
                    break;
                case 16:
                    message.pngThumbnail = reader.readBytes();
                    break;
                case 17:
                    reader.readMessage(message.contextInfo, () => message.contextInfo = ContextInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.StickerMessage = StickerMessage;
class FourRowTemplate extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [8], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.content = data.content;
            this.footer = data.footer;
            this.buttons = data.buttons;
            this.documentMessage = data.documentMessage;
            this.highlyStructuredMessage = data.highlyStructuredMessage;
            this.imageMessage = data.imageMessage;
            this.videoMessage = data.videoMessage;
            this.locationMessage = data.locationMessage;
        }
    }
    get content() {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 6);
    }
    set content(value) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get footer() {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 7);
    }
    set footer(value) {
        pb_1.Message.setWrapperField(this, 7, value);
    }
    get buttons() {
        return pb_1.Message.getRepeatedWrapperField(this, TemplateButton, 8);
    }
    set buttons(value) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    get documentMessage() {
        return pb_1.Message.getWrapperField(this, DocumentMessage, 1);
    }
    set documentMessage(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get highlyStructuredMessage() {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 2);
    }
    set highlyStructuredMessage(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get imageMessage() {
        return pb_1.Message.getWrapperField(this, ImageMessage, 3);
    }
    set imageMessage(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get videoMessage() {
        return pb_1.Message.getWrapperField(this, VideoMessage, 4);
    }
    set videoMessage(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get locationMessage() {
        return pb_1.Message.getWrapperField(this, LocationMessage, 5);
    }
    set locationMessage(value) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    toObject() {
        return {
            content: this.content && this.content.toObject(),
            footer: this.footer && this.footer.toObject(),
            buttons: this.buttons.map((item) => item.toObject()),
            documentMessage: this.documentMessage && this.documentMessage.toObject(),
            highlyStructuredMessage: this.highlyStructuredMessage && this.highlyStructuredMessage.toObject(),
            imageMessage: this.imageMessage && this.imageMessage.toObject(),
            videoMessage: this.videoMessage && this.videoMessage.toObject(),
            locationMessage: this.locationMessage && this.locationMessage.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.content !== undefined)
            writer.writeMessage(6, this.content, () => this.content.serialize(writer));
        if (this.footer !== undefined)
            writer.writeMessage(7, this.footer, () => this.footer.serialize(writer));
        if (this.buttons !== undefined)
            writer.writeRepeatedMessage(8, this.buttons, (item) => item.serialize(writer));
        if (this.documentMessage !== undefined)
            writer.writeMessage(1, this.documentMessage, () => this.documentMessage.serialize(writer));
        if (this.highlyStructuredMessage !== undefined)
            writer.writeMessage(2, this.highlyStructuredMessage, () => this.highlyStructuredMessage.serialize(writer));
        if (this.imageMessage !== undefined)
            writer.writeMessage(3, this.imageMessage, () => this.imageMessage.serialize(writer));
        if (this.videoMessage !== undefined)
            writer.writeMessage(4, this.videoMessage, () => this.videoMessage.serialize(writer));
        if (this.locationMessage !== undefined)
            writer.writeMessage(5, this.locationMessage, () => this.locationMessage.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new FourRowTemplate();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    reader.readMessage(message.content, () => message.content = HighlyStructuredMessage.deserialize(reader));
                    break;
                case 7:
                    reader.readMessage(message.footer, () => message.footer = HighlyStructuredMessage.deserialize(reader));
                    break;
                case 8:
                    reader.readMessage(message.buttons, () => pb_1.Message.addToRepeatedWrapperField(message, 8, TemplateButton.deserialize(reader), TemplateButton));
                    break;
                case 1:
                    reader.readMessage(message.documentMessage, () => message.documentMessage = DocumentMessage.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.highlyStructuredMessage, () => message.highlyStructuredMessage = HighlyStructuredMessage.deserialize(reader));
                    break;
                case 3:
                    reader.readMessage(message.imageMessage, () => message.imageMessage = ImageMessage.deserialize(reader));
                    break;
                case 4:
                    reader.readMessage(message.videoMessage, () => message.videoMessage = VideoMessage.deserialize(reader));
                    break;
                case 5:
                    reader.readMessage(message.locationMessage, () => message.locationMessage = LocationMessage.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.FourRowTemplate = FourRowTemplate;
class HydratedFourRowTemplate extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [8], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.hydratedContentText = data.hydratedContentText;
            this.hydratedFooterText = data.hydratedFooterText;
            this.hydratedButtons = data.hydratedButtons;
            this.templateId = data.templateId;
            this.documentMessage = data.documentMessage;
            this.hydratedTitleText = data.hydratedTitleText;
            this.imageMessage = data.imageMessage;
            this.videoMessage = data.videoMessage;
            this.locationMessage = data.locationMessage;
        }
    }
    get hydratedContentText() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set hydratedContentText(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get hydratedFooterText() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set hydratedFooterText(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get hydratedButtons() {
        return pb_1.Message.getRepeatedWrapperField(this, HydratedTemplateButton, 8);
    }
    set hydratedButtons(value) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    get templateId() {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined);
    }
    set templateId(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get documentMessage() {
        return pb_1.Message.getWrapperField(this, DocumentMessage, 1);
    }
    set documentMessage(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get hydratedTitleText() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set hydratedTitleText(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get imageMessage() {
        return pb_1.Message.getWrapperField(this, ImageMessage, 3);
    }
    set imageMessage(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get videoMessage() {
        return pb_1.Message.getWrapperField(this, VideoMessage, 4);
    }
    set videoMessage(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get locationMessage() {
        return pb_1.Message.getWrapperField(this, LocationMessage, 5);
    }
    set locationMessage(value) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    toObject() {
        return {
            hydratedContentText: this.hydratedContentText,
            hydratedFooterText: this.hydratedFooterText,
            hydratedButtons: this.hydratedButtons.map((item) => item.toObject()),
            templateId: this.templateId,
            documentMessage: this.documentMessage && this.documentMessage.toObject(),
            hydratedTitleText: this.hydratedTitleText,
            imageMessage: this.imageMessage && this.imageMessage.toObject(),
            videoMessage: this.videoMessage && this.videoMessage.toObject(),
            locationMessage: this.locationMessage && this.locationMessage.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.hydratedContentText === "string" && this.hydratedContentText.length)
            writer.writeString(6, this.hydratedContentText);
        if (typeof this.hydratedFooterText === "string" && this.hydratedFooterText.length)
            writer.writeString(7, this.hydratedFooterText);
        if (this.hydratedButtons !== undefined)
            writer.writeRepeatedMessage(8, this.hydratedButtons, (item) => item.serialize(writer));
        if (typeof this.templateId === "string" && this.templateId.length)
            writer.writeString(9, this.templateId);
        if (this.documentMessage !== undefined)
            writer.writeMessage(1, this.documentMessage, () => this.documentMessage.serialize(writer));
        if (typeof this.hydratedTitleText === "string" && this.hydratedTitleText.length)
            writer.writeString(2, this.hydratedTitleText);
        if (this.imageMessage !== undefined)
            writer.writeMessage(3, this.imageMessage, () => this.imageMessage.serialize(writer));
        if (this.videoMessage !== undefined)
            writer.writeMessage(4, this.videoMessage, () => this.videoMessage.serialize(writer));
        if (this.locationMessage !== undefined)
            writer.writeMessage(5, this.locationMessage, () => this.locationMessage.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HydratedFourRowTemplate();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.hydratedContentText = reader.readString();
                    break;
                case 7:
                    message.hydratedFooterText = reader.readString();
                    break;
                case 8:
                    reader.readMessage(message.hydratedButtons, () => pb_1.Message.addToRepeatedWrapperField(message, 8, HydratedTemplateButton.deserialize(reader), HydratedTemplateButton));
                    break;
                case 9:
                    message.templateId = reader.readString();
                    break;
                case 1:
                    reader.readMessage(message.documentMessage, () => message.documentMessage = DocumentMessage.deserialize(reader));
                    break;
                case 2:
                    message.hydratedTitleText = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.imageMessage, () => message.imageMessage = ImageMessage.deserialize(reader));
                    break;
                case 4:
                    reader.readMessage(message.videoMessage, () => message.videoMessage = VideoMessage.deserialize(reader));
                    break;
                case 5:
                    reader.readMessage(message.locationMessage, () => message.locationMessage = LocationMessage.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.HydratedFourRowTemplate = HydratedFourRowTemplate;
class TemplateMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.contextInfo = data.contextInfo;
            this.hydratedTemplate = data.hydratedTemplate;
            this.fourRowTemplate = data.fourRowTemplate;
            this.hydratedFourRowTemplate = data.hydratedFourRowTemplate;
        }
    }
    get contextInfo() {
        return pb_1.Message.getWrapperField(this, ContextInfo, 3);
    }
    set contextInfo(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get hydratedTemplate() {
        return pb_1.Message.getWrapperField(this, HydratedFourRowTemplate, 4);
    }
    set hydratedTemplate(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get fourRowTemplate() {
        return pb_1.Message.getWrapperField(this, FourRowTemplate, 1);
    }
    set fourRowTemplate(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get hydratedFourRowTemplate() {
        return pb_1.Message.getWrapperField(this, HydratedFourRowTemplate, 2);
    }
    set hydratedFourRowTemplate(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    toObject() {
        return {
            contextInfo: this.contextInfo && this.contextInfo.toObject(),
            hydratedTemplate: this.hydratedTemplate && this.hydratedTemplate.toObject(),
            fourRowTemplate: this.fourRowTemplate && this.fourRowTemplate.toObject(),
            hydratedFourRowTemplate: this.hydratedFourRowTemplate && this.hydratedFourRowTemplate.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.contextInfo !== undefined)
            writer.writeMessage(3, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (this.hydratedTemplate !== undefined)
            writer.writeMessage(4, this.hydratedTemplate, () => this.hydratedTemplate.serialize(writer));
        if (this.fourRowTemplate !== undefined)
            writer.writeMessage(1, this.fourRowTemplate, () => this.fourRowTemplate.serialize(writer));
        if (this.hydratedFourRowTemplate !== undefined)
            writer.writeMessage(2, this.hydratedFourRowTemplate, () => this.hydratedFourRowTemplate.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TemplateMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    reader.readMessage(message.contextInfo, () => message.contextInfo = ContextInfo.deserialize(reader));
                    break;
                case 4:
                    reader.readMessage(message.hydratedTemplate, () => message.hydratedTemplate = HydratedFourRowTemplate.deserialize(reader));
                    break;
                case 1:
                    reader.readMessage(message.fourRowTemplate, () => message.fourRowTemplate = FourRowTemplate.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.hydratedFourRowTemplate, () => message.hydratedFourRowTemplate = HydratedFourRowTemplate.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.TemplateMessage = TemplateMessage;
class TemplateButtonReplyMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.selectedId = data.selectedId;
            this.selectedDisplayText = data.selectedDisplayText;
            this.contextInfo = data.contextInfo;
            this.selectedIndex = data.selectedIndex;
        }
    }
    get selectedId() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set selectedId(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get selectedDisplayText() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set selectedDisplayText(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get contextInfo() {
        return pb_1.Message.getWrapperField(this, ContextInfo, 3);
    }
    set contextInfo(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get selectedIndex() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set selectedIndex(value) {
        pb_1.Message.setField(this, 4, value);
    }
    toObject() {
        return {
            selectedId: this.selectedId,
            selectedDisplayText: this.selectedDisplayText,
            contextInfo: this.contextInfo && this.contextInfo.toObject(),
            selectedIndex: this.selectedIndex
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.selectedId === "string" && this.selectedId.length)
            writer.writeString(1, this.selectedId);
        if (typeof this.selectedDisplayText === "string" && this.selectedDisplayText.length)
            writer.writeString(2, this.selectedDisplayText);
        if (this.contextInfo !== undefined)
            writer.writeMessage(3, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (this.selectedIndex !== undefined)
            writer.writeUint32(4, this.selectedIndex);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TemplateButtonReplyMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.selectedId = reader.readString();
                    break;
                case 2:
                    message.selectedDisplayText = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.contextInfo, () => message.contextInfo = ContextInfo.deserialize(reader));
                    break;
                case 4:
                    message.selectedIndex = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.TemplateButtonReplyMessage = TemplateButtonReplyMessage;
class CatalogSnapshot extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.catalogImage = data.catalogImage;
            this.title = data.title;
            this.description = data.description;
        }
    }
    get catalogImage() {
        return pb_1.Message.getWrapperField(this, ImageMessage, 1);
    }
    set catalogImage(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get title() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set title(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get description() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set description(value) {
        pb_1.Message.setField(this, 3, value);
    }
    toObject() {
        return {
            catalogImage: this.catalogImage && this.catalogImage.toObject(),
            title: this.title,
            description: this.description
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.catalogImage !== undefined)
            writer.writeMessage(1, this.catalogImage, () => this.catalogImage.serialize(writer));
        if (typeof this.title === "string" && this.title.length)
            writer.writeString(2, this.title);
        if (typeof this.description === "string" && this.description.length)
            writer.writeString(3, this.description);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new CatalogSnapshot();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.catalogImage, () => message.catalogImage = ImageMessage.deserialize(reader));
                    break;
                case 2:
                    message.title = reader.readString();
                    break;
                case 3:
                    message.description = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.CatalogSnapshot = CatalogSnapshot;
class ProductSnapshot extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.productImage = data.productImage;
            this.productId = data.productId;
            this.title = data.title;
            this.description = data.description;
            this.currencyCode = data.currencyCode;
            this.priceAmount1000 = data.priceAmount1000;
            this.retailerId = data.retailerId;
            this.url = data.url;
            this.productImageCount = data.productImageCount;
            this.firstImageId = data.firstImageId;
        }
    }
    get productImage() {
        return pb_1.Message.getWrapperField(this, ImageMessage, 1);
    }
    set productImage(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get productId() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set productId(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get title() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set title(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get description() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set description(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get currencyCode() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set currencyCode(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get priceAmount1000() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set priceAmount1000(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get retailerId() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set retailerId(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get url() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set url(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get productImageCount() {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined);
    }
    set productImageCount(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get firstImageId() {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined);
    }
    set firstImageId(value) {
        pb_1.Message.setField(this, 11, value);
    }
    toObject() {
        return {
            productImage: this.productImage && this.productImage.toObject(),
            productId: this.productId,
            title: this.title,
            description: this.description,
            currencyCode: this.currencyCode,
            priceAmount1000: this.priceAmount1000,
            retailerId: this.retailerId,
            url: this.url,
            productImageCount: this.productImageCount,
            firstImageId: this.firstImageId
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.productImage !== undefined)
            writer.writeMessage(1, this.productImage, () => this.productImage.serialize(writer));
        if (typeof this.productId === "string" && this.productId.length)
            writer.writeString(2, this.productId);
        if (typeof this.title === "string" && this.title.length)
            writer.writeString(3, this.title);
        if (typeof this.description === "string" && this.description.length)
            writer.writeString(4, this.description);
        if (typeof this.currencyCode === "string" && this.currencyCode.length)
            writer.writeString(5, this.currencyCode);
        if (this.priceAmount1000 !== undefined)
            writer.writeInt64(6, this.priceAmount1000);
        if (typeof this.retailerId === "string" && this.retailerId.length)
            writer.writeString(7, this.retailerId);
        if (typeof this.url === "string" && this.url.length)
            writer.writeString(8, this.url);
        if (this.productImageCount !== undefined)
            writer.writeUint32(9, this.productImageCount);
        if (typeof this.firstImageId === "string" && this.firstImageId.length)
            writer.writeString(11, this.firstImageId);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ProductSnapshot();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.productImage, () => message.productImage = ImageMessage.deserialize(reader));
                    break;
                case 2:
                    message.productId = reader.readString();
                    break;
                case 3:
                    message.title = reader.readString();
                    break;
                case 4:
                    message.description = reader.readString();
                    break;
                case 5:
                    message.currencyCode = reader.readString();
                    break;
                case 6:
                    message.priceAmount1000 = reader.readInt64();
                    break;
                case 7:
                    message.retailerId = reader.readString();
                    break;
                case 8:
                    message.url = reader.readString();
                    break;
                case 9:
                    message.productImageCount = reader.readUint32();
                    break;
                case 11:
                    message.firstImageId = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.ProductSnapshot = ProductSnapshot;
class ProductMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.product = data.product;
            this.businessOwnerJid = data.businessOwnerJid;
            this.catalog = data.catalog;
            this.contextInfo = data.contextInfo;
        }
    }
    get product() {
        return pb_1.Message.getWrapperField(this, ProductSnapshot, 1);
    }
    set product(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get businessOwnerJid() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set businessOwnerJid(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get catalog() {
        return pb_1.Message.getWrapperField(this, CatalogSnapshot, 4);
    }
    set catalog(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get contextInfo() {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17);
    }
    set contextInfo(value) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    toObject() {
        return {
            product: this.product && this.product.toObject(),
            businessOwnerJid: this.businessOwnerJid,
            catalog: this.catalog && this.catalog.toObject(),
            contextInfo: this.contextInfo && this.contextInfo.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.product !== undefined)
            writer.writeMessage(1, this.product, () => this.product.serialize(writer));
        if (typeof this.businessOwnerJid === "string" && this.businessOwnerJid.length)
            writer.writeString(2, this.businessOwnerJid);
        if (this.catalog !== undefined)
            writer.writeMessage(4, this.catalog, () => this.catalog.serialize(writer));
        if (this.contextInfo !== undefined)
            writer.writeMessage(17, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ProductMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.product, () => message.product = ProductSnapshot.deserialize(reader));
                    break;
                case 2:
                    message.businessOwnerJid = reader.readString();
                    break;
                case 4:
                    reader.readMessage(message.catalog, () => message.catalog = CatalogSnapshot.deserialize(reader));
                    break;
                case 17:
                    reader.readMessage(message.contextInfo, () => message.contextInfo = ContextInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.ProductMessage = ProductMessage;
class GroupInviteMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.groupJid = data.groupJid;
            this.inviteCode = data.inviteCode;
            this.inviteExpiration = data.inviteExpiration;
            this.groupName = data.groupName;
            this.jpegThumbnail = data.jpegThumbnail;
            this.caption = data.caption;
            this.contextInfo = data.contextInfo;
        }
    }
    get groupJid() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set groupJid(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get inviteCode() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set inviteCode(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get inviteExpiration() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set inviteExpiration(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get groupName() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set groupName(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get jpegThumbnail() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set jpegThumbnail(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get caption() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set caption(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get contextInfo() {
        return pb_1.Message.getWrapperField(this, ContextInfo, 7);
    }
    set contextInfo(value) {
        pb_1.Message.setWrapperField(this, 7, value);
    }
    toObject() {
        return {
            groupJid: this.groupJid,
            inviteCode: this.inviteCode,
            inviteExpiration: this.inviteExpiration,
            groupName: this.groupName,
            jpegThumbnail: this.jpegThumbnail,
            caption: this.caption,
            contextInfo: this.contextInfo && this.contextInfo.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.groupJid === "string" && this.groupJid.length)
            writer.writeString(1, this.groupJid);
        if (typeof this.inviteCode === "string" && this.inviteCode.length)
            writer.writeString(2, this.inviteCode);
        if (this.inviteExpiration !== undefined)
            writer.writeInt64(3, this.inviteExpiration);
        if (typeof this.groupName === "string" && this.groupName.length)
            writer.writeString(4, this.groupName);
        if (this.jpegThumbnail !== undefined)
            writer.writeBytes(5, this.jpegThumbnail);
        if (typeof this.caption === "string" && this.caption.length)
            writer.writeString(6, this.caption);
        if (this.contextInfo !== undefined)
            writer.writeMessage(7, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new GroupInviteMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.groupJid = reader.readString();
                    break;
                case 2:
                    message.inviteCode = reader.readString();
                    break;
                case 3:
                    message.inviteExpiration = reader.readInt64();
                    break;
                case 4:
                    message.groupName = reader.readString();
                    break;
                case 5:
                    message.jpegThumbnail = reader.readBytes();
                    break;
                case 6:
                    message.caption = reader.readString();
                    break;
                case 7:
                    reader.readMessage(message.contextInfo, () => message.contextInfo = ContextInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.GroupInviteMessage = GroupInviteMessage;
class DeviceSentMessage extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.destinationJid = data.destinationJid;
            this.message = data.message;
            this.phash = data.phash;
        }
    }
    get destinationJid() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set destinationJid(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get message() {
        return pb_1.Message.getWrapperField(this, Message, 2);
    }
    set message(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get phash() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set phash(value) {
        pb_1.Message.setField(this, 3, value);
    }
    toObject() {
        return {
            destinationJid: this.destinationJid,
            message: this.message && this.message.toObject(),
            phash: this.phash
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.destinationJid === "string" && this.destinationJid.length)
            writer.writeString(1, this.destinationJid);
        if (this.message !== undefined)
            writer.writeMessage(2, this.message, () => this.message.serialize(writer));
        if (typeof this.phash === "string" && this.phash.length)
            writer.writeString(3, this.phash);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new DeviceSentMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.destinationJid = reader.readString();
                    break;
                case 2:
                    reader.readMessage(message.message, () => message.message = Message.deserialize(reader));
                    break;
                case 3:
                    message.phash = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.DeviceSentMessage = DeviceSentMessage;
class Message extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.conversation = data.conversation;
            this.senderKeyDistributionMessage = data.senderKeyDistributionMessage;
            this.imageMessage = data.imageMessage;
            this.contactMessage = data.contactMessage;
            this.locationMessage = data.locationMessage;
            this.extendedTextMessage = data.extendedTextMessage;
            this.documentMessage = data.documentMessage;
            this.audioMessage = data.audioMessage;
            this.videoMessage = data.videoMessage;
            this.call = data.call;
            this.chat = data.chat;
            this.protocolMessage = data.protocolMessage;
            this.contactsArrayMessage = data.contactsArrayMessage;
            this.highlyStructuredMessage = data.highlyStructuredMessage;
            this.fastRatchetKeySenderKeyDistributionMessage = data.fastRatchetKeySenderKeyDistributionMessage;
            this.sendPaymentMessage = data.sendPaymentMessage;
            this.liveLocationMessage = data.liveLocationMessage;
            this.requestPaymentMessage = data.requestPaymentMessage;
            this.declinePaymentRequestMessage = data.declinePaymentRequestMessage;
            this.cancelPaymentRequestMessage = data.cancelPaymentRequestMessage;
            this.templateMessage = data.templateMessage;
            this.stickerMessage = data.stickerMessage;
            this.groupInviteMessage = data.groupInviteMessage;
            this.templateButtonReplyMessage = data.templateButtonReplyMessage;
            this.productMessage = data.productMessage;
            this.deviceSentMessage = data.deviceSentMessage;
        }
    }
    get conversation() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set conversation(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get senderKeyDistributionMessage() {
        return pb_1.Message.getWrapperField(this, SenderKeyDistributionMessage, 2);
    }
    set senderKeyDistributionMessage(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get imageMessage() {
        return pb_1.Message.getWrapperField(this, ImageMessage, 3);
    }
    set imageMessage(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get contactMessage() {
        return pb_1.Message.getWrapperField(this, ContactMessage, 4);
    }
    set contactMessage(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get locationMessage() {
        return pb_1.Message.getWrapperField(this, LocationMessage, 5);
    }
    set locationMessage(value) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get extendedTextMessage() {
        return pb_1.Message.getWrapperField(this, ExtendedTextMessage, 6);
    }
    set extendedTextMessage(value) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get documentMessage() {
        return pb_1.Message.getWrapperField(this, DocumentMessage, 7);
    }
    set documentMessage(value) {
        pb_1.Message.setWrapperField(this, 7, value);
    }
    get audioMessage() {
        return pb_1.Message.getWrapperField(this, AudioMessage, 8);
    }
    set audioMessage(value) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get videoMessage() {
        return pb_1.Message.getWrapperField(this, VideoMessage, 9);
    }
    set videoMessage(value) {
        pb_1.Message.setWrapperField(this, 9, value);
    }
    get call() {
        return pb_1.Message.getWrapperField(this, Call, 10);
    }
    set call(value) {
        pb_1.Message.setWrapperField(this, 10, value);
    }
    get chat() {
        return pb_1.Message.getWrapperField(this, Chat, 11);
    }
    set chat(value) {
        pb_1.Message.setWrapperField(this, 11, value);
    }
    get protocolMessage() {
        return pb_1.Message.getWrapperField(this, ProtocolMessage, 12);
    }
    set protocolMessage(value) {
        pb_1.Message.setWrapperField(this, 12, value);
    }
    get contactsArrayMessage() {
        return pb_1.Message.getWrapperField(this, ContactsArrayMessage, 13);
    }
    set contactsArrayMessage(value) {
        pb_1.Message.setWrapperField(this, 13, value);
    }
    get highlyStructuredMessage() {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 14);
    }
    set highlyStructuredMessage(value) {
        pb_1.Message.setWrapperField(this, 14, value);
    }
    get fastRatchetKeySenderKeyDistributionMessage() {
        return pb_1.Message.getWrapperField(this, SenderKeyDistributionMessage, 15);
    }
    set fastRatchetKeySenderKeyDistributionMessage(value) {
        pb_1.Message.setWrapperField(this, 15, value);
    }
    get sendPaymentMessage() {
        return pb_1.Message.getWrapperField(this, SendPaymentMessage, 16);
    }
    set sendPaymentMessage(value) {
        pb_1.Message.setWrapperField(this, 16, value);
    }
    get liveLocationMessage() {
        return pb_1.Message.getWrapperField(this, LiveLocationMessage, 18);
    }
    set liveLocationMessage(value) {
        pb_1.Message.setWrapperField(this, 18, value);
    }
    get requestPaymentMessage() {
        return pb_1.Message.getWrapperField(this, RequestPaymentMessage, 22);
    }
    set requestPaymentMessage(value) {
        pb_1.Message.setWrapperField(this, 22, value);
    }
    get declinePaymentRequestMessage() {
        return pb_1.Message.getWrapperField(this, DeclinePaymentRequestMessage, 23);
    }
    set declinePaymentRequestMessage(value) {
        pb_1.Message.setWrapperField(this, 23, value);
    }
    get cancelPaymentRequestMessage() {
        return pb_1.Message.getWrapperField(this, CancelPaymentRequestMessage, 24);
    }
    set cancelPaymentRequestMessage(value) {
        pb_1.Message.setWrapperField(this, 24, value);
    }
    get templateMessage() {
        return pb_1.Message.getWrapperField(this, TemplateMessage, 25);
    }
    set templateMessage(value) {
        pb_1.Message.setWrapperField(this, 25, value);
    }
    get stickerMessage() {
        return pb_1.Message.getWrapperField(this, StickerMessage, 26);
    }
    set stickerMessage(value) {
        pb_1.Message.setWrapperField(this, 26, value);
    }
    get groupInviteMessage() {
        return pb_1.Message.getWrapperField(this, GroupInviteMessage, 28);
    }
    set groupInviteMessage(value) {
        pb_1.Message.setWrapperField(this, 28, value);
    }
    get templateButtonReplyMessage() {
        return pb_1.Message.getWrapperField(this, TemplateButtonReplyMessage, 29);
    }
    set templateButtonReplyMessage(value) {
        pb_1.Message.setWrapperField(this, 29, value);
    }
    get productMessage() {
        return pb_1.Message.getWrapperField(this, ProductMessage, 30);
    }
    set productMessage(value) {
        pb_1.Message.setWrapperField(this, 30, value);
    }
    get deviceSentMessage() {
        return pb_1.Message.getWrapperField(this, DeviceSentMessage, 31);
    }
    set deviceSentMessage(value) {
        pb_1.Message.setWrapperField(this, 31, value);
    }
    toObject() {
        return {
            conversation: this.conversation,
            senderKeyDistributionMessage: this.senderKeyDistributionMessage && this.senderKeyDistributionMessage.toObject(),
            imageMessage: this.imageMessage && this.imageMessage.toObject(),
            contactMessage: this.contactMessage && this.contactMessage.toObject(),
            locationMessage: this.locationMessage && this.locationMessage.toObject(),
            extendedTextMessage: this.extendedTextMessage && this.extendedTextMessage.toObject(),
            documentMessage: this.documentMessage && this.documentMessage.toObject(),
            audioMessage: this.audioMessage && this.audioMessage.toObject(),
            videoMessage: this.videoMessage && this.videoMessage.toObject(),
            call: this.call && this.call.toObject(),
            chat: this.chat && this.chat.toObject(),
            protocolMessage: this.protocolMessage && this.protocolMessage.toObject(),
            contactsArrayMessage: this.contactsArrayMessage && this.contactsArrayMessage.toObject(),
            highlyStructuredMessage: this.highlyStructuredMessage && this.highlyStructuredMessage.toObject(),
            fastRatchetKeySenderKeyDistributionMessage: this.fastRatchetKeySenderKeyDistributionMessage && this.fastRatchetKeySenderKeyDistributionMessage.toObject(),
            sendPaymentMessage: this.sendPaymentMessage && this.sendPaymentMessage.toObject(),
            liveLocationMessage: this.liveLocationMessage && this.liveLocationMessage.toObject(),
            requestPaymentMessage: this.requestPaymentMessage && this.requestPaymentMessage.toObject(),
            declinePaymentRequestMessage: this.declinePaymentRequestMessage && this.declinePaymentRequestMessage.toObject(),
            cancelPaymentRequestMessage: this.cancelPaymentRequestMessage && this.cancelPaymentRequestMessage.toObject(),
            templateMessage: this.templateMessage && this.templateMessage.toObject(),
            stickerMessage: this.stickerMessage && this.stickerMessage.toObject(),
            groupInviteMessage: this.groupInviteMessage && this.groupInviteMessage.toObject(),
            templateButtonReplyMessage: this.templateButtonReplyMessage && this.templateButtonReplyMessage.toObject(),
            productMessage: this.productMessage && this.productMessage.toObject(),
            deviceSentMessage: this.deviceSentMessage && this.deviceSentMessage.toObject()
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.conversation === "string" && this.conversation.length)
            writer.writeString(1, this.conversation);
        if (this.senderKeyDistributionMessage !== undefined)
            writer.writeMessage(2, this.senderKeyDistributionMessage, () => this.senderKeyDistributionMessage.serialize(writer));
        if (this.imageMessage !== undefined)
            writer.writeMessage(3, this.imageMessage, () => this.imageMessage.serialize(writer));
        if (this.contactMessage !== undefined)
            writer.writeMessage(4, this.contactMessage, () => this.contactMessage.serialize(writer));
        if (this.locationMessage !== undefined)
            writer.writeMessage(5, this.locationMessage, () => this.locationMessage.serialize(writer));
        if (this.extendedTextMessage !== undefined)
            writer.writeMessage(6, this.extendedTextMessage, () => this.extendedTextMessage.serialize(writer));
        if (this.documentMessage !== undefined)
            writer.writeMessage(7, this.documentMessage, () => this.documentMessage.serialize(writer));
        if (this.audioMessage !== undefined)
            writer.writeMessage(8, this.audioMessage, () => this.audioMessage.serialize(writer));
        if (this.videoMessage !== undefined)
            writer.writeMessage(9, this.videoMessage, () => this.videoMessage.serialize(writer));
        if (this.call !== undefined)
            writer.writeMessage(10, this.call, () => this.call.serialize(writer));
        if (this.chat !== undefined)
            writer.writeMessage(11, this.chat, () => this.chat.serialize(writer));
        if (this.protocolMessage !== undefined)
            writer.writeMessage(12, this.protocolMessage, () => this.protocolMessage.serialize(writer));
        if (this.contactsArrayMessage !== undefined)
            writer.writeMessage(13, this.contactsArrayMessage, () => this.contactsArrayMessage.serialize(writer));
        if (this.highlyStructuredMessage !== undefined)
            writer.writeMessage(14, this.highlyStructuredMessage, () => this.highlyStructuredMessage.serialize(writer));
        if (this.fastRatchetKeySenderKeyDistributionMessage !== undefined)
            writer.writeMessage(15, this.fastRatchetKeySenderKeyDistributionMessage, () => this.fastRatchetKeySenderKeyDistributionMessage.serialize(writer));
        if (this.sendPaymentMessage !== undefined)
            writer.writeMessage(16, this.sendPaymentMessage, () => this.sendPaymentMessage.serialize(writer));
        if (this.liveLocationMessage !== undefined)
            writer.writeMessage(18, this.liveLocationMessage, () => this.liveLocationMessage.serialize(writer));
        if (this.requestPaymentMessage !== undefined)
            writer.writeMessage(22, this.requestPaymentMessage, () => this.requestPaymentMessage.serialize(writer));
        if (this.declinePaymentRequestMessage !== undefined)
            writer.writeMessage(23, this.declinePaymentRequestMessage, () => this.declinePaymentRequestMessage.serialize(writer));
        if (this.cancelPaymentRequestMessage !== undefined)
            writer.writeMessage(24, this.cancelPaymentRequestMessage, () => this.cancelPaymentRequestMessage.serialize(writer));
        if (this.templateMessage !== undefined)
            writer.writeMessage(25, this.templateMessage, () => this.templateMessage.serialize(writer));
        if (this.stickerMessage !== undefined)
            writer.writeMessage(26, this.stickerMessage, () => this.stickerMessage.serialize(writer));
        if (this.groupInviteMessage !== undefined)
            writer.writeMessage(28, this.groupInviteMessage, () => this.groupInviteMessage.serialize(writer));
        if (this.templateButtonReplyMessage !== undefined)
            writer.writeMessage(29, this.templateButtonReplyMessage, () => this.templateButtonReplyMessage.serialize(writer));
        if (this.productMessage !== undefined)
            writer.writeMessage(30, this.productMessage, () => this.productMessage.serialize(writer));
        if (this.deviceSentMessage !== undefined)
            writer.writeMessage(31, this.deviceSentMessage, () => this.deviceSentMessage.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Message();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.conversation = reader.readString();
                    break;
                case 2:
                    reader.readMessage(message.senderKeyDistributionMessage, () => message.senderKeyDistributionMessage = SenderKeyDistributionMessage.deserialize(reader));
                    break;
                case 3:
                    reader.readMessage(message.imageMessage, () => message.imageMessage = ImageMessage.deserialize(reader));
                    break;
                case 4:
                    reader.readMessage(message.contactMessage, () => message.contactMessage = ContactMessage.deserialize(reader));
                    break;
                case 5:
                    reader.readMessage(message.locationMessage, () => message.locationMessage = LocationMessage.deserialize(reader));
                    break;
                case 6:
                    reader.readMessage(message.extendedTextMessage, () => message.extendedTextMessage = ExtendedTextMessage.deserialize(reader));
                    break;
                case 7:
                    reader.readMessage(message.documentMessage, () => message.documentMessage = DocumentMessage.deserialize(reader));
                    break;
                case 8:
                    reader.readMessage(message.audioMessage, () => message.audioMessage = AudioMessage.deserialize(reader));
                    break;
                case 9:
                    reader.readMessage(message.videoMessage, () => message.videoMessage = VideoMessage.deserialize(reader));
                    break;
                case 10:
                    reader.readMessage(message.call, () => message.call = Call.deserialize(reader));
                    break;
                case 11:
                    reader.readMessage(message.chat, () => message.chat = Chat.deserialize(reader));
                    break;
                case 12:
                    reader.readMessage(message.protocolMessage, () => message.protocolMessage = ProtocolMessage.deserialize(reader));
                    break;
                case 13:
                    reader.readMessage(message.contactsArrayMessage, () => message.contactsArrayMessage = ContactsArrayMessage.deserialize(reader));
                    break;
                case 14:
                    reader.readMessage(message.highlyStructuredMessage, () => message.highlyStructuredMessage = HighlyStructuredMessage.deserialize(reader));
                    break;
                case 15:
                    reader.readMessage(message.fastRatchetKeySenderKeyDistributionMessage, () => message.fastRatchetKeySenderKeyDistributionMessage = SenderKeyDistributionMessage.deserialize(reader));
                    break;
                case 16:
                    reader.readMessage(message.sendPaymentMessage, () => message.sendPaymentMessage = SendPaymentMessage.deserialize(reader));
                    break;
                case 18:
                    reader.readMessage(message.liveLocationMessage, () => message.liveLocationMessage = LiveLocationMessage.deserialize(reader));
                    break;
                case 22:
                    reader.readMessage(message.requestPaymentMessage, () => message.requestPaymentMessage = RequestPaymentMessage.deserialize(reader));
                    break;
                case 23:
                    reader.readMessage(message.declinePaymentRequestMessage, () => message.declinePaymentRequestMessage = DeclinePaymentRequestMessage.deserialize(reader));
                    break;
                case 24:
                    reader.readMessage(message.cancelPaymentRequestMessage, () => message.cancelPaymentRequestMessage = CancelPaymentRequestMessage.deserialize(reader));
                    break;
                case 25:
                    reader.readMessage(message.templateMessage, () => message.templateMessage = TemplateMessage.deserialize(reader));
                    break;
                case 26:
                    reader.readMessage(message.stickerMessage, () => message.stickerMessage = StickerMessage.deserialize(reader));
                    break;
                case 28:
                    reader.readMessage(message.groupInviteMessage, () => message.groupInviteMessage = GroupInviteMessage.deserialize(reader));
                    break;
                case 29:
                    reader.readMessage(message.templateButtonReplyMessage, () => message.templateButtonReplyMessage = TemplateButtonReplyMessage.deserialize(reader));
                    break;
                case 30:
                    reader.readMessage(message.productMessage, () => message.productMessage = ProductMessage.deserialize(reader));
                    break;
                case 31:
                    reader.readMessage(message.deviceSentMessage, () => message.deviceSentMessage = DeviceSentMessage.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.Message = Message;
class MessageKey extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.remoteJid = data.remoteJid;
            this.fromMe = data.fromMe;
            this.id = data.id;
            this.participant = data.participant;
        }
    }
    get remoteJid() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set remoteJid(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get fromMe() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set fromMe(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set id(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get participant() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set participant(value) {
        pb_1.Message.setField(this, 4, value);
    }
    toObject() {
        return {
            remoteJid: this.remoteJid,
            fromMe: this.fromMe,
            id: this.id,
            participant: this.participant
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.remoteJid === "string" && this.remoteJid.length)
            writer.writeString(1, this.remoteJid);
        if (this.fromMe !== undefined)
            writer.writeBool(2, this.fromMe);
        if (typeof this.id === "string" && this.id.length)
            writer.writeString(3, this.id);
        if (typeof this.participant === "string" && this.participant.length)
            writer.writeString(4, this.participant);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new MessageKey();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.remoteJid = reader.readString();
                    break;
                case 2:
                    message.fromMe = reader.readBool();
                    break;
                case 3:
                    message.id = reader.readString();
                    break;
                case 4:
                    message.participant = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.MessageKey = MessageKey;
class WebFeatures extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.labelsDisplay = data.labelsDisplay;
            this.voipIndividualOutgoing = data.voipIndividualOutgoing;
            this.groupsV3 = data.groupsV3;
            this.groupsV3Create = data.groupsV3Create;
            this.changeNumberV2 = data.changeNumberV2;
            this.queryStatusV3Thumbnail = data.queryStatusV3Thumbnail;
            this.liveLocations = data.liveLocations;
            this.queryVname = data.queryVname;
            this.voipIndividualIncoming = data.voipIndividualIncoming;
            this.quickRepliesQuery = data.quickRepliesQuery;
            this.payments = data.payments;
            this.stickerPackQuery = data.stickerPackQuery;
            this.liveLocationsFinal = data.liveLocationsFinal;
            this.labelsEdit = data.labelsEdit;
            this.mediaUpload = data.mediaUpload;
            this.mediaUploadRichQuickReplies = data.mediaUploadRichQuickReplies;
            this.vnameV2 = data.vnameV2;
            this.videoPlaybackUrl = data.videoPlaybackUrl;
            this.statusRanking = data.statusRanking;
            this.voipIndividualVideo = data.voipIndividualVideo;
            this.thirdPartyStickers = data.thirdPartyStickers;
            this.frequentlyForwardedSetting = data.frequentlyForwardedSetting;
            this.groupsV4JoinPermission = data.groupsV4JoinPermission;
            this.recentStickers = data.recentStickers;
            this.catalog = data.catalog;
            this.starredStickers = data.starredStickers;
            this.voipGroupCall = data.voipGroupCall;
            this.templateMessage = data.templateMessage;
            this.templateMessageInteractivity = data.templateMessageInteractivity;
            this.ephemeralMessages = data.ephemeralMessages;
            this.e2ENotificationSync = data.e2ENotificationSync;
            this.recentStickersV2 = data.recentStickersV2;
            this.syncdRelease1 = data.syncdRelease1;
        }
    }
    get labelsDisplay() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set labelsDisplay(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get voipIndividualOutgoing() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set voipIndividualOutgoing(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get groupsV3() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set groupsV3(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get groupsV3Create() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set groupsV3Create(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get changeNumberV2() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set changeNumberV2(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get queryStatusV3Thumbnail() {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined);
    }
    set queryStatusV3Thumbnail(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get liveLocations() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set liveLocations(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get queryVname() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set queryVname(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get voipIndividualIncoming() {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined);
    }
    set voipIndividualIncoming(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get quickRepliesQuery() {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined);
    }
    set quickRepliesQuery(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get payments() {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined);
    }
    set payments(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get stickerPackQuery() {
        return pb_1.Message.getFieldWithDefault(this, 12, undefined);
    }
    set stickerPackQuery(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get liveLocationsFinal() {
        return pb_1.Message.getFieldWithDefault(this, 13, undefined);
    }
    set liveLocationsFinal(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get labelsEdit() {
        return pb_1.Message.getFieldWithDefault(this, 14, undefined);
    }
    set labelsEdit(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get mediaUpload() {
        return pb_1.Message.getFieldWithDefault(this, 15, undefined);
    }
    set mediaUpload(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get mediaUploadRichQuickReplies() {
        return pb_1.Message.getFieldWithDefault(this, 18, undefined);
    }
    set mediaUploadRichQuickReplies(value) {
        pb_1.Message.setField(this, 18, value);
    }
    get vnameV2() {
        return pb_1.Message.getFieldWithDefault(this, 19, undefined);
    }
    set vnameV2(value) {
        pb_1.Message.setField(this, 19, value);
    }
    get videoPlaybackUrl() {
        return pb_1.Message.getFieldWithDefault(this, 20, undefined);
    }
    set videoPlaybackUrl(value) {
        pb_1.Message.setField(this, 20, value);
    }
    get statusRanking() {
        return pb_1.Message.getFieldWithDefault(this, 21, undefined);
    }
    set statusRanking(value) {
        pb_1.Message.setField(this, 21, value);
    }
    get voipIndividualVideo() {
        return pb_1.Message.getFieldWithDefault(this, 22, undefined);
    }
    set voipIndividualVideo(value) {
        pb_1.Message.setField(this, 22, value);
    }
    get thirdPartyStickers() {
        return pb_1.Message.getFieldWithDefault(this, 23, undefined);
    }
    set thirdPartyStickers(value) {
        pb_1.Message.setField(this, 23, value);
    }
    get frequentlyForwardedSetting() {
        return pb_1.Message.getFieldWithDefault(this, 24, undefined);
    }
    set frequentlyForwardedSetting(value) {
        pb_1.Message.setField(this, 24, value);
    }
    get groupsV4JoinPermission() {
        return pb_1.Message.getFieldWithDefault(this, 25, undefined);
    }
    set groupsV4JoinPermission(value) {
        pb_1.Message.setField(this, 25, value);
    }
    get recentStickers() {
        return pb_1.Message.getFieldWithDefault(this, 26, undefined);
    }
    set recentStickers(value) {
        pb_1.Message.setField(this, 26, value);
    }
    get catalog() {
        return pb_1.Message.getFieldWithDefault(this, 27, undefined);
    }
    set catalog(value) {
        pb_1.Message.setField(this, 27, value);
    }
    get starredStickers() {
        return pb_1.Message.getFieldWithDefault(this, 28, undefined);
    }
    set starredStickers(value) {
        pb_1.Message.setField(this, 28, value);
    }
    get voipGroupCall() {
        return pb_1.Message.getFieldWithDefault(this, 29, undefined);
    }
    set voipGroupCall(value) {
        pb_1.Message.setField(this, 29, value);
    }
    get templateMessage() {
        return pb_1.Message.getFieldWithDefault(this, 30, undefined);
    }
    set templateMessage(value) {
        pb_1.Message.setField(this, 30, value);
    }
    get templateMessageInteractivity() {
        return pb_1.Message.getFieldWithDefault(this, 31, undefined);
    }
    set templateMessageInteractivity(value) {
        pb_1.Message.setField(this, 31, value);
    }
    get ephemeralMessages() {
        return pb_1.Message.getFieldWithDefault(this, 32, undefined);
    }
    set ephemeralMessages(value) {
        pb_1.Message.setField(this, 32, value);
    }
    get e2ENotificationSync() {
        return pb_1.Message.getFieldWithDefault(this, 33, undefined);
    }
    set e2ENotificationSync(value) {
        pb_1.Message.setField(this, 33, value);
    }
    get recentStickersV2() {
        return pb_1.Message.getFieldWithDefault(this, 34, undefined);
    }
    set recentStickersV2(value) {
        pb_1.Message.setField(this, 34, value);
    }
    get syncdRelease1() {
        return pb_1.Message.getFieldWithDefault(this, 35, undefined);
    }
    set syncdRelease1(value) {
        pb_1.Message.setField(this, 35, value);
    }
    toObject() {
        return {
            labelsDisplay: this.labelsDisplay,
            voipIndividualOutgoing: this.voipIndividualOutgoing,
            groupsV3: this.groupsV3,
            groupsV3Create: this.groupsV3Create,
            changeNumberV2: this.changeNumberV2,
            queryStatusV3Thumbnail: this.queryStatusV3Thumbnail,
            liveLocations: this.liveLocations,
            queryVname: this.queryVname,
            voipIndividualIncoming: this.voipIndividualIncoming,
            quickRepliesQuery: this.quickRepliesQuery,
            payments: this.payments,
            stickerPackQuery: this.stickerPackQuery,
            liveLocationsFinal: this.liveLocationsFinal,
            labelsEdit: this.labelsEdit,
            mediaUpload: this.mediaUpload,
            mediaUploadRichQuickReplies: this.mediaUploadRichQuickReplies,
            vnameV2: this.vnameV2,
            videoPlaybackUrl: this.videoPlaybackUrl,
            statusRanking: this.statusRanking,
            voipIndividualVideo: this.voipIndividualVideo,
            thirdPartyStickers: this.thirdPartyStickers,
            frequentlyForwardedSetting: this.frequentlyForwardedSetting,
            groupsV4JoinPermission: this.groupsV4JoinPermission,
            recentStickers: this.recentStickers,
            catalog: this.catalog,
            starredStickers: this.starredStickers,
            voipGroupCall: this.voipGroupCall,
            templateMessage: this.templateMessage,
            templateMessageInteractivity: this.templateMessageInteractivity,
            ephemeralMessages: this.ephemeralMessages,
            e2ENotificationSync: this.e2ENotificationSync,
            recentStickersV2: this.recentStickersV2,
            syncdRelease1: this.syncdRelease1
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.labelsDisplay !== undefined)
            writer.writeEnum(1, this.labelsDisplay);
        if (this.voipIndividualOutgoing !== undefined)
            writer.writeEnum(2, this.voipIndividualOutgoing);
        if (this.groupsV3 !== undefined)
            writer.writeEnum(3, this.groupsV3);
        if (this.groupsV3Create !== undefined)
            writer.writeEnum(4, this.groupsV3Create);
        if (this.changeNumberV2 !== undefined)
            writer.writeEnum(5, this.changeNumberV2);
        if (this.queryStatusV3Thumbnail !== undefined)
            writer.writeEnum(6, this.queryStatusV3Thumbnail);
        if (this.liveLocations !== undefined)
            writer.writeEnum(7, this.liveLocations);
        if (this.queryVname !== undefined)
            writer.writeEnum(8, this.queryVname);
        if (this.voipIndividualIncoming !== undefined)
            writer.writeEnum(9, this.voipIndividualIncoming);
        if (this.quickRepliesQuery !== undefined)
            writer.writeEnum(10, this.quickRepliesQuery);
        if (this.payments !== undefined)
            writer.writeEnum(11, this.payments);
        if (this.stickerPackQuery !== undefined)
            writer.writeEnum(12, this.stickerPackQuery);
        if (this.liveLocationsFinal !== undefined)
            writer.writeEnum(13, this.liveLocationsFinal);
        if (this.labelsEdit !== undefined)
            writer.writeEnum(14, this.labelsEdit);
        if (this.mediaUpload !== undefined)
            writer.writeEnum(15, this.mediaUpload);
        if (this.mediaUploadRichQuickReplies !== undefined)
            writer.writeEnum(18, this.mediaUploadRichQuickReplies);
        if (this.vnameV2 !== undefined)
            writer.writeEnum(19, this.vnameV2);
        if (this.videoPlaybackUrl !== undefined)
            writer.writeEnum(20, this.videoPlaybackUrl);
        if (this.statusRanking !== undefined)
            writer.writeEnum(21, this.statusRanking);
        if (this.voipIndividualVideo !== undefined)
            writer.writeEnum(22, this.voipIndividualVideo);
        if (this.thirdPartyStickers !== undefined)
            writer.writeEnum(23, this.thirdPartyStickers);
        if (this.frequentlyForwardedSetting !== undefined)
            writer.writeEnum(24, this.frequentlyForwardedSetting);
        if (this.groupsV4JoinPermission !== undefined)
            writer.writeEnum(25, this.groupsV4JoinPermission);
        if (this.recentStickers !== undefined)
            writer.writeEnum(26, this.recentStickers);
        if (this.catalog !== undefined)
            writer.writeEnum(27, this.catalog);
        if (this.starredStickers !== undefined)
            writer.writeEnum(28, this.starredStickers);
        if (this.voipGroupCall !== undefined)
            writer.writeEnum(29, this.voipGroupCall);
        if (this.templateMessage !== undefined)
            writer.writeEnum(30, this.templateMessage);
        if (this.templateMessageInteractivity !== undefined)
            writer.writeEnum(31, this.templateMessageInteractivity);
        if (this.ephemeralMessages !== undefined)
            writer.writeEnum(32, this.ephemeralMessages);
        if (this.e2ENotificationSync !== undefined)
            writer.writeEnum(33, this.e2ENotificationSync);
        if (this.recentStickersV2 !== undefined)
            writer.writeEnum(34, this.recentStickersV2);
        if (this.syncdRelease1 !== undefined)
            writer.writeEnum(35, this.syncdRelease1);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new WebFeatures();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.labelsDisplay = reader.readEnum();
                    break;
                case 2:
                    message.voipIndividualOutgoing = reader.readEnum();
                    break;
                case 3:
                    message.groupsV3 = reader.readEnum();
                    break;
                case 4:
                    message.groupsV3Create = reader.readEnum();
                    break;
                case 5:
                    message.changeNumberV2 = reader.readEnum();
                    break;
                case 6:
                    message.queryStatusV3Thumbnail = reader.readEnum();
                    break;
                case 7:
                    message.liveLocations = reader.readEnum();
                    break;
                case 8:
                    message.queryVname = reader.readEnum();
                    break;
                case 9:
                    message.voipIndividualIncoming = reader.readEnum();
                    break;
                case 10:
                    message.quickRepliesQuery = reader.readEnum();
                    break;
                case 11:
                    message.payments = reader.readEnum();
                    break;
                case 12:
                    message.stickerPackQuery = reader.readEnum();
                    break;
                case 13:
                    message.liveLocationsFinal = reader.readEnum();
                    break;
                case 14:
                    message.labelsEdit = reader.readEnum();
                    break;
                case 15:
                    message.mediaUpload = reader.readEnum();
                    break;
                case 18:
                    message.mediaUploadRichQuickReplies = reader.readEnum();
                    break;
                case 19:
                    message.vnameV2 = reader.readEnum();
                    break;
                case 20:
                    message.videoPlaybackUrl = reader.readEnum();
                    break;
                case 21:
                    message.statusRanking = reader.readEnum();
                    break;
                case 22:
                    message.voipIndividualVideo = reader.readEnum();
                    break;
                case 23:
                    message.thirdPartyStickers = reader.readEnum();
                    break;
                case 24:
                    message.frequentlyForwardedSetting = reader.readEnum();
                    break;
                case 25:
                    message.groupsV4JoinPermission = reader.readEnum();
                    break;
                case 26:
                    message.recentStickers = reader.readEnum();
                    break;
                case 27:
                    message.catalog = reader.readEnum();
                    break;
                case 28:
                    message.starredStickers = reader.readEnum();
                    break;
                case 29:
                    message.voipGroupCall = reader.readEnum();
                    break;
                case 30:
                    message.templateMessage = reader.readEnum();
                    break;
                case 31:
                    message.templateMessageInteractivity = reader.readEnum();
                    break;
                case 32:
                    message.ephemeralMessages = reader.readEnum();
                    break;
                case 33:
                    message.e2ENotificationSync = reader.readEnum();
                    break;
                case 34:
                    message.recentStickersV2 = reader.readEnum();
                    break;
                case 35:
                    message.syncdRelease1 = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.WebFeatures = WebFeatures;
(function (WebFeatures) {
    let WEB_FEATURES_FLAG;
    (function (WEB_FEATURES_FLAG) {
        WEB_FEATURES_FLAG[WEB_FEATURES_FLAG["NOT_STARTED"] = 0] = "NOT_STARTED";
        WEB_FEATURES_FLAG[WEB_FEATURES_FLAG["FORCE_UPGRADE"] = 1] = "FORCE_UPGRADE";
        WEB_FEATURES_FLAG[WEB_FEATURES_FLAG["DEVELOPMENT"] = 2] = "DEVELOPMENT";
        WEB_FEATURES_FLAG[WEB_FEATURES_FLAG["PRODUCTION"] = 3] = "PRODUCTION";
    })(WEB_FEATURES_FLAG = WebFeatures.WEB_FEATURES_FLAG || (WebFeatures.WEB_FEATURES_FLAG = {}));
})(WebFeatures = exports.WebFeatures || (exports.WebFeatures = {}));
class TabletNotificationsInfo extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [5], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.timestamp = data.timestamp;
            this.unreadChats = data.unreadChats;
            this.notifyMessageCount = data.notifyMessageCount;
            this.notifyMessage = data.notifyMessage;
        }
    }
    get timestamp() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set timestamp(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get unreadChats() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set unreadChats(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get notifyMessageCount() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set notifyMessageCount(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get notifyMessage() {
        return pb_1.Message.getRepeatedWrapperField(this, NotificationMessageInfo, 5);
    }
    set notifyMessage(value) {
        pb_1.Message.setRepeatedWrapperField(this, 5, value);
    }
    toObject() {
        return {
            timestamp: this.timestamp,
            unreadChats: this.unreadChats,
            notifyMessageCount: this.notifyMessageCount,
            notifyMessage: this.notifyMessage.map((item) => item.toObject())
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.timestamp !== undefined)
            writer.writeUint64(2, this.timestamp);
        if (this.unreadChats !== undefined)
            writer.writeUint32(3, this.unreadChats);
        if (this.notifyMessageCount !== undefined)
            writer.writeUint32(4, this.notifyMessageCount);
        if (this.notifyMessage !== undefined)
            writer.writeRepeatedMessage(5, this.notifyMessage, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TabletNotificationsInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.timestamp = reader.readUint64();
                    break;
                case 3:
                    message.unreadChats = reader.readUint32();
                    break;
                case 4:
                    message.notifyMessageCount = reader.readUint32();
                    break;
                case 5:
                    reader.readMessage(message.notifyMessage, () => pb_1.Message.addToRepeatedWrapperField(message, 5, NotificationMessageInfo.deserialize(reader), NotificationMessageInfo));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.TabletNotificationsInfo = TabletNotificationsInfo;
class NotificationMessageInfo extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.key = data.key;
            this.message = data.message;
            this.messageTimestamp = data.messageTimestamp;
            this.participant = data.participant;
        }
    }
    get key() {
        return pb_1.Message.getWrapperField(this, MessageKey, 1);
    }
    set key(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get message() {
        return pb_1.Message.getWrapperField(this, Message, 2);
    }
    set message(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get messageTimestamp() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set messageTimestamp(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get participant() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set participant(value) {
        pb_1.Message.setField(this, 4, value);
    }
    toObject() {
        return {
            key: this.key && this.key.toObject(),
            message: this.message && this.message.toObject(),
            messageTimestamp: this.messageTimestamp,
            participant: this.participant
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.key !== undefined)
            writer.writeMessage(1, this.key, () => this.key.serialize(writer));
        if (this.message !== undefined)
            writer.writeMessage(2, this.message, () => this.message.serialize(writer));
        if (this.messageTimestamp !== undefined)
            writer.writeUint64(3, this.messageTimestamp);
        if (typeof this.participant === "string" && this.participant.length)
            writer.writeString(4, this.participant);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new NotificationMessageInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.key, () => message.key = MessageKey.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.message, () => message.message = Message.deserialize(reader));
                    break;
                case 3:
                    message.messageTimestamp = reader.readUint64();
                    break;
                case 4:
                    message.participant = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.NotificationMessageInfo = NotificationMessageInfo;
class WebNotificationsInfo extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [5], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.timestamp = data.timestamp;
            this.unreadChats = data.unreadChats;
            this.notifyMessageCount = data.notifyMessageCount;
            this.notifyMessages = data.notifyMessages;
        }
    }
    get timestamp() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set timestamp(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get unreadChats() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set unreadChats(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get notifyMessageCount() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set notifyMessageCount(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get notifyMessages() {
        return pb_1.Message.getRepeatedWrapperField(this, WebMessageInfo, 5);
    }
    set notifyMessages(value) {
        pb_1.Message.setRepeatedWrapperField(this, 5, value);
    }
    toObject() {
        return {
            timestamp: this.timestamp,
            unreadChats: this.unreadChats,
            notifyMessageCount: this.notifyMessageCount,
            notifyMessages: this.notifyMessages.map((item) => item.toObject())
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.timestamp !== undefined)
            writer.writeUint64(2, this.timestamp);
        if (this.unreadChats !== undefined)
            writer.writeUint32(3, this.unreadChats);
        if (this.notifyMessageCount !== undefined)
            writer.writeUint32(4, this.notifyMessageCount);
        if (this.notifyMessages !== undefined)
            writer.writeRepeatedMessage(5, this.notifyMessages, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new WebNotificationsInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.timestamp = reader.readUint64();
                    break;
                case 3:
                    message.unreadChats = reader.readUint32();
                    break;
                case 4:
                    message.notifyMessageCount = reader.readUint32();
                    break;
                case 5:
                    reader.readMessage(message.notifyMessages, () => pb_1.Message.addToRepeatedWrapperField(message, 5, WebMessageInfo.deserialize(reader), WebMessageInfo));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.WebNotificationsInfo = WebNotificationsInfo;
class PaymentInfo extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.currencyDeprecated = data.currencyDeprecated;
            this.amount1000 = data.amount1000;
            this.receiverJid = data.receiverJid;
            this.status = data.status;
            this.transactionTimestamp = data.transactionTimestamp;
            this.requestMessageKey = data.requestMessageKey;
            this.expiryTimestamp = data.expiryTimestamp;
            this.futureproofed = data.futureproofed;
            this.currency = data.currency;
            this.txnStatus = data.txnStatus;
        }
    }
    get currencyDeprecated() {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined);
    }
    set currencyDeprecated(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get amount1000() {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined);
    }
    set amount1000(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get receiverJid() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set receiverJid(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get status() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set status(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get transactionTimestamp() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set transactionTimestamp(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get requestMessageKey() {
        return pb_1.Message.getWrapperField(this, MessageKey, 6);
    }
    set requestMessageKey(value) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get expiryTimestamp() {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined);
    }
    set expiryTimestamp(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get futureproofed() {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined);
    }
    set futureproofed(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get currency() {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined);
    }
    set currency(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get txnStatus() {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined);
    }
    set txnStatus(value) {
        pb_1.Message.setField(this, 10, value);
    }
    toObject() {
        return {
            currencyDeprecated: this.currencyDeprecated,
            amount1000: this.amount1000,
            receiverJid: this.receiverJid,
            status: this.status,
            transactionTimestamp: this.transactionTimestamp,
            requestMessageKey: this.requestMessageKey && this.requestMessageKey.toObject(),
            expiryTimestamp: this.expiryTimestamp,
            futureproofed: this.futureproofed,
            currency: this.currency,
            txnStatus: this.txnStatus
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.currencyDeprecated !== undefined)
            writer.writeEnum(1, this.currencyDeprecated);
        if (this.amount1000 !== undefined)
            writer.writeUint64(2, this.amount1000);
        if (typeof this.receiverJid === "string" && this.receiverJid.length)
            writer.writeString(3, this.receiverJid);
        if (this.status !== undefined)
            writer.writeEnum(4, this.status);
        if (this.transactionTimestamp !== undefined)
            writer.writeUint64(5, this.transactionTimestamp);
        if (this.requestMessageKey !== undefined)
            writer.writeMessage(6, this.requestMessageKey, () => this.requestMessageKey.serialize(writer));
        if (this.expiryTimestamp !== undefined)
            writer.writeUint64(7, this.expiryTimestamp);
        if (this.futureproofed !== undefined)
            writer.writeBool(8, this.futureproofed);
        if (typeof this.currency === "string" && this.currency.length)
            writer.writeString(9, this.currency);
        if (this.txnStatus !== undefined)
            writer.writeEnum(10, this.txnStatus);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new PaymentInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.currencyDeprecated = reader.readEnum();
                    break;
                case 2:
                    message.amount1000 = reader.readUint64();
                    break;
                case 3:
                    message.receiverJid = reader.readString();
                    break;
                case 4:
                    message.status = reader.readEnum();
                    break;
                case 5:
                    message.transactionTimestamp = reader.readUint64();
                    break;
                case 6:
                    reader.readMessage(message.requestMessageKey, () => message.requestMessageKey = MessageKey.deserialize(reader));
                    break;
                case 7:
                    message.expiryTimestamp = reader.readUint64();
                    break;
                case 8:
                    message.futureproofed = reader.readBool();
                    break;
                case 9:
                    message.currency = reader.readString();
                    break;
                case 10:
                    message.txnStatus = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.PaymentInfo = PaymentInfo;
(function (PaymentInfo) {
    let PAYMENT_INFO_CURRENCY;
    (function (PAYMENT_INFO_CURRENCY) {
        PAYMENT_INFO_CURRENCY[PAYMENT_INFO_CURRENCY["UNKNOWN_CURRENCY"] = 0] = "UNKNOWN_CURRENCY";
        PAYMENT_INFO_CURRENCY[PAYMENT_INFO_CURRENCY["INR"] = 1] = "INR";
    })(PAYMENT_INFO_CURRENCY = PaymentInfo.PAYMENT_INFO_CURRENCY || (PaymentInfo.PAYMENT_INFO_CURRENCY = {}));
    let PAYMENT_INFO_STATUS;
    (function (PAYMENT_INFO_STATUS) {
        PAYMENT_INFO_STATUS[PAYMENT_INFO_STATUS["UNKNOWN_STATUS"] = 0] = "UNKNOWN_STATUS";
        PAYMENT_INFO_STATUS[PAYMENT_INFO_STATUS["PROCESSING"] = 1] = "PROCESSING";
        PAYMENT_INFO_STATUS[PAYMENT_INFO_STATUS["SENT"] = 2] = "SENT";
        PAYMENT_INFO_STATUS[PAYMENT_INFO_STATUS["NEED_TO_ACCEPT"] = 3] = "NEED_TO_ACCEPT";
        PAYMENT_INFO_STATUS[PAYMENT_INFO_STATUS["COMPLETE"] = 4] = "COMPLETE";
        PAYMENT_INFO_STATUS[PAYMENT_INFO_STATUS["COULD_NOT_COMPLETE"] = 5] = "COULD_NOT_COMPLETE";
        PAYMENT_INFO_STATUS[PAYMENT_INFO_STATUS["REFUNDED"] = 6] = "REFUNDED";
        PAYMENT_INFO_STATUS[PAYMENT_INFO_STATUS["EXPIRED"] = 7] = "EXPIRED";
        PAYMENT_INFO_STATUS[PAYMENT_INFO_STATUS["REJECTED"] = 8] = "REJECTED";
        PAYMENT_INFO_STATUS[PAYMENT_INFO_STATUS["CANCELLED"] = 9] = "CANCELLED";
        PAYMENT_INFO_STATUS[PAYMENT_INFO_STATUS["WAITING_FOR_PAYER"] = 10] = "WAITING_FOR_PAYER";
        PAYMENT_INFO_STATUS[PAYMENT_INFO_STATUS["WAITING"] = 11] = "WAITING";
    })(PAYMENT_INFO_STATUS = PaymentInfo.PAYMENT_INFO_STATUS || (PaymentInfo.PAYMENT_INFO_STATUS = {}));
    let PAYMENT_INFO_TXNSTATUS;
    (function (PAYMENT_INFO_TXNSTATUS) {
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["UNKNOWN"] = 0] = "UNKNOWN";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["PENDING_SETUP"] = 1] = "PENDING_SETUP";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["PENDING_RECEIVER_SETUP"] = 2] = "PENDING_RECEIVER_SETUP";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["INIT"] = 3] = "INIT";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["SUCCESS"] = 4] = "SUCCESS";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["COMPLETED"] = 5] = "COMPLETED";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["FAILED"] = 6] = "FAILED";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["FAILED_RISK"] = 7] = "FAILED_RISK";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["FAILED_PROCESSING"] = 8] = "FAILED_PROCESSING";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["FAILED_RECEIVER_PROCESSING"] = 9] = "FAILED_RECEIVER_PROCESSING";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["FAILED_DA"] = 10] = "FAILED_DA";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["FAILED_DA_FINAL"] = 11] = "FAILED_DA_FINAL";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["REFUNDED_TXN"] = 12] = "REFUNDED_TXN";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["REFUND_FAILED"] = 13] = "REFUND_FAILED";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["REFUND_FAILED_PROCESSING"] = 14] = "REFUND_FAILED_PROCESSING";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["REFUND_FAILED_DA"] = 15] = "REFUND_FAILED_DA";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["EXPIRED_TXN"] = 16] = "EXPIRED_TXN";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["AUTH_CANCELED"] = 17] = "AUTH_CANCELED";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["AUTH_CANCEL_FAILED_PROCESSING"] = 18] = "AUTH_CANCEL_FAILED_PROCESSING";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["AUTH_CANCEL_FAILED"] = 19] = "AUTH_CANCEL_FAILED";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["COLLECT_INIT"] = 20] = "COLLECT_INIT";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["COLLECT_SUCCESS"] = 21] = "COLLECT_SUCCESS";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["COLLECT_FAILED"] = 22] = "COLLECT_FAILED";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["COLLECT_FAILED_RISK"] = 23] = "COLLECT_FAILED_RISK";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["COLLECT_REJECTED"] = 24] = "COLLECT_REJECTED";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["COLLECT_EXPIRED"] = 25] = "COLLECT_EXPIRED";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["COLLECT_CANCELED"] = 26] = "COLLECT_CANCELED";
        PAYMENT_INFO_TXNSTATUS[PAYMENT_INFO_TXNSTATUS["COLLECT_CANCELLING"] = 27] = "COLLECT_CANCELLING";
    })(PAYMENT_INFO_TXNSTATUS = PaymentInfo.PAYMENT_INFO_TXNSTATUS || (PaymentInfo.PAYMENT_INFO_TXNSTATUS = {}));
})(PaymentInfo = exports.PaymentInfo || (exports.PaymentInfo = {}));
class WebMessageInfo extends pb_1.Message {
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [26, 28], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.key = data.key;
            this.message = data.message;
            this.messageTimestamp = data.messageTimestamp;
            this.status = data.status;
            this.participant = data.participant;
            this.ignore = data.ignore;
            this.starred = data.starred;
            this.broadcast = data.broadcast;
            this.pushName = data.pushName;
            this.mediaCiphertextSha256 = data.mediaCiphertextSha256;
            this.multicast = data.multicast;
            this.urlText = data.urlText;
            this.urlNumber = data.urlNumber;
            this.messageStubType = data.messageStubType;
            this.clearMedia = data.clearMedia;
            this.messageStubParameters = data.messageStubParameters;
            this.duration = data.duration;
            this.labels = data.labels;
            this.paymentInfo = data.paymentInfo;
            this.finalLiveLocation = data.finalLiveLocation;
            this.quotedPaymentInfo = data.quotedPaymentInfo;
            this.ephemeralStartTimestamp = data.ephemeralStartTimestamp;
            this.ephemeralDuration = data.ephemeralDuration;
            this.ephemeralOffToOn = data.ephemeralOffToOn;
        }
    }
    get key() {
        return pb_1.Message.getWrapperField(this, MessageKey, 1);
    }
    set key(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get message() {
        return pb_1.Message.getWrapperField(this, Message, 2);
    }
    set message(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get messageTimestamp() {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined);
    }
    set messageTimestamp(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get status() {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined);
    }
    set status(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get participant() {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined);
    }
    set participant(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get ignore() {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined);
    }
    set ignore(value) {
        pb_1.Message.setField(this, 16, value);
    }
    get starred() {
        return pb_1.Message.getFieldWithDefault(this, 17, undefined);
    }
    set starred(value) {
        pb_1.Message.setField(this, 17, value);
    }
    get broadcast() {
        return pb_1.Message.getFieldWithDefault(this, 18, undefined);
    }
    set broadcast(value) {
        pb_1.Message.setField(this, 18, value);
    }
    get pushName() {
        return pb_1.Message.getFieldWithDefault(this, 19, undefined);
    }
    set pushName(value) {
        pb_1.Message.setField(this, 19, value);
    }
    get mediaCiphertextSha256() {
        return pb_1.Message.getFieldWithDefault(this, 20, undefined);
    }
    set mediaCiphertextSha256(value) {
        pb_1.Message.setField(this, 20, value);
    }
    get multicast() {
        return pb_1.Message.getFieldWithDefault(this, 21, undefined);
    }
    set multicast(value) {
        pb_1.Message.setField(this, 21, value);
    }
    get urlText() {
        return pb_1.Message.getFieldWithDefault(this, 22, undefined);
    }
    set urlText(value) {
        pb_1.Message.setField(this, 22, value);
    }
    get urlNumber() {
        return pb_1.Message.getFieldWithDefault(this, 23, undefined);
    }
    set urlNumber(value) {
        pb_1.Message.setField(this, 23, value);
    }
    get messageStubType() {
        return pb_1.Message.getFieldWithDefault(this, 24, undefined);
    }
    set messageStubType(value) {
        pb_1.Message.setField(this, 24, value);
    }
    get clearMedia() {
        return pb_1.Message.getFieldWithDefault(this, 25, undefined);
    }
    set clearMedia(value) {
        pb_1.Message.setField(this, 25, value);
    }
    get messageStubParameters() {
        return pb_1.Message.getField(this, 26);
    }
    set messageStubParameters(value) {
        pb_1.Message.setField(this, 26, value);
    }
    get duration() {
        return pb_1.Message.getFieldWithDefault(this, 27, undefined);
    }
    set duration(value) {
        pb_1.Message.setField(this, 27, value);
    }
    get labels() {
        return pb_1.Message.getField(this, 28);
    }
    set labels(value) {
        pb_1.Message.setField(this, 28, value);
    }
    get paymentInfo() {
        return pb_1.Message.getWrapperField(this, PaymentInfo, 29);
    }
    set paymentInfo(value) {
        pb_1.Message.setWrapperField(this, 29, value);
    }
    get finalLiveLocation() {
        return pb_1.Message.getWrapperField(this, LiveLocationMessage, 30);
    }
    set finalLiveLocation(value) {
        pb_1.Message.setWrapperField(this, 30, value);
    }
    get quotedPaymentInfo() {
        return pb_1.Message.getWrapperField(this, PaymentInfo, 31);
    }
    set quotedPaymentInfo(value) {
        pb_1.Message.setWrapperField(this, 31, value);
    }
    get ephemeralStartTimestamp() {
        return pb_1.Message.getFieldWithDefault(this, 32, undefined);
    }
    set ephemeralStartTimestamp(value) {
        pb_1.Message.setField(this, 32, value);
    }
    get ephemeralDuration() {
        return pb_1.Message.getFieldWithDefault(this, 33, undefined);
    }
    set ephemeralDuration(value) {
        pb_1.Message.setField(this, 33, value);
    }
    get ephemeralOffToOn() {
        return pb_1.Message.getFieldWithDefault(this, 34, undefined);
    }
    set ephemeralOffToOn(value) {
        pb_1.Message.setField(this, 34, value);
    }
    toObject() {
        return {
            key: this.key && this.key.toObject(),
            message: this.message && this.message.toObject(),
            messageTimestamp: this.messageTimestamp,
            status: this.status,
            participant: this.participant,
            ignore: this.ignore,
            starred: this.starred,
            broadcast: this.broadcast,
            pushName: this.pushName,
            mediaCiphertextSha256: this.mediaCiphertextSha256,
            multicast: this.multicast,
            urlText: this.urlText,
            urlNumber: this.urlNumber,
            messageStubType: this.messageStubType,
            clearMedia: this.clearMedia,
            messageStubParameters: this.messageStubParameters,
            duration: this.duration,
            labels: this.labels,
            paymentInfo: this.paymentInfo && this.paymentInfo.toObject(),
            finalLiveLocation: this.finalLiveLocation && this.finalLiveLocation.toObject(),
            quotedPaymentInfo: this.quotedPaymentInfo && this.quotedPaymentInfo.toObject(),
            ephemeralStartTimestamp: this.ephemeralStartTimestamp,
            ephemeralDuration: this.ephemeralDuration,
            ephemeralOffToOn: this.ephemeralOffToOn
        };
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.key !== undefined)
            writer.writeMessage(1, this.key, () => this.key.serialize(writer));
        if (this.message !== undefined)
            writer.writeMessage(2, this.message, () => this.message.serialize(writer));
        if (this.messageTimestamp !== undefined)
            writer.writeUint64(3, this.messageTimestamp);
        if (this.status !== undefined)
            writer.writeEnum(4, this.status);
        if (typeof this.participant === "string" && this.participant.length)
            writer.writeString(5, this.participant);
        if (this.ignore !== undefined)
            writer.writeBool(16, this.ignore);
        if (this.starred !== undefined)
            writer.writeBool(17, this.starred);
        if (this.broadcast !== undefined)
            writer.writeBool(18, this.broadcast);
        if (typeof this.pushName === "string" && this.pushName.length)
            writer.writeString(19, this.pushName);
        if (this.mediaCiphertextSha256 !== undefined)
            writer.writeBytes(20, this.mediaCiphertextSha256);
        if (this.multicast !== undefined)
            writer.writeBool(21, this.multicast);
        if (this.urlText !== undefined)
            writer.writeBool(22, this.urlText);
        if (this.urlNumber !== undefined)
            writer.writeBool(23, this.urlNumber);
        if (this.messageStubType !== undefined)
            writer.writeEnum(24, this.messageStubType);
        if (this.clearMedia !== undefined)
            writer.writeBool(25, this.clearMedia);
        if (this.messageStubParameters !== undefined)
            writer.writeRepeatedString(26, this.messageStubParameters);
        if (this.duration !== undefined)
            writer.writeUint32(27, this.duration);
        if (this.labels !== undefined)
            writer.writeRepeatedString(28, this.labels);
        if (this.paymentInfo !== undefined)
            writer.writeMessage(29, this.paymentInfo, () => this.paymentInfo.serialize(writer));
        if (this.finalLiveLocation !== undefined)
            writer.writeMessage(30, this.finalLiveLocation, () => this.finalLiveLocation.serialize(writer));
        if (this.quotedPaymentInfo !== undefined)
            writer.writeMessage(31, this.quotedPaymentInfo, () => this.quotedPaymentInfo.serialize(writer));
        if (this.ephemeralStartTimestamp !== undefined)
            writer.writeUint64(32, this.ephemeralStartTimestamp);
        if (this.ephemeralDuration !== undefined)
            writer.writeUint32(33, this.ephemeralDuration);
        if (this.ephemeralOffToOn !== undefined)
            writer.writeBool(34, this.ephemeralOffToOn);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary() { throw new Error("Method not implemented."); }
    static deserialize(bytes) {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new WebMessageInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.key, () => message.key = MessageKey.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.message, () => message.message = Message.deserialize(reader));
                    break;
                case 3:
                    message.messageTimestamp = reader.readUint64();
                    break;
                case 4:
                    message.status = reader.readEnum();
                    break;
                case 5:
                    message.participant = reader.readString();
                    break;
                case 16:
                    message.ignore = reader.readBool();
                    break;
                case 17:
                    message.starred = reader.readBool();
                    break;
                case 18:
                    message.broadcast = reader.readBool();
                    break;
                case 19:
                    message.pushName = reader.readString();
                    break;
                case 20:
                    message.mediaCiphertextSha256 = reader.readBytes();
                    break;
                case 21:
                    message.multicast = reader.readBool();
                    break;
                case 22:
                    message.urlText = reader.readBool();
                    break;
                case 23:
                    message.urlNumber = reader.readBool();
                    break;
                case 24:
                    message.messageStubType = reader.readEnum();
                    break;
                case 25:
                    message.clearMedia = reader.readBool();
                    break;
                case 26:
                    pb_1.Message.addToRepeatedField(message, 26, reader.readString());
                    break;
                case 27:
                    message.duration = reader.readUint32();
                    break;
                case 28:
                    pb_1.Message.addToRepeatedField(message, 28, reader.readString());
                    break;
                case 29:
                    reader.readMessage(message.paymentInfo, () => message.paymentInfo = PaymentInfo.deserialize(reader));
                    break;
                case 30:
                    reader.readMessage(message.finalLiveLocation, () => message.finalLiveLocation = LiveLocationMessage.deserialize(reader));
                    break;
                case 31:
                    reader.readMessage(message.quotedPaymentInfo, () => message.quotedPaymentInfo = PaymentInfo.deserialize(reader));
                    break;
                case 32:
                    message.ephemeralStartTimestamp = reader.readUint64();
                    break;
                case 33:
                    message.ephemeralDuration = reader.readUint32();
                    break;
                case 34:
                    message.ephemeralOffToOn = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
exports.WebMessageInfo = WebMessageInfo;
(function (WebMessageInfo) {
    let WEB_MESSAGE_INFO_STATUS;
    (function (WEB_MESSAGE_INFO_STATUS) {
        WEB_MESSAGE_INFO_STATUS[WEB_MESSAGE_INFO_STATUS["ERROR"] = 0] = "ERROR";
        WEB_MESSAGE_INFO_STATUS[WEB_MESSAGE_INFO_STATUS["PENDING"] = 1] = "PENDING";
        WEB_MESSAGE_INFO_STATUS[WEB_MESSAGE_INFO_STATUS["SERVER_ACK"] = 2] = "SERVER_ACK";
        WEB_MESSAGE_INFO_STATUS[WEB_MESSAGE_INFO_STATUS["DELIVERY_ACK"] = 3] = "DELIVERY_ACK";
        WEB_MESSAGE_INFO_STATUS[WEB_MESSAGE_INFO_STATUS["READ"] = 4] = "READ";
        WEB_MESSAGE_INFO_STATUS[WEB_MESSAGE_INFO_STATUS["PLAYED"] = 5] = "PLAYED";
    })(WEB_MESSAGE_INFO_STATUS = WebMessageInfo.WEB_MESSAGE_INFO_STATUS || (WebMessageInfo.WEB_MESSAGE_INFO_STATUS = {}));
    let WEB_MESSAGE_INFO_STUBTYPE;
    (function (WEB_MESSAGE_INFO_STUBTYPE) {
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["UNKNOWN"] = 0] = "UNKNOWN";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["REVOKE"] = 1] = "REVOKE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["CIPHERTEXT"] = 2] = "CIPHERTEXT";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["FUTUREPROOF"] = 3] = "FUTUREPROOF";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["NON_VERIFIED_TRANSITION"] = 4] = "NON_VERIFIED_TRANSITION";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["UNVERIFIED_TRANSITION"] = 5] = "UNVERIFIED_TRANSITION";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["VERIFIED_TRANSITION"] = 6] = "VERIFIED_TRANSITION";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["VERIFIED_LOW_UNKNOWN"] = 7] = "VERIFIED_LOW_UNKNOWN";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["VERIFIED_HIGH"] = 8] = "VERIFIED_HIGH";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["VERIFIED_INITIAL_UNKNOWN"] = 9] = "VERIFIED_INITIAL_UNKNOWN";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["VERIFIED_INITIAL_LOW"] = 10] = "VERIFIED_INITIAL_LOW";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["VERIFIED_INITIAL_HIGH"] = 11] = "VERIFIED_INITIAL_HIGH";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["VERIFIED_TRANSITION_ANY_TO_NONE"] = 12] = "VERIFIED_TRANSITION_ANY_TO_NONE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["VERIFIED_TRANSITION_ANY_TO_HIGH"] = 13] = "VERIFIED_TRANSITION_ANY_TO_HIGH";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["VERIFIED_TRANSITION_HIGH_TO_LOW"] = 14] = "VERIFIED_TRANSITION_HIGH_TO_LOW";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["VERIFIED_TRANSITION_HIGH_TO_UNKNOWN"] = 15] = "VERIFIED_TRANSITION_HIGH_TO_UNKNOWN";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["VERIFIED_TRANSITION_UNKNOWN_TO_LOW"] = 16] = "VERIFIED_TRANSITION_UNKNOWN_TO_LOW";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["VERIFIED_TRANSITION_LOW_TO_UNKNOWN"] = 17] = "VERIFIED_TRANSITION_LOW_TO_UNKNOWN";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["VERIFIED_TRANSITION_NONE_TO_LOW"] = 18] = "VERIFIED_TRANSITION_NONE_TO_LOW";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["VERIFIED_TRANSITION_NONE_TO_UNKNOWN"] = 19] = "VERIFIED_TRANSITION_NONE_TO_UNKNOWN";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_CREATE"] = 20] = "GROUP_CREATE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_CHANGE_SUBJECT"] = 21] = "GROUP_CHANGE_SUBJECT";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_CHANGE_ICON"] = 22] = "GROUP_CHANGE_ICON";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_CHANGE_INVITE_LINK"] = 23] = "GROUP_CHANGE_INVITE_LINK";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_CHANGE_DESCRIPTION"] = 24] = "GROUP_CHANGE_DESCRIPTION";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_CHANGE_RESTRICT"] = 25] = "GROUP_CHANGE_RESTRICT";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_CHANGE_ANNOUNCE"] = 26] = "GROUP_CHANGE_ANNOUNCE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_PARTICIPANT_ADD"] = 27] = "GROUP_PARTICIPANT_ADD";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_PARTICIPANT_REMOVE"] = 28] = "GROUP_PARTICIPANT_REMOVE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_PARTICIPANT_PROMOTE"] = 29] = "GROUP_PARTICIPANT_PROMOTE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_PARTICIPANT_DEMOTE"] = 30] = "GROUP_PARTICIPANT_DEMOTE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_PARTICIPANT_INVITE"] = 31] = "GROUP_PARTICIPANT_INVITE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_PARTICIPANT_LEAVE"] = 32] = "GROUP_PARTICIPANT_LEAVE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_PARTICIPANT_CHANGE_NUMBER"] = 33] = "GROUP_PARTICIPANT_CHANGE_NUMBER";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["BROADCAST_CREATE"] = 34] = "BROADCAST_CREATE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["BROADCAST_ADD"] = 35] = "BROADCAST_ADD";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["BROADCAST_REMOVE"] = 36] = "BROADCAST_REMOVE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GENERIC_NOTIFICATION"] = 37] = "GENERIC_NOTIFICATION";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["E2E_IDENTITY_CHANGED"] = 38] = "E2E_IDENTITY_CHANGED";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["E2E_ENCRYPTED"] = 39] = "E2E_ENCRYPTED";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["CALL_MISSED_VOICE"] = 40] = "CALL_MISSED_VOICE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["CALL_MISSED_VIDEO"] = 41] = "CALL_MISSED_VIDEO";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["INDIVIDUAL_CHANGE_NUMBER"] = 42] = "INDIVIDUAL_CHANGE_NUMBER";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_DELETE"] = 43] = "GROUP_DELETE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE"] = 44] = "GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["CALL_MISSED_GROUP_VOICE"] = 45] = "CALL_MISSED_GROUP_VOICE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["CALL_MISSED_GROUP_VIDEO"] = 46] = "CALL_MISSED_GROUP_VIDEO";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["PAYMENT_CIPHERTEXT"] = 47] = "PAYMENT_CIPHERTEXT";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["PAYMENT_FUTUREPROOF"] = 48] = "PAYMENT_FUTUREPROOF";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED"] = 49] = "PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED"] = 50] = "PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED"] = 51] = "PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP"] = 52] = "PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP"] = 53] = "PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER"] = 54] = "PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["PAYMENT_ACTION_SEND_PAYMENT_REMINDER"] = 55] = "PAYMENT_ACTION_SEND_PAYMENT_REMINDER";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["PAYMENT_ACTION_SEND_PAYMENT_INVITATION"] = 56] = "PAYMENT_ACTION_SEND_PAYMENT_INVITATION";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["PAYMENT_ACTION_REQUEST_DECLINED"] = 57] = "PAYMENT_ACTION_REQUEST_DECLINED";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["PAYMENT_ACTION_REQUEST_EXPIRED"] = 58] = "PAYMENT_ACTION_REQUEST_EXPIRED";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["PAYMENT_ACTION_REQUEST_CANCELLED"] = 59] = "PAYMENT_ACTION_REQUEST_CANCELLED";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM"] = 60] = "BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP"] = 61] = "BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["BIZ_INTRO_TOP"] = 62] = "BIZ_INTRO_TOP";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["BIZ_INTRO_BOTTOM"] = 63] = "BIZ_INTRO_BOTTOM";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["BIZ_NAME_CHANGE"] = 64] = "BIZ_NAME_CHANGE";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["BIZ_MOVE_TO_CONSUMER_APP"] = 65] = "BIZ_MOVE_TO_CONSUMER_APP";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["BIZ_TWO_TIER_MIGRATION_TOP"] = 66] = "BIZ_TWO_TIER_MIGRATION_TOP";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["BIZ_TWO_TIER_MIGRATION_BOTTOM"] = 67] = "BIZ_TWO_TIER_MIGRATION_BOTTOM";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["OVERSIZED"] = 68] = "OVERSIZED";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_CHANGE_NO_FREQUENTLY_FORWARDED"] = 69] = "GROUP_CHANGE_NO_FREQUENTLY_FORWARDED";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_V4_ADD_INVITE_SENT"] = 70] = "GROUP_V4_ADD_INVITE_SENT";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["GROUP_PARTICIPANT_ADD_REQUEST_JOIN"] = 71] = "GROUP_PARTICIPANT_ADD_REQUEST_JOIN";
        WEB_MESSAGE_INFO_STUBTYPE[WEB_MESSAGE_INFO_STUBTYPE["CHANGE_EPHEMERAL_SETTING"] = 72] = "CHANGE_EPHEMERAL_SETTING";
    })(WEB_MESSAGE_INFO_STUBTYPE = WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE || (WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE = {}));
})(WebMessageInfo = exports.WebMessageInfo || (exports.WebMessageInfo = {}));
