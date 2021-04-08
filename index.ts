import * as pb_1 from "google-protobuf";
export class HydratedQuickReplyButton extends pb_1.Message {
    constructor(data?: any[] | {
        displayText?: string;
        id?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayText = data.displayText;
            this.id = data.id;
        }
    }
    get displayText(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set displayText(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get id(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set id(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            displayText: this.displayText,
            id: this.id
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.displayText === "string" && this.displayText.length)
            writer.writeString(1, this.displayText);
        if (typeof this.id === "string" && this.id.length)
            writer.writeString(2, this.id);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HydratedQuickReplyButton {
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
export class HydratedURLButton extends pb_1.Message {
    constructor(data?: any[] | {
        displayText?: string;
        url?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayText = data.displayText;
            this.url = data.url;
        }
    }
    get displayText(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set displayText(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get url(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set url(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            displayText: this.displayText,
            url: this.url
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.displayText === "string" && this.displayText.length)
            writer.writeString(1, this.displayText);
        if (typeof this.url === "string" && this.url.length)
            writer.writeString(2, this.url);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HydratedURLButton {
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
export class HydratedCallButton extends pb_1.Message {
    constructor(data?: any[] | {
        displayText?: string;
        phoneNumber?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayText = data.displayText;
            this.phoneNumber = data.phoneNumber;
        }
    }
    get displayText(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set displayText(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get phoneNumber(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set phoneNumber(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            displayText: this.displayText,
            phoneNumber: this.phoneNumber
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.displayText === "string" && this.displayText.length)
            writer.writeString(1, this.displayText);
        if (typeof this.phoneNumber === "string" && this.phoneNumber.length)
            writer.writeString(2, this.phoneNumber);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HydratedCallButton {
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
export class HydratedTemplateButton extends pb_1.Message {
    constructor(data?: any[] | {
        index?: number;
        quickReplyButton?: HydratedQuickReplyButton;
        urlButton?: HydratedURLButton;
        callButton?: HydratedCallButton;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.index = data.index;
            this.quickReplyButton = data.quickReplyButton;
            this.urlButton = data.urlButton;
            this.callButton = data.callButton;
        }
    }
    get index(): number {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as number;
    }
    set index(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get quickReplyButton(): HydratedQuickReplyButton {
        return pb_1.Message.getWrapperField(this, HydratedQuickReplyButton, 1) as HydratedQuickReplyButton;
    }
    set quickReplyButton(value: HydratedQuickReplyButton) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get urlButton(): HydratedURLButton {
        return pb_1.Message.getWrapperField(this, HydratedURLButton, 2) as HydratedURLButton;
    }
    set urlButton(value: HydratedURLButton) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get callButton(): HydratedCallButton {
        return pb_1.Message.getWrapperField(this, HydratedCallButton, 3) as HydratedCallButton;
    }
    set callButton(value: HydratedCallButton) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HydratedTemplateButton {
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
export class QuickReplyButton extends pb_1.Message {
    constructor(data?: any[] | {
        displayText?: HighlyStructuredMessage;
        id?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayText = data.displayText;
            this.id = data.id;
        }
    }
    get displayText(): HighlyStructuredMessage {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 1) as HighlyStructuredMessage;
    }
    set displayText(value: HighlyStructuredMessage) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get id(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set id(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            displayText: this.displayText && this.displayText.toObject(),
            id: this.id
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.displayText !== undefined)
            writer.writeMessage(1, this.displayText, () => this.displayText.serialize(writer));
        if (typeof this.id === "string" && this.id.length)
            writer.writeString(2, this.id);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuickReplyButton {
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
export class URLButton extends pb_1.Message {
    constructor(data?: any[] | {
        displayText?: HighlyStructuredMessage;
        url?: HighlyStructuredMessage;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayText = data.displayText;
            this.url = data.url;
        }
    }
    get displayText(): HighlyStructuredMessage {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 1) as HighlyStructuredMessage;
    }
    set displayText(value: HighlyStructuredMessage) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get url(): HighlyStructuredMessage {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 2) as HighlyStructuredMessage;
    }
    set url(value: HighlyStructuredMessage) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    toObject() {
        return {
            displayText: this.displayText && this.displayText.toObject(),
            url: this.url && this.url.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.displayText !== undefined)
            writer.writeMessage(1, this.displayText, () => this.displayText.serialize(writer));
        if (this.url !== undefined)
            writer.writeMessage(2, this.url, () => this.url.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): URLButton {
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
export class CallButton extends pb_1.Message {
    constructor(data?: any[] | {
        displayText?: HighlyStructuredMessage;
        phoneNumber?: HighlyStructuredMessage;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayText = data.displayText;
            this.phoneNumber = data.phoneNumber;
        }
    }
    get displayText(): HighlyStructuredMessage {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 1) as HighlyStructuredMessage;
    }
    set displayText(value: HighlyStructuredMessage) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get phoneNumber(): HighlyStructuredMessage {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 2) as HighlyStructuredMessage;
    }
    set phoneNumber(value: HighlyStructuredMessage) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    toObject() {
        return {
            displayText: this.displayText && this.displayText.toObject(),
            phoneNumber: this.phoneNumber && this.phoneNumber.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.displayText !== undefined)
            writer.writeMessage(1, this.displayText, () => this.displayText.serialize(writer));
        if (this.phoneNumber !== undefined)
            writer.writeMessage(2, this.phoneNumber, () => this.phoneNumber.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CallButton {
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
export class TemplateButton extends pb_1.Message {
    constructor(data?: any[] | {
        index?: number;
        quickReplyButton?: QuickReplyButton;
        urlButton?: URLButton;
        callButton?: CallButton;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.index = data.index;
            this.quickReplyButton = data.quickReplyButton;
            this.urlButton = data.urlButton;
            this.callButton = data.callButton;
        }
    }
    get index(): number {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as number;
    }
    set index(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get quickReplyButton(): QuickReplyButton {
        return pb_1.Message.getWrapperField(this, QuickReplyButton, 1) as QuickReplyButton;
    }
    set quickReplyButton(value: QuickReplyButton) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get urlButton(): URLButton {
        return pb_1.Message.getWrapperField(this, URLButton, 2) as URLButton;
    }
    set urlButton(value: URLButton) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get callButton(): CallButton {
        return pb_1.Message.getWrapperField(this, CallButton, 3) as CallButton;
    }
    set callButton(value: CallButton) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TemplateButton {
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
export class Location extends pb_1.Message {
    constructor(data?: any[] | {
        degreesLatitude?: number;
        degreesLongitude?: number;
        name?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.degreesLatitude = data.degreesLatitude;
            this.degreesLongitude = data.degreesLongitude;
            this.name = data.name;
        }
    }
    get degreesLatitude(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set degreesLatitude(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get degreesLongitude(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set degreesLongitude(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get name(): string {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    toObject() {
        return {
            degreesLatitude: this.degreesLatitude,
            degreesLongitude: this.degreesLongitude,
            name: this.name
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Location {
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
export class Point extends pb_1.Message {
    constructor(data?: any[] | {
        xDeprecated?: number;
        yDeprecated?: number;
        x?: number;
        y?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.xDeprecated = data.xDeprecated;
            this.yDeprecated = data.yDeprecated;
            this.x = data.x;
            this.y = data.y;
        }
    }
    get xDeprecated(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set xDeprecated(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get yDeprecated(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set yDeprecated(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get x(): number {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number;
    }
    set x(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get y(): number {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as number;
    }
    set y(value: number) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Point {
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
export class InteractiveAnnotation extends pb_1.Message {
    constructor(data?: any[] | {
        polygonVertices?: Point[];
        location?: Location;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [1], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.polygonVertices = data.polygonVertices;
            this.location = data.location;
        }
    }
    get polygonVertices(): Point[] {
        return pb_1.Message.getRepeatedWrapperField(this, Point, 1) as Point[];
    }
    set polygonVertices(value: Point[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    get location(): Location {
        return pb_1.Message.getWrapperField(this, Location, 2) as Location;
    }
    set location(value: Location) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    toObject() {
        return {
            polygonVertices: this.polygonVertices.map((item: Point) => item.toObject()),
            location: this.location && this.location.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.polygonVertices !== undefined)
            writer.writeRepeatedMessage(1, this.polygonVertices, (item: Point) => item.serialize(writer));
        if (this.location !== undefined)
            writer.writeMessage(2, this.location, () => this.location.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): InteractiveAnnotation {
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
export class AdReplyInfo extends pb_1.Message {
    constructor(data?: any[] | {
        advertiserName?: string;
        mediaType?: AdReplyInfo.AD_REPLY_INFO_MEDIATYPE;
        jpegThumbnail?: Uint8Array;
        caption?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.advertiserName = data.advertiserName;
            this.mediaType = data.mediaType;
            this.jpegThumbnail = data.jpegThumbnail;
            this.caption = data.caption;
        }
    }
    get advertiserName(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set advertiserName(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get mediaType(): AdReplyInfo.AD_REPLY_INFO_MEDIATYPE {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as AdReplyInfo.AD_REPLY_INFO_MEDIATYPE;
    }
    set mediaType(value: AdReplyInfo.AD_REPLY_INFO_MEDIATYPE) {
        pb_1.Message.setField(this, 2, value);
    }
    get jpegThumbnail(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined) as Uint8Array;
    }
    set jpegThumbnail(value: Uint8Array) {
        pb_1.Message.setField(this, 16, value);
    }
    get caption(): string {
        return pb_1.Message.getFieldWithDefault(this, 17, undefined) as string;
    }
    set caption(value: string) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AdReplyInfo {
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
export namespace AdReplyInfo {
    export enum AD_REPLY_INFO_MEDIATYPE {
        NONE = 0,
        IMAGE = 1,
        VIDEO = 2
    }
}
export class ContextInfo extends pb_1.Message {
    constructor(data?: any[] | {
        stanzaId?: string;
        participant?: string;
        quotedMessage?: Message;
        remoteJid?: string;
        mentionedJid?: string[];
        conversionSource?: string;
        conversionData?: Uint8Array;
        conversionDelaySeconds?: number;
        forwardingScore?: number;
        isForwarded?: boolean;
        quotedAd?: AdReplyInfo;
        placeholderKey?: MessageKey;
        expiration?: number;
        ephemeralSettingTimestamp?: number;
        ephemeralSharedSecret?: Uint8Array;
    }) {
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
    get stanzaId(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set stanzaId(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get participant(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set participant(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get quotedMessage(): Message {
        return pb_1.Message.getWrapperField(this, Message, 3) as Message;
    }
    set quotedMessage(value: Message) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get remoteJid(): string {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string;
    }
    set remoteJid(value: string) {
        pb_1.Message.setField(this, 4, value);
    }
    get mentionedJid(): string[] {
        return pb_1.Message.getField(this, 15) as string[];
    }
    set mentionedJid(value: string[]) {
        pb_1.Message.setField(this, 15, value);
    }
    get conversionSource(): string {
        return pb_1.Message.getFieldWithDefault(this, 18, undefined) as string;
    }
    set conversionSource(value: string) {
        pb_1.Message.setField(this, 18, value);
    }
    get conversionData(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 19, undefined) as Uint8Array;
    }
    set conversionData(value: Uint8Array) {
        pb_1.Message.setField(this, 19, value);
    }
    get conversionDelaySeconds(): number {
        return pb_1.Message.getFieldWithDefault(this, 20, undefined) as number;
    }
    set conversionDelaySeconds(value: number) {
        pb_1.Message.setField(this, 20, value);
    }
    get forwardingScore(): number {
        return pb_1.Message.getFieldWithDefault(this, 21, undefined) as number;
    }
    set forwardingScore(value: number) {
        pb_1.Message.setField(this, 21, value);
    }
    get isForwarded(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 22, undefined) as boolean;
    }
    set isForwarded(value: boolean) {
        pb_1.Message.setField(this, 22, value);
    }
    get quotedAd(): AdReplyInfo {
        return pb_1.Message.getWrapperField(this, AdReplyInfo, 23) as AdReplyInfo;
    }
    set quotedAd(value: AdReplyInfo) {
        pb_1.Message.setWrapperField(this, 23, value);
    }
    get placeholderKey(): MessageKey {
        return pb_1.Message.getWrapperField(this, MessageKey, 24) as MessageKey;
    }
    set placeholderKey(value: MessageKey) {
        pb_1.Message.setWrapperField(this, 24, value);
    }
    get expiration(): number {
        return pb_1.Message.getFieldWithDefault(this, 25, undefined) as number;
    }
    set expiration(value: number) {
        pb_1.Message.setField(this, 25, value);
    }
    get ephemeralSettingTimestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 26, undefined) as number;
    }
    set ephemeralSettingTimestamp(value: number) {
        pb_1.Message.setField(this, 26, value);
    }
    get ephemeralSharedSecret(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 27, undefined) as Uint8Array;
    }
    set ephemeralSharedSecret(value: Uint8Array) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ContextInfo {
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
export class SenderKeyDistributionMessage extends pb_1.Message {
    constructor(data?: any[] | {
        groupId?: string;
        axolotlSenderKeyDistributionMessage?: Uint8Array;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.groupId = data.groupId;
            this.axolotlSenderKeyDistributionMessage = data.axolotlSenderKeyDistributionMessage;
        }
    }
    get groupId(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set groupId(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get axolotlSenderKeyDistributionMessage(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as Uint8Array;
    }
    set axolotlSenderKeyDistributionMessage(value: Uint8Array) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            groupId: this.groupId,
            axolotlSenderKeyDistributionMessage: this.axolotlSenderKeyDistributionMessage
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.groupId === "string" && this.groupId.length)
            writer.writeString(1, this.groupId);
        if (this.axolotlSenderKeyDistributionMessage !== undefined)
            writer.writeBytes(2, this.axolotlSenderKeyDistributionMessage);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SenderKeyDistributionMessage {
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
export class ImageMessage extends pb_1.Message {
    constructor(data?: any[] | {
        url?: string;
        mimetype?: string;
        caption?: string;
        fileSha256?: Uint8Array;
        fileLength?: number;
        height?: number;
        width?: number;
        mediaKey?: Uint8Array;
        fileEncSha256?: Uint8Array;
        interactiveAnnotations?: InteractiveAnnotation[];
        directPath?: string;
        mediaKeyTimestamp?: number;
        jpegThumbnail?: Uint8Array;
        contextInfo?: ContextInfo;
        firstScanSidecar?: Uint8Array;
        firstScanLength?: number;
        experimentGroupId?: number;
        scansSidecar?: Uint8Array;
        scanLengths?: number[];
        midQualityFileSha256?: Uint8Array;
        midQualityFileEncSha256?: Uint8Array;
    }) {
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
    get url(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set url(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get mimetype(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set mimetype(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get caption(): string {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string;
    }
    set caption(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    get fileSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as Uint8Array;
    }
    set fileSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 4, value);
    }
    get fileLength(): number {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number;
    }
    set fileLength(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get height(): number {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as number;
    }
    set height(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get width(): number {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as number;
    }
    set width(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get mediaKey(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as Uint8Array;
    }
    set mediaKey(value: Uint8Array) {
        pb_1.Message.setField(this, 8, value);
    }
    get fileEncSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined) as Uint8Array;
    }
    set fileEncSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 9, value);
    }
    get interactiveAnnotations(): InteractiveAnnotation[] {
        return pb_1.Message.getRepeatedWrapperField(this, InteractiveAnnotation, 10) as InteractiveAnnotation[];
    }
    set interactiveAnnotations(value: InteractiveAnnotation[]) {
        pb_1.Message.setRepeatedWrapperField(this, 10, value);
    }
    get directPath(): string {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined) as string;
    }
    set directPath(value: string) {
        pb_1.Message.setField(this, 11, value);
    }
    get mediaKeyTimestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 12, undefined) as number;
    }
    set mediaKeyTimestamp(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get jpegThumbnail(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined) as Uint8Array;
    }
    set jpegThumbnail(value: Uint8Array) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo(): ContextInfo {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17) as ContextInfo;
    }
    set contextInfo(value: ContextInfo) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    get firstScanSidecar(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 18, undefined) as Uint8Array;
    }
    set firstScanSidecar(value: Uint8Array) {
        pb_1.Message.setField(this, 18, value);
    }
    get firstScanLength(): number {
        return pb_1.Message.getFieldWithDefault(this, 19, undefined) as number;
    }
    set firstScanLength(value: number) {
        pb_1.Message.setField(this, 19, value);
    }
    get experimentGroupId(): number {
        return pb_1.Message.getFieldWithDefault(this, 20, undefined) as number;
    }
    set experimentGroupId(value: number) {
        pb_1.Message.setField(this, 20, value);
    }
    get scansSidecar(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 21, undefined) as Uint8Array;
    }
    set scansSidecar(value: Uint8Array) {
        pb_1.Message.setField(this, 21, value);
    }
    get scanLengths(): number[] {
        return pb_1.Message.getField(this, 22) as number[];
    }
    set scanLengths(value: number[]) {
        pb_1.Message.setField(this, 22, value);
    }
    get midQualityFileSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 23, undefined) as Uint8Array;
    }
    set midQualityFileSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 23, value);
    }
    get midQualityFileEncSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 24, undefined) as Uint8Array;
    }
    set midQualityFileEncSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 24, value);
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
            interactiveAnnotations: this.interactiveAnnotations.map((item: InteractiveAnnotation) => item.toObject()),
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
            writer.writeRepeatedMessage(10, this.interactiveAnnotations, (item: InteractiveAnnotation) => item.serialize(writer));
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
            writer.writePackedUint32(22, this.scanLengths);
        if (this.midQualityFileSha256 !== undefined)
            writer.writeBytes(23, this.midQualityFileSha256);
        if (this.midQualityFileEncSha256 !== undefined)
            writer.writeBytes(24, this.midQualityFileEncSha256);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ImageMessage {
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
                    message.scanLengths = reader.readPackedUint32();
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
export class ContactMessage extends pb_1.Message {
    constructor(data?: any[] | {
        displayName?: string;
        vcard?: string;
        contextInfo?: ContextInfo;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayName = data.displayName;
            this.vcard = data.vcard;
            this.contextInfo = data.contextInfo;
        }
    }
    get displayName(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set displayName(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get vcard(): string {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined) as string;
    }
    set vcard(value: string) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo(): ContextInfo {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17) as ContextInfo;
    }
    set contextInfo(value: ContextInfo) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    toObject() {
        return {
            displayName: this.displayName,
            vcard: this.vcard,
            contextInfo: this.contextInfo && this.contextInfo.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ContactMessage {
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
export class LocationMessage extends pb_1.Message {
    constructor(data?: any[] | {
        degreesLatitude?: number;
        degreesLongitude?: number;
        name?: string;
        address?: string;
        url?: string;
        isLive?: boolean;
        accuracyInMeters?: number;
        speedInMps?: number;
        degreesClockwiseFromMagneticNorth?: number;
        comment?: string;
        jpegThumbnail?: Uint8Array;
        contextInfo?: ContextInfo;
    }) {
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
    get degreesLatitude(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set degreesLatitude(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get degreesLongitude(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set degreesLongitude(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get name(): string {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    get address(): string {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string;
    }
    set address(value: string) {
        pb_1.Message.setField(this, 4, value);
    }
    get url(): string {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as string;
    }
    set url(value: string) {
        pb_1.Message.setField(this, 5, value);
    }
    get isLive(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as boolean;
    }
    set isLive(value: boolean) {
        pb_1.Message.setField(this, 6, value);
    }
    get accuracyInMeters(): number {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as number;
    }
    set accuracyInMeters(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get speedInMps(): number {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as number;
    }
    set speedInMps(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get degreesClockwiseFromMagneticNorth(): number {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined) as number;
    }
    set degreesClockwiseFromMagneticNorth(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get comment(): string {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined) as string;
    }
    set comment(value: string) {
        pb_1.Message.setField(this, 11, value);
    }
    get jpegThumbnail(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined) as Uint8Array;
    }
    set jpegThumbnail(value: Uint8Array) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo(): ContextInfo {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17) as ContextInfo;
    }
    set contextInfo(value: ContextInfo) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LocationMessage {
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
export class ExtendedTextMessage extends pb_1.Message {
    constructor(data?: any[] | {
        text?: string;
        matchedText?: string;
        canonicalUrl?: string;
        description?: string;
        title?: string;
        textArgb?: number;
        backgroundArgb?: number;
        font?: ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE;
        previewType?: ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE;
        jpegThumbnail?: Uint8Array;
        contextInfo?: ContextInfo;
        doNotPlayInline?: boolean;
    }) {
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
    get text(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set text(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get matchedText(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set matchedText(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get canonicalUrl(): string {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string;
    }
    set canonicalUrl(value: string) {
        pb_1.Message.setField(this, 4, value);
    }
    get description(): string {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as string;
    }
    set description(value: string) {
        pb_1.Message.setField(this, 5, value);
    }
    get title(): string {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as string;
    }
    set title(value: string) {
        pb_1.Message.setField(this, 6, value);
    }
    get textArgb(): number {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as number;
    }
    set textArgb(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get backgroundArgb(): number {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as number;
    }
    set backgroundArgb(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get font(): ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined) as ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE;
    }
    set font(value: ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE) {
        pb_1.Message.setField(this, 9, value);
    }
    get previewType(): ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined) as ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE;
    }
    set previewType(value: ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE) {
        pb_1.Message.setField(this, 10, value);
    }
    get jpegThumbnail(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined) as Uint8Array;
    }
    set jpegThumbnail(value: Uint8Array) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo(): ContextInfo {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17) as ContextInfo;
    }
    set contextInfo(value: ContextInfo) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    get doNotPlayInline(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 18, undefined) as boolean;
    }
    set doNotPlayInline(value: boolean) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ExtendedTextMessage {
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
export namespace ExtendedTextMessage {
    export enum EXTENDED_TEXT_MESSAGE_FONTTYPE {
        SANS_SERIF = 0,
        SERIF = 1,
        NORICAN_REGULAR = 2,
        BRYNDAN_WRITE = 3,
        BEBASNEUE_REGULAR = 4,
        OSWALD_HEAVY = 5
    }
    export enum EXTENDED_TEXT_MESSAGE_PREVIEWTYPE {
        NONE = 0,
        VIDEO = 1
    }
}
export class DocumentMessage extends pb_1.Message {
    constructor(data?: any[] | {
        url?: string;
        mimetype?: string;
        title?: string;
        fileSha256?: Uint8Array;
        fileLength?: number;
        pageCount?: number;
        mediaKey?: Uint8Array;
        fileName?: string;
        fileEncSha256?: Uint8Array;
        directPath?: string;
        mediaKeyTimestamp?: number;
        jpegThumbnail?: Uint8Array;
        contextInfo?: ContextInfo;
    }) {
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
    get url(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set url(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get mimetype(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set mimetype(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get title(): string {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string;
    }
    set title(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    get fileSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as Uint8Array;
    }
    set fileSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 4, value);
    }
    get fileLength(): number {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number;
    }
    set fileLength(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get pageCount(): number {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as number;
    }
    set pageCount(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get mediaKey(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as Uint8Array;
    }
    set mediaKey(value: Uint8Array) {
        pb_1.Message.setField(this, 7, value);
    }
    get fileName(): string {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as string;
    }
    set fileName(value: string) {
        pb_1.Message.setField(this, 8, value);
    }
    get fileEncSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined) as Uint8Array;
    }
    set fileEncSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 9, value);
    }
    get directPath(): string {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined) as string;
    }
    set directPath(value: string) {
        pb_1.Message.setField(this, 10, value);
    }
    get mediaKeyTimestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined) as number;
    }
    set mediaKeyTimestamp(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get jpegThumbnail(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined) as Uint8Array;
    }
    set jpegThumbnail(value: Uint8Array) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo(): ContextInfo {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17) as ContextInfo;
    }
    set contextInfo(value: ContextInfo) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DocumentMessage {
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
export class AudioMessage extends pb_1.Message {
    constructor(data?: any[] | {
        url?: string;
        mimetype?: string;
        fileSha256?: Uint8Array;
        fileLength?: number;
        seconds?: number;
        ptt?: boolean;
        mediaKey?: Uint8Array;
        fileEncSha256?: Uint8Array;
        directPath?: string;
        mediaKeyTimestamp?: number;
        contextInfo?: ContextInfo;
        streamingSidecar?: Uint8Array;
    }) {
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
    get url(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set url(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get mimetype(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set mimetype(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get fileSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as Uint8Array;
    }
    set fileSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 3, value);
    }
    get fileLength(): number {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as number;
    }
    set fileLength(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get seconds(): number {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number;
    }
    set seconds(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get ptt(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as boolean;
    }
    set ptt(value: boolean) {
        pb_1.Message.setField(this, 6, value);
    }
    get mediaKey(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as Uint8Array;
    }
    set mediaKey(value: Uint8Array) {
        pb_1.Message.setField(this, 7, value);
    }
    get fileEncSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as Uint8Array;
    }
    set fileEncSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 8, value);
    }
    get directPath(): string {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined) as string;
    }
    set directPath(value: string) {
        pb_1.Message.setField(this, 9, value);
    }
    get mediaKeyTimestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined) as number;
    }
    set mediaKeyTimestamp(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get contextInfo(): ContextInfo {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17) as ContextInfo;
    }
    set contextInfo(value: ContextInfo) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    get streamingSidecar(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 18, undefined) as Uint8Array;
    }
    set streamingSidecar(value: Uint8Array) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AudioMessage {
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
export class VideoMessage extends pb_1.Message {
    constructor(data?: any[] | {
        url?: string;
        mimetype?: string;
        fileSha256?: Uint8Array;
        fileLength?: number;
        seconds?: number;
        mediaKey?: Uint8Array;
        caption?: string;
        gifPlayback?: boolean;
        height?: number;
        width?: number;
        fileEncSha256?: Uint8Array;
        interactiveAnnotations?: InteractiveAnnotation[];
        directPath?: string;
        mediaKeyTimestamp?: number;
        jpegThumbnail?: Uint8Array;
        contextInfo?: ContextInfo;
        streamingSidecar?: Uint8Array;
        gifAttribution?: VideoMessage.VIDEO_MESSAGE_ATTRIBUTION;
    }) {
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
    get url(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set url(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get mimetype(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set mimetype(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get fileSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as Uint8Array;
    }
    set fileSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 3, value);
    }
    get fileLength(): number {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as number;
    }
    set fileLength(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get seconds(): number {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number;
    }
    set seconds(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get mediaKey(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as Uint8Array;
    }
    set mediaKey(value: Uint8Array) {
        pb_1.Message.setField(this, 6, value);
    }
    get caption(): string {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as string;
    }
    set caption(value: string) {
        pb_1.Message.setField(this, 7, value);
    }
    get gifPlayback(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as boolean;
    }
    set gifPlayback(value: boolean) {
        pb_1.Message.setField(this, 8, value);
    }
    get height(): number {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined) as number;
    }
    set height(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get width(): number {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined) as number;
    }
    set width(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get fileEncSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined) as Uint8Array;
    }
    set fileEncSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 11, value);
    }
    get interactiveAnnotations(): InteractiveAnnotation[] {
        return pb_1.Message.getRepeatedWrapperField(this, InteractiveAnnotation, 12) as InteractiveAnnotation[];
    }
    set interactiveAnnotations(value: InteractiveAnnotation[]) {
        pb_1.Message.setRepeatedWrapperField(this, 12, value);
    }
    get directPath(): string {
        return pb_1.Message.getFieldWithDefault(this, 13, undefined) as string;
    }
    set directPath(value: string) {
        pb_1.Message.setField(this, 13, value);
    }
    get mediaKeyTimestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 14, undefined) as number;
    }
    set mediaKeyTimestamp(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    get jpegThumbnail(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined) as Uint8Array;
    }
    set jpegThumbnail(value: Uint8Array) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo(): ContextInfo {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17) as ContextInfo;
    }
    set contextInfo(value: ContextInfo) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    get streamingSidecar(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 18, undefined) as Uint8Array;
    }
    set streamingSidecar(value: Uint8Array) {
        pb_1.Message.setField(this, 18, value);
    }
    get gifAttribution(): VideoMessage.VIDEO_MESSAGE_ATTRIBUTION {
        return pb_1.Message.getFieldWithDefault(this, 19, undefined) as VideoMessage.VIDEO_MESSAGE_ATTRIBUTION;
    }
    set gifAttribution(value: VideoMessage.VIDEO_MESSAGE_ATTRIBUTION) {
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
            interactiveAnnotations: this.interactiveAnnotations.map((item: InteractiveAnnotation) => item.toObject()),
            directPath: this.directPath,
            mediaKeyTimestamp: this.mediaKeyTimestamp,
            jpegThumbnail: this.jpegThumbnail,
            contextInfo: this.contextInfo && this.contextInfo.toObject(),
            streamingSidecar: this.streamingSidecar,
            gifAttribution: this.gifAttribution
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
            writer.writeRepeatedMessage(12, this.interactiveAnnotations, (item: InteractiveAnnotation) => item.serialize(writer));
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): VideoMessage {
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
export namespace VideoMessage {
    export enum VIDEO_MESSAGE_ATTRIBUTION {
        NONE = 0,
        GIPHY = 1,
        TENOR = 2
    }
}
export class Call extends pb_1.Message {
    constructor(data?: any[] | {
        callKey?: Uint8Array;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.callKey = data.callKey;
        }
    }
    get callKey(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as Uint8Array;
    }
    set callKey(value: Uint8Array) {
        pb_1.Message.setField(this, 1, value);
    }
    toObject() {
        return {
            callKey: this.callKey
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.callKey !== undefined)
            writer.writeBytes(1, this.callKey);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Call {
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
export class Chat extends pb_1.Message {
    constructor(data?: any[] | {
        displayName?: string;
        id?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayName = data.displayName;
            this.id = data.id;
        }
    }
    get displayName(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set displayName(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get id(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set id(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            displayName: this.displayName,
            id: this.id
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.displayName === "string" && this.displayName.length)
            writer.writeString(1, this.displayName);
        if (typeof this.id === "string" && this.id.length)
            writer.writeString(2, this.id);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Chat {
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
export class ProtocolMessage extends pb_1.Message {
    constructor(data?: any[] | {
        key?: MessageKey;
        type?: ProtocolMessage.PROTOCOL_MESSAGE_TYPE;
        ephemeralExpiration?: number;
        ephemeralSettingTimestamp?: number;
        historySyncNotification?: HistorySyncNotification;
    }) {
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
    get key(): MessageKey {
        return pb_1.Message.getWrapperField(this, MessageKey, 1) as MessageKey;
    }
    set key(value: MessageKey) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get type(): ProtocolMessage.PROTOCOL_MESSAGE_TYPE {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as ProtocolMessage.PROTOCOL_MESSAGE_TYPE;
    }
    set type(value: ProtocolMessage.PROTOCOL_MESSAGE_TYPE) {
        pb_1.Message.setField(this, 2, value);
    }
    get ephemeralExpiration(): number {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as number;
    }
    set ephemeralExpiration(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get ephemeralSettingTimestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number;
    }
    set ephemeralSettingTimestamp(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get historySyncNotification(): HistorySyncNotification {
        return pb_1.Message.getWrapperField(this, HistorySyncNotification, 6) as HistorySyncNotification;
    }
    set historySyncNotification(value: HistorySyncNotification) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProtocolMessage {
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
export namespace ProtocolMessage {
    export enum PROTOCOL_MESSAGE_TYPE {
        REVOKE = 0,
        EPHEMERAL_SETTING = 3,
        EPHEMERAL_SYNC_RESPONSE = 4,
        HISTORY_SYNC_NOTIFICATION = 5
    }
}
export class HistorySyncNotification extends pb_1.Message {
    constructor(data?: any[] | {
        fileSha256?: Uint8Array;
        fileLength?: number;
        mediaKey?: Uint8Array;
        fileEncSha256?: Uint8Array;
        directPath?: string;
        syncType?: HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE;
        chunkOrder?: number;
        originalMessageId?: string;
    }) {
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
    get fileSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as Uint8Array;
    }
    set fileSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 1, value);
    }
    get fileLength(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set fileLength(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get mediaKey(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as Uint8Array;
    }
    set mediaKey(value: Uint8Array) {
        pb_1.Message.setField(this, 3, value);
    }
    get fileEncSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as Uint8Array;
    }
    set fileEncSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 4, value);
    }
    get directPath(): string {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as string;
    }
    set directPath(value: string) {
        pb_1.Message.setField(this, 5, value);
    }
    get syncType(): HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE;
    }
    set syncType(value: HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE) {
        pb_1.Message.setField(this, 6, value);
    }
    get chunkOrder(): number {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as number;
    }
    set chunkOrder(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get originalMessageId(): string {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as string;
    }
    set originalMessageId(value: string) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HistorySyncNotification {
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
export namespace HistorySyncNotification {
    export enum HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE {
        INITIAL_BOOTSTRAP = 0,
        INITIAL_STATUS_V3 = 1,
        FULL = 2,
        RECENT = 3,
        RESEND = 4
    }
}
export class ContactsArrayMessage extends pb_1.Message {
    constructor(data?: any[] | {
        displayName?: string;
        contacts?: ContactMessage[];
        contextInfo?: ContextInfo;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [2], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.displayName = data.displayName;
            this.contacts = data.contacts;
            this.contextInfo = data.contextInfo;
        }
    }
    get displayName(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set displayName(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get contacts(): ContactMessage[] {
        return pb_1.Message.getRepeatedWrapperField(this, ContactMessage, 2) as ContactMessage[];
    }
    set contacts(value: ContactMessage[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    get contextInfo(): ContextInfo {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17) as ContextInfo;
    }
    set contextInfo(value: ContextInfo) {
        pb_1.Message.setWrapperField(this, 17, value);
    }
    toObject() {
        return {
            displayName: this.displayName,
            contacts: this.contacts.map((item: ContactMessage) => item.toObject()),
            contextInfo: this.contextInfo && this.contextInfo.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.displayName === "string" && this.displayName.length)
            writer.writeString(1, this.displayName);
        if (this.contacts !== undefined)
            writer.writeRepeatedMessage(2, this.contacts, (item: ContactMessage) => item.serialize(writer));
        if (this.contextInfo !== undefined)
            writer.writeMessage(17, this.contextInfo, () => this.contextInfo.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ContactsArrayMessage {
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
export class HSMCurrency extends pb_1.Message {
    constructor(data?: any[] | {
        currencyCode?: string;
        amount1000?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.currencyCode = data.currencyCode;
            this.amount1000 = data.amount1000;
        }
    }
    get currencyCode(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set currencyCode(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get amount1000(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set amount1000(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            currencyCode: this.currencyCode,
            amount1000: this.amount1000
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.currencyCode === "string" && this.currencyCode.length)
            writer.writeString(1, this.currencyCode);
        if (this.amount1000 !== undefined)
            writer.writeInt64(2, this.amount1000);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HSMCurrency {
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
export class HSMDateTimeComponent extends pb_1.Message {
    constructor(data?: any[] | {
        dayOfWeek?: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE;
        year?: number;
        month?: number;
        dayOfMonth?: number;
        hour?: number;
        minute?: number;
        calendar?: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE;
    }) {
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
    get dayOfWeek(): HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE;
    }
    set dayOfWeek(value: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE) {
        pb_1.Message.setField(this, 1, value);
    }
    get year(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set year(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get month(): number {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number;
    }
    set month(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get dayOfMonth(): number {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as number;
    }
    set dayOfMonth(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get hour(): number {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number;
    }
    set hour(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get minute(): number {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as number;
    }
    set minute(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get calendar(): HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE;
    }
    set calendar(value: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HSMDateTimeComponent {
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
export namespace HSMDateTimeComponent {
    export enum HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE {
        MONDAY = 1,
        TUESDAY = 2,
        WEDNESDAY = 3,
        THURSDAY = 4,
        FRIDAY = 5,
        SATURDAY = 6,
        SUNDAY = 7
    }
    export enum HSM_DATE_TIME_COMPONENT_CALENDARTYPE {
        GREGORIAN = 1,
        SOLAR_HIJRI = 2
    }
}
export class HSMDateTimeUnixEpoch extends pb_1.Message {
    constructor(data?: any[] | {
        timestamp?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.timestamp = data.timestamp;
        }
    }
    get timestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set timestamp(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    toObject() {
        return {
            timestamp: this.timestamp
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.timestamp !== undefined)
            writer.writeInt64(1, this.timestamp);
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HSMDateTimeUnixEpoch {
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
export class HSMDateTime extends pb_1.Message {
    constructor(data?: any[] | {
        component?: HSMDateTimeComponent;
        unixEpoch?: HSMDateTimeUnixEpoch;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.component = data.component;
            this.unixEpoch = data.unixEpoch;
        }
    }
    get component(): HSMDateTimeComponent {
        return pb_1.Message.getWrapperField(this, HSMDateTimeComponent, 1) as HSMDateTimeComponent;
    }
    set component(value: HSMDateTimeComponent) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get unixEpoch(): HSMDateTimeUnixEpoch {
        return pb_1.Message.getWrapperField(this, HSMDateTimeUnixEpoch, 2) as HSMDateTimeUnixEpoch;
    }
    set unixEpoch(value: HSMDateTimeUnixEpoch) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    toObject() {
        return {
            component: this.component && this.component.toObject(),
            unixEpoch: this.unixEpoch && this.unixEpoch.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.component !== undefined)
            writer.writeMessage(1, this.component, () => this.component.serialize(writer));
        if (this.unixEpoch !== undefined)
            writer.writeMessage(2, this.unixEpoch, () => this.unixEpoch.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HSMDateTime {
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
export class HSMLocalizableParameter extends pb_1.Message {
    constructor(data?: any[] | {
        default?: string;
        currency?: HSMCurrency;
        dateTime?: HSMDateTime;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.default = data.default;
            this.currency = data.currency;
            this.dateTime = data.dateTime;
        }
    }
    get default(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set default(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get currency(): HSMCurrency {
        return pb_1.Message.getWrapperField(this, HSMCurrency, 2) as HSMCurrency;
    }
    set currency(value: HSMCurrency) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get dateTime(): HSMDateTime {
        return pb_1.Message.getWrapperField(this, HSMDateTime, 3) as HSMDateTime;
    }
    set dateTime(value: HSMDateTime) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    toObject() {
        return {
            default: this.default,
            currency: this.currency && this.currency.toObject(),
            dateTime: this.dateTime && this.dateTime.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HSMLocalizableParameter {
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
export class HighlyStructuredMessage extends pb_1.Message {
    constructor(data?: any[] | {
        namespace?: string;
        elementName?: string;
        params?: string[];
        fallbackLg?: string;
        fallbackLc?: string;
        localizableParams?: HSMLocalizableParameter[];
        deterministicLg?: string;
        deterministicLc?: string;
        hydratedHsm?: TemplateMessage;
    }) {
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
    get namespace(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set namespace(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get elementName(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set elementName(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get params(): string[] {
        return pb_1.Message.getField(this, 3) as string[];
    }
    set params(value: string[]) {
        pb_1.Message.setField(this, 3, value);
    }
    get fallbackLg(): string {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string;
    }
    set fallbackLg(value: string) {
        pb_1.Message.setField(this, 4, value);
    }
    get fallbackLc(): string {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as string;
    }
    set fallbackLc(value: string) {
        pb_1.Message.setField(this, 5, value);
    }
    get localizableParams(): HSMLocalizableParameter[] {
        return pb_1.Message.getRepeatedWrapperField(this, HSMLocalizableParameter, 6) as HSMLocalizableParameter[];
    }
    set localizableParams(value: HSMLocalizableParameter[]) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    get deterministicLg(): string {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as string;
    }
    set deterministicLg(value: string) {
        pb_1.Message.setField(this, 7, value);
    }
    get deterministicLc(): string {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as string;
    }
    set deterministicLc(value: string) {
        pb_1.Message.setField(this, 8, value);
    }
    get hydratedHsm(): TemplateMessage {
        return pb_1.Message.getWrapperField(this, TemplateMessage, 9) as TemplateMessage;
    }
    set hydratedHsm(value: TemplateMessage) {
        pb_1.Message.setWrapperField(this, 9, value);
    }
    toObject() {
        return {
            namespace: this.namespace,
            elementName: this.elementName,
            params: this.params,
            fallbackLg: this.fallbackLg,
            fallbackLc: this.fallbackLc,
            localizableParams: this.localizableParams.map((item: HSMLocalizableParameter) => item.toObject()),
            deterministicLg: this.deterministicLg,
            deterministicLc: this.deterministicLc,
            hydratedHsm: this.hydratedHsm && this.hydratedHsm.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
            writer.writeRepeatedMessage(6, this.localizableParams, (item: HSMLocalizableParameter) => item.serialize(writer));
        if (typeof this.deterministicLg === "string" && this.deterministicLg.length)
            writer.writeString(7, this.deterministicLg);
        if (typeof this.deterministicLc === "string" && this.deterministicLc.length)
            writer.writeString(8, this.deterministicLc);
        if (this.hydratedHsm !== undefined)
            writer.writeMessage(9, this.hydratedHsm, () => this.hydratedHsm.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HighlyStructuredMessage {
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
export class SendPaymentMessage extends pb_1.Message {
    constructor(data?: any[] | {
        noteMessage?: Message;
        requestMessageKey?: MessageKey;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.noteMessage = data.noteMessage;
            this.requestMessageKey = data.requestMessageKey;
        }
    }
    get noteMessage(): Message {
        return pb_1.Message.getWrapperField(this, Message, 2) as Message;
    }
    set noteMessage(value: Message) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get requestMessageKey(): MessageKey {
        return pb_1.Message.getWrapperField(this, MessageKey, 3) as MessageKey;
    }
    set requestMessageKey(value: MessageKey) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    toObject() {
        return {
            noteMessage: this.noteMessage && this.noteMessage.toObject(),
            requestMessageKey: this.requestMessageKey && this.requestMessageKey.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.noteMessage !== undefined)
            writer.writeMessage(2, this.noteMessage, () => this.noteMessage.serialize(writer));
        if (this.requestMessageKey !== undefined)
            writer.writeMessage(3, this.requestMessageKey, () => this.requestMessageKey.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SendPaymentMessage {
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
export class RequestPaymentMessage extends pb_1.Message {
    constructor(data?: any[] | {
        noteMessage?: Message;
        currencyCodeIso4217?: string;
        amount1000?: number;
        requestFrom?: string;
        expiryTimestamp?: number;
    }) {
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
    get noteMessage(): Message {
        return pb_1.Message.getWrapperField(this, Message, 4) as Message;
    }
    set noteMessage(value: Message) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get currencyCodeIso4217(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set currencyCodeIso4217(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get amount1000(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set amount1000(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get requestFrom(): string {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string;
    }
    set requestFrom(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    get expiryTimestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number;
    }
    set expiryTimestamp(value: number) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestPaymentMessage {
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
export class DeclinePaymentRequestMessage extends pb_1.Message {
    constructor(data?: any[] | {
        key?: MessageKey;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.key = data.key;
        }
    }
    get key(): MessageKey {
        return pb_1.Message.getWrapperField(this, MessageKey, 1) as MessageKey;
    }
    set key(value: MessageKey) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    toObject() {
        return {
            key: this.key && this.key.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.key !== undefined)
            writer.writeMessage(1, this.key, () => this.key.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeclinePaymentRequestMessage {
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
export class CancelPaymentRequestMessage extends pb_1.Message {
    constructor(data?: any[] | {
        key?: MessageKey;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.key = data.key;
        }
    }
    get key(): MessageKey {
        return pb_1.Message.getWrapperField(this, MessageKey, 1) as MessageKey;
    }
    set key(value: MessageKey) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    toObject() {
        return {
            key: this.key && this.key.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.key !== undefined)
            writer.writeMessage(1, this.key, () => this.key.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CancelPaymentRequestMessage {
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
export class LiveLocationMessage extends pb_1.Message {
    constructor(data?: any[] | {
        degreesLatitude?: number;
        degreesLongitude?: number;
        accuracyInMeters?: number;
        speedInMps?: number;
        degreesClockwiseFromMagneticNorth?: number;
        caption?: string;
        sequenceNumber?: number;
        timeOffset?: number;
        jpegThumbnail?: Uint8Array;
        contextInfo?: ContextInfo;
    }) {
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
    get degreesLatitude(): number {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number;
    }
    set degreesLatitude(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get degreesLongitude(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set degreesLongitude(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get accuracyInMeters(): number {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number;
    }
    set accuracyInMeters(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get speedInMps(): number {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as number;
    }
    set speedInMps(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get degreesClockwiseFromMagneticNorth(): number {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number;
    }
    set degreesClockwiseFromMagneticNorth(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get caption(): string {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as string;
    }
    set caption(value: string) {
        pb_1.Message.setField(this, 6, value);
    }
    get sequenceNumber(): number {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as number;
    }
    set sequenceNumber(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get timeOffset(): number {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as number;
    }
    set timeOffset(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get jpegThumbnail(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined) as Uint8Array;
    }
    set jpegThumbnail(value: Uint8Array) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo(): ContextInfo {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17) as ContextInfo;
    }
    set contextInfo(value: ContextInfo) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LiveLocationMessage {
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
export class StickerMessage extends pb_1.Message {
    constructor(data?: any[] | {
        url?: string;
        fileSha256?: Uint8Array;
        fileEncSha256?: Uint8Array;
        mediaKey?: Uint8Array;
        mimetype?: string;
        height?: number;
        width?: number;
        directPath?: string;
        fileLength?: number;
        mediaKeyTimestamp?: number;
        firstFrameLength?: number;
        firstFrameSidecar?: Uint8Array;
        isAnimated?: boolean;
        pngThumbnail?: Uint8Array;
        contextInfo?: ContextInfo;
    }) {
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
    get url(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set url(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get fileSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as Uint8Array;
    }
    set fileSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 2, value);
    }
    get fileEncSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as Uint8Array;
    }
    set fileEncSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 3, value);
    }
    get mediaKey(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as Uint8Array;
    }
    set mediaKey(value: Uint8Array) {
        pb_1.Message.setField(this, 4, value);
    }
    get mimetype(): string {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as string;
    }
    set mimetype(value: string) {
        pb_1.Message.setField(this, 5, value);
    }
    get height(): number {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as number;
    }
    set height(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get width(): number {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as number;
    }
    set width(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get directPath(): string {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as string;
    }
    set directPath(value: string) {
        pb_1.Message.setField(this, 8, value);
    }
    get fileLength(): number {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined) as number;
    }
    set fileLength(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get mediaKeyTimestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined) as number;
    }
    set mediaKeyTimestamp(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get firstFrameLength(): number {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined) as number;
    }
    set firstFrameLength(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get firstFrameSidecar(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 12, undefined) as Uint8Array;
    }
    set firstFrameSidecar(value: Uint8Array) {
        pb_1.Message.setField(this, 12, value);
    }
    get isAnimated(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 13, undefined) as boolean;
    }
    set isAnimated(value: boolean) {
        pb_1.Message.setField(this, 13, value);
    }
    get pngThumbnail(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined) as Uint8Array;
    }
    set pngThumbnail(value: Uint8Array) {
        pb_1.Message.setField(this, 16, value);
    }
    get contextInfo(): ContextInfo {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17) as ContextInfo;
    }
    set contextInfo(value: ContextInfo) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StickerMessage {
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
export class FourRowTemplate extends pb_1.Message {
    constructor(data?: any[] | {
        content?: HighlyStructuredMessage;
        footer?: HighlyStructuredMessage;
        buttons?: TemplateButton[];
        documentMessage?: DocumentMessage;
        highlyStructuredMessage?: HighlyStructuredMessage;
        imageMessage?: ImageMessage;
        videoMessage?: VideoMessage;
        locationMessage?: LocationMessage;
    }) {
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
    get content(): HighlyStructuredMessage {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 6) as HighlyStructuredMessage;
    }
    set content(value: HighlyStructuredMessage) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get footer(): HighlyStructuredMessage {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 7) as HighlyStructuredMessage;
    }
    set footer(value: HighlyStructuredMessage) {
        pb_1.Message.setWrapperField(this, 7, value);
    }
    get buttons(): TemplateButton[] {
        return pb_1.Message.getRepeatedWrapperField(this, TemplateButton, 8) as TemplateButton[];
    }
    set buttons(value: TemplateButton[]) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    get documentMessage(): DocumentMessage {
        return pb_1.Message.getWrapperField(this, DocumentMessage, 1) as DocumentMessage;
    }
    set documentMessage(value: DocumentMessage) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get highlyStructuredMessage(): HighlyStructuredMessage {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 2) as HighlyStructuredMessage;
    }
    set highlyStructuredMessage(value: HighlyStructuredMessage) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get imageMessage(): ImageMessage {
        return pb_1.Message.getWrapperField(this, ImageMessage, 3) as ImageMessage;
    }
    set imageMessage(value: ImageMessage) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get videoMessage(): VideoMessage {
        return pb_1.Message.getWrapperField(this, VideoMessage, 4) as VideoMessage;
    }
    set videoMessage(value: VideoMessage) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get locationMessage(): LocationMessage {
        return pb_1.Message.getWrapperField(this, LocationMessage, 5) as LocationMessage;
    }
    set locationMessage(value: LocationMessage) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    toObject() {
        return {
            content: this.content && this.content.toObject(),
            footer: this.footer && this.footer.toObject(),
            buttons: this.buttons.map((item: TemplateButton) => item.toObject()),
            documentMessage: this.documentMessage && this.documentMessage.toObject(),
            highlyStructuredMessage: this.highlyStructuredMessage && this.highlyStructuredMessage.toObject(),
            imageMessage: this.imageMessage && this.imageMessage.toObject(),
            videoMessage: this.videoMessage && this.videoMessage.toObject(),
            locationMessage: this.locationMessage && this.locationMessage.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.content !== undefined)
            writer.writeMessage(6, this.content, () => this.content.serialize(writer));
        if (this.footer !== undefined)
            writer.writeMessage(7, this.footer, () => this.footer.serialize(writer));
        if (this.buttons !== undefined)
            writer.writeRepeatedMessage(8, this.buttons, (item: TemplateButton) => item.serialize(writer));
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FourRowTemplate {
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
export class HydratedFourRowTemplate extends pb_1.Message {
    constructor(data?: any[] | {
        hydratedContentText?: string;
        hydratedFooterText?: string;
        hydratedButtons?: HydratedTemplateButton[];
        templateId?: string;
        documentMessage?: DocumentMessage;
        hydratedTitleText?: string;
        imageMessage?: ImageMessage;
        videoMessage?: VideoMessage;
        locationMessage?: LocationMessage;
    }) {
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
    get hydratedContentText(): string {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as string;
    }
    set hydratedContentText(value: string) {
        pb_1.Message.setField(this, 6, value);
    }
    get hydratedFooterText(): string {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as string;
    }
    set hydratedFooterText(value: string) {
        pb_1.Message.setField(this, 7, value);
    }
    get hydratedButtons(): HydratedTemplateButton[] {
        return pb_1.Message.getRepeatedWrapperField(this, HydratedTemplateButton, 8) as HydratedTemplateButton[];
    }
    set hydratedButtons(value: HydratedTemplateButton[]) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    get templateId(): string {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined) as string;
    }
    set templateId(value: string) {
        pb_1.Message.setField(this, 9, value);
    }
    get documentMessage(): DocumentMessage {
        return pb_1.Message.getWrapperField(this, DocumentMessage, 1) as DocumentMessage;
    }
    set documentMessage(value: DocumentMessage) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get hydratedTitleText(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set hydratedTitleText(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get imageMessage(): ImageMessage {
        return pb_1.Message.getWrapperField(this, ImageMessage, 3) as ImageMessage;
    }
    set imageMessage(value: ImageMessage) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get videoMessage(): VideoMessage {
        return pb_1.Message.getWrapperField(this, VideoMessage, 4) as VideoMessage;
    }
    set videoMessage(value: VideoMessage) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get locationMessage(): LocationMessage {
        return pb_1.Message.getWrapperField(this, LocationMessage, 5) as LocationMessage;
    }
    set locationMessage(value: LocationMessage) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    toObject() {
        return {
            hydratedContentText: this.hydratedContentText,
            hydratedFooterText: this.hydratedFooterText,
            hydratedButtons: this.hydratedButtons.map((item: HydratedTemplateButton) => item.toObject()),
            templateId: this.templateId,
            documentMessage: this.documentMessage && this.documentMessage.toObject(),
            hydratedTitleText: this.hydratedTitleText,
            imageMessage: this.imageMessage && this.imageMessage.toObject(),
            videoMessage: this.videoMessage && this.videoMessage.toObject(),
            locationMessage: this.locationMessage && this.locationMessage.toObject()
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.hydratedContentText === "string" && this.hydratedContentText.length)
            writer.writeString(6, this.hydratedContentText);
        if (typeof this.hydratedFooterText === "string" && this.hydratedFooterText.length)
            writer.writeString(7, this.hydratedFooterText);
        if (this.hydratedButtons !== undefined)
            writer.writeRepeatedMessage(8, this.hydratedButtons, (item: HydratedTemplateButton) => item.serialize(writer));
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HydratedFourRowTemplate {
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
export class TemplateMessage extends pb_1.Message {
    constructor(data?: any[] | {
        contextInfo?: ContextInfo;
        hydratedTemplate?: HydratedFourRowTemplate;
        fourRowTemplate?: FourRowTemplate;
        hydratedFourRowTemplate?: HydratedFourRowTemplate;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.contextInfo = data.contextInfo;
            this.hydratedTemplate = data.hydratedTemplate;
            this.fourRowTemplate = data.fourRowTemplate;
            this.hydratedFourRowTemplate = data.hydratedFourRowTemplate;
        }
    }
    get contextInfo(): ContextInfo {
        return pb_1.Message.getWrapperField(this, ContextInfo, 3) as ContextInfo;
    }
    set contextInfo(value: ContextInfo) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get hydratedTemplate(): HydratedFourRowTemplate {
        return pb_1.Message.getWrapperField(this, HydratedFourRowTemplate, 4) as HydratedFourRowTemplate;
    }
    set hydratedTemplate(value: HydratedFourRowTemplate) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get fourRowTemplate(): FourRowTemplate {
        return pb_1.Message.getWrapperField(this, FourRowTemplate, 1) as FourRowTemplate;
    }
    set fourRowTemplate(value: FourRowTemplate) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get hydratedFourRowTemplate(): HydratedFourRowTemplate {
        return pb_1.Message.getWrapperField(this, HydratedFourRowTemplate, 2) as HydratedFourRowTemplate;
    }
    set hydratedFourRowTemplate(value: HydratedFourRowTemplate) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TemplateMessage {
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
export class TemplateButtonReplyMessage extends pb_1.Message {
    constructor(data?: any[] | {
        selectedId?: string;
        selectedDisplayText?: string;
        contextInfo?: ContextInfo;
        selectedIndex?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.selectedId = data.selectedId;
            this.selectedDisplayText = data.selectedDisplayText;
            this.contextInfo = data.contextInfo;
            this.selectedIndex = data.selectedIndex;
        }
    }
    get selectedId(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set selectedId(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get selectedDisplayText(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set selectedDisplayText(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get contextInfo(): ContextInfo {
        return pb_1.Message.getWrapperField(this, ContextInfo, 3) as ContextInfo;
    }
    set contextInfo(value: ContextInfo) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get selectedIndex(): number {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as number;
    }
    set selectedIndex(value: number) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TemplateButtonReplyMessage {
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
export class CatalogSnapshot extends pb_1.Message {
    constructor(data?: any[] | {
        catalogImage?: ImageMessage;
        title?: string;
        description?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.catalogImage = data.catalogImage;
            this.title = data.title;
            this.description = data.description;
        }
    }
    get catalogImage(): ImageMessage {
        return pb_1.Message.getWrapperField(this, ImageMessage, 1) as ImageMessage;
    }
    set catalogImage(value: ImageMessage) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get title(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set title(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get description(): string {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string;
    }
    set description(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    toObject() {
        return {
            catalogImage: this.catalogImage && this.catalogImage.toObject(),
            title: this.title,
            description: this.description
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CatalogSnapshot {
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
export class ProductSnapshot extends pb_1.Message {
    constructor(data?: any[] | {
        productImage?: ImageMessage;
        productId?: string;
        title?: string;
        description?: string;
        currencyCode?: string;
        priceAmount1000?: number;
        retailerId?: string;
        url?: string;
        productImageCount?: number;
        firstImageId?: string;
    }) {
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
    get productImage(): ImageMessage {
        return pb_1.Message.getWrapperField(this, ImageMessage, 1) as ImageMessage;
    }
    set productImage(value: ImageMessage) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get productId(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set productId(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get title(): string {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string;
    }
    set title(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    get description(): string {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string;
    }
    set description(value: string) {
        pb_1.Message.setField(this, 4, value);
    }
    get currencyCode(): string {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as string;
    }
    set currencyCode(value: string) {
        pb_1.Message.setField(this, 5, value);
    }
    get priceAmount1000(): number {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as number;
    }
    set priceAmount1000(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get retailerId(): string {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as string;
    }
    set retailerId(value: string) {
        pb_1.Message.setField(this, 7, value);
    }
    get url(): string {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as string;
    }
    set url(value: string) {
        pb_1.Message.setField(this, 8, value);
    }
    get productImageCount(): number {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined) as number;
    }
    set productImageCount(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get firstImageId(): string {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined) as string;
    }
    set firstImageId(value: string) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProductSnapshot {
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
export class ProductMessage extends pb_1.Message {
    constructor(data?: any[] | {
        product?: ProductSnapshot;
        businessOwnerJid?: string;
        catalog?: CatalogSnapshot;
        contextInfo?: ContextInfo;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.product = data.product;
            this.businessOwnerJid = data.businessOwnerJid;
            this.catalog = data.catalog;
            this.contextInfo = data.contextInfo;
        }
    }
    get product(): ProductSnapshot {
        return pb_1.Message.getWrapperField(this, ProductSnapshot, 1) as ProductSnapshot;
    }
    set product(value: ProductSnapshot) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get businessOwnerJid(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set businessOwnerJid(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get catalog(): CatalogSnapshot {
        return pb_1.Message.getWrapperField(this, CatalogSnapshot, 4) as CatalogSnapshot;
    }
    set catalog(value: CatalogSnapshot) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get contextInfo(): ContextInfo {
        return pb_1.Message.getWrapperField(this, ContextInfo, 17) as ContextInfo;
    }
    set contextInfo(value: ContextInfo) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProductMessage {
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
export class GroupInviteMessage extends pb_1.Message {
    constructor(data?: any[] | {
        groupJid?: string;
        inviteCode?: string;
        inviteExpiration?: number;
        groupName?: string;
        jpegThumbnail?: Uint8Array;
        caption?: string;
        contextInfo?: ContextInfo;
    }) {
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
    get groupJid(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set groupJid(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get inviteCode(): string {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
    }
    set inviteCode(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get inviteExpiration(): number {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number;
    }
    set inviteExpiration(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get groupName(): string {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string;
    }
    set groupName(value: string) {
        pb_1.Message.setField(this, 4, value);
    }
    get jpegThumbnail(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as Uint8Array;
    }
    set jpegThumbnail(value: Uint8Array) {
        pb_1.Message.setField(this, 5, value);
    }
    get caption(): string {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as string;
    }
    set caption(value: string) {
        pb_1.Message.setField(this, 6, value);
    }
    get contextInfo(): ContextInfo {
        return pb_1.Message.getWrapperField(this, ContextInfo, 7) as ContextInfo;
    }
    set contextInfo(value: ContextInfo) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GroupInviteMessage {
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
export class DeviceSentMessage extends pb_1.Message {
    constructor(data?: any[] | {
        destinationJid?: string;
        message?: Message;
        phash?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.destinationJid = data.destinationJid;
            this.message = data.message;
            this.phash = data.phash;
        }
    }
    get destinationJid(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set destinationJid(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get message(): Message {
        return pb_1.Message.getWrapperField(this, Message, 2) as Message;
    }
    set message(value: Message) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get phash(): string {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string;
    }
    set phash(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    toObject() {
        return {
            destinationJid: this.destinationJid,
            message: this.message && this.message.toObject(),
            phash: this.phash
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeviceSentMessage {
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
export class Message extends pb_1.Message {
    constructor(data?: any[] | {
        conversation?: string;
        senderKeyDistributionMessage?: SenderKeyDistributionMessage;
        imageMessage?: ImageMessage;
        contactMessage?: ContactMessage;
        locationMessage?: LocationMessage;
        extendedTextMessage?: ExtendedTextMessage;
        documentMessage?: DocumentMessage;
        audioMessage?: AudioMessage;
        videoMessage?: VideoMessage;
        call?: Call;
        chat?: Chat;
        protocolMessage?: ProtocolMessage;
        contactsArrayMessage?: ContactsArrayMessage;
        highlyStructuredMessage?: HighlyStructuredMessage;
        fastRatchetKeySenderKeyDistributionMessage?: SenderKeyDistributionMessage;
        sendPaymentMessage?: SendPaymentMessage;
        liveLocationMessage?: LiveLocationMessage;
        requestPaymentMessage?: RequestPaymentMessage;
        declinePaymentRequestMessage?: DeclinePaymentRequestMessage;
        cancelPaymentRequestMessage?: CancelPaymentRequestMessage;
        templateMessage?: TemplateMessage;
        stickerMessage?: StickerMessage;
        groupInviteMessage?: GroupInviteMessage;
        templateButtonReplyMessage?: TemplateButtonReplyMessage;
        productMessage?: ProductMessage;
        deviceSentMessage?: DeviceSentMessage;
    }) {
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
    get conversation(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set conversation(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get senderKeyDistributionMessage(): SenderKeyDistributionMessage {
        return pb_1.Message.getWrapperField(this, SenderKeyDistributionMessage, 2) as SenderKeyDistributionMessage;
    }
    set senderKeyDistributionMessage(value: SenderKeyDistributionMessage) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get imageMessage(): ImageMessage {
        return pb_1.Message.getWrapperField(this, ImageMessage, 3) as ImageMessage;
    }
    set imageMessage(value: ImageMessage) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get contactMessage(): ContactMessage {
        return pb_1.Message.getWrapperField(this, ContactMessage, 4) as ContactMessage;
    }
    set contactMessage(value: ContactMessage) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get locationMessage(): LocationMessage {
        return pb_1.Message.getWrapperField(this, LocationMessage, 5) as LocationMessage;
    }
    set locationMessage(value: LocationMessage) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get extendedTextMessage(): ExtendedTextMessage {
        return pb_1.Message.getWrapperField(this, ExtendedTextMessage, 6) as ExtendedTextMessage;
    }
    set extendedTextMessage(value: ExtendedTextMessage) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get documentMessage(): DocumentMessage {
        return pb_1.Message.getWrapperField(this, DocumentMessage, 7) as DocumentMessage;
    }
    set documentMessage(value: DocumentMessage) {
        pb_1.Message.setWrapperField(this, 7, value);
    }
    get audioMessage(): AudioMessage {
        return pb_1.Message.getWrapperField(this, AudioMessage, 8) as AudioMessage;
    }
    set audioMessage(value: AudioMessage) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get videoMessage(): VideoMessage {
        return pb_1.Message.getWrapperField(this, VideoMessage, 9) as VideoMessage;
    }
    set videoMessage(value: VideoMessage) {
        pb_1.Message.setWrapperField(this, 9, value);
    }
    get call(): Call {
        return pb_1.Message.getWrapperField(this, Call, 10) as Call;
    }
    set call(value: Call) {
        pb_1.Message.setWrapperField(this, 10, value);
    }
    get chat(): Chat {
        return pb_1.Message.getWrapperField(this, Chat, 11) as Chat;
    }
    set chat(value: Chat) {
        pb_1.Message.setWrapperField(this, 11, value);
    }
    get protocolMessage(): ProtocolMessage {
        return pb_1.Message.getWrapperField(this, ProtocolMessage, 12) as ProtocolMessage;
    }
    set protocolMessage(value: ProtocolMessage) {
        pb_1.Message.setWrapperField(this, 12, value);
    }
    get contactsArrayMessage(): ContactsArrayMessage {
        return pb_1.Message.getWrapperField(this, ContactsArrayMessage, 13) as ContactsArrayMessage;
    }
    set contactsArrayMessage(value: ContactsArrayMessage) {
        pb_1.Message.setWrapperField(this, 13, value);
    }
    get highlyStructuredMessage(): HighlyStructuredMessage {
        return pb_1.Message.getWrapperField(this, HighlyStructuredMessage, 14) as HighlyStructuredMessage;
    }
    set highlyStructuredMessage(value: HighlyStructuredMessage) {
        pb_1.Message.setWrapperField(this, 14, value);
    }
    get fastRatchetKeySenderKeyDistributionMessage(): SenderKeyDistributionMessage {
        return pb_1.Message.getWrapperField(this, SenderKeyDistributionMessage, 15) as SenderKeyDistributionMessage;
    }
    set fastRatchetKeySenderKeyDistributionMessage(value: SenderKeyDistributionMessage) {
        pb_1.Message.setWrapperField(this, 15, value);
    }
    get sendPaymentMessage(): SendPaymentMessage {
        return pb_1.Message.getWrapperField(this, SendPaymentMessage, 16) as SendPaymentMessage;
    }
    set sendPaymentMessage(value: SendPaymentMessage) {
        pb_1.Message.setWrapperField(this, 16, value);
    }
    get liveLocationMessage(): LiveLocationMessage {
        return pb_1.Message.getWrapperField(this, LiveLocationMessage, 18) as LiveLocationMessage;
    }
    set liveLocationMessage(value: LiveLocationMessage) {
        pb_1.Message.setWrapperField(this, 18, value);
    }
    get requestPaymentMessage(): RequestPaymentMessage {
        return pb_1.Message.getWrapperField(this, RequestPaymentMessage, 22) as RequestPaymentMessage;
    }
    set requestPaymentMessage(value: RequestPaymentMessage) {
        pb_1.Message.setWrapperField(this, 22, value);
    }
    get declinePaymentRequestMessage(): DeclinePaymentRequestMessage {
        return pb_1.Message.getWrapperField(this, DeclinePaymentRequestMessage, 23) as DeclinePaymentRequestMessage;
    }
    set declinePaymentRequestMessage(value: DeclinePaymentRequestMessage) {
        pb_1.Message.setWrapperField(this, 23, value);
    }
    get cancelPaymentRequestMessage(): CancelPaymentRequestMessage {
        return pb_1.Message.getWrapperField(this, CancelPaymentRequestMessage, 24) as CancelPaymentRequestMessage;
    }
    set cancelPaymentRequestMessage(value: CancelPaymentRequestMessage) {
        pb_1.Message.setWrapperField(this, 24, value);
    }
    get templateMessage(): TemplateMessage {
        return pb_1.Message.getWrapperField(this, TemplateMessage, 25) as TemplateMessage;
    }
    set templateMessage(value: TemplateMessage) {
        pb_1.Message.setWrapperField(this, 25, value);
    }
    get stickerMessage(): StickerMessage {
        return pb_1.Message.getWrapperField(this, StickerMessage, 26) as StickerMessage;
    }
    set stickerMessage(value: StickerMessage) {
        pb_1.Message.setWrapperField(this, 26, value);
    }
    get groupInviteMessage(): GroupInviteMessage {
        return pb_1.Message.getWrapperField(this, GroupInviteMessage, 28) as GroupInviteMessage;
    }
    set groupInviteMessage(value: GroupInviteMessage) {
        pb_1.Message.setWrapperField(this, 28, value);
    }
    get templateButtonReplyMessage(): TemplateButtonReplyMessage {
        return pb_1.Message.getWrapperField(this, TemplateButtonReplyMessage, 29) as TemplateButtonReplyMessage;
    }
    set templateButtonReplyMessage(value: TemplateButtonReplyMessage) {
        pb_1.Message.setWrapperField(this, 29, value);
    }
    get productMessage(): ProductMessage {
        return pb_1.Message.getWrapperField(this, ProductMessage, 30) as ProductMessage;
    }
    set productMessage(value: ProductMessage) {
        pb_1.Message.setWrapperField(this, 30, value);
    }
    get deviceSentMessage(): DeviceSentMessage {
        return pb_1.Message.getWrapperField(this, DeviceSentMessage, 31) as DeviceSentMessage;
    }
    set deviceSentMessage(value: DeviceSentMessage) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Message {
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
export class MessageKey extends pb_1.Message {
    constructor(data?: any[] | {
        remoteJid?: string;
        fromMe?: boolean;
        id?: string;
        participant?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.remoteJid = data.remoteJid;
            this.fromMe = data.fromMe;
            this.id = data.id;
            this.participant = data.participant;
        }
    }
    get remoteJid(): string {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string;
    }
    set remoteJid(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get fromMe(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as boolean;
    }
    set fromMe(value: boolean) {
        pb_1.Message.setField(this, 2, value);
    }
    get id(): string {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string;
    }
    set id(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    get participant(): string {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string;
    }
    set participant(value: string) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MessageKey {
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
export class WebFeatures extends pb_1.Message {
    constructor(data?: any[] | {
        labelsDisplay?: WebFeatures.WEB_FEATURES_FLAG;
        voipIndividualOutgoing?: WebFeatures.WEB_FEATURES_FLAG;
        groupsV3?: WebFeatures.WEB_FEATURES_FLAG;
        groupsV3Create?: WebFeatures.WEB_FEATURES_FLAG;
        changeNumberV2?: WebFeatures.WEB_FEATURES_FLAG;
        queryStatusV3Thumbnail?: WebFeatures.WEB_FEATURES_FLAG;
        liveLocations?: WebFeatures.WEB_FEATURES_FLAG;
        queryVname?: WebFeatures.WEB_FEATURES_FLAG;
        voipIndividualIncoming?: WebFeatures.WEB_FEATURES_FLAG;
        quickRepliesQuery?: WebFeatures.WEB_FEATURES_FLAG;
        payments?: WebFeatures.WEB_FEATURES_FLAG;
        stickerPackQuery?: WebFeatures.WEB_FEATURES_FLAG;
        liveLocationsFinal?: WebFeatures.WEB_FEATURES_FLAG;
        labelsEdit?: WebFeatures.WEB_FEATURES_FLAG;
        mediaUpload?: WebFeatures.WEB_FEATURES_FLAG;
        mediaUploadRichQuickReplies?: WebFeatures.WEB_FEATURES_FLAG;
        vnameV2?: WebFeatures.WEB_FEATURES_FLAG;
        videoPlaybackUrl?: WebFeatures.WEB_FEATURES_FLAG;
        statusRanking?: WebFeatures.WEB_FEATURES_FLAG;
        voipIndividualVideo?: WebFeatures.WEB_FEATURES_FLAG;
        thirdPartyStickers?: WebFeatures.WEB_FEATURES_FLAG;
        frequentlyForwardedSetting?: WebFeatures.WEB_FEATURES_FLAG;
        groupsV4JoinPermission?: WebFeatures.WEB_FEATURES_FLAG;
        recentStickers?: WebFeatures.WEB_FEATURES_FLAG;
        catalog?: WebFeatures.WEB_FEATURES_FLAG;
        starredStickers?: WebFeatures.WEB_FEATURES_FLAG;
        voipGroupCall?: WebFeatures.WEB_FEATURES_FLAG;
        templateMessage?: WebFeatures.WEB_FEATURES_FLAG;
        templateMessageInteractivity?: WebFeatures.WEB_FEATURES_FLAG;
        ephemeralMessages?: WebFeatures.WEB_FEATURES_FLAG;
        e2ENotificationSync?: WebFeatures.WEB_FEATURES_FLAG;
        recentStickersV2?: WebFeatures.WEB_FEATURES_FLAG;
        syncdRelease1?: WebFeatures.WEB_FEATURES_FLAG;
    }) {
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
    get labelsDisplay(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set labelsDisplay(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 1, value);
    }
    get voipIndividualOutgoing(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set voipIndividualOutgoing(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 2, value);
    }
    get groupsV3(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set groupsV3(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 3, value);
    }
    get groupsV3Create(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set groupsV3Create(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 4, value);
    }
    get changeNumberV2(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set changeNumberV2(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 5, value);
    }
    get queryStatusV3Thumbnail(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 6, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set queryStatusV3Thumbnail(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 6, value);
    }
    get liveLocations(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set liveLocations(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 7, value);
    }
    get queryVname(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set queryVname(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 8, value);
    }
    get voipIndividualIncoming(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set voipIndividualIncoming(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 9, value);
    }
    get quickRepliesQuery(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set quickRepliesQuery(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 10, value);
    }
    get payments(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 11, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set payments(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 11, value);
    }
    get stickerPackQuery(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 12, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set stickerPackQuery(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 12, value);
    }
    get liveLocationsFinal(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 13, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set liveLocationsFinal(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 13, value);
    }
    get labelsEdit(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 14, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set labelsEdit(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 14, value);
    }
    get mediaUpload(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 15, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set mediaUpload(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 15, value);
    }
    get mediaUploadRichQuickReplies(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 18, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set mediaUploadRichQuickReplies(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 18, value);
    }
    get vnameV2(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 19, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set vnameV2(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 19, value);
    }
    get videoPlaybackUrl(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 20, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set videoPlaybackUrl(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 20, value);
    }
    get statusRanking(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 21, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set statusRanking(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 21, value);
    }
    get voipIndividualVideo(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 22, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set voipIndividualVideo(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 22, value);
    }
    get thirdPartyStickers(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 23, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set thirdPartyStickers(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 23, value);
    }
    get frequentlyForwardedSetting(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 24, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set frequentlyForwardedSetting(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 24, value);
    }
    get groupsV4JoinPermission(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 25, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set groupsV4JoinPermission(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 25, value);
    }
    get recentStickers(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 26, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set recentStickers(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 26, value);
    }
    get catalog(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 27, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set catalog(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 27, value);
    }
    get starredStickers(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 28, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set starredStickers(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 28, value);
    }
    get voipGroupCall(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 29, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set voipGroupCall(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 29, value);
    }
    get templateMessage(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 30, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set templateMessage(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 30, value);
    }
    get templateMessageInteractivity(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 31, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set templateMessageInteractivity(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 31, value);
    }
    get ephemeralMessages(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 32, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set ephemeralMessages(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 32, value);
    }
    get e2ENotificationSync(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 33, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set e2ENotificationSync(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 33, value);
    }
    get recentStickersV2(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 34, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set recentStickersV2(value: WebFeatures.WEB_FEATURES_FLAG) {
        pb_1.Message.setField(this, 34, value);
    }
    get syncdRelease1(): WebFeatures.WEB_FEATURES_FLAG {
        return pb_1.Message.getFieldWithDefault(this, 35, undefined) as WebFeatures.WEB_FEATURES_FLAG;
    }
    set syncdRelease1(value: WebFeatures.WEB_FEATURES_FLAG) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WebFeatures {
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
export namespace WebFeatures {
    export enum WEB_FEATURES_FLAG {
        NOT_STARTED = 0,
        FORCE_UPGRADE = 1,
        DEVELOPMENT = 2,
        PRODUCTION = 3
    }
}
export class TabletNotificationsInfo extends pb_1.Message {
    constructor(data?: any[] | {
        timestamp?: number;
        unreadChats?: number;
        notifyMessageCount?: number;
        notifyMessage?: NotificationMessageInfo[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [5], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.timestamp = data.timestamp;
            this.unreadChats = data.unreadChats;
            this.notifyMessageCount = data.notifyMessageCount;
            this.notifyMessage = data.notifyMessage;
        }
    }
    get timestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set timestamp(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get unreadChats(): number {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number;
    }
    set unreadChats(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get notifyMessageCount(): number {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as number;
    }
    set notifyMessageCount(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get notifyMessage(): NotificationMessageInfo[] {
        return pb_1.Message.getRepeatedWrapperField(this, NotificationMessageInfo, 5) as NotificationMessageInfo[];
    }
    set notifyMessage(value: NotificationMessageInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 5, value);
    }
    toObject() {
        return {
            timestamp: this.timestamp,
            unreadChats: this.unreadChats,
            notifyMessageCount: this.notifyMessageCount,
            notifyMessage: this.notifyMessage.map((item: NotificationMessageInfo) => item.toObject())
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.timestamp !== undefined)
            writer.writeUint64(2, this.timestamp);
        if (this.unreadChats !== undefined)
            writer.writeUint32(3, this.unreadChats);
        if (this.notifyMessageCount !== undefined)
            writer.writeUint32(4, this.notifyMessageCount);
        if (this.notifyMessage !== undefined)
            writer.writeRepeatedMessage(5, this.notifyMessage, (item: NotificationMessageInfo) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TabletNotificationsInfo {
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
export class NotificationMessageInfo extends pb_1.Message {
    constructor(data?: any[] | {
        key?: MessageKey;
        message?: Message;
        messageTimestamp?: number;
        participant?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.key = data.key;
            this.message = data.message;
            this.messageTimestamp = data.messageTimestamp;
            this.participant = data.participant;
        }
    }
    get key(): MessageKey {
        return pb_1.Message.getWrapperField(this, MessageKey, 1) as MessageKey;
    }
    set key(value: MessageKey) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get message(): Message {
        return pb_1.Message.getWrapperField(this, Message, 2) as Message;
    }
    set message(value: Message) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get messageTimestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number;
    }
    set messageTimestamp(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get participant(): string {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string;
    }
    set participant(value: string) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): NotificationMessageInfo {
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
export class WebNotificationsInfo extends pb_1.Message {
    constructor(data?: any[] | {
        timestamp?: number;
        unreadChats?: number;
        notifyMessageCount?: number;
        notifyMessages?: WebMessageInfo[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [5], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.timestamp = data.timestamp;
            this.unreadChats = data.unreadChats;
            this.notifyMessageCount = data.notifyMessageCount;
            this.notifyMessages = data.notifyMessages;
        }
    }
    get timestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set timestamp(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get unreadChats(): number {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number;
    }
    set unreadChats(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get notifyMessageCount(): number {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as number;
    }
    set notifyMessageCount(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get notifyMessages(): WebMessageInfo[] {
        return pb_1.Message.getRepeatedWrapperField(this, WebMessageInfo, 5) as WebMessageInfo[];
    }
    set notifyMessages(value: WebMessageInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 5, value);
    }
    toObject() {
        return {
            timestamp: this.timestamp,
            unreadChats: this.unreadChats,
            notifyMessageCount: this.notifyMessageCount,
            notifyMessages: this.notifyMessages.map((item: WebMessageInfo) => item.toObject())
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.timestamp !== undefined)
            writer.writeUint64(2, this.timestamp);
        if (this.unreadChats !== undefined)
            writer.writeUint32(3, this.unreadChats);
        if (this.notifyMessageCount !== undefined)
            writer.writeUint32(4, this.notifyMessageCount);
        if (this.notifyMessages !== undefined)
            writer.writeRepeatedMessage(5, this.notifyMessages, (item: WebMessageInfo) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WebNotificationsInfo {
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
export class PaymentInfo extends pb_1.Message {
    constructor(data?: any[] | {
        currencyDeprecated?: PaymentInfo.PAYMENT_INFO_CURRENCY;
        amount1000?: number;
        receiverJid?: string;
        status?: PaymentInfo.PAYMENT_INFO_STATUS;
        transactionTimestamp?: number;
        requestMessageKey?: MessageKey;
        expiryTimestamp?: number;
        futureproofed?: boolean;
        currency?: string;
        txnStatus?: PaymentInfo.PAYMENT_INFO_TXNSTATUS;
    }) {
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
    get currencyDeprecated(): PaymentInfo.PAYMENT_INFO_CURRENCY {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as PaymentInfo.PAYMENT_INFO_CURRENCY;
    }
    set currencyDeprecated(value: PaymentInfo.PAYMENT_INFO_CURRENCY) {
        pb_1.Message.setField(this, 1, value);
    }
    get amount1000(): number {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number;
    }
    set amount1000(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get receiverJid(): string {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string;
    }
    set receiverJid(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    get status(): PaymentInfo.PAYMENT_INFO_STATUS {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as PaymentInfo.PAYMENT_INFO_STATUS;
    }
    set status(value: PaymentInfo.PAYMENT_INFO_STATUS) {
        pb_1.Message.setField(this, 4, value);
    }
    get transactionTimestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number;
    }
    set transactionTimestamp(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get requestMessageKey(): MessageKey {
        return pb_1.Message.getWrapperField(this, MessageKey, 6) as MessageKey;
    }
    set requestMessageKey(value: MessageKey) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get expiryTimestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 7, undefined) as number;
    }
    set expiryTimestamp(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get futureproofed(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 8, undefined) as boolean;
    }
    set futureproofed(value: boolean) {
        pb_1.Message.setField(this, 8, value);
    }
    get currency(): string {
        return pb_1.Message.getFieldWithDefault(this, 9, undefined) as string;
    }
    set currency(value: string) {
        pb_1.Message.setField(this, 9, value);
    }
    get txnStatus(): PaymentInfo.PAYMENT_INFO_TXNSTATUS {
        return pb_1.Message.getFieldWithDefault(this, 10, undefined) as PaymentInfo.PAYMENT_INFO_TXNSTATUS;
    }
    set txnStatus(value: PaymentInfo.PAYMENT_INFO_TXNSTATUS) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PaymentInfo {
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
export namespace PaymentInfo {
    export enum PAYMENT_INFO_CURRENCY {
        UNKNOWN_CURRENCY = 0,
        INR = 1
    }
    export enum PAYMENT_INFO_STATUS {
        UNKNOWN_STATUS = 0,
        PROCESSING = 1,
        SENT = 2,
        NEED_TO_ACCEPT = 3,
        COMPLETE = 4,
        COULD_NOT_COMPLETE = 5,
        REFUNDED = 6,
        EXPIRED = 7,
        REJECTED = 8,
        CANCELLED = 9,
        WAITING_FOR_PAYER = 10,
        WAITING = 11
    }
    export enum PAYMENT_INFO_TXNSTATUS {
        UNKNOWN = 0,
        PENDING_SETUP = 1,
        PENDING_RECEIVER_SETUP = 2,
        INIT = 3,
        SUCCESS = 4,
        COMPLETED = 5,
        FAILED = 6,
        FAILED_RISK = 7,
        FAILED_PROCESSING = 8,
        FAILED_RECEIVER_PROCESSING = 9,
        FAILED_DA = 10,
        FAILED_DA_FINAL = 11,
        REFUNDED_TXN = 12,
        REFUND_FAILED = 13,
        REFUND_FAILED_PROCESSING = 14,
        REFUND_FAILED_DA = 15,
        EXPIRED_TXN = 16,
        AUTH_CANCELED = 17,
        AUTH_CANCEL_FAILED_PROCESSING = 18,
        AUTH_CANCEL_FAILED = 19,
        COLLECT_INIT = 20,
        COLLECT_SUCCESS = 21,
        COLLECT_FAILED = 22,
        COLLECT_FAILED_RISK = 23,
        COLLECT_REJECTED = 24,
        COLLECT_EXPIRED = 25,
        COLLECT_CANCELED = 26,
        COLLECT_CANCELLING = 27
    }
}
export class WebMessageInfo extends pb_1.Message {
    constructor(data?: any[] | {
        key?: MessageKey;
        message?: Message;
        messageTimestamp?: number;
        status?: WebMessageInfo.WEB_MESSAGE_INFO_STATUS;
        participant?: string;
        ignore?: boolean;
        starred?: boolean;
        broadcast?: boolean;
        pushName?: string;
        mediaCiphertextSha256?: Uint8Array;
        multicast?: boolean;
        urlText?: boolean;
        urlNumber?: boolean;
        messageStubType?: WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE;
        clearMedia?: boolean;
        messageStubParameters?: string[];
        duration?: number;
        labels?: string[];
        paymentInfo?: PaymentInfo;
        finalLiveLocation?: LiveLocationMessage;
        quotedPaymentInfo?: PaymentInfo;
        ephemeralStartTimestamp?: number;
        ephemeralDuration?: number;
        ephemeralOffToOn?: boolean;
    }) {
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
    get key(): MessageKey {
        return pb_1.Message.getWrapperField(this, MessageKey, 1) as MessageKey;
    }
    set key(value: MessageKey) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get message(): Message {
        return pb_1.Message.getWrapperField(this, Message, 2) as Message;
    }
    set message(value: Message) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get messageTimestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number;
    }
    set messageTimestamp(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get status(): WebMessageInfo.WEB_MESSAGE_INFO_STATUS {
        return pb_1.Message.getFieldWithDefault(this, 4, undefined) as WebMessageInfo.WEB_MESSAGE_INFO_STATUS;
    }
    set status(value: WebMessageInfo.WEB_MESSAGE_INFO_STATUS) {
        pb_1.Message.setField(this, 4, value);
    }
    get participant(): string {
        return pb_1.Message.getFieldWithDefault(this, 5, undefined) as string;
    }
    set participant(value: string) {
        pb_1.Message.setField(this, 5, value);
    }
    get ignore(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 16, undefined) as boolean;
    }
    set ignore(value: boolean) {
        pb_1.Message.setField(this, 16, value);
    }
    get starred(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 17, undefined) as boolean;
    }
    set starred(value: boolean) {
        pb_1.Message.setField(this, 17, value);
    }
    get broadcast(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 18, undefined) as boolean;
    }
    set broadcast(value: boolean) {
        pb_1.Message.setField(this, 18, value);
    }
    get pushName(): string {
        return pb_1.Message.getFieldWithDefault(this, 19, undefined) as string;
    }
    set pushName(value: string) {
        pb_1.Message.setField(this, 19, value);
    }
    get mediaCiphertextSha256(): Uint8Array {
        return pb_1.Message.getFieldWithDefault(this, 20, undefined) as Uint8Array;
    }
    set mediaCiphertextSha256(value: Uint8Array) {
        pb_1.Message.setField(this, 20, value);
    }
    get multicast(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 21, undefined) as boolean;
    }
    set multicast(value: boolean) {
        pb_1.Message.setField(this, 21, value);
    }
    get urlText(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 22, undefined) as boolean;
    }
    set urlText(value: boolean) {
        pb_1.Message.setField(this, 22, value);
    }
    get urlNumber(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 23, undefined) as boolean;
    }
    set urlNumber(value: boolean) {
        pb_1.Message.setField(this, 23, value);
    }
    get messageStubType(): WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE {
        return pb_1.Message.getFieldWithDefault(this, 24, undefined) as WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE;
    }
    set messageStubType(value: WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE) {
        pb_1.Message.setField(this, 24, value);
    }
    get clearMedia(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 25, undefined) as boolean;
    }
    set clearMedia(value: boolean) {
        pb_1.Message.setField(this, 25, value);
    }
    get messageStubParameters(): string[] {
        return pb_1.Message.getField(this, 26) as string[];
    }
    set messageStubParameters(value: string[]) {
        pb_1.Message.setField(this, 26, value);
    }
    get duration(): number {
        return pb_1.Message.getFieldWithDefault(this, 27, undefined) as number;
    }
    set duration(value: number) {
        pb_1.Message.setField(this, 27, value);
    }
    get labels(): string[] {
        return pb_1.Message.getField(this, 28) as string[];
    }
    set labels(value: string[]) {
        pb_1.Message.setField(this, 28, value);
    }
    get paymentInfo(): PaymentInfo {
        return pb_1.Message.getWrapperField(this, PaymentInfo, 29) as PaymentInfo;
    }
    set paymentInfo(value: PaymentInfo) {
        pb_1.Message.setWrapperField(this, 29, value);
    }
    get finalLiveLocation(): LiveLocationMessage {
        return pb_1.Message.getWrapperField(this, LiveLocationMessage, 30) as LiveLocationMessage;
    }
    set finalLiveLocation(value: LiveLocationMessage) {
        pb_1.Message.setWrapperField(this, 30, value);
    }
    get quotedPaymentInfo(): PaymentInfo {
        return pb_1.Message.getWrapperField(this, PaymentInfo, 31) as PaymentInfo;
    }
    set quotedPaymentInfo(value: PaymentInfo) {
        pb_1.Message.setWrapperField(this, 31, value);
    }
    get ephemeralStartTimestamp(): number {
        return pb_1.Message.getFieldWithDefault(this, 32, undefined) as number;
    }
    set ephemeralStartTimestamp(value: number) {
        pb_1.Message.setField(this, 32, value);
    }
    get ephemeralDuration(): number {
        return pb_1.Message.getFieldWithDefault(this, 33, undefined) as number;
    }
    set ephemeralDuration(value: number) {
        pb_1.Message.setField(this, 33, value);
    }
    get ephemeralOffToOn(): boolean {
        return pb_1.Message.getFieldWithDefault(this, 34, undefined) as boolean;
    }
    set ephemeralOffToOn(value: boolean) {
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
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
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
    serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WebMessageInfo {
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
export namespace WebMessageInfo {
    export enum WEB_MESSAGE_INFO_STATUS {
        ERROR = 0,
        PENDING = 1,
        SERVER_ACK = 2,
        DELIVERY_ACK = 3,
        READ = 4,
        PLAYED = 5
    }
    export enum WEB_MESSAGE_INFO_STUBTYPE {
        UNKNOWN = 0,
        REVOKE = 1,
        CIPHERTEXT = 2,
        FUTUREPROOF = 3,
        NON_VERIFIED_TRANSITION = 4,
        UNVERIFIED_TRANSITION = 5,
        VERIFIED_TRANSITION = 6,
        VERIFIED_LOW_UNKNOWN = 7,
        VERIFIED_HIGH = 8,
        VERIFIED_INITIAL_UNKNOWN = 9,
        VERIFIED_INITIAL_LOW = 10,
        VERIFIED_INITIAL_HIGH = 11,
        VERIFIED_TRANSITION_ANY_TO_NONE = 12,
        VERIFIED_TRANSITION_ANY_TO_HIGH = 13,
        VERIFIED_TRANSITION_HIGH_TO_LOW = 14,
        VERIFIED_TRANSITION_HIGH_TO_UNKNOWN = 15,
        VERIFIED_TRANSITION_UNKNOWN_TO_LOW = 16,
        VERIFIED_TRANSITION_LOW_TO_UNKNOWN = 17,
        VERIFIED_TRANSITION_NONE_TO_LOW = 18,
        VERIFIED_TRANSITION_NONE_TO_UNKNOWN = 19,
        GROUP_CREATE = 20,
        GROUP_CHANGE_SUBJECT = 21,
        GROUP_CHANGE_ICON = 22,
        GROUP_CHANGE_INVITE_LINK = 23,
        GROUP_CHANGE_DESCRIPTION = 24,
        GROUP_CHANGE_RESTRICT = 25,
        GROUP_CHANGE_ANNOUNCE = 26,
        GROUP_PARTICIPANT_ADD = 27,
        GROUP_PARTICIPANT_REMOVE = 28,
        GROUP_PARTICIPANT_PROMOTE = 29,
        GROUP_PARTICIPANT_DEMOTE = 30,
        GROUP_PARTICIPANT_INVITE = 31,
        GROUP_PARTICIPANT_LEAVE = 32,
        GROUP_PARTICIPANT_CHANGE_NUMBER = 33,
        BROADCAST_CREATE = 34,
        BROADCAST_ADD = 35,
        BROADCAST_REMOVE = 36,
        GENERIC_NOTIFICATION = 37,
        E2E_IDENTITY_CHANGED = 38,
        E2E_ENCRYPTED = 39,
        CALL_MISSED_VOICE = 40,
        CALL_MISSED_VIDEO = 41,
        INDIVIDUAL_CHANGE_NUMBER = 42,
        GROUP_DELETE = 43,
        GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE = 44,
        CALL_MISSED_GROUP_VOICE = 45,
        CALL_MISSED_GROUP_VIDEO = 46,
        PAYMENT_CIPHERTEXT = 47,
        PAYMENT_FUTUREPROOF = 48,
        PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED = 49,
        PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED = 50,
        PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED = 51,
        PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP = 52,
        PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP = 53,
        PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER = 54,
        PAYMENT_ACTION_SEND_PAYMENT_REMINDER = 55,
        PAYMENT_ACTION_SEND_PAYMENT_INVITATION = 56,
        PAYMENT_ACTION_REQUEST_DECLINED = 57,
        PAYMENT_ACTION_REQUEST_EXPIRED = 58,
        PAYMENT_ACTION_REQUEST_CANCELLED = 59,
        BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM = 60,
        BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP = 61,
        BIZ_INTRO_TOP = 62,
        BIZ_INTRO_BOTTOM = 63,
        BIZ_NAME_CHANGE = 64,
        BIZ_MOVE_TO_CONSUMER_APP = 65,
        BIZ_TWO_TIER_MIGRATION_TOP = 66,
        BIZ_TWO_TIER_MIGRATION_BOTTOM = 67,
        OVERSIZED = 68,
        GROUP_CHANGE_NO_FREQUENTLY_FORWARDED = 69,
        GROUP_V4_ADD_INVITE_SENT = 70,
        GROUP_PARTICIPANT_ADD_REQUEST_JOIN = 71,
        CHANGE_EPHEMERAL_SETTING = 72
    }
}
