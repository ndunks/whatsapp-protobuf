import * as pb_1 from "google-protobuf";
export declare class HydratedQuickReplyButton extends pb_1.Message {
    constructor(data?: any[] | {
        displayText?: string;
        id?: string;
    });
    get displayText(): string;
    set displayText(value: string);
    get id(): string;
    set id(value: string);
    toObject(): {
        displayText: string;
        id: string;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HydratedQuickReplyButton;
}
export declare class HydratedURLButton extends pb_1.Message {
    constructor(data?: any[] | {
        displayText?: string;
        url?: string;
    });
    get displayText(): string;
    set displayText(value: string);
    get url(): string;
    set url(value: string);
    toObject(): {
        displayText: string;
        url: string;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HydratedURLButton;
}
export declare class HydratedCallButton extends pb_1.Message {
    constructor(data?: any[] | {
        displayText?: string;
        phoneNumber?: string;
    });
    get displayText(): string;
    set displayText(value: string);
    get phoneNumber(): string;
    set phoneNumber(value: string);
    toObject(): {
        displayText: string;
        phoneNumber: string;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HydratedCallButton;
}
export declare class HydratedTemplateButton extends pb_1.Message {
    constructor(data?: any[] | {
        index?: number;
        quickReplyButton?: HydratedQuickReplyButton;
        urlButton?: HydratedURLButton;
        callButton?: HydratedCallButton;
    });
    get index(): number;
    set index(value: number);
    get quickReplyButton(): HydratedQuickReplyButton;
    set quickReplyButton(value: HydratedQuickReplyButton);
    get urlButton(): HydratedURLButton;
    set urlButton(value: HydratedURLButton);
    get callButton(): HydratedCallButton;
    set callButton(value: HydratedCallButton);
    toObject(): {
        index: number;
        quickReplyButton: {
            displayText: string;
            id: string;
        };
        urlButton: {
            displayText: string;
            url: string;
        };
        callButton: {
            displayText: string;
            phoneNumber: string;
        };
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HydratedTemplateButton;
}
export declare class QuickReplyButton extends pb_1.Message {
    constructor(data?: any[] | {
        displayText?: HighlyStructuredMessage;
        id?: string;
    });
    get displayText(): HighlyStructuredMessage;
    set displayText(value: HighlyStructuredMessage);
    get id(): string;
    set id(value: string);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuickReplyButton;
}
export declare class URLButton extends pb_1.Message {
    constructor(data?: any[] | {
        displayText?: HighlyStructuredMessage;
        url?: HighlyStructuredMessage;
    });
    get displayText(): HighlyStructuredMessage;
    set displayText(value: HighlyStructuredMessage);
    get url(): HighlyStructuredMessage;
    set url(value: HighlyStructuredMessage);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): URLButton;
}
export declare class CallButton extends pb_1.Message {
    constructor(data?: any[] | {
        displayText?: HighlyStructuredMessage;
        phoneNumber?: HighlyStructuredMessage;
    });
    get displayText(): HighlyStructuredMessage;
    set displayText(value: HighlyStructuredMessage);
    get phoneNumber(): HighlyStructuredMessage;
    set phoneNumber(value: HighlyStructuredMessage);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CallButton;
}
export declare class TemplateButton extends pb_1.Message {
    constructor(data?: any[] | {
        index?: number;
        quickReplyButton?: QuickReplyButton;
        urlButton?: URLButton;
        callButton?: CallButton;
    });
    get index(): number;
    set index(value: number);
    get quickReplyButton(): QuickReplyButton;
    set quickReplyButton(value: QuickReplyButton);
    get urlButton(): URLButton;
    set urlButton(value: URLButton);
    get callButton(): CallButton;
    set callButton(value: CallButton);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TemplateButton;
}
export declare class Location extends pb_1.Message {
    constructor(data?: any[] | {
        degreesLatitude?: number;
        degreesLongitude?: number;
        name?: string;
    });
    get degreesLatitude(): number;
    set degreesLatitude(value: number);
    get degreesLongitude(): number;
    set degreesLongitude(value: number);
    get name(): string;
    set name(value: string);
    toObject(): {
        degreesLatitude: number;
        degreesLongitude: number;
        name: string;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Location;
}
export declare class Point extends pb_1.Message {
    constructor(data?: any[] | {
        xDeprecated?: number;
        yDeprecated?: number;
        x?: number;
        y?: number;
    });
    get xDeprecated(): number;
    set xDeprecated(value: number);
    get yDeprecated(): number;
    set yDeprecated(value: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    toObject(): {
        xDeprecated: number;
        yDeprecated: number;
        x: number;
        y: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Point;
}
export declare class InteractiveAnnotation extends pb_1.Message {
    constructor(data?: any[] | {
        polygonVertices?: Point[];
        location?: Location;
    });
    get polygonVertices(): Point[];
    set polygonVertices(value: Point[]);
    get location(): Location;
    set location(value: Location);
    toObject(): {
        polygonVertices: {
            xDeprecated: number;
            yDeprecated: number;
            x: number;
            y: number;
        }[];
        location: {
            degreesLatitude: number;
            degreesLongitude: number;
            name: string;
        };
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): InteractiveAnnotation;
}
export declare class AdReplyInfo extends pb_1.Message {
    constructor(data?: any[] | {
        advertiserName?: string;
        mediaType?: AdReplyInfo.AD_REPLY_INFO_MEDIATYPE;
        jpegThumbnail?: Uint8Array;
        caption?: string;
    });
    get advertiserName(): string;
    set advertiserName(value: string);
    get mediaType(): AdReplyInfo.AD_REPLY_INFO_MEDIATYPE;
    set mediaType(value: AdReplyInfo.AD_REPLY_INFO_MEDIATYPE);
    get jpegThumbnail(): Uint8Array;
    set jpegThumbnail(value: Uint8Array);
    get caption(): string;
    set caption(value: string);
    toObject(): {
        advertiserName: string;
        mediaType: AdReplyInfo.AD_REPLY_INFO_MEDIATYPE;
        jpegThumbnail: Uint8Array;
        caption: string;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AdReplyInfo;
}
export declare namespace AdReplyInfo {
    enum AD_REPLY_INFO_MEDIATYPE {
        NONE = 0,
        IMAGE = 1,
        VIDEO = 2
    }
}
export declare class ContextInfo extends pb_1.Message {
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
    });
    get stanzaId(): string;
    set stanzaId(value: string);
    get participant(): string;
    set participant(value: string);
    get quotedMessage(): Message;
    set quotedMessage(value: Message);
    get remoteJid(): string;
    set remoteJid(value: string);
    get mentionedJid(): string[];
    set mentionedJid(value: string[]);
    get conversionSource(): string;
    set conversionSource(value: string);
    get conversionData(): Uint8Array;
    set conversionData(value: Uint8Array);
    get conversionDelaySeconds(): number;
    set conversionDelaySeconds(value: number);
    get forwardingScore(): number;
    set forwardingScore(value: number);
    get isForwarded(): boolean;
    set isForwarded(value: boolean);
    get quotedAd(): AdReplyInfo;
    set quotedAd(value: AdReplyInfo);
    get placeholderKey(): MessageKey;
    set placeholderKey(value: MessageKey);
    get expiration(): number;
    set expiration(value: number);
    get ephemeralSettingTimestamp(): number;
    set ephemeralSettingTimestamp(value: number);
    get ephemeralSharedSecret(): Uint8Array;
    set ephemeralSharedSecret(value: Uint8Array);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ContextInfo;
}
export declare class SenderKeyDistributionMessage extends pb_1.Message {
    constructor(data?: any[] | {
        groupId?: string;
        axolotlSenderKeyDistributionMessage?: Uint8Array;
    });
    get groupId(): string;
    set groupId(value: string);
    get axolotlSenderKeyDistributionMessage(): Uint8Array;
    set axolotlSenderKeyDistributionMessage(value: Uint8Array);
    toObject(): {
        groupId: string;
        axolotlSenderKeyDistributionMessage: Uint8Array;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SenderKeyDistributionMessage;
}
export declare class ImageMessage extends pb_1.Message {
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
    });
    get url(): string;
    set url(value: string);
    get mimetype(): string;
    set mimetype(value: string);
    get caption(): string;
    set caption(value: string);
    get fileSha256(): Uint8Array;
    set fileSha256(value: Uint8Array);
    get fileLength(): number;
    set fileLength(value: number);
    get height(): number;
    set height(value: number);
    get width(): number;
    set width(value: number);
    get mediaKey(): Uint8Array;
    set mediaKey(value: Uint8Array);
    get fileEncSha256(): Uint8Array;
    set fileEncSha256(value: Uint8Array);
    get interactiveAnnotations(): InteractiveAnnotation[];
    set interactiveAnnotations(value: InteractiveAnnotation[]);
    get directPath(): string;
    set directPath(value: string);
    get mediaKeyTimestamp(): number;
    set mediaKeyTimestamp(value: number);
    get jpegThumbnail(): Uint8Array;
    set jpegThumbnail(value: Uint8Array);
    get contextInfo(): ContextInfo;
    set contextInfo(value: ContextInfo);
    get firstScanSidecar(): Uint8Array;
    set firstScanSidecar(value: Uint8Array);
    get firstScanLength(): number;
    set firstScanLength(value: number);
    get experimentGroupId(): number;
    set experimentGroupId(value: number);
    get scansSidecar(): Uint8Array;
    set scansSidecar(value: Uint8Array);
    get scanLengths(): number[];
    set scanLengths(value: number[]);
    get midQualityFileSha256(): Uint8Array;
    set midQualityFileSha256(value: Uint8Array);
    get midQualityFileEncSha256(): Uint8Array;
    set midQualityFileEncSha256(value: Uint8Array);
    addScanLengths(value: number, index?: number): void;
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ImageMessage;
}
export declare class ContactMessage extends pb_1.Message {
    constructor(data?: any[] | {
        displayName?: string;
        vcard?: string;
        contextInfo?: ContextInfo;
    });
    get displayName(): string;
    set displayName(value: string);
    get vcard(): string;
    set vcard(value: string);
    get contextInfo(): ContextInfo;
    set contextInfo(value: ContextInfo);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ContactMessage;
}
export declare class LocationMessage extends pb_1.Message {
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
    });
    get degreesLatitude(): number;
    set degreesLatitude(value: number);
    get degreesLongitude(): number;
    set degreesLongitude(value: number);
    get name(): string;
    set name(value: string);
    get address(): string;
    set address(value: string);
    get url(): string;
    set url(value: string);
    get isLive(): boolean;
    set isLive(value: boolean);
    get accuracyInMeters(): number;
    set accuracyInMeters(value: number);
    get speedInMps(): number;
    set speedInMps(value: number);
    get degreesClockwiseFromMagneticNorth(): number;
    set degreesClockwiseFromMagneticNorth(value: number);
    get comment(): string;
    set comment(value: string);
    get jpegThumbnail(): Uint8Array;
    set jpegThumbnail(value: Uint8Array);
    get contextInfo(): ContextInfo;
    set contextInfo(value: ContextInfo);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LocationMessage;
}
export declare class ExtendedTextMessage extends pb_1.Message {
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
    });
    get text(): string;
    set text(value: string);
    get matchedText(): string;
    set matchedText(value: string);
    get canonicalUrl(): string;
    set canonicalUrl(value: string);
    get description(): string;
    set description(value: string);
    get title(): string;
    set title(value: string);
    get textArgb(): number;
    set textArgb(value: number);
    get backgroundArgb(): number;
    set backgroundArgb(value: number);
    get font(): ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE;
    set font(value: ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE);
    get previewType(): ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE;
    set previewType(value: ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE);
    get jpegThumbnail(): Uint8Array;
    set jpegThumbnail(value: Uint8Array);
    get contextInfo(): ContextInfo;
    set contextInfo(value: ContextInfo);
    get doNotPlayInline(): boolean;
    set doNotPlayInline(value: boolean);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ExtendedTextMessage;
}
export declare namespace ExtendedTextMessage {
    enum EXTENDED_TEXT_MESSAGE_FONTTYPE {
        SANS_SERIF = 0,
        SERIF = 1,
        NORICAN_REGULAR = 2,
        BRYNDAN_WRITE = 3,
        BEBASNEUE_REGULAR = 4,
        OSWALD_HEAVY = 5
    }
    enum EXTENDED_TEXT_MESSAGE_PREVIEWTYPE {
        NONE = 0,
        VIDEO = 1
    }
}
export declare class DocumentMessage extends pb_1.Message {
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
    });
    get url(): string;
    set url(value: string);
    get mimetype(): string;
    set mimetype(value: string);
    get title(): string;
    set title(value: string);
    get fileSha256(): Uint8Array;
    set fileSha256(value: Uint8Array);
    get fileLength(): number;
    set fileLength(value: number);
    get pageCount(): number;
    set pageCount(value: number);
    get mediaKey(): Uint8Array;
    set mediaKey(value: Uint8Array);
    get fileName(): string;
    set fileName(value: string);
    get fileEncSha256(): Uint8Array;
    set fileEncSha256(value: Uint8Array);
    get directPath(): string;
    set directPath(value: string);
    get mediaKeyTimestamp(): number;
    set mediaKeyTimestamp(value: number);
    get jpegThumbnail(): Uint8Array;
    set jpegThumbnail(value: Uint8Array);
    get contextInfo(): ContextInfo;
    set contextInfo(value: ContextInfo);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DocumentMessage;
}
export declare class AudioMessage extends pb_1.Message {
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
    });
    get url(): string;
    set url(value: string);
    get mimetype(): string;
    set mimetype(value: string);
    get fileSha256(): Uint8Array;
    set fileSha256(value: Uint8Array);
    get fileLength(): number;
    set fileLength(value: number);
    get seconds(): number;
    set seconds(value: number);
    get ptt(): boolean;
    set ptt(value: boolean);
    get mediaKey(): Uint8Array;
    set mediaKey(value: Uint8Array);
    get fileEncSha256(): Uint8Array;
    set fileEncSha256(value: Uint8Array);
    get directPath(): string;
    set directPath(value: string);
    get mediaKeyTimestamp(): number;
    set mediaKeyTimestamp(value: number);
    get contextInfo(): ContextInfo;
    set contextInfo(value: ContextInfo);
    get streamingSidecar(): Uint8Array;
    set streamingSidecar(value: Uint8Array);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AudioMessage;
}
export declare class VideoMessage extends pb_1.Message {
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
    });
    get url(): string;
    set url(value: string);
    get mimetype(): string;
    set mimetype(value: string);
    get fileSha256(): Uint8Array;
    set fileSha256(value: Uint8Array);
    get fileLength(): number;
    set fileLength(value: number);
    get seconds(): number;
    set seconds(value: number);
    get mediaKey(): Uint8Array;
    set mediaKey(value: Uint8Array);
    get caption(): string;
    set caption(value: string);
    get gifPlayback(): boolean;
    set gifPlayback(value: boolean);
    get height(): number;
    set height(value: number);
    get width(): number;
    set width(value: number);
    get fileEncSha256(): Uint8Array;
    set fileEncSha256(value: Uint8Array);
    get interactiveAnnotations(): InteractiveAnnotation[];
    set interactiveAnnotations(value: InteractiveAnnotation[]);
    get directPath(): string;
    set directPath(value: string);
    get mediaKeyTimestamp(): number;
    set mediaKeyTimestamp(value: number);
    get jpegThumbnail(): Uint8Array;
    set jpegThumbnail(value: Uint8Array);
    get contextInfo(): ContextInfo;
    set contextInfo(value: ContextInfo);
    get streamingSidecar(): Uint8Array;
    set streamingSidecar(value: Uint8Array);
    get gifAttribution(): VideoMessage.VIDEO_MESSAGE_ATTRIBUTION;
    set gifAttribution(value: VideoMessage.VIDEO_MESSAGE_ATTRIBUTION);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): VideoMessage;
}
export declare namespace VideoMessage {
    enum VIDEO_MESSAGE_ATTRIBUTION {
        NONE = 0,
        GIPHY = 1,
        TENOR = 2
    }
}
export declare class Call extends pb_1.Message {
    constructor(data?: any[] | {
        callKey?: Uint8Array;
    });
    get callKey(): Uint8Array;
    set callKey(value: Uint8Array);
    toObject(): {
        callKey: Uint8Array;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Call;
}
export declare class Chat extends pb_1.Message {
    constructor(data?: any[] | {
        displayName?: string;
        id?: string;
    });
    get displayName(): string;
    set displayName(value: string);
    get id(): string;
    set id(value: string);
    toObject(): {
        displayName: string;
        id: string;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Chat;
}
export declare class ProtocolMessage extends pb_1.Message {
    constructor(data?: any[] | {
        key?: MessageKey;
        type?: ProtocolMessage.PROTOCOL_MESSAGE_TYPE;
        ephemeralExpiration?: number;
        ephemeralSettingTimestamp?: number;
        historySyncNotification?: HistorySyncNotification;
    });
    get key(): MessageKey;
    set key(value: MessageKey);
    get type(): ProtocolMessage.PROTOCOL_MESSAGE_TYPE;
    set type(value: ProtocolMessage.PROTOCOL_MESSAGE_TYPE);
    get ephemeralExpiration(): number;
    set ephemeralExpiration(value: number);
    get ephemeralSettingTimestamp(): number;
    set ephemeralSettingTimestamp(value: number);
    get historySyncNotification(): HistorySyncNotification;
    set historySyncNotification(value: HistorySyncNotification);
    toObject(): {
        key: {
            remoteJid: string;
            fromMe: boolean;
            id: string;
            participant: string;
        };
        type: ProtocolMessage.PROTOCOL_MESSAGE_TYPE;
        ephemeralExpiration: number;
        ephemeralSettingTimestamp: number;
        historySyncNotification: {
            fileSha256: Uint8Array;
            fileLength: number;
            mediaKey: Uint8Array;
            fileEncSha256: Uint8Array;
            directPath: string;
            syncType: HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE;
            chunkOrder: number;
            originalMessageId: string;
        };
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProtocolMessage;
}
export declare namespace ProtocolMessage {
    enum PROTOCOL_MESSAGE_TYPE {
        REVOKE = 0,
        EPHEMERAL_SETTING = 3,
        EPHEMERAL_SYNC_RESPONSE = 4,
        HISTORY_SYNC_NOTIFICATION = 5
    }
}
export declare class HistorySyncNotification extends pb_1.Message {
    constructor(data?: any[] | {
        fileSha256?: Uint8Array;
        fileLength?: number;
        mediaKey?: Uint8Array;
        fileEncSha256?: Uint8Array;
        directPath?: string;
        syncType?: HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE;
        chunkOrder?: number;
        originalMessageId?: string;
    });
    get fileSha256(): Uint8Array;
    set fileSha256(value: Uint8Array);
    get fileLength(): number;
    set fileLength(value: number);
    get mediaKey(): Uint8Array;
    set mediaKey(value: Uint8Array);
    get fileEncSha256(): Uint8Array;
    set fileEncSha256(value: Uint8Array);
    get directPath(): string;
    set directPath(value: string);
    get syncType(): HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE;
    set syncType(value: HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE);
    get chunkOrder(): number;
    set chunkOrder(value: number);
    get originalMessageId(): string;
    set originalMessageId(value: string);
    toObject(): {
        fileSha256: Uint8Array;
        fileLength: number;
        mediaKey: Uint8Array;
        fileEncSha256: Uint8Array;
        directPath: string;
        syncType: HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE;
        chunkOrder: number;
        originalMessageId: string;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HistorySyncNotification;
}
export declare namespace HistorySyncNotification {
    enum HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE {
        INITIAL_BOOTSTRAP = 0,
        INITIAL_STATUS_V3 = 1,
        FULL = 2,
        RECENT = 3,
        RESEND = 4
    }
}
export declare class ContactsArrayMessage extends pb_1.Message {
    constructor(data?: any[] | {
        displayName?: string;
        contacts?: ContactMessage[];
        contextInfo?: ContextInfo;
    });
    get displayName(): string;
    set displayName(value: string);
    get contacts(): ContactMessage[];
    set contacts(value: ContactMessage[]);
    get contextInfo(): ContextInfo;
    set contextInfo(value: ContextInfo);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ContactsArrayMessage;
}
export declare class HSMCurrency extends pb_1.Message {
    constructor(data?: any[] | {
        currencyCode?: string;
        amount1000?: number;
    });
    get currencyCode(): string;
    set currencyCode(value: string);
    get amount1000(): number;
    set amount1000(value: number);
    toObject(): {
        currencyCode: string;
        amount1000: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HSMCurrency;
}
export declare class HSMDateTimeComponent extends pb_1.Message {
    constructor(data?: any[] | {
        dayOfWeek?: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE;
        year?: number;
        month?: number;
        dayOfMonth?: number;
        hour?: number;
        minute?: number;
        calendar?: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE;
    });
    get dayOfWeek(): HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE;
    set dayOfWeek(value: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE);
    get year(): number;
    set year(value: number);
    get month(): number;
    set month(value: number);
    get dayOfMonth(): number;
    set dayOfMonth(value: number);
    get hour(): number;
    set hour(value: number);
    get minute(): number;
    set minute(value: number);
    get calendar(): HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE;
    set calendar(value: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE);
    toObject(): {
        dayOfWeek: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE;
        year: number;
        month: number;
        dayOfMonth: number;
        hour: number;
        minute: number;
        calendar: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HSMDateTimeComponent;
}
export declare namespace HSMDateTimeComponent {
    enum HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE {
        MONDAY = 1,
        TUESDAY = 2,
        WEDNESDAY = 3,
        THURSDAY = 4,
        FRIDAY = 5,
        SATURDAY = 6,
        SUNDAY = 7
    }
    enum HSM_DATE_TIME_COMPONENT_CALENDARTYPE {
        GREGORIAN = 1,
        SOLAR_HIJRI = 2
    }
}
export declare class HSMDateTimeUnixEpoch extends pb_1.Message {
    constructor(data?: any[] | {
        timestamp?: number;
    });
    get timestamp(): number;
    set timestamp(value: number);
    toObject(): {
        timestamp: number;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HSMDateTimeUnixEpoch;
}
export declare class HSMDateTime extends pb_1.Message {
    constructor(data?: any[] | {
        component?: HSMDateTimeComponent;
        unixEpoch?: HSMDateTimeUnixEpoch;
    });
    get component(): HSMDateTimeComponent;
    set component(value: HSMDateTimeComponent);
    get unixEpoch(): HSMDateTimeUnixEpoch;
    set unixEpoch(value: HSMDateTimeUnixEpoch);
    toObject(): {
        component: {
            dayOfWeek: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE;
            year: number;
            month: number;
            dayOfMonth: number;
            hour: number;
            minute: number;
            calendar: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE;
        };
        unixEpoch: {
            timestamp: number;
        };
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HSMDateTime;
}
export declare class HSMLocalizableParameter extends pb_1.Message {
    constructor(data?: any[] | {
        default?: string;
        currency?: HSMCurrency;
        dateTime?: HSMDateTime;
    });
    get default(): string;
    set default(value: string);
    get currency(): HSMCurrency;
    set currency(value: HSMCurrency);
    get dateTime(): HSMDateTime;
    set dateTime(value: HSMDateTime);
    toObject(): {
        default: string;
        currency: {
            currencyCode: string;
            amount1000: number;
        };
        dateTime: {
            component: {
                dayOfWeek: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE;
                year: number;
                month: number;
                dayOfMonth: number;
                hour: number;
                minute: number;
                calendar: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE;
            };
            unixEpoch: {
                timestamp: number;
            };
        };
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HSMLocalizableParameter;
}
export declare class HighlyStructuredMessage extends pb_1.Message {
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
    });
    get namespace(): string;
    set namespace(value: string);
    get elementName(): string;
    set elementName(value: string);
    get params(): string[];
    set params(value: string[]);
    get fallbackLg(): string;
    set fallbackLg(value: string);
    get fallbackLc(): string;
    set fallbackLc(value: string);
    get localizableParams(): HSMLocalizableParameter[];
    set localizableParams(value: HSMLocalizableParameter[]);
    get deterministicLg(): string;
    set deterministicLg(value: string);
    get deterministicLc(): string;
    set deterministicLc(value: string);
    get hydratedHsm(): TemplateMessage;
    set hydratedHsm(value: TemplateMessage);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HighlyStructuredMessage;
}
export declare class SendPaymentMessage extends pb_1.Message {
    constructor(data?: any[] | {
        noteMessage?: Message;
        requestMessageKey?: MessageKey;
    });
    get noteMessage(): Message;
    set noteMessage(value: Message);
    get requestMessageKey(): MessageKey;
    set requestMessageKey(value: MessageKey);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SendPaymentMessage;
}
export declare class RequestPaymentMessage extends pb_1.Message {
    constructor(data?: any[] | {
        noteMessage?: Message;
        currencyCodeIso4217?: string;
        amount1000?: number;
        requestFrom?: string;
        expiryTimestamp?: number;
    });
    get noteMessage(): Message;
    set noteMessage(value: Message);
    get currencyCodeIso4217(): string;
    set currencyCodeIso4217(value: string);
    get amount1000(): number;
    set amount1000(value: number);
    get requestFrom(): string;
    set requestFrom(value: string);
    get expiryTimestamp(): number;
    set expiryTimestamp(value: number);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestPaymentMessage;
}
export declare class DeclinePaymentRequestMessage extends pb_1.Message {
    constructor(data?: any[] | {
        key?: MessageKey;
    });
    get key(): MessageKey;
    set key(value: MessageKey);
    toObject(): {
        key: {
            remoteJid: string;
            fromMe: boolean;
            id: string;
            participant: string;
        };
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeclinePaymentRequestMessage;
}
export declare class CancelPaymentRequestMessage extends pb_1.Message {
    constructor(data?: any[] | {
        key?: MessageKey;
    });
    get key(): MessageKey;
    set key(value: MessageKey);
    toObject(): {
        key: {
            remoteJid: string;
            fromMe: boolean;
            id: string;
            participant: string;
        };
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CancelPaymentRequestMessage;
}
export declare class LiveLocationMessage extends pb_1.Message {
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
    });
    get degreesLatitude(): number;
    set degreesLatitude(value: number);
    get degreesLongitude(): number;
    set degreesLongitude(value: number);
    get accuracyInMeters(): number;
    set accuracyInMeters(value: number);
    get speedInMps(): number;
    set speedInMps(value: number);
    get degreesClockwiseFromMagneticNorth(): number;
    set degreesClockwiseFromMagneticNorth(value: number);
    get caption(): string;
    set caption(value: string);
    get sequenceNumber(): number;
    set sequenceNumber(value: number);
    get timeOffset(): number;
    set timeOffset(value: number);
    get jpegThumbnail(): Uint8Array;
    set jpegThumbnail(value: Uint8Array);
    get contextInfo(): ContextInfo;
    set contextInfo(value: ContextInfo);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LiveLocationMessage;
}
export declare class StickerMessage extends pb_1.Message {
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
    });
    get url(): string;
    set url(value: string);
    get fileSha256(): Uint8Array;
    set fileSha256(value: Uint8Array);
    get fileEncSha256(): Uint8Array;
    set fileEncSha256(value: Uint8Array);
    get mediaKey(): Uint8Array;
    set mediaKey(value: Uint8Array);
    get mimetype(): string;
    set mimetype(value: string);
    get height(): number;
    set height(value: number);
    get width(): number;
    set width(value: number);
    get directPath(): string;
    set directPath(value: string);
    get fileLength(): number;
    set fileLength(value: number);
    get mediaKeyTimestamp(): number;
    set mediaKeyTimestamp(value: number);
    get firstFrameLength(): number;
    set firstFrameLength(value: number);
    get firstFrameSidecar(): Uint8Array;
    set firstFrameSidecar(value: Uint8Array);
    get isAnimated(): boolean;
    set isAnimated(value: boolean);
    get pngThumbnail(): Uint8Array;
    set pngThumbnail(value: Uint8Array);
    get contextInfo(): ContextInfo;
    set contextInfo(value: ContextInfo);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StickerMessage;
}
export declare class FourRowTemplate extends pb_1.Message {
    constructor(data?: any[] | {
        content?: HighlyStructuredMessage;
        footer?: HighlyStructuredMessage;
        buttons?: TemplateButton[];
        documentMessage?: DocumentMessage;
        highlyStructuredMessage?: HighlyStructuredMessage;
        imageMessage?: ImageMessage;
        videoMessage?: VideoMessage;
        locationMessage?: LocationMessage;
    });
    get content(): HighlyStructuredMessage;
    set content(value: HighlyStructuredMessage);
    get footer(): HighlyStructuredMessage;
    set footer(value: HighlyStructuredMessage);
    get buttons(): TemplateButton[];
    set buttons(value: TemplateButton[]);
    get documentMessage(): DocumentMessage;
    set documentMessage(value: DocumentMessage);
    get highlyStructuredMessage(): HighlyStructuredMessage;
    set highlyStructuredMessage(value: HighlyStructuredMessage);
    get imageMessage(): ImageMessage;
    set imageMessage(value: ImageMessage);
    get videoMessage(): VideoMessage;
    set videoMessage(value: VideoMessage);
    get locationMessage(): LocationMessage;
    set locationMessage(value: LocationMessage);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FourRowTemplate;
}
export declare class HydratedFourRowTemplate extends pb_1.Message {
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
    });
    get hydratedContentText(): string;
    set hydratedContentText(value: string);
    get hydratedFooterText(): string;
    set hydratedFooterText(value: string);
    get hydratedButtons(): HydratedTemplateButton[];
    set hydratedButtons(value: HydratedTemplateButton[]);
    get templateId(): string;
    set templateId(value: string);
    get documentMessage(): DocumentMessage;
    set documentMessage(value: DocumentMessage);
    get hydratedTitleText(): string;
    set hydratedTitleText(value: string);
    get imageMessage(): ImageMessage;
    set imageMessage(value: ImageMessage);
    get videoMessage(): VideoMessage;
    set videoMessage(value: VideoMessage);
    get locationMessage(): LocationMessage;
    set locationMessage(value: LocationMessage);
    toObject(): {
        hydratedContentText: string;
        hydratedFooterText: string;
        hydratedButtons: {
            index: number;
            quickReplyButton: {
                displayText: string;
                id: string;
            };
            urlButton: {
                displayText: string;
                url: string;
            };
            callButton: {
                displayText: string;
                phoneNumber: string;
            };
        }[];
        templateId: string;
        documentMessage: any;
        hydratedTitleText: string;
        imageMessage: any;
        videoMessage: any;
        locationMessage: any;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HydratedFourRowTemplate;
}
export declare class TemplateMessage extends pb_1.Message {
    constructor(data?: any[] | {
        contextInfo?: ContextInfo;
        hydratedTemplate?: HydratedFourRowTemplate;
        fourRowTemplate?: FourRowTemplate;
        hydratedFourRowTemplate?: HydratedFourRowTemplate;
    });
    get contextInfo(): ContextInfo;
    set contextInfo(value: ContextInfo);
    get hydratedTemplate(): HydratedFourRowTemplate;
    set hydratedTemplate(value: HydratedFourRowTemplate);
    get fourRowTemplate(): FourRowTemplate;
    set fourRowTemplate(value: FourRowTemplate);
    get hydratedFourRowTemplate(): HydratedFourRowTemplate;
    set hydratedFourRowTemplate(value: HydratedFourRowTemplate);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TemplateMessage;
}
export declare class TemplateButtonReplyMessage extends pb_1.Message {
    constructor(data?: any[] | {
        selectedId?: string;
        selectedDisplayText?: string;
        contextInfo?: ContextInfo;
        selectedIndex?: number;
    });
    get selectedId(): string;
    set selectedId(value: string);
    get selectedDisplayText(): string;
    set selectedDisplayText(value: string);
    get contextInfo(): ContextInfo;
    set contextInfo(value: ContextInfo);
    get selectedIndex(): number;
    set selectedIndex(value: number);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TemplateButtonReplyMessage;
}
export declare class CatalogSnapshot extends pb_1.Message {
    constructor(data?: any[] | {
        catalogImage?: ImageMessage;
        title?: string;
        description?: string;
    });
    get catalogImage(): ImageMessage;
    set catalogImage(value: ImageMessage);
    get title(): string;
    set title(value: string);
    get description(): string;
    set description(value: string);
    toObject(): {
        catalogImage: any;
        title: string;
        description: string;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CatalogSnapshot;
}
export declare class ProductSnapshot extends pb_1.Message {
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
    });
    get productImage(): ImageMessage;
    set productImage(value: ImageMessage);
    get productId(): string;
    set productId(value: string);
    get title(): string;
    set title(value: string);
    get description(): string;
    set description(value: string);
    get currencyCode(): string;
    set currencyCode(value: string);
    get priceAmount1000(): number;
    set priceAmount1000(value: number);
    get retailerId(): string;
    set retailerId(value: string);
    get url(): string;
    set url(value: string);
    get productImageCount(): number;
    set productImageCount(value: number);
    get firstImageId(): string;
    set firstImageId(value: string);
    toObject(): {
        productImage: any;
        productId: string;
        title: string;
        description: string;
        currencyCode: string;
        priceAmount1000: number;
        retailerId: string;
        url: string;
        productImageCount: number;
        firstImageId: string;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProductSnapshot;
}
export declare class ProductMessage extends pb_1.Message {
    constructor(data?: any[] | {
        product?: ProductSnapshot;
        businessOwnerJid?: string;
        catalog?: CatalogSnapshot;
        contextInfo?: ContextInfo;
    });
    get product(): ProductSnapshot;
    set product(value: ProductSnapshot);
    get businessOwnerJid(): string;
    set businessOwnerJid(value: string);
    get catalog(): CatalogSnapshot;
    set catalog(value: CatalogSnapshot);
    get contextInfo(): ContextInfo;
    set contextInfo(value: ContextInfo);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProductMessage;
}
export declare class GroupInviteMessage extends pb_1.Message {
    constructor(data?: any[] | {
        groupJid?: string;
        inviteCode?: string;
        inviteExpiration?: number;
        groupName?: string;
        jpegThumbnail?: Uint8Array;
        caption?: string;
        contextInfo?: ContextInfo;
    });
    get groupJid(): string;
    set groupJid(value: string);
    get inviteCode(): string;
    set inviteCode(value: string);
    get inviteExpiration(): number;
    set inviteExpiration(value: number);
    get groupName(): string;
    set groupName(value: string);
    get jpegThumbnail(): Uint8Array;
    set jpegThumbnail(value: Uint8Array);
    get caption(): string;
    set caption(value: string);
    get contextInfo(): ContextInfo;
    set contextInfo(value: ContextInfo);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GroupInviteMessage;
}
export declare class DeviceSentMessage extends pb_1.Message {
    constructor(data?: any[] | {
        destinationJid?: string;
        message?: Message;
        phash?: string;
    });
    get destinationJid(): string;
    set destinationJid(value: string);
    get message(): Message;
    set message(value: Message);
    get phash(): string;
    set phash(value: string);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeviceSentMessage;
}
export declare class Message extends pb_1.Message {
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
    });
    get conversation(): string;
    set conversation(value: string);
    get senderKeyDistributionMessage(): SenderKeyDistributionMessage;
    set senderKeyDistributionMessage(value: SenderKeyDistributionMessage);
    get imageMessage(): ImageMessage;
    set imageMessage(value: ImageMessage);
    get contactMessage(): ContactMessage;
    set contactMessage(value: ContactMessage);
    get locationMessage(): LocationMessage;
    set locationMessage(value: LocationMessage);
    get extendedTextMessage(): ExtendedTextMessage;
    set extendedTextMessage(value: ExtendedTextMessage);
    get documentMessage(): DocumentMessage;
    set documentMessage(value: DocumentMessage);
    get audioMessage(): AudioMessage;
    set audioMessage(value: AudioMessage);
    get videoMessage(): VideoMessage;
    set videoMessage(value: VideoMessage);
    get call(): Call;
    set call(value: Call);
    get chat(): Chat;
    set chat(value: Chat);
    get protocolMessage(): ProtocolMessage;
    set protocolMessage(value: ProtocolMessage);
    get contactsArrayMessage(): ContactsArrayMessage;
    set contactsArrayMessage(value: ContactsArrayMessage);
    get highlyStructuredMessage(): HighlyStructuredMessage;
    set highlyStructuredMessage(value: HighlyStructuredMessage);
    get fastRatchetKeySenderKeyDistributionMessage(): SenderKeyDistributionMessage;
    set fastRatchetKeySenderKeyDistributionMessage(value: SenderKeyDistributionMessage);
    get sendPaymentMessage(): SendPaymentMessage;
    set sendPaymentMessage(value: SendPaymentMessage);
    get liveLocationMessage(): LiveLocationMessage;
    set liveLocationMessage(value: LiveLocationMessage);
    get requestPaymentMessage(): RequestPaymentMessage;
    set requestPaymentMessage(value: RequestPaymentMessage);
    get declinePaymentRequestMessage(): DeclinePaymentRequestMessage;
    set declinePaymentRequestMessage(value: DeclinePaymentRequestMessage);
    get cancelPaymentRequestMessage(): CancelPaymentRequestMessage;
    set cancelPaymentRequestMessage(value: CancelPaymentRequestMessage);
    get templateMessage(): TemplateMessage;
    set templateMessage(value: TemplateMessage);
    get stickerMessage(): StickerMessage;
    set stickerMessage(value: StickerMessage);
    get groupInviteMessage(): GroupInviteMessage;
    set groupInviteMessage(value: GroupInviteMessage);
    get templateButtonReplyMessage(): TemplateButtonReplyMessage;
    set templateButtonReplyMessage(value: TemplateButtonReplyMessage);
    get productMessage(): ProductMessage;
    set productMessage(value: ProductMessage);
    get deviceSentMessage(): DeviceSentMessage;
    set deviceSentMessage(value: DeviceSentMessage);
    toObject(): any;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Message;
}
export declare class MessageKey extends pb_1.Message {
    constructor(data?: any[] | {
        remoteJid?: string;
        fromMe?: boolean;
        id?: string;
        participant?: string;
    });
    get remoteJid(): string;
    set remoteJid(value: string);
    get fromMe(): boolean;
    set fromMe(value: boolean);
    get id(): string;
    set id(value: string);
    get participant(): string;
    set participant(value: string);
    toObject(): {
        remoteJid: string;
        fromMe: boolean;
        id: string;
        participant: string;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MessageKey;
}
export declare class WebFeatures extends pb_1.Message {
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
    });
    get labelsDisplay(): WebFeatures.WEB_FEATURES_FLAG;
    set labelsDisplay(value: WebFeatures.WEB_FEATURES_FLAG);
    get voipIndividualOutgoing(): WebFeatures.WEB_FEATURES_FLAG;
    set voipIndividualOutgoing(value: WebFeatures.WEB_FEATURES_FLAG);
    get groupsV3(): WebFeatures.WEB_FEATURES_FLAG;
    set groupsV3(value: WebFeatures.WEB_FEATURES_FLAG);
    get groupsV3Create(): WebFeatures.WEB_FEATURES_FLAG;
    set groupsV3Create(value: WebFeatures.WEB_FEATURES_FLAG);
    get changeNumberV2(): WebFeatures.WEB_FEATURES_FLAG;
    set changeNumberV2(value: WebFeatures.WEB_FEATURES_FLAG);
    get queryStatusV3Thumbnail(): WebFeatures.WEB_FEATURES_FLAG;
    set queryStatusV3Thumbnail(value: WebFeatures.WEB_FEATURES_FLAG);
    get liveLocations(): WebFeatures.WEB_FEATURES_FLAG;
    set liveLocations(value: WebFeatures.WEB_FEATURES_FLAG);
    get queryVname(): WebFeatures.WEB_FEATURES_FLAG;
    set queryVname(value: WebFeatures.WEB_FEATURES_FLAG);
    get voipIndividualIncoming(): WebFeatures.WEB_FEATURES_FLAG;
    set voipIndividualIncoming(value: WebFeatures.WEB_FEATURES_FLAG);
    get quickRepliesQuery(): WebFeatures.WEB_FEATURES_FLAG;
    set quickRepliesQuery(value: WebFeatures.WEB_FEATURES_FLAG);
    get payments(): WebFeatures.WEB_FEATURES_FLAG;
    set payments(value: WebFeatures.WEB_FEATURES_FLAG);
    get stickerPackQuery(): WebFeatures.WEB_FEATURES_FLAG;
    set stickerPackQuery(value: WebFeatures.WEB_FEATURES_FLAG);
    get liveLocationsFinal(): WebFeatures.WEB_FEATURES_FLAG;
    set liveLocationsFinal(value: WebFeatures.WEB_FEATURES_FLAG);
    get labelsEdit(): WebFeatures.WEB_FEATURES_FLAG;
    set labelsEdit(value: WebFeatures.WEB_FEATURES_FLAG);
    get mediaUpload(): WebFeatures.WEB_FEATURES_FLAG;
    set mediaUpload(value: WebFeatures.WEB_FEATURES_FLAG);
    get mediaUploadRichQuickReplies(): WebFeatures.WEB_FEATURES_FLAG;
    set mediaUploadRichQuickReplies(value: WebFeatures.WEB_FEATURES_FLAG);
    get vnameV2(): WebFeatures.WEB_FEATURES_FLAG;
    set vnameV2(value: WebFeatures.WEB_FEATURES_FLAG);
    get videoPlaybackUrl(): WebFeatures.WEB_FEATURES_FLAG;
    set videoPlaybackUrl(value: WebFeatures.WEB_FEATURES_FLAG);
    get statusRanking(): WebFeatures.WEB_FEATURES_FLAG;
    set statusRanking(value: WebFeatures.WEB_FEATURES_FLAG);
    get voipIndividualVideo(): WebFeatures.WEB_FEATURES_FLAG;
    set voipIndividualVideo(value: WebFeatures.WEB_FEATURES_FLAG);
    get thirdPartyStickers(): WebFeatures.WEB_FEATURES_FLAG;
    set thirdPartyStickers(value: WebFeatures.WEB_FEATURES_FLAG);
    get frequentlyForwardedSetting(): WebFeatures.WEB_FEATURES_FLAG;
    set frequentlyForwardedSetting(value: WebFeatures.WEB_FEATURES_FLAG);
    get groupsV4JoinPermission(): WebFeatures.WEB_FEATURES_FLAG;
    set groupsV4JoinPermission(value: WebFeatures.WEB_FEATURES_FLAG);
    get recentStickers(): WebFeatures.WEB_FEATURES_FLAG;
    set recentStickers(value: WebFeatures.WEB_FEATURES_FLAG);
    get catalog(): WebFeatures.WEB_FEATURES_FLAG;
    set catalog(value: WebFeatures.WEB_FEATURES_FLAG);
    get starredStickers(): WebFeatures.WEB_FEATURES_FLAG;
    set starredStickers(value: WebFeatures.WEB_FEATURES_FLAG);
    get voipGroupCall(): WebFeatures.WEB_FEATURES_FLAG;
    set voipGroupCall(value: WebFeatures.WEB_FEATURES_FLAG);
    get templateMessage(): WebFeatures.WEB_FEATURES_FLAG;
    set templateMessage(value: WebFeatures.WEB_FEATURES_FLAG);
    get templateMessageInteractivity(): WebFeatures.WEB_FEATURES_FLAG;
    set templateMessageInteractivity(value: WebFeatures.WEB_FEATURES_FLAG);
    get ephemeralMessages(): WebFeatures.WEB_FEATURES_FLAG;
    set ephemeralMessages(value: WebFeatures.WEB_FEATURES_FLAG);
    get e2ENotificationSync(): WebFeatures.WEB_FEATURES_FLAG;
    set e2ENotificationSync(value: WebFeatures.WEB_FEATURES_FLAG);
    get recentStickersV2(): WebFeatures.WEB_FEATURES_FLAG;
    set recentStickersV2(value: WebFeatures.WEB_FEATURES_FLAG);
    get syncdRelease1(): WebFeatures.WEB_FEATURES_FLAG;
    set syncdRelease1(value: WebFeatures.WEB_FEATURES_FLAG);
    toObject(): {
        labelsDisplay: WebFeatures.WEB_FEATURES_FLAG;
        voipIndividualOutgoing: WebFeatures.WEB_FEATURES_FLAG;
        groupsV3: WebFeatures.WEB_FEATURES_FLAG;
        groupsV3Create: WebFeatures.WEB_FEATURES_FLAG;
        changeNumberV2: WebFeatures.WEB_FEATURES_FLAG;
        queryStatusV3Thumbnail: WebFeatures.WEB_FEATURES_FLAG;
        liveLocations: WebFeatures.WEB_FEATURES_FLAG;
        queryVname: WebFeatures.WEB_FEATURES_FLAG;
        voipIndividualIncoming: WebFeatures.WEB_FEATURES_FLAG;
        quickRepliesQuery: WebFeatures.WEB_FEATURES_FLAG;
        payments: WebFeatures.WEB_FEATURES_FLAG;
        stickerPackQuery: WebFeatures.WEB_FEATURES_FLAG;
        liveLocationsFinal: WebFeatures.WEB_FEATURES_FLAG;
        labelsEdit: WebFeatures.WEB_FEATURES_FLAG;
        mediaUpload: WebFeatures.WEB_FEATURES_FLAG;
        mediaUploadRichQuickReplies: WebFeatures.WEB_FEATURES_FLAG;
        vnameV2: WebFeatures.WEB_FEATURES_FLAG;
        videoPlaybackUrl: WebFeatures.WEB_FEATURES_FLAG;
        statusRanking: WebFeatures.WEB_FEATURES_FLAG;
        voipIndividualVideo: WebFeatures.WEB_FEATURES_FLAG;
        thirdPartyStickers: WebFeatures.WEB_FEATURES_FLAG;
        frequentlyForwardedSetting: WebFeatures.WEB_FEATURES_FLAG;
        groupsV4JoinPermission: WebFeatures.WEB_FEATURES_FLAG;
        recentStickers: WebFeatures.WEB_FEATURES_FLAG;
        catalog: WebFeatures.WEB_FEATURES_FLAG;
        starredStickers: WebFeatures.WEB_FEATURES_FLAG;
        voipGroupCall: WebFeatures.WEB_FEATURES_FLAG;
        templateMessage: WebFeatures.WEB_FEATURES_FLAG;
        templateMessageInteractivity: WebFeatures.WEB_FEATURES_FLAG;
        ephemeralMessages: WebFeatures.WEB_FEATURES_FLAG;
        e2ENotificationSync: WebFeatures.WEB_FEATURES_FLAG;
        recentStickersV2: WebFeatures.WEB_FEATURES_FLAG;
        syncdRelease1: WebFeatures.WEB_FEATURES_FLAG;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WebFeatures;
}
export declare namespace WebFeatures {
    enum WEB_FEATURES_FLAG {
        NOT_STARTED = 0,
        FORCE_UPGRADE = 1,
        DEVELOPMENT = 2,
        PRODUCTION = 3
    }
}
export declare class TabletNotificationsInfo extends pb_1.Message {
    constructor(data?: any[] | {
        timestamp?: number;
        unreadChats?: number;
        notifyMessageCount?: number;
        notifyMessage?: NotificationMessageInfo[];
    });
    get timestamp(): number;
    set timestamp(value: number);
    get unreadChats(): number;
    set unreadChats(value: number);
    get notifyMessageCount(): number;
    set notifyMessageCount(value: number);
    get notifyMessage(): NotificationMessageInfo[];
    set notifyMessage(value: NotificationMessageInfo[]);
    toObject(): {
        timestamp: number;
        unreadChats: number;
        notifyMessageCount: number;
        notifyMessage: {
            key: {
                remoteJid: string;
                fromMe: boolean;
                id: string;
                participant: string;
            };
            message: any;
            messageTimestamp: number;
            participant: string;
        }[];
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TabletNotificationsInfo;
}
export declare class NotificationMessageInfo extends pb_1.Message {
    constructor(data?: any[] | {
        key?: MessageKey;
        message?: Message;
        messageTimestamp?: number;
        participant?: string;
    });
    get key(): MessageKey;
    set key(value: MessageKey);
    get message(): Message;
    set message(value: Message);
    get messageTimestamp(): number;
    set messageTimestamp(value: number);
    get participant(): string;
    set participant(value: string);
    toObject(): {
        key: {
            remoteJid: string;
            fromMe: boolean;
            id: string;
            participant: string;
        };
        message: any;
        messageTimestamp: number;
        participant: string;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): NotificationMessageInfo;
}
export declare class WebNotificationsInfo extends pb_1.Message {
    constructor(data?: any[] | {
        timestamp?: number;
        unreadChats?: number;
        notifyMessageCount?: number;
        notifyMessages?: WebMessageInfo[];
    });
    get timestamp(): number;
    set timestamp(value: number);
    get unreadChats(): number;
    set unreadChats(value: number);
    get notifyMessageCount(): number;
    set notifyMessageCount(value: number);
    get notifyMessages(): WebMessageInfo[];
    set notifyMessages(value: WebMessageInfo[]);
    toObject(): {
        timestamp: number;
        unreadChats: number;
        notifyMessageCount: number;
        notifyMessages: {
            key: {
                remoteJid: string;
                fromMe: boolean;
                id: string;
                participant: string;
            };
            message: any;
            messageTimestamp: number;
            status: WebMessageInfo.WEB_MESSAGE_INFO_STATUS;
            participant: string;
            ignore: boolean;
            starred: boolean;
            broadcast: boolean;
            pushName: string;
            mediaCiphertextSha256: Uint8Array;
            multicast: boolean;
            urlText: boolean;
            urlNumber: boolean;
            messageStubType: WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE;
            clearMedia: boolean;
            messageStubParameters: string[];
            duration: number;
            labels: string[];
            paymentInfo: {
                currencyDeprecated: PaymentInfo.PAYMENT_INFO_CURRENCY;
                amount1000: number;
                receiverJid: string;
                status: PaymentInfo.PAYMENT_INFO_STATUS;
                transactionTimestamp: number;
                requestMessageKey: {
                    remoteJid: string;
                    fromMe: boolean;
                    id: string;
                    participant: string;
                };
                expiryTimestamp: number;
                futureproofed: boolean;
                currency: string;
                txnStatus: PaymentInfo.PAYMENT_INFO_TXNSTATUS;
            };
            finalLiveLocation: any;
            quotedPaymentInfo: {
                currencyDeprecated: PaymentInfo.PAYMENT_INFO_CURRENCY;
                amount1000: number;
                receiverJid: string;
                status: PaymentInfo.PAYMENT_INFO_STATUS;
                transactionTimestamp: number;
                requestMessageKey: {
                    remoteJid: string;
                    fromMe: boolean;
                    id: string;
                    participant: string;
                };
                expiryTimestamp: number;
                futureproofed: boolean;
                currency: string;
                txnStatus: PaymentInfo.PAYMENT_INFO_TXNSTATUS;
            };
            ephemeralStartTimestamp: number;
            ephemeralDuration: number;
            ephemeralOffToOn: boolean;
        }[];
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WebNotificationsInfo;
}
export declare class PaymentInfo extends pb_1.Message {
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
    });
    get currencyDeprecated(): PaymentInfo.PAYMENT_INFO_CURRENCY;
    set currencyDeprecated(value: PaymentInfo.PAYMENT_INFO_CURRENCY);
    get amount1000(): number;
    set amount1000(value: number);
    get receiverJid(): string;
    set receiverJid(value: string);
    get status(): PaymentInfo.PAYMENT_INFO_STATUS;
    set status(value: PaymentInfo.PAYMENT_INFO_STATUS);
    get transactionTimestamp(): number;
    set transactionTimestamp(value: number);
    get requestMessageKey(): MessageKey;
    set requestMessageKey(value: MessageKey);
    get expiryTimestamp(): number;
    set expiryTimestamp(value: number);
    get futureproofed(): boolean;
    set futureproofed(value: boolean);
    get currency(): string;
    set currency(value: string);
    get txnStatus(): PaymentInfo.PAYMENT_INFO_TXNSTATUS;
    set txnStatus(value: PaymentInfo.PAYMENT_INFO_TXNSTATUS);
    toObject(): {
        currencyDeprecated: PaymentInfo.PAYMENT_INFO_CURRENCY;
        amount1000: number;
        receiverJid: string;
        status: PaymentInfo.PAYMENT_INFO_STATUS;
        transactionTimestamp: number;
        requestMessageKey: {
            remoteJid: string;
            fromMe: boolean;
            id: string;
            participant: string;
        };
        expiryTimestamp: number;
        futureproofed: boolean;
        currency: string;
        txnStatus: PaymentInfo.PAYMENT_INFO_TXNSTATUS;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PaymentInfo;
}
export declare namespace PaymentInfo {
    enum PAYMENT_INFO_CURRENCY {
        UNKNOWN_CURRENCY = 0,
        INR = 1
    }
    enum PAYMENT_INFO_STATUS {
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
    enum PAYMENT_INFO_TXNSTATUS {
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
export declare class WebMessageInfo extends pb_1.Message {
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
    });
    get key(): MessageKey;
    set key(value: MessageKey);
    get message(): Message;
    set message(value: Message);
    get messageTimestamp(): number;
    set messageTimestamp(value: number);
    get status(): WebMessageInfo.WEB_MESSAGE_INFO_STATUS;
    set status(value: WebMessageInfo.WEB_MESSAGE_INFO_STATUS);
    get participant(): string;
    set participant(value: string);
    get ignore(): boolean;
    set ignore(value: boolean);
    get starred(): boolean;
    set starred(value: boolean);
    get broadcast(): boolean;
    set broadcast(value: boolean);
    get pushName(): string;
    set pushName(value: string);
    get mediaCiphertextSha256(): Uint8Array;
    set mediaCiphertextSha256(value: Uint8Array);
    get multicast(): boolean;
    set multicast(value: boolean);
    get urlText(): boolean;
    set urlText(value: boolean);
    get urlNumber(): boolean;
    set urlNumber(value: boolean);
    get messageStubType(): WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE;
    set messageStubType(value: WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE);
    get clearMedia(): boolean;
    set clearMedia(value: boolean);
    get messageStubParameters(): string[];
    set messageStubParameters(value: string[]);
    get duration(): number;
    set duration(value: number);
    get labels(): string[];
    set labels(value: string[]);
    get paymentInfo(): PaymentInfo;
    set paymentInfo(value: PaymentInfo);
    get finalLiveLocation(): LiveLocationMessage;
    set finalLiveLocation(value: LiveLocationMessage);
    get quotedPaymentInfo(): PaymentInfo;
    set quotedPaymentInfo(value: PaymentInfo);
    get ephemeralStartTimestamp(): number;
    set ephemeralStartTimestamp(value: number);
    get ephemeralDuration(): number;
    set ephemeralDuration(value: number);
    get ephemeralOffToOn(): boolean;
    set ephemeralOffToOn(value: boolean);
    toObject(): {
        key: {
            remoteJid: string;
            fromMe: boolean;
            id: string;
            participant: string;
        };
        message: any;
        messageTimestamp: number;
        status: WebMessageInfo.WEB_MESSAGE_INFO_STATUS;
        participant: string;
        ignore: boolean;
        starred: boolean;
        broadcast: boolean;
        pushName: string;
        mediaCiphertextSha256: Uint8Array;
        multicast: boolean;
        urlText: boolean;
        urlNumber: boolean;
        messageStubType: WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE;
        clearMedia: boolean;
        messageStubParameters: string[];
        duration: number;
        labels: string[];
        paymentInfo: {
            currencyDeprecated: PaymentInfo.PAYMENT_INFO_CURRENCY;
            amount1000: number;
            receiverJid: string;
            status: PaymentInfo.PAYMENT_INFO_STATUS;
            transactionTimestamp: number;
            requestMessageKey: {
                remoteJid: string;
                fromMe: boolean;
                id: string;
                participant: string;
            };
            expiryTimestamp: number;
            futureproofed: boolean;
            currency: string;
            txnStatus: PaymentInfo.PAYMENT_INFO_TXNSTATUS;
        };
        finalLiveLocation: any;
        quotedPaymentInfo: {
            currencyDeprecated: PaymentInfo.PAYMENT_INFO_CURRENCY;
            amount1000: number;
            receiverJid: string;
            status: PaymentInfo.PAYMENT_INFO_STATUS;
            transactionTimestamp: number;
            requestMessageKey: {
                remoteJid: string;
                fromMe: boolean;
                id: string;
                participant: string;
            };
            expiryTimestamp: number;
            futureproofed: boolean;
            currency: string;
            txnStatus: PaymentInfo.PAYMENT_INFO_TXNSTATUS;
        };
        ephemeralStartTimestamp: number;
        ephemeralDuration: number;
        ephemeralOffToOn: boolean;
    };
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined;
    serializeBinary(): Uint8Array;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): WebMessageInfo;
}
export declare namespace WebMessageInfo {
    enum WEB_MESSAGE_INFO_STATUS {
        ERROR = 0,
        PENDING = 1,
        SERVER_ACK = 2,
        DELIVERY_ACK = 3,
        READ = 4,
        PLAYED = 5
    }
    enum WEB_MESSAGE_INFO_STUBTYPE {
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
