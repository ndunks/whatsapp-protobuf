// source: whatsapp.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.AdReplyInfo', null, global);
goog.exportSymbol('proto.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE', null, global);
goog.exportSymbol('proto.AudioMessage', null, global);
goog.exportSymbol('proto.Call', null, global);
goog.exportSymbol('proto.CallButton', null, global);
goog.exportSymbol('proto.CancelPaymentRequestMessage', null, global);
goog.exportSymbol('proto.CatalogSnapshot', null, global);
goog.exportSymbol('proto.Chat', null, global);
goog.exportSymbol('proto.ContactMessage', null, global);
goog.exportSymbol('proto.ContactsArrayMessage', null, global);
goog.exportSymbol('proto.ContextInfo', null, global);
goog.exportSymbol('proto.DeclinePaymentRequestMessage', null, global);
goog.exportSymbol('proto.DeviceSentMessage', null, global);
goog.exportSymbol('proto.DocumentMessage', null, global);
goog.exportSymbol('proto.ExtendedTextMessage', null, global);
goog.exportSymbol('proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE', null, global);
goog.exportSymbol('proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE', null, global);
goog.exportSymbol('proto.FourRowTemplate', null, global);
goog.exportSymbol('proto.FourRowTemplate.TitleCase', null, global);
goog.exportSymbol('proto.GroupInviteMessage', null, global);
goog.exportSymbol('proto.HSMCurrency', null, global);
goog.exportSymbol('proto.HSMDateTime', null, global);
goog.exportSymbol('proto.HSMDateTime.DatetimeoneofCase', null, global);
goog.exportSymbol('proto.HSMDateTimeComponent', null, global);
goog.exportSymbol('proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE', null, global);
goog.exportSymbol('proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE', null, global);
goog.exportSymbol('proto.HSMDateTimeUnixEpoch', null, global);
goog.exportSymbol('proto.HSMLocalizableParameter', null, global);
goog.exportSymbol('proto.HSMLocalizableParameter.ParamoneofCase', null, global);
goog.exportSymbol('proto.HighlyStructuredMessage', null, global);
goog.exportSymbol('proto.HistorySyncNotification', null, global);
goog.exportSymbol('proto.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE', null, global);
goog.exportSymbol('proto.HydratedCallButton', null, global);
goog.exportSymbol('proto.HydratedFourRowTemplate', null, global);
goog.exportSymbol('proto.HydratedFourRowTemplate.TitleCase', null, global);
goog.exportSymbol('proto.HydratedQuickReplyButton', null, global);
goog.exportSymbol('proto.HydratedTemplateButton', null, global);
goog.exportSymbol('proto.HydratedTemplateButton.HydratedbuttonCase', null, global);
goog.exportSymbol('proto.HydratedURLButton', null, global);
goog.exportSymbol('proto.ImageMessage', null, global);
goog.exportSymbol('proto.InteractiveAnnotation', null, global);
goog.exportSymbol('proto.InteractiveAnnotation.ActionCase', null, global);
goog.exportSymbol('proto.LiveLocationMessage', null, global);
goog.exportSymbol('proto.Location', null, global);
goog.exportSymbol('proto.LocationMessage', null, global);
goog.exportSymbol('proto.Message', null, global);
goog.exportSymbol('proto.MessageKey', null, global);
goog.exportSymbol('proto.NotificationMessageInfo', null, global);
goog.exportSymbol('proto.PaymentInfo', null, global);
goog.exportSymbol('proto.PaymentInfo.PAYMENT_INFO_CURRENCY', null, global);
goog.exportSymbol('proto.PaymentInfo.PAYMENT_INFO_STATUS', null, global);
goog.exportSymbol('proto.PaymentInfo.PAYMENT_INFO_TXNSTATUS', null, global);
goog.exportSymbol('proto.Point', null, global);
goog.exportSymbol('proto.ProductMessage', null, global);
goog.exportSymbol('proto.ProductSnapshot', null, global);
goog.exportSymbol('proto.ProtocolMessage', null, global);
goog.exportSymbol('proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE', null, global);
goog.exportSymbol('proto.QuickReplyButton', null, global);
goog.exportSymbol('proto.RequestPaymentMessage', null, global);
goog.exportSymbol('proto.SendPaymentMessage', null, global);
goog.exportSymbol('proto.SenderKeyDistributionMessage', null, global);
goog.exportSymbol('proto.StickerMessage', null, global);
goog.exportSymbol('proto.TabletNotificationsInfo', null, global);
goog.exportSymbol('proto.TemplateButton', null, global);
goog.exportSymbol('proto.TemplateButton.ButtonCase', null, global);
goog.exportSymbol('proto.TemplateButtonReplyMessage', null, global);
goog.exportSymbol('proto.TemplateMessage', null, global);
goog.exportSymbol('proto.TemplateMessage.FormatCase', null, global);
goog.exportSymbol('proto.URLButton', null, global);
goog.exportSymbol('proto.VideoMessage', null, global);
goog.exportSymbol('proto.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION', null, global);
goog.exportSymbol('proto.WebFeatures', null, global);
goog.exportSymbol('proto.WebFeatures.WEB_FEATURES_FLAG', null, global);
goog.exportSymbol('proto.WebMessageInfo', null, global);
goog.exportSymbol('proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS', null, global);
goog.exportSymbol('proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE', null, global);
goog.exportSymbol('proto.WebNotificationsInfo', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HydratedQuickReplyButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HydratedQuickReplyButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HydratedQuickReplyButton.displayName = 'proto.HydratedQuickReplyButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HydratedURLButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HydratedURLButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HydratedURLButton.displayName = 'proto.HydratedURLButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HydratedCallButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HydratedCallButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HydratedCallButton.displayName = 'proto.HydratedCallButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HydratedTemplateButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.HydratedTemplateButton.oneofGroups_);
};
goog.inherits(proto.HydratedTemplateButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HydratedTemplateButton.displayName = 'proto.HydratedTemplateButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.QuickReplyButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.QuickReplyButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.QuickReplyButton.displayName = 'proto.QuickReplyButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.URLButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.URLButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.URLButton.displayName = 'proto.URLButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CallButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CallButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CallButton.displayName = 'proto.CallButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TemplateButton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.TemplateButton.oneofGroups_);
};
goog.inherits(proto.TemplateButton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TemplateButton.displayName = 'proto.TemplateButton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Location.displayName = 'proto.Location';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Point = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Point, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Point.displayName = 'proto.Point';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.InteractiveAnnotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.InteractiveAnnotation.repeatedFields_, proto.InteractiveAnnotation.oneofGroups_);
};
goog.inherits(proto.InteractiveAnnotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.InteractiveAnnotation.displayName = 'proto.InteractiveAnnotation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AdReplyInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AdReplyInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AdReplyInfo.displayName = 'proto.AdReplyInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ContextInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ContextInfo.repeatedFields_, null);
};
goog.inherits(proto.ContextInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ContextInfo.displayName = 'proto.ContextInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SenderKeyDistributionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SenderKeyDistributionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SenderKeyDistributionMessage.displayName = 'proto.SenderKeyDistributionMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ImageMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ImageMessage.repeatedFields_, null);
};
goog.inherits(proto.ImageMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ImageMessage.displayName = 'proto.ImageMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ContactMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ContactMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ContactMessage.displayName = 'proto.ContactMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LocationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LocationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LocationMessage.displayName = 'proto.LocationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ExtendedTextMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ExtendedTextMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ExtendedTextMessage.displayName = 'proto.ExtendedTextMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DocumentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DocumentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DocumentMessage.displayName = 'proto.DocumentMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AudioMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AudioMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AudioMessage.displayName = 'proto.AudioMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.VideoMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.VideoMessage.repeatedFields_, null);
};
goog.inherits(proto.VideoMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.VideoMessage.displayName = 'proto.VideoMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Call = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Call, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Call.displayName = 'proto.Call';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Chat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Chat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Chat.displayName = 'proto.Chat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ProtocolMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtocolMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtocolMessage.displayName = 'proto.ProtocolMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HistorySyncNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HistorySyncNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HistorySyncNotification.displayName = 'proto.HistorySyncNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ContactsArrayMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ContactsArrayMessage.repeatedFields_, null);
};
goog.inherits(proto.ContactsArrayMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ContactsArrayMessage.displayName = 'proto.ContactsArrayMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HSMCurrency = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HSMCurrency, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HSMCurrency.displayName = 'proto.HSMCurrency';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HSMDateTimeComponent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HSMDateTimeComponent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HSMDateTimeComponent.displayName = 'proto.HSMDateTimeComponent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HSMDateTimeUnixEpoch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HSMDateTimeUnixEpoch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HSMDateTimeUnixEpoch.displayName = 'proto.HSMDateTimeUnixEpoch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HSMDateTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.HSMDateTime.oneofGroups_);
};
goog.inherits(proto.HSMDateTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HSMDateTime.displayName = 'proto.HSMDateTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HSMLocalizableParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.HSMLocalizableParameter.oneofGroups_);
};
goog.inherits(proto.HSMLocalizableParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HSMLocalizableParameter.displayName = 'proto.HSMLocalizableParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HighlyStructuredMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.HighlyStructuredMessage.repeatedFields_, null);
};
goog.inherits(proto.HighlyStructuredMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HighlyStructuredMessage.displayName = 'proto.HighlyStructuredMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SendPaymentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SendPaymentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SendPaymentMessage.displayName = 'proto.SendPaymentMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RequestPaymentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RequestPaymentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RequestPaymentMessage.displayName = 'proto.RequestPaymentMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeclinePaymentRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeclinePaymentRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeclinePaymentRequestMessage.displayName = 'proto.DeclinePaymentRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CancelPaymentRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CancelPaymentRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CancelPaymentRequestMessage.displayName = 'proto.CancelPaymentRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LiveLocationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LiveLocationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LiveLocationMessage.displayName = 'proto.LiveLocationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StickerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StickerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StickerMessage.displayName = 'proto.StickerMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FourRowTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.FourRowTemplate.repeatedFields_, proto.FourRowTemplate.oneofGroups_);
};
goog.inherits(proto.FourRowTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FourRowTemplate.displayName = 'proto.FourRowTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HydratedFourRowTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.HydratedFourRowTemplate.repeatedFields_, proto.HydratedFourRowTemplate.oneofGroups_);
};
goog.inherits(proto.HydratedFourRowTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HydratedFourRowTemplate.displayName = 'proto.HydratedFourRowTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TemplateMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.TemplateMessage.oneofGroups_);
};
goog.inherits(proto.TemplateMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TemplateMessage.displayName = 'proto.TemplateMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TemplateButtonReplyMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TemplateButtonReplyMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TemplateButtonReplyMessage.displayName = 'proto.TemplateButtonReplyMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CatalogSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CatalogSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CatalogSnapshot.displayName = 'proto.CatalogSnapshot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ProductSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProductSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProductSnapshot.displayName = 'proto.ProductSnapshot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ProductMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProductMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProductMessage.displayName = 'proto.ProductMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GroupInviteMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GroupInviteMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GroupInviteMessage.displayName = 'proto.GroupInviteMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeviceSentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeviceSentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeviceSentMessage.displayName = 'proto.DeviceSentMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Message.displayName = 'proto.Message';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MessageKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MessageKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MessageKey.displayName = 'proto.MessageKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WebFeatures = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WebFeatures, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WebFeatures.displayName = 'proto.WebFeatures';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TabletNotificationsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.TabletNotificationsInfo.repeatedFields_, null);
};
goog.inherits(proto.TabletNotificationsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TabletNotificationsInfo.displayName = 'proto.TabletNotificationsInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NotificationMessageInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NotificationMessageInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NotificationMessageInfo.displayName = 'proto.NotificationMessageInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WebNotificationsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.WebNotificationsInfo.repeatedFields_, null);
};
goog.inherits(proto.WebNotificationsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WebNotificationsInfo.displayName = 'proto.WebNotificationsInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PaymentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PaymentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PaymentInfo.displayName = 'proto.PaymentInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WebMessageInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.WebMessageInfo.repeatedFields_, null);
};
goog.inherits(proto.WebMessageInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WebMessageInfo.displayName = 'proto.WebMessageInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HydratedQuickReplyButton.prototype.toObject = function(opt_includeInstance) {
  return proto.HydratedQuickReplyButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HydratedQuickReplyButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HydratedQuickReplyButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    id: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HydratedQuickReplyButton}
 */
proto.HydratedQuickReplyButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HydratedQuickReplyButton;
  return proto.HydratedQuickReplyButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HydratedQuickReplyButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HydratedQuickReplyButton}
 */
proto.HydratedQuickReplyButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplaytext(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HydratedQuickReplyButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HydratedQuickReplyButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HydratedQuickReplyButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HydratedQuickReplyButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string displayText = 1;
 * @return {string}
 */
proto.HydratedQuickReplyButton.prototype.getDisplaytext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.HydratedQuickReplyButton} returns this
 */
proto.HydratedQuickReplyButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HydratedQuickReplyButton} returns this
 */
proto.HydratedQuickReplyButton.prototype.clearDisplaytext = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedQuickReplyButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.HydratedQuickReplyButton.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.HydratedQuickReplyButton} returns this
 */
proto.HydratedQuickReplyButton.prototype.setId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HydratedQuickReplyButton} returns this
 */
proto.HydratedQuickReplyButton.prototype.clearId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedQuickReplyButton.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HydratedURLButton.prototype.toObject = function(opt_includeInstance) {
  return proto.HydratedURLButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HydratedURLButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HydratedURLButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    url: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HydratedURLButton}
 */
proto.HydratedURLButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HydratedURLButton;
  return proto.HydratedURLButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HydratedURLButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HydratedURLButton}
 */
proto.HydratedURLButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplaytext(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HydratedURLButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HydratedURLButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HydratedURLButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HydratedURLButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string displayText = 1;
 * @return {string}
 */
proto.HydratedURLButton.prototype.getDisplaytext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.HydratedURLButton} returns this
 */
proto.HydratedURLButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HydratedURLButton} returns this
 */
proto.HydratedURLButton.prototype.clearDisplaytext = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedURLButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.HydratedURLButton.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.HydratedURLButton} returns this
 */
proto.HydratedURLButton.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HydratedURLButton} returns this
 */
proto.HydratedURLButton.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedURLButton.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HydratedCallButton.prototype.toObject = function(opt_includeInstance) {
  return proto.HydratedCallButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HydratedCallButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HydratedCallButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    phonenumber: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HydratedCallButton}
 */
proto.HydratedCallButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HydratedCallButton;
  return proto.HydratedCallButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HydratedCallButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HydratedCallButton}
 */
proto.HydratedCallButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplaytext(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhonenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HydratedCallButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HydratedCallButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HydratedCallButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HydratedCallButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string displayText = 1;
 * @return {string}
 */
proto.HydratedCallButton.prototype.getDisplaytext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.HydratedCallButton} returns this
 */
proto.HydratedCallButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HydratedCallButton} returns this
 */
proto.HydratedCallButton.prototype.clearDisplaytext = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedCallButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string phoneNumber = 2;
 * @return {string}
 */
proto.HydratedCallButton.prototype.getPhonenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.HydratedCallButton} returns this
 */
proto.HydratedCallButton.prototype.setPhonenumber = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HydratedCallButton} returns this
 */
proto.HydratedCallButton.prototype.clearPhonenumber = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedCallButton.prototype.hasPhonenumber = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.HydratedTemplateButton.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.HydratedTemplateButton.HydratedbuttonCase = {
  HYDRATEDBUTTON_NOT_SET: 0,
  QUICKREPLYBUTTON: 1,
  URLBUTTON: 2,
  CALLBUTTON: 3
};

/**
 * @return {proto.HydratedTemplateButton.HydratedbuttonCase}
 */
proto.HydratedTemplateButton.prototype.getHydratedbuttonCase = function() {
  return /** @type {proto.HydratedTemplateButton.HydratedbuttonCase} */(jspb.Message.computeOneofCase(this, proto.HydratedTemplateButton.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HydratedTemplateButton.prototype.toObject = function(opt_includeInstance) {
  return proto.HydratedTemplateButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HydratedTemplateButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HydratedTemplateButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    quickreplybutton: (f = msg.getQuickreplybutton()) && proto.HydratedQuickReplyButton.toObject(includeInstance, f),
    urlbutton: (f = msg.getUrlbutton()) && proto.HydratedURLButton.toObject(includeInstance, f),
    callbutton: (f = msg.getCallbutton()) && proto.HydratedCallButton.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HydratedTemplateButton}
 */
proto.HydratedTemplateButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HydratedTemplateButton;
  return proto.HydratedTemplateButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HydratedTemplateButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HydratedTemplateButton}
 */
proto.HydratedTemplateButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 1:
      var value = new proto.HydratedQuickReplyButton;
      reader.readMessage(value,proto.HydratedQuickReplyButton.deserializeBinaryFromReader);
      msg.setQuickreplybutton(value);
      break;
    case 2:
      var value = new proto.HydratedURLButton;
      reader.readMessage(value,proto.HydratedURLButton.deserializeBinaryFromReader);
      msg.setUrlbutton(value);
      break;
    case 3:
      var value = new proto.HydratedCallButton;
      reader.readMessage(value,proto.HydratedCallButton.deserializeBinaryFromReader);
      msg.setCallbutton(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HydratedTemplateButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HydratedTemplateButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HydratedTemplateButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HydratedTemplateButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getQuickreplybutton();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.HydratedQuickReplyButton.serializeBinaryToWriter
    );
  }
  f = message.getUrlbutton();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.HydratedURLButton.serializeBinaryToWriter
    );
  }
  f = message.getCallbutton();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.HydratedCallButton.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 index = 4;
 * @return {number}
 */
proto.HydratedTemplateButton.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.HydratedTemplateButton} returns this
 */
proto.HydratedTemplateButton.prototype.setIndex = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HydratedTemplateButton} returns this
 */
proto.HydratedTemplateButton.prototype.clearIndex = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedTemplateButton.prototype.hasIndex = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional HydratedQuickReplyButton quickReplyButton = 1;
 * @return {?proto.HydratedQuickReplyButton}
 */
proto.HydratedTemplateButton.prototype.getQuickreplybutton = function() {
  return /** @type{?proto.HydratedQuickReplyButton} */ (
    jspb.Message.getWrapperField(this, proto.HydratedQuickReplyButton, 1));
};


/**
 * @param {?proto.HydratedQuickReplyButton|undefined} value
 * @return {!proto.HydratedTemplateButton} returns this
*/
proto.HydratedTemplateButton.prototype.setQuickreplybutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.HydratedTemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HydratedTemplateButton} returns this
 */
proto.HydratedTemplateButton.prototype.clearQuickreplybutton = function() {
  return this.setQuickreplybutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedTemplateButton.prototype.hasQuickreplybutton = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HydratedURLButton urlButton = 2;
 * @return {?proto.HydratedURLButton}
 */
proto.HydratedTemplateButton.prototype.getUrlbutton = function() {
  return /** @type{?proto.HydratedURLButton} */ (
    jspb.Message.getWrapperField(this, proto.HydratedURLButton, 2));
};


/**
 * @param {?proto.HydratedURLButton|undefined} value
 * @return {!proto.HydratedTemplateButton} returns this
*/
proto.HydratedTemplateButton.prototype.setUrlbutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.HydratedTemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HydratedTemplateButton} returns this
 */
proto.HydratedTemplateButton.prototype.clearUrlbutton = function() {
  return this.setUrlbutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedTemplateButton.prototype.hasUrlbutton = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional HydratedCallButton callButton = 3;
 * @return {?proto.HydratedCallButton}
 */
proto.HydratedTemplateButton.prototype.getCallbutton = function() {
  return /** @type{?proto.HydratedCallButton} */ (
    jspb.Message.getWrapperField(this, proto.HydratedCallButton, 3));
};


/**
 * @param {?proto.HydratedCallButton|undefined} value
 * @return {!proto.HydratedTemplateButton} returns this
*/
proto.HydratedTemplateButton.prototype.setCallbutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.HydratedTemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HydratedTemplateButton} returns this
 */
proto.HydratedTemplateButton.prototype.clearCallbutton = function() {
  return this.setCallbutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedTemplateButton.prototype.hasCallbutton = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.QuickReplyButton.prototype.toObject = function(opt_includeInstance) {
  return proto.QuickReplyButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.QuickReplyButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.QuickReplyButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = msg.getDisplaytext()) && proto.HighlyStructuredMessage.toObject(includeInstance, f),
    id: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.QuickReplyButton}
 */
proto.QuickReplyButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.QuickReplyButton;
  return proto.QuickReplyButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.QuickReplyButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.QuickReplyButton}
 */
proto.QuickReplyButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setDisplaytext(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.QuickReplyButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.QuickReplyButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.QuickReplyButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.QuickReplyButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplaytext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional HighlyStructuredMessage displayText = 1;
 * @return {?proto.HighlyStructuredMessage}
 */
proto.QuickReplyButton.prototype.getDisplaytext = function() {
  return /** @type{?proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.HighlyStructuredMessage, 1));
};


/**
 * @param {?proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.QuickReplyButton} returns this
*/
proto.QuickReplyButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.QuickReplyButton} returns this
 */
proto.QuickReplyButton.prototype.clearDisplaytext = function() {
  return this.setDisplaytext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.QuickReplyButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.QuickReplyButton.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.QuickReplyButton} returns this
 */
proto.QuickReplyButton.prototype.setId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.QuickReplyButton} returns this
 */
proto.QuickReplyButton.prototype.clearId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.QuickReplyButton.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.URLButton.prototype.toObject = function(opt_includeInstance) {
  return proto.URLButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.URLButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.URLButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = msg.getDisplaytext()) && proto.HighlyStructuredMessage.toObject(includeInstance, f),
    url: (f = msg.getUrl()) && proto.HighlyStructuredMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.URLButton}
 */
proto.URLButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.URLButton;
  return proto.URLButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.URLButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.URLButton}
 */
proto.URLButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setDisplaytext(value);
      break;
    case 2:
      var value = new proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.URLButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.URLButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.URLButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.URLButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplaytext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional HighlyStructuredMessage displayText = 1;
 * @return {?proto.HighlyStructuredMessage}
 */
proto.URLButton.prototype.getDisplaytext = function() {
  return /** @type{?proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.HighlyStructuredMessage, 1));
};


/**
 * @param {?proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.URLButton} returns this
*/
proto.URLButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.URLButton} returns this
 */
proto.URLButton.prototype.clearDisplaytext = function() {
  return this.setDisplaytext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.URLButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HighlyStructuredMessage url = 2;
 * @return {?proto.HighlyStructuredMessage}
 */
proto.URLButton.prototype.getUrl = function() {
  return /** @type{?proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.HighlyStructuredMessage, 2));
};


/**
 * @param {?proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.URLButton} returns this
*/
proto.URLButton.prototype.setUrl = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.URLButton} returns this
 */
proto.URLButton.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.URLButton.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CallButton.prototype.toObject = function(opt_includeInstance) {
  return proto.CallButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CallButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CallButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    displaytext: (f = msg.getDisplaytext()) && proto.HighlyStructuredMessage.toObject(includeInstance, f),
    phonenumber: (f = msg.getPhonenumber()) && proto.HighlyStructuredMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CallButton}
 */
proto.CallButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CallButton;
  return proto.CallButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CallButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CallButton}
 */
proto.CallButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setDisplaytext(value);
      break;
    case 2:
      var value = new proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setPhonenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CallButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CallButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CallButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CallButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplaytext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getPhonenumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional HighlyStructuredMessage displayText = 1;
 * @return {?proto.HighlyStructuredMessage}
 */
proto.CallButton.prototype.getDisplaytext = function() {
  return /** @type{?proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.HighlyStructuredMessage, 1));
};


/**
 * @param {?proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.CallButton} returns this
*/
proto.CallButton.prototype.setDisplaytext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CallButton} returns this
 */
proto.CallButton.prototype.clearDisplaytext = function() {
  return this.setDisplaytext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CallButton.prototype.hasDisplaytext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HighlyStructuredMessage phoneNumber = 2;
 * @return {?proto.HighlyStructuredMessage}
 */
proto.CallButton.prototype.getPhonenumber = function() {
  return /** @type{?proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.HighlyStructuredMessage, 2));
};


/**
 * @param {?proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.CallButton} returns this
*/
proto.CallButton.prototype.setPhonenumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CallButton} returns this
 */
proto.CallButton.prototype.clearPhonenumber = function() {
  return this.setPhonenumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CallButton.prototype.hasPhonenumber = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.TemplateButton.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.TemplateButton.ButtonCase = {
  BUTTON_NOT_SET: 0,
  QUICKREPLYBUTTON: 1,
  URLBUTTON: 2,
  CALLBUTTON: 3
};

/**
 * @return {proto.TemplateButton.ButtonCase}
 */
proto.TemplateButton.prototype.getButtonCase = function() {
  return /** @type {proto.TemplateButton.ButtonCase} */(jspb.Message.computeOneofCase(this, proto.TemplateButton.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TemplateButton.prototype.toObject = function(opt_includeInstance) {
  return proto.TemplateButton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TemplateButton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TemplateButton.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    quickreplybutton: (f = msg.getQuickreplybutton()) && proto.QuickReplyButton.toObject(includeInstance, f),
    urlbutton: (f = msg.getUrlbutton()) && proto.URLButton.toObject(includeInstance, f),
    callbutton: (f = msg.getCallbutton()) && proto.CallButton.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TemplateButton}
 */
proto.TemplateButton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TemplateButton;
  return proto.TemplateButton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TemplateButton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TemplateButton}
 */
proto.TemplateButton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 1:
      var value = new proto.QuickReplyButton;
      reader.readMessage(value,proto.QuickReplyButton.deserializeBinaryFromReader);
      msg.setQuickreplybutton(value);
      break;
    case 2:
      var value = new proto.URLButton;
      reader.readMessage(value,proto.URLButton.deserializeBinaryFromReader);
      msg.setUrlbutton(value);
      break;
    case 3:
      var value = new proto.CallButton;
      reader.readMessage(value,proto.CallButton.deserializeBinaryFromReader);
      msg.setCallbutton(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TemplateButton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TemplateButton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TemplateButton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TemplateButton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getQuickreplybutton();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.QuickReplyButton.serializeBinaryToWriter
    );
  }
  f = message.getUrlbutton();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.URLButton.serializeBinaryToWriter
    );
  }
  f = message.getCallbutton();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.CallButton.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 index = 4;
 * @return {number}
 */
proto.TemplateButton.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.TemplateButton} returns this
 */
proto.TemplateButton.prototype.setIndex = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.TemplateButton} returns this
 */
proto.TemplateButton.prototype.clearIndex = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TemplateButton.prototype.hasIndex = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional QuickReplyButton quickReplyButton = 1;
 * @return {?proto.QuickReplyButton}
 */
proto.TemplateButton.prototype.getQuickreplybutton = function() {
  return /** @type{?proto.QuickReplyButton} */ (
    jspb.Message.getWrapperField(this, proto.QuickReplyButton, 1));
};


/**
 * @param {?proto.QuickReplyButton|undefined} value
 * @return {!proto.TemplateButton} returns this
*/
proto.TemplateButton.prototype.setQuickreplybutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.TemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TemplateButton} returns this
 */
proto.TemplateButton.prototype.clearQuickreplybutton = function() {
  return this.setQuickreplybutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TemplateButton.prototype.hasQuickreplybutton = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional URLButton urlButton = 2;
 * @return {?proto.URLButton}
 */
proto.TemplateButton.prototype.getUrlbutton = function() {
  return /** @type{?proto.URLButton} */ (
    jspb.Message.getWrapperField(this, proto.URLButton, 2));
};


/**
 * @param {?proto.URLButton|undefined} value
 * @return {!proto.TemplateButton} returns this
*/
proto.TemplateButton.prototype.setUrlbutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.TemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TemplateButton} returns this
 */
proto.TemplateButton.prototype.clearUrlbutton = function() {
  return this.setUrlbutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TemplateButton.prototype.hasUrlbutton = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CallButton callButton = 3;
 * @return {?proto.CallButton}
 */
proto.TemplateButton.prototype.getCallbutton = function() {
  return /** @type{?proto.CallButton} */ (
    jspb.Message.getWrapperField(this, proto.CallButton, 3));
};


/**
 * @param {?proto.CallButton|undefined} value
 * @return {!proto.TemplateButton} returns this
*/
proto.TemplateButton.prototype.setCallbutton = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.TemplateButton.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TemplateButton} returns this
 */
proto.TemplateButton.prototype.clearCallbutton = function() {
  return this.setCallbutton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TemplateButton.prototype.hasCallbutton = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    degreeslatitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    degreeslongitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Location}
 */
proto.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Location;
  return proto.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Location}
 */
proto.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDegreeslatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDegreeslongitude(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional double degreesLatitude = 1;
 * @return {number}
 */
proto.Location.prototype.getDegreeslatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Location} returns this
 */
proto.Location.prototype.setDegreeslatitude = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Location} returns this
 */
proto.Location.prototype.clearDegreeslatitude = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Location.prototype.hasDegreeslatitude = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double degreesLongitude = 2;
 * @return {number}
 */
proto.Location.prototype.getDegreeslongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Location} returns this
 */
proto.Location.prototype.setDegreeslongitude = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Location} returns this
 */
proto.Location.prototype.clearDegreeslongitude = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Location.prototype.hasDegreeslongitude = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.Location.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Location} returns this
 */
proto.Location.prototype.setName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Location} returns this
 */
proto.Location.prototype.clearName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Location.prototype.hasName = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Point.prototype.toObject = function(opt_includeInstance) {
  return proto.Point.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Point} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Point.toObject = function(includeInstance, msg) {
  var f, obj = {
    xdeprecated: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    ydeprecated: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    x: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    y: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Point}
 */
proto.Point.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Point;
  return proto.Point.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Point} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Point}
 */
proto.Point.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setXdeprecated(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYdeprecated(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Point.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Point.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Point} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Point.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional int32 xDeprecated = 1;
 * @return {number}
 */
proto.Point.prototype.getXdeprecated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Point} returns this
 */
proto.Point.prototype.setXdeprecated = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Point} returns this
 */
proto.Point.prototype.clearXdeprecated = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Point.prototype.hasXdeprecated = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 yDeprecated = 2;
 * @return {number}
 */
proto.Point.prototype.getYdeprecated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Point} returns this
 */
proto.Point.prototype.setYdeprecated = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Point} returns this
 */
proto.Point.prototype.clearYdeprecated = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Point.prototype.hasYdeprecated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double x = 3;
 * @return {number}
 */
proto.Point.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Point} returns this
 */
proto.Point.prototype.setX = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Point} returns this
 */
proto.Point.prototype.clearX = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Point.prototype.hasX = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double y = 4;
 * @return {number}
 */
proto.Point.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Point} returns this
 */
proto.Point.prototype.setY = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Point} returns this
 */
proto.Point.prototype.clearY = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Point.prototype.hasY = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.InteractiveAnnotation.repeatedFields_ = [1];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.InteractiveAnnotation.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.InteractiveAnnotation.ActionCase = {
  ACTION_NOT_SET: 0,
  LOCATION: 2
};

/**
 * @return {proto.InteractiveAnnotation.ActionCase}
 */
proto.InteractiveAnnotation.prototype.getActionCase = function() {
  return /** @type {proto.InteractiveAnnotation.ActionCase} */(jspb.Message.computeOneofCase(this, proto.InteractiveAnnotation.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.InteractiveAnnotation.prototype.toObject = function(opt_includeInstance) {
  return proto.InteractiveAnnotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.InteractiveAnnotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.InteractiveAnnotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    polygonverticesList: jspb.Message.toObjectList(msg.getPolygonverticesList(),
    proto.Point.toObject, includeInstance),
    location: (f = msg.getLocation()) && proto.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.InteractiveAnnotation}
 */
proto.InteractiveAnnotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.InteractiveAnnotation;
  return proto.InteractiveAnnotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.InteractiveAnnotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.InteractiveAnnotation}
 */
proto.InteractiveAnnotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Point;
      reader.readMessage(value,proto.Point.deserializeBinaryFromReader);
      msg.addPolygonvertices(value);
      break;
    case 2:
      var value = new proto.Location;
      reader.readMessage(value,proto.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.InteractiveAnnotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.InteractiveAnnotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.InteractiveAnnotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.InteractiveAnnotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolygonverticesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Point.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Location.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Point polygonVertices = 1;
 * @return {!Array<!proto.Point>}
 */
proto.InteractiveAnnotation.prototype.getPolygonverticesList = function() {
  return /** @type{!Array<!proto.Point>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Point, 1));
};


/**
 * @param {!Array<!proto.Point>} value
 * @return {!proto.InteractiveAnnotation} returns this
*/
proto.InteractiveAnnotation.prototype.setPolygonverticesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Point=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Point}
 */
proto.InteractiveAnnotation.prototype.addPolygonvertices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Point, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.InteractiveAnnotation} returns this
 */
proto.InteractiveAnnotation.prototype.clearPolygonverticesList = function() {
  return this.setPolygonverticesList([]);
};


/**
 * optional Location location = 2;
 * @return {?proto.Location}
 */
proto.InteractiveAnnotation.prototype.getLocation = function() {
  return /** @type{?proto.Location} */ (
    jspb.Message.getWrapperField(this, proto.Location, 2));
};


/**
 * @param {?proto.Location|undefined} value
 * @return {!proto.InteractiveAnnotation} returns this
*/
proto.InteractiveAnnotation.prototype.setLocation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.InteractiveAnnotation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InteractiveAnnotation} returns this
 */
proto.InteractiveAnnotation.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InteractiveAnnotation.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AdReplyInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.AdReplyInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdReplyInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdReplyInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    advertisername: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mediatype: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    caption: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AdReplyInfo}
 */
proto.AdReplyInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdReplyInfo;
  return proto.AdReplyInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdReplyInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdReplyInfo}
 */
proto.AdReplyInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdvertisername(value);
      break;
    case 2:
      var value = /** @type {!proto.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE} */ (reader.readEnum());
      msg.setMediatype(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AdReplyInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdReplyInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdReplyInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdReplyInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE = {
  NONE: 0,
  IMAGE: 1,
  VIDEO: 2
};

/**
 * optional string advertiserName = 1;
 * @return {string}
 */
proto.AdReplyInfo.prototype.getAdvertisername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AdReplyInfo} returns this
 */
proto.AdReplyInfo.prototype.setAdvertisername = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AdReplyInfo} returns this
 */
proto.AdReplyInfo.prototype.clearAdvertisername = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AdReplyInfo.prototype.hasAdvertisername = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AD_REPLY_INFO_MEDIATYPE mediaType = 2;
 * @return {!proto.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE}
 */
proto.AdReplyInfo.prototype.getMediatype = function() {
  return /** @type {!proto.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.AdReplyInfo.AD_REPLY_INFO_MEDIATYPE} value
 * @return {!proto.AdReplyInfo} returns this
 */
proto.AdReplyInfo.prototype.setMediatype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AdReplyInfo} returns this
 */
proto.AdReplyInfo.prototype.clearMediatype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AdReplyInfo.prototype.hasMediatype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.AdReplyInfo.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.AdReplyInfo.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.AdReplyInfo.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.AdReplyInfo} returns this
 */
proto.AdReplyInfo.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AdReplyInfo} returns this
 */
proto.AdReplyInfo.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AdReplyInfo.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string caption = 17;
 * @return {string}
 */
proto.AdReplyInfo.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.AdReplyInfo} returns this
 */
proto.AdReplyInfo.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AdReplyInfo} returns this
 */
proto.AdReplyInfo.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AdReplyInfo.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 17) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ContextInfo.repeatedFields_ = [15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ContextInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ContextInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ContextInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ContextInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    stanzaid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    participant: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    quotedmessage: (f = msg.getQuotedmessage()) && proto.Message.toObject(includeInstance, f),
    remotejid: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    mentionedjidList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    conversionsource: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f,
    conversiondata: msg.getConversiondata_asB64(),
    conversiondelayseconds: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
    forwardingscore: (f = jspb.Message.getField(msg, 21)) == null ? undefined : f,
    isforwarded: (f = jspb.Message.getBooleanField(msg, 22)) == null ? undefined : f,
    quotedad: (f = msg.getQuotedad()) && proto.AdReplyInfo.toObject(includeInstance, f),
    placeholderkey: (f = msg.getPlaceholderkey()) && proto.MessageKey.toObject(includeInstance, f),
    expiration: (f = jspb.Message.getField(msg, 25)) == null ? undefined : f,
    ephemeralsettingtimestamp: (f = jspb.Message.getField(msg, 26)) == null ? undefined : f,
    ephemeralsharedsecret: msg.getEphemeralsharedsecret_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ContextInfo}
 */
proto.ContextInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ContextInfo;
  return proto.ContextInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ContextInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ContextInfo}
 */
proto.ContextInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStanzaid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipant(value);
      break;
    case 3:
      var value = new proto.Message;
      reader.readMessage(value,proto.Message.deserializeBinaryFromReader);
      msg.setQuotedmessage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemotejid(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addMentionedjid(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversionsource(value);
      break;
    case 19:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setConversiondata(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConversiondelayseconds(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setForwardingscore(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsforwarded(value);
      break;
    case 23:
      var value = new proto.AdReplyInfo;
      reader.readMessage(value,proto.AdReplyInfo.deserializeBinaryFromReader);
      msg.setQuotedad(value);
      break;
    case 24:
      var value = new proto.MessageKey;
      reader.readMessage(value,proto.MessageKey.deserializeBinaryFromReader);
      msg.setPlaceholderkey(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExpiration(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEphemeralsettingtimestamp(value);
      break;
    case 27:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEphemeralsharedsecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ContextInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ContextInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ContextInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ContextInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuotedmessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.Message.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMentionedjidList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeString(
      18,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeBytes(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeUint32(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeUint32(
      21,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getQuotedad();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.AdReplyInfo.serializeBinaryToWriter
    );
  }
  f = message.getPlaceholderkey();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.MessageKey.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeUint32(
      25,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeInt64(
      26,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeBytes(
      27,
      f
    );
  }
};


/**
 * optional string stanzaId = 1;
 * @return {string}
 */
proto.ContextInfo.prototype.getStanzaid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.setStanzaid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearStanzaid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContextInfo.prototype.hasStanzaid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string participant = 2;
 * @return {string}
 */
proto.ContextInfo.prototype.getParticipant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.setParticipant = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearParticipant = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContextInfo.prototype.hasParticipant = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Message quotedMessage = 3;
 * @return {?proto.Message}
 */
proto.ContextInfo.prototype.getQuotedmessage = function() {
  return /** @type{?proto.Message} */ (
    jspb.Message.getWrapperField(this, proto.Message, 3));
};


/**
 * @param {?proto.Message|undefined} value
 * @return {!proto.ContextInfo} returns this
*/
proto.ContextInfo.prototype.setQuotedmessage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearQuotedmessage = function() {
  return this.setQuotedmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContextInfo.prototype.hasQuotedmessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string remoteJid = 4;
 * @return {string}
 */
proto.ContextInfo.prototype.getRemotejid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.setRemotejid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearRemotejid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContextInfo.prototype.hasRemotejid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string mentionedJid = 15;
 * @return {!Array<string>}
 */
proto.ContextInfo.prototype.getMentionedjidList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.setMentionedjidList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.addMentionedjid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearMentionedjidList = function() {
  return this.setMentionedjidList([]);
};


/**
 * optional string conversionSource = 18;
 * @return {string}
 */
proto.ContextInfo.prototype.getConversionsource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.setConversionsource = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearConversionsource = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContextInfo.prototype.hasConversionsource = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bytes conversionData = 19;
 * @return {!(string|Uint8Array)}
 */
proto.ContextInfo.prototype.getConversiondata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * optional bytes conversionData = 19;
 * This is a type-conversion wrapper around `getConversiondata()`
 * @return {string}
 */
proto.ContextInfo.prototype.getConversiondata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getConversiondata()));
};


/**
 * optional bytes conversionData = 19;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getConversiondata()`
 * @return {!Uint8Array}
 */
proto.ContextInfo.prototype.getConversiondata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getConversiondata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.setConversiondata = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearConversiondata = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContextInfo.prototype.hasConversiondata = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional uint32 conversionDelaySeconds = 20;
 * @return {number}
 */
proto.ContextInfo.prototype.getConversiondelayseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.setConversiondelayseconds = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearConversiondelayseconds = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContextInfo.prototype.hasConversiondelayseconds = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional uint32 forwardingScore = 21;
 * @return {number}
 */
proto.ContextInfo.prototype.getForwardingscore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.setForwardingscore = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearForwardingscore = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContextInfo.prototype.hasForwardingscore = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool isForwarded = 22;
 * @return {boolean}
 */
proto.ContextInfo.prototype.getIsforwarded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.setIsforwarded = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearIsforwarded = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContextInfo.prototype.hasIsforwarded = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional AdReplyInfo quotedAd = 23;
 * @return {?proto.AdReplyInfo}
 */
proto.ContextInfo.prototype.getQuotedad = function() {
  return /** @type{?proto.AdReplyInfo} */ (
    jspb.Message.getWrapperField(this, proto.AdReplyInfo, 23));
};


/**
 * @param {?proto.AdReplyInfo|undefined} value
 * @return {!proto.ContextInfo} returns this
*/
proto.ContextInfo.prototype.setQuotedad = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearQuotedad = function() {
  return this.setQuotedad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContextInfo.prototype.hasQuotedad = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional MessageKey placeholderKey = 24;
 * @return {?proto.MessageKey}
 */
proto.ContextInfo.prototype.getPlaceholderkey = function() {
  return /** @type{?proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.MessageKey, 24));
};


/**
 * @param {?proto.MessageKey|undefined} value
 * @return {!proto.ContextInfo} returns this
*/
proto.ContextInfo.prototype.setPlaceholderkey = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearPlaceholderkey = function() {
  return this.setPlaceholderkey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContextInfo.prototype.hasPlaceholderkey = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional uint32 expiration = 25;
 * @return {number}
 */
proto.ContextInfo.prototype.getExpiration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.setExpiration = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearExpiration = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContextInfo.prototype.hasExpiration = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional int64 ephemeralSettingTimestamp = 26;
 * @return {number}
 */
proto.ContextInfo.prototype.getEphemeralsettingtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.setEphemeralsettingtimestamp = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearEphemeralsettingtimestamp = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContextInfo.prototype.hasEphemeralsettingtimestamp = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional bytes ephemeralSharedSecret = 27;
 * @return {!(string|Uint8Array)}
 */
proto.ContextInfo.prototype.getEphemeralsharedsecret = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * optional bytes ephemeralSharedSecret = 27;
 * This is a type-conversion wrapper around `getEphemeralsharedsecret()`
 * @return {string}
 */
proto.ContextInfo.prototype.getEphemeralsharedsecret_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEphemeralsharedsecret()));
};


/**
 * optional bytes ephemeralSharedSecret = 27;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEphemeralsharedsecret()`
 * @return {!Uint8Array}
 */
proto.ContextInfo.prototype.getEphemeralsharedsecret_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEphemeralsharedsecret()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.setEphemeralsharedsecret = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ContextInfo} returns this
 */
proto.ContextInfo.prototype.clearEphemeralsharedsecret = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContextInfo.prototype.hasEphemeralsharedsecret = function() {
  return jspb.Message.getField(this, 27) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SenderKeyDistributionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SenderKeyDistributionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SenderKeyDistributionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SenderKeyDistributionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    axolotlsenderkeydistributionmessage: msg.getAxolotlsenderkeydistributionmessage_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SenderKeyDistributionMessage}
 */
proto.SenderKeyDistributionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SenderKeyDistributionMessage;
  return proto.SenderKeyDistributionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SenderKeyDistributionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SenderKeyDistributionMessage}
 */
proto.SenderKeyDistributionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAxolotlsenderkeydistributionmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SenderKeyDistributionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SenderKeyDistributionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SenderKeyDistributionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SenderKeyDistributionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string groupId = 1;
 * @return {string}
 */
proto.SenderKeyDistributionMessage.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.SenderKeyDistributionMessage} returns this
 */
proto.SenderKeyDistributionMessage.prototype.setGroupid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.SenderKeyDistributionMessage} returns this
 */
proto.SenderKeyDistributionMessage.prototype.clearGroupid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SenderKeyDistributionMessage.prototype.hasGroupid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes axolotlSenderKeyDistributionMessage = 2;
 * @return {!(string|Uint8Array)}
 */
proto.SenderKeyDistributionMessage.prototype.getAxolotlsenderkeydistributionmessage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes axolotlSenderKeyDistributionMessage = 2;
 * This is a type-conversion wrapper around `getAxolotlsenderkeydistributionmessage()`
 * @return {string}
 */
proto.SenderKeyDistributionMessage.prototype.getAxolotlsenderkeydistributionmessage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAxolotlsenderkeydistributionmessage()));
};


/**
 * optional bytes axolotlSenderKeyDistributionMessage = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAxolotlsenderkeydistributionmessage()`
 * @return {!Uint8Array}
 */
proto.SenderKeyDistributionMessage.prototype.getAxolotlsenderkeydistributionmessage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAxolotlsenderkeydistributionmessage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.SenderKeyDistributionMessage} returns this
 */
proto.SenderKeyDistributionMessage.prototype.setAxolotlsenderkeydistributionmessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.SenderKeyDistributionMessage} returns this
 */
proto.SenderKeyDistributionMessage.prototype.clearAxolotlsenderkeydistributionmessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SenderKeyDistributionMessage.prototype.hasAxolotlsenderkeydistributionmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ImageMessage.repeatedFields_ = [10,22];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ImageMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ImageMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ImageMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ImageMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mimetype: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    caption: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    filesha256: msg.getFilesha256_asB64(),
    filelength: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    height: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    width: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    mediakey: msg.getMediakey_asB64(),
    fileencsha256: msg.getFileencsha256_asB64(),
    interactiveannotationsList: jspb.Message.toObjectList(msg.getInteractiveannotationsList(),
    proto.InteractiveAnnotation.toObject, includeInstance),
    directpath: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    mediakeytimestamp: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.ContextInfo.toObject(includeInstance, f),
    firstscansidecar: msg.getFirstscansidecar_asB64(),
    firstscanlength: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    experimentgroupid: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
    scanssidecar: msg.getScanssidecar_asB64(),
    scanlengthsList: (f = jspb.Message.getRepeatedField(msg, 22)) == null ? undefined : f,
    midqualityfilesha256: msg.getMidqualityfilesha256_asB64(),
    midqualityfileencsha256: msg.getMidqualityfileencsha256_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ImageMessage}
 */
proto.ImageMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ImageMessage;
  return proto.ImageMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ImageMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ImageMessage}
 */
proto.ImageMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimetype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilesha256(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFilelength(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMediakey(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileencsha256(value);
      break;
    case 10:
      var value = new proto.InteractiveAnnotation;
      reader.readMessage(value,proto.InteractiveAnnotation.deserializeBinaryFromReader);
      msg.addInteractiveannotations(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectpath(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMediakeytimestamp(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = new proto.ContextInfo;
      reader.readMessage(value,proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    case 18:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFirstscansidecar(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirstscanlength(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExperimentgroupid(value);
      break;
    case 21:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScanssidecar(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint32());
      msg.addScanlengths(value);
      break;
    case 23:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMidqualityfilesha256(value);
      break;
    case 24:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMidqualityfileencsha256(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ImageMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ImageMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ImageMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ImageMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = message.getInteractiveannotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.InteractiveAnnotation.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ContextInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBytes(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeUint32(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeUint32(
      20,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeBytes(
      21,
      f
    );
  }
  f = message.getScanlengthsList();
  if (f.length > 0) {
    writer.writeRepeatedUint32(
      22,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeBytes(
      23,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeBytes(
      24,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.ImageMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mimetype = 2;
 * @return {string}
 */
proto.ImageMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string caption = 3;
 * @return {string}
 */
proto.ImageMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes fileSha256 = 4;
 * @return {!(string|Uint8Array)}
 */
proto.ImageMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes fileSha256 = 4;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.ImageMessage.prototype.getFilesha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilesha256()));
};


/**
 * optional bytes fileSha256 = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {!Uint8Array}
 */
proto.ImageMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 fileLength = 5;
 * @return {number}
 */
proto.ImageMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 height = 6;
 * @return {number}
 */
proto.ImageMessage.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setHeight = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearHeight = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 width = 7;
 * @return {number}
 */
proto.ImageMessage.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setWidth = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearWidth = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bytes mediaKey = 8;
 * @return {!(string|Uint8Array)}
 */
proto.ImageMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes mediaKey = 8;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.ImageMessage.prototype.getMediakey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMediakey()));
};


/**
 * optional bytes mediaKey = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {!Uint8Array}
 */
proto.ImageMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bytes fileEncSha256 = 9;
 * @return {!(string|Uint8Array)}
 */
proto.ImageMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes fileEncSha256 = 9;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.ImageMessage.prototype.getFileencsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileencsha256()));
};


/**
 * optional bytes fileEncSha256 = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {!Uint8Array}
 */
proto.ImageMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated InteractiveAnnotation interactiveAnnotations = 10;
 * @return {!Array<!proto.InteractiveAnnotation>}
 */
proto.ImageMessage.prototype.getInteractiveannotationsList = function() {
  return /** @type{!Array<!proto.InteractiveAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.InteractiveAnnotation, 10));
};


/**
 * @param {!Array<!proto.InteractiveAnnotation>} value
 * @return {!proto.ImageMessage} returns this
*/
proto.ImageMessage.prototype.setInteractiveannotationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.InteractiveAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.InteractiveAnnotation}
 */
proto.ImageMessage.prototype.addInteractiveannotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.InteractiveAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearInteractiveannotationsList = function() {
  return this.setInteractiveannotationsList([]);
};


/**
 * optional string directPath = 11;
 * @return {string}
 */
proto.ImageMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 12;
 * @return {number}
 */
proto.ImageMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.ImageMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.ImageMessage.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.ImageMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.ContextInfo}
 */
proto.ImageMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.ContextInfo, 17));
};


/**
 * @param {?proto.ContextInfo|undefined} value
 * @return {!proto.ImageMessage} returns this
*/
proto.ImageMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bytes firstScanSidecar = 18;
 * @return {!(string|Uint8Array)}
 */
proto.ImageMessage.prototype.getFirstscansidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * optional bytes firstScanSidecar = 18;
 * This is a type-conversion wrapper around `getFirstscansidecar()`
 * @return {string}
 */
proto.ImageMessage.prototype.getFirstscansidecar_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFirstscansidecar()));
};


/**
 * optional bytes firstScanSidecar = 18;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFirstscansidecar()`
 * @return {!Uint8Array}
 */
proto.ImageMessage.prototype.getFirstscansidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFirstscansidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setFirstscansidecar = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearFirstscansidecar = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasFirstscansidecar = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional uint32 firstScanLength = 19;
 * @return {number}
 */
proto.ImageMessage.prototype.getFirstscanlength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setFirstscanlength = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearFirstscanlength = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasFirstscanlength = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional uint32 experimentGroupId = 20;
 * @return {number}
 */
proto.ImageMessage.prototype.getExperimentgroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setExperimentgroupid = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearExperimentgroupid = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasExperimentgroupid = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bytes scansSidecar = 21;
 * @return {!(string|Uint8Array)}
 */
proto.ImageMessage.prototype.getScanssidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * optional bytes scansSidecar = 21;
 * This is a type-conversion wrapper around `getScanssidecar()`
 * @return {string}
 */
proto.ImageMessage.prototype.getScanssidecar_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScanssidecar()));
};


/**
 * optional bytes scansSidecar = 21;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScanssidecar()`
 * @return {!Uint8Array}
 */
proto.ImageMessage.prototype.getScanssidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScanssidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setScanssidecar = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearScanssidecar = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasScanssidecar = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * repeated uint32 scanLengths = 22;
 * @return {!Array<number>}
 */
proto.ImageMessage.prototype.getScanlengthsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 22));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setScanlengthsList = function(value) {
  return jspb.Message.setField(this, 22, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.addScanlengths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 22, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearScanlengthsList = function() {
  return this.setScanlengthsList([]);
};


/**
 * optional bytes midQualityFileSha256 = 23;
 * @return {!(string|Uint8Array)}
 */
proto.ImageMessage.prototype.getMidqualityfilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * optional bytes midQualityFileSha256 = 23;
 * This is a type-conversion wrapper around `getMidqualityfilesha256()`
 * @return {string}
 */
proto.ImageMessage.prototype.getMidqualityfilesha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMidqualityfilesha256()));
};


/**
 * optional bytes midQualityFileSha256 = 23;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMidqualityfilesha256()`
 * @return {!Uint8Array}
 */
proto.ImageMessage.prototype.getMidqualityfilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMidqualityfilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setMidqualityfilesha256 = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearMidqualityfilesha256 = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasMidqualityfilesha256 = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional bytes midQualityFileEncSha256 = 24;
 * @return {!(string|Uint8Array)}
 */
proto.ImageMessage.prototype.getMidqualityfileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * optional bytes midQualityFileEncSha256 = 24;
 * This is a type-conversion wrapper around `getMidqualityfileencsha256()`
 * @return {string}
 */
proto.ImageMessage.prototype.getMidqualityfileencsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMidqualityfileencsha256()));
};


/**
 * optional bytes midQualityFileEncSha256 = 24;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMidqualityfileencsha256()`
 * @return {!Uint8Array}
 */
proto.ImageMessage.prototype.getMidqualityfileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMidqualityfileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.setMidqualityfileencsha256 = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ImageMessage} returns this
 */
proto.ImageMessage.prototype.clearMidqualityfileencsha256 = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ImageMessage.prototype.hasMidqualityfileencsha256 = function() {
  return jspb.Message.getField(this, 24) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ContactMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ContactMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ContactMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ContactMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    displayname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    vcard: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
    contextinfo: (f = msg.getContextinfo()) && proto.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ContactMessage}
 */
proto.ContactMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ContactMessage;
  return proto.ContactMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ContactMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ContactMessage}
 */
proto.ContactMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setVcard(value);
      break;
    case 17:
      var value = new proto.ContextInfo;
      reader.readMessage(value,proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ContactMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ContactMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ContactMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ContactMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string displayName = 1;
 * @return {string}
 */
proto.ContactMessage.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ContactMessage} returns this
 */
proto.ContactMessage.prototype.setDisplayname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ContactMessage} returns this
 */
proto.ContactMessage.prototype.clearDisplayname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContactMessage.prototype.hasDisplayname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string vcard = 16;
 * @return {string}
 */
proto.ContactMessage.prototype.getVcard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.ContactMessage} returns this
 */
proto.ContactMessage.prototype.setVcard = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ContactMessage} returns this
 */
proto.ContactMessage.prototype.clearVcard = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContactMessage.prototype.hasVcard = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.ContextInfo}
 */
proto.ContactMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.ContextInfo, 17));
};


/**
 * @param {?proto.ContextInfo|undefined} value
 * @return {!proto.ContactMessage} returns this
*/
proto.ContactMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ContactMessage} returns this
 */
proto.ContactMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContactMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LocationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.LocationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LocationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LocationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    degreeslatitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    degreeslongitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    address: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    url: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    islive: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    accuracyinmeters: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    speedinmps: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    degreesclockwisefrommagneticnorth: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    comment: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LocationMessage}
 */
proto.LocationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LocationMessage;
  return proto.LocationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LocationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LocationMessage}
 */
proto.LocationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDegreeslatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDegreeslongitude(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIslive(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccuracyinmeters(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSpeedinmps(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDegreesclockwisefrommagneticnorth(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = new proto.ContextInfo;
      reader.readMessage(value,proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LocationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LocationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LocationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LocationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional double degreesLatitude = 1;
 * @return {number}
 */
proto.LocationMessage.prototype.getDegreeslatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.setDegreeslatitude = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.clearDegreeslatitude = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LocationMessage.prototype.hasDegreeslatitude = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double degreesLongitude = 2;
 * @return {number}
 */
proto.LocationMessage.prototype.getDegreeslongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.setDegreeslongitude = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.clearDegreeslongitude = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LocationMessage.prototype.hasDegreeslongitude = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.LocationMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.setName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.clearName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LocationMessage.prototype.hasName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.LocationMessage.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.setAddress = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.clearAddress = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LocationMessage.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string url = 5;
 * @return {string}
 */
proto.LocationMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LocationMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool isLive = 6;
 * @return {boolean}
 */
proto.LocationMessage.prototype.getIslive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.setIslive = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.clearIslive = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LocationMessage.prototype.hasIslive = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 accuracyInMeters = 7;
 * @return {number}
 */
proto.LocationMessage.prototype.getAccuracyinmeters = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.setAccuracyinmeters = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.clearAccuracyinmeters = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LocationMessage.prototype.hasAccuracyinmeters = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional float speedInMps = 8;
 * @return {number}
 */
proto.LocationMessage.prototype.getSpeedinmps = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.setSpeedinmps = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.clearSpeedinmps = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LocationMessage.prototype.hasSpeedinmps = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 degreesClockwiseFromMagneticNorth = 9;
 * @return {number}
 */
proto.LocationMessage.prototype.getDegreesclockwisefrommagneticnorth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.setDegreesclockwisefrommagneticnorth = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.clearDegreesclockwisefrommagneticnorth = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LocationMessage.prototype.hasDegreesclockwisefrommagneticnorth = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string comment = 11;
 * @return {string}
 */
proto.LocationMessage.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.setComment = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.clearComment = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LocationMessage.prototype.hasComment = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.LocationMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.LocationMessage.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.LocationMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LocationMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.ContextInfo}
 */
proto.LocationMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.ContextInfo, 17));
};


/**
 * @param {?proto.ContextInfo|undefined} value
 * @return {!proto.LocationMessage} returns this
*/
proto.LocationMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.LocationMessage} returns this
 */
proto.LocationMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LocationMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ExtendedTextMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ExtendedTextMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ExtendedTextMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExtendedTextMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    matchedtext: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canonicalurl: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    title: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    textargb: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    backgroundargb: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    font: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    previewtype: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.ContextInfo.toObject(includeInstance, f),
    donotplayinline: (f = jspb.Message.getBooleanField(msg, 18)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ExtendedTextMessage}
 */
proto.ExtendedTextMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ExtendedTextMessage;
  return proto.ExtendedTextMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ExtendedTextMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ExtendedTextMessage}
 */
proto.ExtendedTextMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchedtext(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCanonicalurl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setTextargb(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setBackgroundargb(value);
      break;
    case 9:
      var value = /** @type {!proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE} */ (reader.readEnum());
      msg.setFont(value);
      break;
    case 10:
      var value = /** @type {!proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE} */ (reader.readEnum());
      msg.setPreviewtype(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = new proto.ContextInfo;
      reader.readMessage(value,proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDonotplayinline(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ExtendedTextMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ExtendedTextMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ExtendedTextMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExtendedTextMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeFixed32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeFixed32(
      8,
      f
    );
  }
  f = /** @type {!proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ContextInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE = {
  SANS_SERIF: 0,
  SERIF: 1,
  NORICAN_REGULAR: 2,
  BRYNDAN_WRITE: 3,
  BEBASNEUE_REGULAR: 4,
  OSWALD_HEAVY: 5
};

/**
 * @enum {number}
 */
proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE = {
  NONE: 0,
  VIDEO: 1
};

/**
 * optional string text = 1;
 * @return {string}
 */
proto.ExtendedTextMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.setText = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.clearText = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExtendedTextMessage.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string matchedText = 2;
 * @return {string}
 */
proto.ExtendedTextMessage.prototype.getMatchedtext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.setMatchedtext = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.clearMatchedtext = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExtendedTextMessage.prototype.hasMatchedtext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string canonicalUrl = 4;
 * @return {string}
 */
proto.ExtendedTextMessage.prototype.getCanonicalurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.setCanonicalurl = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.clearCanonicalurl = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExtendedTextMessage.prototype.hasCanonicalurl = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.ExtendedTextMessage.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExtendedTextMessage.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string title = 6;
 * @return {string}
 */
proto.ExtendedTextMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExtendedTextMessage.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional fixed32 textArgb = 7;
 * @return {number}
 */
proto.ExtendedTextMessage.prototype.getTextargb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.setTextargb = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.clearTextargb = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExtendedTextMessage.prototype.hasTextargb = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional fixed32 backgroundArgb = 8;
 * @return {number}
 */
proto.ExtendedTextMessage.prototype.getBackgroundargb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.setBackgroundargb = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.clearBackgroundargb = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExtendedTextMessage.prototype.hasBackgroundargb = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional EXTENDED_TEXT_MESSAGE_FONTTYPE font = 9;
 * @return {!proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE}
 */
proto.ExtendedTextMessage.prototype.getFont = function() {
  return /** @type {!proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPE} value
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.setFont = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.clearFont = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExtendedTextMessage.prototype.hasFont = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional EXTENDED_TEXT_MESSAGE_PREVIEWTYPE previewType = 10;
 * @return {!proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE}
 */
proto.ExtendedTextMessage.prototype.getPreviewtype = function() {
  return /** @type {!proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPE} value
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.setPreviewtype = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.clearPreviewtype = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExtendedTextMessage.prototype.hasPreviewtype = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.ExtendedTextMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.ExtendedTextMessage.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.ExtendedTextMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExtendedTextMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.ContextInfo}
 */
proto.ExtendedTextMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.ContextInfo, 17));
};


/**
 * @param {?proto.ContextInfo|undefined} value
 * @return {!proto.ExtendedTextMessage} returns this
*/
proto.ExtendedTextMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExtendedTextMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool doNotPlayInline = 18;
 * @return {boolean}
 */
proto.ExtendedTextMessage.prototype.getDonotplayinline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.setDonotplayinline = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExtendedTextMessage} returns this
 */
proto.ExtendedTextMessage.prototype.clearDonotplayinline = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExtendedTextMessage.prototype.hasDonotplayinline = function() {
  return jspb.Message.getField(this, 18) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DocumentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DocumentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DocumentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DocumentMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mimetype: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    title: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    filesha256: msg.getFilesha256_asB64(),
    filelength: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    pagecount: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    mediakey: msg.getMediakey_asB64(),
    filename: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    fileencsha256: msg.getFileencsha256_asB64(),
    directpath: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    mediakeytimestamp: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DocumentMessage}
 */
proto.DocumentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DocumentMessage;
  return proto.DocumentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DocumentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DocumentMessage}
 */
proto.DocumentMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimetype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilesha256(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFilelength(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPagecount(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMediakey(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileencsha256(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectpath(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMediakeytimestamp(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = new proto.ContextInfo;
      reader.readMessage(value,proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DocumentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DocumentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DocumentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DocumentMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.DocumentMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DocumentMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mimetype = 2;
 * @return {string}
 */
proto.DocumentMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DocumentMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.DocumentMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DocumentMessage.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes fileSha256 = 4;
 * @return {!(string|Uint8Array)}
 */
proto.DocumentMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes fileSha256 = 4;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.DocumentMessage.prototype.getFilesha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilesha256()));
};


/**
 * optional bytes fileSha256 = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {!Uint8Array}
 */
proto.DocumentMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DocumentMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 fileLength = 5;
 * @return {number}
 */
proto.DocumentMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DocumentMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 pageCount = 6;
 * @return {number}
 */
proto.DocumentMessage.prototype.getPagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.setPagecount = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.clearPagecount = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DocumentMessage.prototype.hasPagecount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes mediaKey = 7;
 * @return {!(string|Uint8Array)}
 */
proto.DocumentMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes mediaKey = 7;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.DocumentMessage.prototype.getMediakey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMediakey()));
};


/**
 * optional bytes mediaKey = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {!Uint8Array}
 */
proto.DocumentMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DocumentMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string fileName = 8;
 * @return {string}
 */
proto.DocumentMessage.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.setFilename = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.clearFilename = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DocumentMessage.prototype.hasFilename = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bytes fileEncSha256 = 9;
 * @return {!(string|Uint8Array)}
 */
proto.DocumentMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes fileEncSha256 = 9;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.DocumentMessage.prototype.getFileencsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileencsha256()));
};


/**
 * optional bytes fileEncSha256 = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {!Uint8Array}
 */
proto.DocumentMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DocumentMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string directPath = 10;
 * @return {string}
 */
proto.DocumentMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DocumentMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 11;
 * @return {number}
 */
proto.DocumentMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DocumentMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.DocumentMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.DocumentMessage.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.DocumentMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DocumentMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.ContextInfo}
 */
proto.DocumentMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.ContextInfo, 17));
};


/**
 * @param {?proto.ContextInfo|undefined} value
 * @return {!proto.DocumentMessage} returns this
*/
proto.DocumentMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DocumentMessage} returns this
 */
proto.DocumentMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DocumentMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AudioMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AudioMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AudioMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AudioMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mimetype: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    filesha256: msg.getFilesha256_asB64(),
    filelength: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    seconds: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    ptt: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    mediakey: msg.getMediakey_asB64(),
    fileencsha256: msg.getFileencsha256_asB64(),
    directpath: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    mediakeytimestamp: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    contextinfo: (f = msg.getContextinfo()) && proto.ContextInfo.toObject(includeInstance, f),
    streamingsidecar: msg.getStreamingsidecar_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AudioMessage}
 */
proto.AudioMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AudioMessage;
  return proto.AudioMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AudioMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AudioMessage}
 */
proto.AudioMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimetype(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilesha256(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFilelength(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeconds(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPtt(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMediakey(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileencsha256(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectpath(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMediakeytimestamp(value);
      break;
    case 17:
      var value = new proto.ContextInfo;
      reader.readMessage(value,proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    case 18:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStreamingsidecar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AudioMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AudioMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AudioMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AudioMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ContextInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBytes(
      18,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.AudioMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AudioMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mimetype = 2;
 * @return {string}
 */
proto.AudioMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AudioMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes fileSha256 = 3;
 * @return {!(string|Uint8Array)}
 */
proto.AudioMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes fileSha256 = 3;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.AudioMessage.prototype.getFilesha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilesha256()));
};


/**
 * optional bytes fileSha256 = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {!Uint8Array}
 */
proto.AudioMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AudioMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 fileLength = 4;
 * @return {number}
 */
proto.AudioMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AudioMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 seconds = 5;
 * @return {number}
 */
proto.AudioMessage.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.setSeconds = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.clearSeconds = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AudioMessage.prototype.hasSeconds = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool ptt = 6;
 * @return {boolean}
 */
proto.AudioMessage.prototype.getPtt = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.setPtt = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.clearPtt = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AudioMessage.prototype.hasPtt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes mediaKey = 7;
 * @return {!(string|Uint8Array)}
 */
proto.AudioMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes mediaKey = 7;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.AudioMessage.prototype.getMediakey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMediakey()));
};


/**
 * optional bytes mediaKey = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {!Uint8Array}
 */
proto.AudioMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AudioMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bytes fileEncSha256 = 8;
 * @return {!(string|Uint8Array)}
 */
proto.AudioMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes fileEncSha256 = 8;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.AudioMessage.prototype.getFileencsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileencsha256()));
};


/**
 * optional bytes fileEncSha256 = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {!Uint8Array}
 */
proto.AudioMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AudioMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string directPath = 9;
 * @return {string}
 */
proto.AudioMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AudioMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 10;
 * @return {number}
 */
proto.AudioMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AudioMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.ContextInfo}
 */
proto.AudioMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.ContextInfo, 17));
};


/**
 * @param {?proto.ContextInfo|undefined} value
 * @return {!proto.AudioMessage} returns this
*/
proto.AudioMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AudioMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bytes streamingSidecar = 18;
 * @return {!(string|Uint8Array)}
 */
proto.AudioMessage.prototype.getStreamingsidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * optional bytes streamingSidecar = 18;
 * This is a type-conversion wrapper around `getStreamingsidecar()`
 * @return {string}
 */
proto.AudioMessage.prototype.getStreamingsidecar_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStreamingsidecar()));
};


/**
 * optional bytes streamingSidecar = 18;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStreamingsidecar()`
 * @return {!Uint8Array}
 */
proto.AudioMessage.prototype.getStreamingsidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStreamingsidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.setStreamingsidecar = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AudioMessage} returns this
 */
proto.AudioMessage.prototype.clearStreamingsidecar = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AudioMessage.prototype.hasStreamingsidecar = function() {
  return jspb.Message.getField(this, 18) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.VideoMessage.repeatedFields_ = [12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.VideoMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.VideoMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.VideoMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.VideoMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mimetype: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    filesha256: msg.getFilesha256_asB64(),
    filelength: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    seconds: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    mediakey: msg.getMediakey_asB64(),
    caption: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    gifplayback: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    height: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    width: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    fileencsha256: msg.getFileencsha256_asB64(),
    interactiveannotationsList: jspb.Message.toObjectList(msg.getInteractiveannotationsList(),
    proto.InteractiveAnnotation.toObject, includeInstance),
    directpath: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    mediakeytimestamp: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.ContextInfo.toObject(includeInstance, f),
    streamingsidecar: msg.getStreamingsidecar_asB64(),
    gifattribution: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.VideoMessage}
 */
proto.VideoMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.VideoMessage;
  return proto.VideoMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.VideoMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.VideoMessage}
 */
proto.VideoMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimetype(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilesha256(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFilelength(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeconds(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMediakey(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGifplayback(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 11:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileencsha256(value);
      break;
    case 12:
      var value = new proto.InteractiveAnnotation;
      reader.readMessage(value,proto.InteractiveAnnotation.deserializeBinaryFromReader);
      msg.addInteractiveannotations(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectpath(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMediakeytimestamp(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = new proto.ContextInfo;
      reader.readMessage(value,proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    case 18:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStreamingsidecar(value);
      break;
    case 19:
      var value = /** @type {!proto.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION} */ (reader.readEnum());
      msg.setGifattribution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.VideoMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.VideoMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.VideoMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.VideoMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBytes(
      11,
      f
    );
  }
  f = message.getInteractiveannotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.InteractiveAnnotation.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ContextInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBytes(
      18,
      f
    );
  }
  f = /** @type {!proto.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeEnum(
      19,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION = {
  NONE: 0,
  GIPHY: 1,
  TENOR: 2
};

/**
 * optional string url = 1;
 * @return {string}
 */
proto.VideoMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mimetype = 2;
 * @return {string}
 */
proto.VideoMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes fileSha256 = 3;
 * @return {!(string|Uint8Array)}
 */
proto.VideoMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes fileSha256 = 3;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.VideoMessage.prototype.getFilesha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilesha256()));
};


/**
 * optional bytes fileSha256 = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {!Uint8Array}
 */
proto.VideoMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 fileLength = 4;
 * @return {number}
 */
proto.VideoMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 seconds = 5;
 * @return {number}
 */
proto.VideoMessage.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setSeconds = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearSeconds = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasSeconds = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes mediaKey = 6;
 * @return {!(string|Uint8Array)}
 */
proto.VideoMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes mediaKey = 6;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.VideoMessage.prototype.getMediakey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMediakey()));
};


/**
 * optional bytes mediaKey = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {!Uint8Array}
 */
proto.VideoMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string caption = 7;
 * @return {string}
 */
proto.VideoMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool gifPlayback = 8;
 * @return {boolean}
 */
proto.VideoMessage.prototype.getGifplayback = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setGifplayback = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearGifplayback = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasGifplayback = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 height = 9;
 * @return {number}
 */
proto.VideoMessage.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setHeight = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearHeight = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 width = 10;
 * @return {number}
 */
proto.VideoMessage.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setWidth = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearWidth = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bytes fileEncSha256 = 11;
 * @return {!(string|Uint8Array)}
 */
proto.VideoMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * optional bytes fileEncSha256 = 11;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.VideoMessage.prototype.getFileencsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileencsha256()));
};


/**
 * optional bytes fileEncSha256 = 11;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {!Uint8Array}
 */
proto.VideoMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated InteractiveAnnotation interactiveAnnotations = 12;
 * @return {!Array<!proto.InteractiveAnnotation>}
 */
proto.VideoMessage.prototype.getInteractiveannotationsList = function() {
  return /** @type{!Array<!proto.InteractiveAnnotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.InteractiveAnnotation, 12));
};


/**
 * @param {!Array<!proto.InteractiveAnnotation>} value
 * @return {!proto.VideoMessage} returns this
*/
proto.VideoMessage.prototype.setInteractiveannotationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.InteractiveAnnotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.InteractiveAnnotation}
 */
proto.VideoMessage.prototype.addInteractiveannotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.InteractiveAnnotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearInteractiveannotationsList = function() {
  return this.setInteractiveannotationsList([]);
};


/**
 * optional string directPath = 13;
 * @return {string}
 */
proto.VideoMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 14;
 * @return {number}
 */
proto.VideoMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.VideoMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.VideoMessage.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.VideoMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.ContextInfo}
 */
proto.VideoMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.ContextInfo, 17));
};


/**
 * @param {?proto.ContextInfo|undefined} value
 * @return {!proto.VideoMessage} returns this
*/
proto.VideoMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bytes streamingSidecar = 18;
 * @return {!(string|Uint8Array)}
 */
proto.VideoMessage.prototype.getStreamingsidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * optional bytes streamingSidecar = 18;
 * This is a type-conversion wrapper around `getStreamingsidecar()`
 * @return {string}
 */
proto.VideoMessage.prototype.getStreamingsidecar_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStreamingsidecar()));
};


/**
 * optional bytes streamingSidecar = 18;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStreamingsidecar()`
 * @return {!Uint8Array}
 */
proto.VideoMessage.prototype.getStreamingsidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStreamingsidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setStreamingsidecar = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearStreamingsidecar = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasStreamingsidecar = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional VIDEO_MESSAGE_ATTRIBUTION gifAttribution = 19;
 * @return {!proto.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION}
 */
proto.VideoMessage.prototype.getGifattribution = function() {
  return /** @type {!proto.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.VideoMessage.VIDEO_MESSAGE_ATTRIBUTION} value
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.setGifattribution = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.VideoMessage} returns this
 */
proto.VideoMessage.prototype.clearGifattribution = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.VideoMessage.prototype.hasGifattribution = function() {
  return jspb.Message.getField(this, 19) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Call.prototype.toObject = function(opt_includeInstance) {
  return proto.Call.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Call} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Call.toObject = function(includeInstance, msg) {
  var f, obj = {
    callkey: msg.getCallkey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Call}
 */
proto.Call.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Call;
  return proto.Call.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Call} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Call}
 */
proto.Call.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCallkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Call.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Call.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Call} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Call.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes callKey = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Call.prototype.getCallkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes callKey = 1;
 * This is a type-conversion wrapper around `getCallkey()`
 * @return {string}
 */
proto.Call.prototype.getCallkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCallkey()));
};


/**
 * optional bytes callKey = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCallkey()`
 * @return {!Uint8Array}
 */
proto.Call.prototype.getCallkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCallkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Call} returns this
 */
proto.Call.prototype.setCallkey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Call} returns this
 */
proto.Call.prototype.clearCallkey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Call.prototype.hasCallkey = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Chat.prototype.toObject = function(opt_includeInstance) {
  return proto.Chat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Chat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Chat.toObject = function(includeInstance, msg) {
  var f, obj = {
    displayname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    id: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Chat}
 */
proto.Chat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Chat;
  return proto.Chat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Chat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Chat}
 */
proto.Chat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Chat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Chat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Chat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Chat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string displayName = 1;
 * @return {string}
 */
proto.Chat.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Chat} returns this
 */
proto.Chat.prototype.setDisplayname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Chat} returns this
 */
proto.Chat.prototype.clearDisplayname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Chat.prototype.hasDisplayname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.Chat.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Chat} returns this
 */
proto.Chat.prototype.setId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Chat} returns this
 */
proto.Chat.prototype.clearId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Chat.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ProtocolMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtocolMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtocolMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtocolMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.MessageKey.toObject(includeInstance, f),
    type: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    ephemeralexpiration: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    ephemeralsettingtimestamp: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    historysyncnotification: (f = msg.getHistorysyncnotification()) && proto.HistorySyncNotification.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ProtocolMessage}
 */
proto.ProtocolMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtocolMessage;
  return proto.ProtocolMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtocolMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtocolMessage}
 */
proto.ProtocolMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MessageKey;
      reader.readMessage(value,proto.MessageKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEphemeralexpiration(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEphemeralsettingtimestamp(value);
      break;
    case 6:
      var value = new proto.HistorySyncNotification;
      reader.readMessage(value,proto.HistorySyncNotification.deserializeBinaryFromReader);
      msg.setHistorysyncnotification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ProtocolMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtocolMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtocolMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtocolMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MessageKey.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getHistorysyncnotification();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.HistorySyncNotification.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE = {
  REVOKE: 0,
  EPHEMERAL_SETTING: 3,
  EPHEMERAL_SYNC_RESPONSE: 4,
  HISTORY_SYNC_NOTIFICATION: 5
};

/**
 * optional MessageKey key = 1;
 * @return {?proto.MessageKey}
 */
proto.ProtocolMessage.prototype.getKey = function() {
  return /** @type{?proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.MessageKey, 1));
};


/**
 * @param {?proto.MessageKey|undefined} value
 * @return {!proto.ProtocolMessage} returns this
*/
proto.ProtocolMessage.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ProtocolMessage} returns this
 */
proto.ProtocolMessage.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtocolMessage.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PROTOCOL_MESSAGE_TYPE type = 2;
 * @return {!proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE}
 */
proto.ProtocolMessage.prototype.getType = function() {
  return /** @type {!proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE} value
 * @return {!proto.ProtocolMessage} returns this
 */
proto.ProtocolMessage.prototype.setType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtocolMessage} returns this
 */
proto.ProtocolMessage.prototype.clearType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtocolMessage.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 ephemeralExpiration = 4;
 * @return {number}
 */
proto.ProtocolMessage.prototype.getEphemeralexpiration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtocolMessage} returns this
 */
proto.ProtocolMessage.prototype.setEphemeralexpiration = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtocolMessage} returns this
 */
proto.ProtocolMessage.prototype.clearEphemeralexpiration = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtocolMessage.prototype.hasEphemeralexpiration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 ephemeralSettingTimestamp = 5;
 * @return {number}
 */
proto.ProtocolMessage.prototype.getEphemeralsettingtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtocolMessage} returns this
 */
proto.ProtocolMessage.prototype.setEphemeralsettingtimestamp = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtocolMessage} returns this
 */
proto.ProtocolMessage.prototype.clearEphemeralsettingtimestamp = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtocolMessage.prototype.hasEphemeralsettingtimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional HistorySyncNotification historySyncNotification = 6;
 * @return {?proto.HistorySyncNotification}
 */
proto.ProtocolMessage.prototype.getHistorysyncnotification = function() {
  return /** @type{?proto.HistorySyncNotification} */ (
    jspb.Message.getWrapperField(this, proto.HistorySyncNotification, 6));
};


/**
 * @param {?proto.HistorySyncNotification|undefined} value
 * @return {!proto.ProtocolMessage} returns this
*/
proto.ProtocolMessage.prototype.setHistorysyncnotification = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ProtocolMessage} returns this
 */
proto.ProtocolMessage.prototype.clearHistorysyncnotification = function() {
  return this.setHistorysyncnotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtocolMessage.prototype.hasHistorysyncnotification = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HistorySyncNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.HistorySyncNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HistorySyncNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HistorySyncNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    filesha256: msg.getFilesha256_asB64(),
    filelength: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    mediakey: msg.getMediakey_asB64(),
    fileencsha256: msg.getFileencsha256_asB64(),
    directpath: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    synctype: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    chunkorder: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    originalmessageid: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HistorySyncNotification}
 */
proto.HistorySyncNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HistorySyncNotification;
  return proto.HistorySyncNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HistorySyncNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HistorySyncNotification}
 */
proto.HistorySyncNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilesha256(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFilelength(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMediakey(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileencsha256(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectpath(value);
      break;
    case 6:
      var value = /** @type {!proto.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE} */ (reader.readEnum());
      msg.setSynctype(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChunkorder(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalmessageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HistorySyncNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HistorySyncNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HistorySyncNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HistorySyncNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {!proto.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE = {
  INITIAL_BOOTSTRAP: 0,
  INITIAL_STATUS_V3: 1,
  FULL: 2,
  RECENT: 3,
  RESEND: 4
};

/**
 * optional bytes fileSha256 = 1;
 * @return {!(string|Uint8Array)}
 */
proto.HistorySyncNotification.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes fileSha256 = 1;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.HistorySyncNotification.prototype.getFilesha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilesha256()));
};


/**
 * optional bytes fileSha256 = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {!Uint8Array}
 */
proto.HistorySyncNotification.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HistorySyncNotification.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 fileLength = 2;
 * @return {number}
 */
proto.HistorySyncNotification.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HistorySyncNotification.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes mediaKey = 3;
 * @return {!(string|Uint8Array)}
 */
proto.HistorySyncNotification.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes mediaKey = 3;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.HistorySyncNotification.prototype.getMediakey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMediakey()));
};


/**
 * optional bytes mediaKey = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {!Uint8Array}
 */
proto.HistorySyncNotification.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HistorySyncNotification.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes fileEncSha256 = 4;
 * @return {!(string|Uint8Array)}
 */
proto.HistorySyncNotification.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes fileEncSha256 = 4;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.HistorySyncNotification.prototype.getFileencsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileencsha256()));
};


/**
 * optional bytes fileEncSha256 = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {!Uint8Array}
 */
proto.HistorySyncNotification.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HistorySyncNotification.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string directPath = 5;
 * @return {string}
 */
proto.HistorySyncNotification.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HistorySyncNotification.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE syncType = 6;
 * @return {!proto.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE}
 */
proto.HistorySyncNotification.prototype.getSynctype = function() {
  return /** @type {!proto.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE} value
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.setSynctype = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.clearSynctype = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HistorySyncNotification.prototype.hasSynctype = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 chunkOrder = 7;
 * @return {number}
 */
proto.HistorySyncNotification.prototype.getChunkorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.setChunkorder = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.clearChunkorder = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HistorySyncNotification.prototype.hasChunkorder = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string originalMessageId = 8;
 * @return {string}
 */
proto.HistorySyncNotification.prototype.getOriginalmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.setOriginalmessageid = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HistorySyncNotification} returns this
 */
proto.HistorySyncNotification.prototype.clearOriginalmessageid = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HistorySyncNotification.prototype.hasOriginalmessageid = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ContactsArrayMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ContactsArrayMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ContactsArrayMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ContactsArrayMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ContactsArrayMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    displayname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    contactsList: jspb.Message.toObjectList(msg.getContactsList(),
    proto.ContactMessage.toObject, includeInstance),
    contextinfo: (f = msg.getContextinfo()) && proto.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ContactsArrayMessage}
 */
proto.ContactsArrayMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ContactsArrayMessage;
  return proto.ContactsArrayMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ContactsArrayMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ContactsArrayMessage}
 */
proto.ContactsArrayMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 2:
      var value = new proto.ContactMessage;
      reader.readMessage(value,proto.ContactMessage.deserializeBinaryFromReader);
      msg.addContacts(value);
      break;
    case 17:
      var value = new proto.ContextInfo;
      reader.readMessage(value,proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ContactsArrayMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ContactsArrayMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ContactsArrayMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ContactsArrayMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContactsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ContactMessage.serializeBinaryToWriter
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string displayName = 1;
 * @return {string}
 */
proto.ContactsArrayMessage.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ContactsArrayMessage} returns this
 */
proto.ContactsArrayMessage.prototype.setDisplayname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ContactsArrayMessage} returns this
 */
proto.ContactsArrayMessage.prototype.clearDisplayname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContactsArrayMessage.prototype.hasDisplayname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ContactMessage contacts = 2;
 * @return {!Array<!proto.ContactMessage>}
 */
proto.ContactsArrayMessage.prototype.getContactsList = function() {
  return /** @type{!Array<!proto.ContactMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ContactMessage, 2));
};


/**
 * @param {!Array<!proto.ContactMessage>} value
 * @return {!proto.ContactsArrayMessage} returns this
*/
proto.ContactsArrayMessage.prototype.setContactsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ContactMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ContactMessage}
 */
proto.ContactsArrayMessage.prototype.addContacts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ContactMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ContactsArrayMessage} returns this
 */
proto.ContactsArrayMessage.prototype.clearContactsList = function() {
  return this.setContactsList([]);
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.ContextInfo}
 */
proto.ContactsArrayMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.ContextInfo, 17));
};


/**
 * @param {?proto.ContextInfo|undefined} value
 * @return {!proto.ContactsArrayMessage} returns this
*/
proto.ContactsArrayMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ContactsArrayMessage} returns this
 */
proto.ContactsArrayMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ContactsArrayMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HSMCurrency.prototype.toObject = function(opt_includeInstance) {
  return proto.HSMCurrency.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HSMCurrency} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HSMCurrency.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencycode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    amount1000: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HSMCurrency}
 */
proto.HSMCurrency.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HSMCurrency;
  return proto.HSMCurrency.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HSMCurrency} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HSMCurrency}
 */
proto.HSMCurrency.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencycode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount1000(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HSMCurrency.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HSMCurrency.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HSMCurrency} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HSMCurrency.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string currencyCode = 1;
 * @return {string}
 */
proto.HSMCurrency.prototype.getCurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.HSMCurrency} returns this
 */
proto.HSMCurrency.prototype.setCurrencycode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HSMCurrency} returns this
 */
proto.HSMCurrency.prototype.clearCurrencycode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMCurrency.prototype.hasCurrencycode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 amount1000 = 2;
 * @return {number}
 */
proto.HSMCurrency.prototype.getAmount1000 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.HSMCurrency} returns this
 */
proto.HSMCurrency.prototype.setAmount1000 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HSMCurrency} returns this
 */
proto.HSMCurrency.prototype.clearAmount1000 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMCurrency.prototype.hasAmount1000 = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HSMDateTimeComponent.prototype.toObject = function(opt_includeInstance) {
  return proto.HSMDateTimeComponent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HSMDateTimeComponent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HSMDateTimeComponent.toObject = function(includeInstance, msg) {
  var f, obj = {
    dayofweek: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    year: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    month: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    dayofmonth: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    hour: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    minute: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    calendar: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HSMDateTimeComponent}
 */
proto.HSMDateTimeComponent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HSMDateTimeComponent;
  return proto.HSMDateTimeComponent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HSMDateTimeComponent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HSMDateTimeComponent}
 */
proto.HSMDateTimeComponent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE} */ (reader.readEnum());
      msg.setDayofweek(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setYear(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMonth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDayofmonth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHour(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinute(value);
      break;
    case 7:
      var value = /** @type {!proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE} */ (reader.readEnum());
      msg.setCalendar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HSMDateTimeComponent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HSMDateTimeComponent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HSMDateTimeComponent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HSMDateTimeComponent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {!proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE = {
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
  SUNDAY: 7
};

/**
 * @enum {number}
 */
proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE = {
  GREGORIAN: 1,
  SOLAR_HIJRI: 2
};

/**
 * optional HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE dayOfWeek = 1;
 * @return {!proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE}
 */
proto.HSMDateTimeComponent.prototype.getDayofweek = function() {
  return /** @type {!proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE} value
 * @return {!proto.HSMDateTimeComponent} returns this
 */
proto.HSMDateTimeComponent.prototype.setDayofweek = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HSMDateTimeComponent} returns this
 */
proto.HSMDateTimeComponent.prototype.clearDayofweek = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMDateTimeComponent.prototype.hasDayofweek = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 year = 2;
 * @return {number}
 */
proto.HSMDateTimeComponent.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.HSMDateTimeComponent} returns this
 */
proto.HSMDateTimeComponent.prototype.setYear = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HSMDateTimeComponent} returns this
 */
proto.HSMDateTimeComponent.prototype.clearYear = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMDateTimeComponent.prototype.hasYear = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 month = 3;
 * @return {number}
 */
proto.HSMDateTimeComponent.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.HSMDateTimeComponent} returns this
 */
proto.HSMDateTimeComponent.prototype.setMonth = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HSMDateTimeComponent} returns this
 */
proto.HSMDateTimeComponent.prototype.clearMonth = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMDateTimeComponent.prototype.hasMonth = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 dayOfMonth = 4;
 * @return {number}
 */
proto.HSMDateTimeComponent.prototype.getDayofmonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.HSMDateTimeComponent} returns this
 */
proto.HSMDateTimeComponent.prototype.setDayofmonth = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HSMDateTimeComponent} returns this
 */
proto.HSMDateTimeComponent.prototype.clearDayofmonth = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMDateTimeComponent.prototype.hasDayofmonth = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 hour = 5;
 * @return {number}
 */
proto.HSMDateTimeComponent.prototype.getHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.HSMDateTimeComponent} returns this
 */
proto.HSMDateTimeComponent.prototype.setHour = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HSMDateTimeComponent} returns this
 */
proto.HSMDateTimeComponent.prototype.clearHour = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMDateTimeComponent.prototype.hasHour = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 minute = 6;
 * @return {number}
 */
proto.HSMDateTimeComponent.prototype.getMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.HSMDateTimeComponent} returns this
 */
proto.HSMDateTimeComponent.prototype.setMinute = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HSMDateTimeComponent} returns this
 */
proto.HSMDateTimeComponent.prototype.clearMinute = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMDateTimeComponent.prototype.hasMinute = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional HSM_DATE_TIME_COMPONENT_CALENDARTYPE calendar = 7;
 * @return {!proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE}
 */
proto.HSMDateTimeComponent.prototype.getCalendar = function() {
  return /** @type {!proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE} */ (jspb.Message.getFieldWithDefault(this, 7, 1));
};


/**
 * @param {!proto.HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPE} value
 * @return {!proto.HSMDateTimeComponent} returns this
 */
proto.HSMDateTimeComponent.prototype.setCalendar = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HSMDateTimeComponent} returns this
 */
proto.HSMDateTimeComponent.prototype.clearCalendar = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMDateTimeComponent.prototype.hasCalendar = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HSMDateTimeUnixEpoch.prototype.toObject = function(opt_includeInstance) {
  return proto.HSMDateTimeUnixEpoch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HSMDateTimeUnixEpoch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HSMDateTimeUnixEpoch.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HSMDateTimeUnixEpoch}
 */
proto.HSMDateTimeUnixEpoch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HSMDateTimeUnixEpoch;
  return proto.HSMDateTimeUnixEpoch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HSMDateTimeUnixEpoch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HSMDateTimeUnixEpoch}
 */
proto.HSMDateTimeUnixEpoch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HSMDateTimeUnixEpoch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HSMDateTimeUnixEpoch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HSMDateTimeUnixEpoch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HSMDateTimeUnixEpoch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.HSMDateTimeUnixEpoch.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.HSMDateTimeUnixEpoch} returns this
 */
proto.HSMDateTimeUnixEpoch.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HSMDateTimeUnixEpoch} returns this
 */
proto.HSMDateTimeUnixEpoch.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMDateTimeUnixEpoch.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.HSMDateTime.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.HSMDateTime.DatetimeoneofCase = {
  DATETIMEONEOF_NOT_SET: 0,
  COMPONENT: 1,
  UNIXEPOCH: 2
};

/**
 * @return {proto.HSMDateTime.DatetimeoneofCase}
 */
proto.HSMDateTime.prototype.getDatetimeoneofCase = function() {
  return /** @type {proto.HSMDateTime.DatetimeoneofCase} */(jspb.Message.computeOneofCase(this, proto.HSMDateTime.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HSMDateTime.prototype.toObject = function(opt_includeInstance) {
  return proto.HSMDateTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HSMDateTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HSMDateTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    component: (f = msg.getComponent()) && proto.HSMDateTimeComponent.toObject(includeInstance, f),
    unixepoch: (f = msg.getUnixepoch()) && proto.HSMDateTimeUnixEpoch.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HSMDateTime}
 */
proto.HSMDateTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HSMDateTime;
  return proto.HSMDateTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HSMDateTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HSMDateTime}
 */
proto.HSMDateTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.HSMDateTimeComponent;
      reader.readMessage(value,proto.HSMDateTimeComponent.deserializeBinaryFromReader);
      msg.setComponent(value);
      break;
    case 2:
      var value = new proto.HSMDateTimeUnixEpoch;
      reader.readMessage(value,proto.HSMDateTimeUnixEpoch.deserializeBinaryFromReader);
      msg.setUnixepoch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HSMDateTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HSMDateTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HSMDateTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HSMDateTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComponent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.HSMDateTimeComponent.serializeBinaryToWriter
    );
  }
  f = message.getUnixepoch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.HSMDateTimeUnixEpoch.serializeBinaryToWriter
    );
  }
};


/**
 * optional HSMDateTimeComponent component = 1;
 * @return {?proto.HSMDateTimeComponent}
 */
proto.HSMDateTime.prototype.getComponent = function() {
  return /** @type{?proto.HSMDateTimeComponent} */ (
    jspb.Message.getWrapperField(this, proto.HSMDateTimeComponent, 1));
};


/**
 * @param {?proto.HSMDateTimeComponent|undefined} value
 * @return {!proto.HSMDateTime} returns this
*/
proto.HSMDateTime.prototype.setComponent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.HSMDateTime.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HSMDateTime} returns this
 */
proto.HSMDateTime.prototype.clearComponent = function() {
  return this.setComponent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMDateTime.prototype.hasComponent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HSMDateTimeUnixEpoch unixEpoch = 2;
 * @return {?proto.HSMDateTimeUnixEpoch}
 */
proto.HSMDateTime.prototype.getUnixepoch = function() {
  return /** @type{?proto.HSMDateTimeUnixEpoch} */ (
    jspb.Message.getWrapperField(this, proto.HSMDateTimeUnixEpoch, 2));
};


/**
 * @param {?proto.HSMDateTimeUnixEpoch|undefined} value
 * @return {!proto.HSMDateTime} returns this
*/
proto.HSMDateTime.prototype.setUnixepoch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.HSMDateTime.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HSMDateTime} returns this
 */
proto.HSMDateTime.prototype.clearUnixepoch = function() {
  return this.setUnixepoch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMDateTime.prototype.hasUnixepoch = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.HSMLocalizableParameter.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.HSMLocalizableParameter.ParamoneofCase = {
  PARAMONEOF_NOT_SET: 0,
  CURRENCY: 2,
  DATETIME: 3
};

/**
 * @return {proto.HSMLocalizableParameter.ParamoneofCase}
 */
proto.HSMLocalizableParameter.prototype.getParamoneofCase = function() {
  return /** @type {proto.HSMLocalizableParameter.ParamoneofCase} */(jspb.Message.computeOneofCase(this, proto.HSMLocalizableParameter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HSMLocalizableParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.HSMLocalizableParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HSMLocalizableParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HSMLocalizableParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_default: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    currency: (f = msg.getCurrency()) && proto.HSMCurrency.toObject(includeInstance, f),
    datetime: (f = msg.getDatetime()) && proto.HSMDateTime.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HSMLocalizableParameter}
 */
proto.HSMLocalizableParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HSMLocalizableParameter;
  return proto.HSMLocalizableParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HSMLocalizableParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HSMLocalizableParameter}
 */
proto.HSMLocalizableParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefault(value);
      break;
    case 2:
      var value = new proto.HSMCurrency;
      reader.readMessage(value,proto.HSMCurrency.deserializeBinaryFromReader);
      msg.setCurrency(value);
      break;
    case 3:
      var value = new proto.HSMDateTime;
      reader.readMessage(value,proto.HSMDateTime.deserializeBinaryFromReader);
      msg.setDatetime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HSMLocalizableParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HSMLocalizableParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HSMLocalizableParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HSMLocalizableParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrency();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.HSMCurrency.serializeBinaryToWriter
    );
  }
  f = message.getDatetime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.HSMDateTime.serializeBinaryToWriter
    );
  }
};


/**
 * optional string default = 1;
 * @return {string}
 */
proto.HSMLocalizableParameter.prototype.getDefault = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.HSMLocalizableParameter} returns this
 */
proto.HSMLocalizableParameter.prototype.setDefault = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HSMLocalizableParameter} returns this
 */
proto.HSMLocalizableParameter.prototype.clearDefault = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMLocalizableParameter.prototype.hasDefault = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HSMCurrency currency = 2;
 * @return {?proto.HSMCurrency}
 */
proto.HSMLocalizableParameter.prototype.getCurrency = function() {
  return /** @type{?proto.HSMCurrency} */ (
    jspb.Message.getWrapperField(this, proto.HSMCurrency, 2));
};


/**
 * @param {?proto.HSMCurrency|undefined} value
 * @return {!proto.HSMLocalizableParameter} returns this
*/
proto.HSMLocalizableParameter.prototype.setCurrency = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.HSMLocalizableParameter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HSMLocalizableParameter} returns this
 */
proto.HSMLocalizableParameter.prototype.clearCurrency = function() {
  return this.setCurrency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMLocalizableParameter.prototype.hasCurrency = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional HSMDateTime dateTime = 3;
 * @return {?proto.HSMDateTime}
 */
proto.HSMLocalizableParameter.prototype.getDatetime = function() {
  return /** @type{?proto.HSMDateTime} */ (
    jspb.Message.getWrapperField(this, proto.HSMDateTime, 3));
};


/**
 * @param {?proto.HSMDateTime|undefined} value
 * @return {!proto.HSMLocalizableParameter} returns this
*/
proto.HSMLocalizableParameter.prototype.setDatetime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.HSMLocalizableParameter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HSMLocalizableParameter} returns this
 */
proto.HSMLocalizableParameter.prototype.clearDatetime = function() {
  return this.setDatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HSMLocalizableParameter.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.HighlyStructuredMessage.repeatedFields_ = [3,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HighlyStructuredMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.HighlyStructuredMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HighlyStructuredMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HighlyStructuredMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    elementname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    paramsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    fallbacklg: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    fallbacklc: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    localizableparamsList: jspb.Message.toObjectList(msg.getLocalizableparamsList(),
    proto.HSMLocalizableParameter.toObject, includeInstance),
    deterministiclg: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    deterministiclc: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    hydratedhsm: (f = msg.getHydratedhsm()) && proto.TemplateMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HighlyStructuredMessage}
 */
proto.HighlyStructuredMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HighlyStructuredMessage;
  return proto.HighlyStructuredMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HighlyStructuredMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HighlyStructuredMessage}
 */
proto.HighlyStructuredMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setElementname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addParams(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFallbacklg(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFallbacklc(value);
      break;
    case 6:
      var value = new proto.HSMLocalizableParameter;
      reader.readMessage(value,proto.HSMLocalizableParameter.deserializeBinaryFromReader);
      msg.addLocalizableparams(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeterministiclg(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeterministiclc(value);
      break;
    case 9:
      var value = new proto.TemplateMessage;
      reader.readMessage(value,proto.TemplateMessage.deserializeBinaryFromReader);
      msg.setHydratedhsm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HighlyStructuredMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HighlyStructuredMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HighlyStructuredMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HighlyStructuredMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParamsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLocalizableparamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.HSMLocalizableParameter.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getHydratedhsm();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.TemplateMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.HighlyStructuredMessage.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.setNamespace = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.clearNamespace = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HighlyStructuredMessage.prototype.hasNamespace = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string elementName = 2;
 * @return {string}
 */
proto.HighlyStructuredMessage.prototype.getElementname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.setElementname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.clearElementname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HighlyStructuredMessage.prototype.hasElementname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string params = 3;
 * @return {!Array<string>}
 */
proto.HighlyStructuredMessage.prototype.getParamsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.setParamsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.addParams = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.clearParamsList = function() {
  return this.setParamsList([]);
};


/**
 * optional string fallbackLg = 4;
 * @return {string}
 */
proto.HighlyStructuredMessage.prototype.getFallbacklg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.setFallbacklg = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.clearFallbacklg = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HighlyStructuredMessage.prototype.hasFallbacklg = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string fallbackLc = 5;
 * @return {string}
 */
proto.HighlyStructuredMessage.prototype.getFallbacklc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.setFallbacklc = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.clearFallbacklc = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HighlyStructuredMessage.prototype.hasFallbacklc = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated HSMLocalizableParameter localizableParams = 6;
 * @return {!Array<!proto.HSMLocalizableParameter>}
 */
proto.HighlyStructuredMessage.prototype.getLocalizableparamsList = function() {
  return /** @type{!Array<!proto.HSMLocalizableParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.HSMLocalizableParameter, 6));
};


/**
 * @param {!Array<!proto.HSMLocalizableParameter>} value
 * @return {!proto.HighlyStructuredMessage} returns this
*/
proto.HighlyStructuredMessage.prototype.setLocalizableparamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.HSMLocalizableParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.HSMLocalizableParameter}
 */
proto.HighlyStructuredMessage.prototype.addLocalizableparams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.HSMLocalizableParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.clearLocalizableparamsList = function() {
  return this.setLocalizableparamsList([]);
};


/**
 * optional string deterministicLg = 7;
 * @return {string}
 */
proto.HighlyStructuredMessage.prototype.getDeterministiclg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.setDeterministiclg = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.clearDeterministiclg = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HighlyStructuredMessage.prototype.hasDeterministiclg = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string deterministicLc = 8;
 * @return {string}
 */
proto.HighlyStructuredMessage.prototype.getDeterministiclc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.setDeterministiclc = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.clearDeterministiclc = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HighlyStructuredMessage.prototype.hasDeterministiclc = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional TemplateMessage hydratedHsm = 9;
 * @return {?proto.TemplateMessage}
 */
proto.HighlyStructuredMessage.prototype.getHydratedhsm = function() {
  return /** @type{?proto.TemplateMessage} */ (
    jspb.Message.getWrapperField(this, proto.TemplateMessage, 9));
};


/**
 * @param {?proto.TemplateMessage|undefined} value
 * @return {!proto.HighlyStructuredMessage} returns this
*/
proto.HighlyStructuredMessage.prototype.setHydratedhsm = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HighlyStructuredMessage} returns this
 */
proto.HighlyStructuredMessage.prototype.clearHydratedhsm = function() {
  return this.setHydratedhsm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HighlyStructuredMessage.prototype.hasHydratedhsm = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SendPaymentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SendPaymentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SendPaymentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SendPaymentMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    notemessage: (f = msg.getNotemessage()) && proto.Message.toObject(includeInstance, f),
    requestmessagekey: (f = msg.getRequestmessagekey()) && proto.MessageKey.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SendPaymentMessage}
 */
proto.SendPaymentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SendPaymentMessage;
  return proto.SendPaymentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SendPaymentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SendPaymentMessage}
 */
proto.SendPaymentMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.Message;
      reader.readMessage(value,proto.Message.deserializeBinaryFromReader);
      msg.setNotemessage(value);
      break;
    case 3:
      var value = new proto.MessageKey;
      reader.readMessage(value,proto.MessageKey.deserializeBinaryFromReader);
      msg.setRequestmessagekey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SendPaymentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SendPaymentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SendPaymentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SendPaymentMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotemessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Message.serializeBinaryToWriter
    );
  }
  f = message.getRequestmessagekey();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.MessageKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional Message noteMessage = 2;
 * @return {?proto.Message}
 */
proto.SendPaymentMessage.prototype.getNotemessage = function() {
  return /** @type{?proto.Message} */ (
    jspb.Message.getWrapperField(this, proto.Message, 2));
};


/**
 * @param {?proto.Message|undefined} value
 * @return {!proto.SendPaymentMessage} returns this
*/
proto.SendPaymentMessage.prototype.setNotemessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SendPaymentMessage} returns this
 */
proto.SendPaymentMessage.prototype.clearNotemessage = function() {
  return this.setNotemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SendPaymentMessage.prototype.hasNotemessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessageKey requestMessageKey = 3;
 * @return {?proto.MessageKey}
 */
proto.SendPaymentMessage.prototype.getRequestmessagekey = function() {
  return /** @type{?proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.MessageKey, 3));
};


/**
 * @param {?proto.MessageKey|undefined} value
 * @return {!proto.SendPaymentMessage} returns this
*/
proto.SendPaymentMessage.prototype.setRequestmessagekey = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SendPaymentMessage} returns this
 */
proto.SendPaymentMessage.prototype.clearRequestmessagekey = function() {
  return this.setRequestmessagekey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SendPaymentMessage.prototype.hasRequestmessagekey = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RequestPaymentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.RequestPaymentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RequestPaymentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RequestPaymentMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    notemessage: (f = msg.getNotemessage()) && proto.Message.toObject(includeInstance, f),
    currencycodeiso4217: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    amount1000: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    requestfrom: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    expirytimestamp: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RequestPaymentMessage}
 */
proto.RequestPaymentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RequestPaymentMessage;
  return proto.RequestPaymentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RequestPaymentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RequestPaymentMessage}
 */
proto.RequestPaymentMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.Message;
      reader.readMessage(value,proto.Message.deserializeBinaryFromReader);
      msg.setNotemessage(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencycodeiso4217(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount1000(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestfrom(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpirytimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RequestPaymentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RequestPaymentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RequestPaymentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RequestPaymentMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotemessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.Message.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional Message noteMessage = 4;
 * @return {?proto.Message}
 */
proto.RequestPaymentMessage.prototype.getNotemessage = function() {
  return /** @type{?proto.Message} */ (
    jspb.Message.getWrapperField(this, proto.Message, 4));
};


/**
 * @param {?proto.Message|undefined} value
 * @return {!proto.RequestPaymentMessage} returns this
*/
proto.RequestPaymentMessage.prototype.setNotemessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RequestPaymentMessage} returns this
 */
proto.RequestPaymentMessage.prototype.clearNotemessage = function() {
  return this.setNotemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RequestPaymentMessage.prototype.hasNotemessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string currencyCodeIso4217 = 1;
 * @return {string}
 */
proto.RequestPaymentMessage.prototype.getCurrencycodeiso4217 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RequestPaymentMessage} returns this
 */
proto.RequestPaymentMessage.prototype.setCurrencycodeiso4217 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.RequestPaymentMessage} returns this
 */
proto.RequestPaymentMessage.prototype.clearCurrencycodeiso4217 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RequestPaymentMessage.prototype.hasCurrencycodeiso4217 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 amount1000 = 2;
 * @return {number}
 */
proto.RequestPaymentMessage.prototype.getAmount1000 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.RequestPaymentMessage} returns this
 */
proto.RequestPaymentMessage.prototype.setAmount1000 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.RequestPaymentMessage} returns this
 */
proto.RequestPaymentMessage.prototype.clearAmount1000 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RequestPaymentMessage.prototype.hasAmount1000 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string requestFrom = 3;
 * @return {string}
 */
proto.RequestPaymentMessage.prototype.getRequestfrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.RequestPaymentMessage} returns this
 */
proto.RequestPaymentMessage.prototype.setRequestfrom = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.RequestPaymentMessage} returns this
 */
proto.RequestPaymentMessage.prototype.clearRequestfrom = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RequestPaymentMessage.prototype.hasRequestfrom = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 expiryTimestamp = 5;
 * @return {number}
 */
proto.RequestPaymentMessage.prototype.getExpirytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.RequestPaymentMessage} returns this
 */
proto.RequestPaymentMessage.prototype.setExpirytimestamp = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.RequestPaymentMessage} returns this
 */
proto.RequestPaymentMessage.prototype.clearExpirytimestamp = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RequestPaymentMessage.prototype.hasExpirytimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeclinePaymentRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DeclinePaymentRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeclinePaymentRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeclinePaymentRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.MessageKey.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeclinePaymentRequestMessage}
 */
proto.DeclinePaymentRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeclinePaymentRequestMessage;
  return proto.DeclinePaymentRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeclinePaymentRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeclinePaymentRequestMessage}
 */
proto.DeclinePaymentRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MessageKey;
      reader.readMessage(value,proto.MessageKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeclinePaymentRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeclinePaymentRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeclinePaymentRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeclinePaymentRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MessageKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional MessageKey key = 1;
 * @return {?proto.MessageKey}
 */
proto.DeclinePaymentRequestMessage.prototype.getKey = function() {
  return /** @type{?proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.MessageKey, 1));
};


/**
 * @param {?proto.MessageKey|undefined} value
 * @return {!proto.DeclinePaymentRequestMessage} returns this
*/
proto.DeclinePaymentRequestMessage.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DeclinePaymentRequestMessage} returns this
 */
proto.DeclinePaymentRequestMessage.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DeclinePaymentRequestMessage.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CancelPaymentRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.CancelPaymentRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CancelPaymentRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CancelPaymentRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.MessageKey.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CancelPaymentRequestMessage}
 */
proto.CancelPaymentRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CancelPaymentRequestMessage;
  return proto.CancelPaymentRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CancelPaymentRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CancelPaymentRequestMessage}
 */
proto.CancelPaymentRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MessageKey;
      reader.readMessage(value,proto.MessageKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CancelPaymentRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CancelPaymentRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CancelPaymentRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CancelPaymentRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MessageKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional MessageKey key = 1;
 * @return {?proto.MessageKey}
 */
proto.CancelPaymentRequestMessage.prototype.getKey = function() {
  return /** @type{?proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.MessageKey, 1));
};


/**
 * @param {?proto.MessageKey|undefined} value
 * @return {!proto.CancelPaymentRequestMessage} returns this
*/
proto.CancelPaymentRequestMessage.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CancelPaymentRequestMessage} returns this
 */
proto.CancelPaymentRequestMessage.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CancelPaymentRequestMessage.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LiveLocationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.LiveLocationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LiveLocationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LiveLocationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    degreeslatitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    degreeslongitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    accuracyinmeters: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    speedinmps: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    degreesclockwisefrommagneticnorth: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    caption: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    sequencenumber: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    timeoffset: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LiveLocationMessage}
 */
proto.LiveLocationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LiveLocationMessage;
  return proto.LiveLocationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LiveLocationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LiveLocationMessage}
 */
proto.LiveLocationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDegreeslatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDegreeslongitude(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccuracyinmeters(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSpeedinmps(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDegreesclockwisefrommagneticnorth(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSequencenumber(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeoffset(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 17:
      var value = new proto.ContextInfo;
      reader.readMessage(value,proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LiveLocationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LiveLocationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LiveLocationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LiveLocationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional double degreesLatitude = 1;
 * @return {number}
 */
proto.LiveLocationMessage.prototype.getDegreeslatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.setDegreeslatitude = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.clearDegreeslatitude = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LiveLocationMessage.prototype.hasDegreeslatitude = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double degreesLongitude = 2;
 * @return {number}
 */
proto.LiveLocationMessage.prototype.getDegreeslongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.setDegreeslongitude = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.clearDegreeslongitude = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LiveLocationMessage.prototype.hasDegreeslongitude = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 accuracyInMeters = 3;
 * @return {number}
 */
proto.LiveLocationMessage.prototype.getAccuracyinmeters = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.setAccuracyinmeters = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.clearAccuracyinmeters = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LiveLocationMessage.prototype.hasAccuracyinmeters = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float speedInMps = 4;
 * @return {number}
 */
proto.LiveLocationMessage.prototype.getSpeedinmps = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.setSpeedinmps = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.clearSpeedinmps = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LiveLocationMessage.prototype.hasSpeedinmps = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 degreesClockwiseFromMagneticNorth = 5;
 * @return {number}
 */
proto.LiveLocationMessage.prototype.getDegreesclockwisefrommagneticnorth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.setDegreesclockwisefrommagneticnorth = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.clearDegreesclockwisefrommagneticnorth = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LiveLocationMessage.prototype.hasDegreesclockwisefrommagneticnorth = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string caption = 6;
 * @return {string}
 */
proto.LiveLocationMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LiveLocationMessage.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 sequenceNumber = 7;
 * @return {number}
 */
proto.LiveLocationMessage.prototype.getSequencenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.setSequencenumber = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.clearSequencenumber = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LiveLocationMessage.prototype.hasSequencenumber = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 timeOffset = 8;
 * @return {number}
 */
proto.LiveLocationMessage.prototype.getTimeoffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.setTimeoffset = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.clearTimeoffset = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LiveLocationMessage.prototype.hasTimeoffset = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bytes jpegThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.LiveLocationMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes jpegThumbnail = 16;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.LiveLocationMessage.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.LiveLocationMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LiveLocationMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.ContextInfo}
 */
proto.LiveLocationMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.ContextInfo, 17));
};


/**
 * @param {?proto.ContextInfo|undefined} value
 * @return {!proto.LiveLocationMessage} returns this
*/
proto.LiveLocationMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.LiveLocationMessage} returns this
 */
proto.LiveLocationMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LiveLocationMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StickerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.StickerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StickerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StickerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    filesha256: msg.getFilesha256_asB64(),
    fileencsha256: msg.getFileencsha256_asB64(),
    mediakey: msg.getMediakey_asB64(),
    mimetype: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    height: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    width: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    directpath: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    filelength: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    mediakeytimestamp: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    firstframelength: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    firstframesidecar: msg.getFirstframesidecar_asB64(),
    isanimated: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
    pngthumbnail: msg.getPngthumbnail_asB64(),
    contextinfo: (f = msg.getContextinfo()) && proto.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StickerMessage}
 */
proto.StickerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StickerMessage;
  return proto.StickerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StickerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StickerMessage}
 */
proto.StickerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFilesha256(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileencsha256(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMediakey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMimetype(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectpath(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFilelength(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMediakeytimestamp(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirstframelength(value);
      break;
    case 12:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFirstframesidecar(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsanimated(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPngthumbnail(value);
      break;
    case 17:
      var value = new proto.ContextInfo;
      reader.readMessage(value,proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StickerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StickerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StickerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StickerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBytes(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.StickerMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes fileSha256 = 2;
 * @return {!(string|Uint8Array)}
 */
proto.StickerMessage.prototype.getFilesha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes fileSha256 = 2;
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {string}
 */
proto.StickerMessage.prototype.getFilesha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFilesha256()));
};


/**
 * optional bytes fileSha256 = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFilesha256()`
 * @return {!Uint8Array}
 */
proto.StickerMessage.prototype.getFilesha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFilesha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.setFilesha256 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearFilesha256 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasFilesha256 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes fileEncSha256 = 3;
 * @return {!(string|Uint8Array)}
 */
proto.StickerMessage.prototype.getFileencsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes fileEncSha256 = 3;
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {string}
 */
proto.StickerMessage.prototype.getFileencsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileencsha256()));
};


/**
 * optional bytes fileEncSha256 = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileencsha256()`
 * @return {!Uint8Array}
 */
proto.StickerMessage.prototype.getFileencsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileencsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.setFileencsha256 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearFileencsha256 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasFileencsha256 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes mediaKey = 4;
 * @return {!(string|Uint8Array)}
 */
proto.StickerMessage.prototype.getMediakey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes mediaKey = 4;
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {string}
 */
proto.StickerMessage.prototype.getMediakey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMediakey()));
};


/**
 * optional bytes mediaKey = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMediakey()`
 * @return {!Uint8Array}
 */
proto.StickerMessage.prototype.getMediakey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediakey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.setMediakey = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearMediakey = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasMediakey = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string mimetype = 5;
 * @return {string}
 */
proto.StickerMessage.prototype.getMimetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.setMimetype = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearMimetype = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasMimetype = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 height = 6;
 * @return {number}
 */
proto.StickerMessage.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.setHeight = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearHeight = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 width = 7;
 * @return {number}
 */
proto.StickerMessage.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.setWidth = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearWidth = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string directPath = 8;
 * @return {string}
 */
proto.StickerMessage.prototype.getDirectpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.setDirectpath = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearDirectpath = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasDirectpath = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 fileLength = 9;
 * @return {number}
 */
proto.StickerMessage.prototype.getFilelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.setFilelength = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearFilelength = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasFilelength = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 mediaKeyTimestamp = 10;
 * @return {number}
 */
proto.StickerMessage.prototype.getMediakeytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.setMediakeytimestamp = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearMediakeytimestamp = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasMediakeytimestamp = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 firstFrameLength = 11;
 * @return {number}
 */
proto.StickerMessage.prototype.getFirstframelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.setFirstframelength = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearFirstframelength = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasFirstframelength = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bytes firstFrameSidecar = 12;
 * @return {!(string|Uint8Array)}
 */
proto.StickerMessage.prototype.getFirstframesidecar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * optional bytes firstFrameSidecar = 12;
 * This is a type-conversion wrapper around `getFirstframesidecar()`
 * @return {string}
 */
proto.StickerMessage.prototype.getFirstframesidecar_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFirstframesidecar()));
};


/**
 * optional bytes firstFrameSidecar = 12;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFirstframesidecar()`
 * @return {!Uint8Array}
 */
proto.StickerMessage.prototype.getFirstframesidecar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFirstframesidecar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.setFirstframesidecar = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearFirstframesidecar = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasFirstframesidecar = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool isAnimated = 13;
 * @return {boolean}
 */
proto.StickerMessage.prototype.getIsanimated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.setIsanimated = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearIsanimated = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasIsanimated = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bytes pngThumbnail = 16;
 * @return {!(string|Uint8Array)}
 */
proto.StickerMessage.prototype.getPngthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes pngThumbnail = 16;
 * This is a type-conversion wrapper around `getPngthumbnail()`
 * @return {string}
 */
proto.StickerMessage.prototype.getPngthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPngthumbnail()));
};


/**
 * optional bytes pngThumbnail = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPngthumbnail()`
 * @return {!Uint8Array}
 */
proto.StickerMessage.prototype.getPngthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPngthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.setPngthumbnail = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearPngthumbnail = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasPngthumbnail = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.ContextInfo}
 */
proto.StickerMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.ContextInfo, 17));
};


/**
 * @param {?proto.ContextInfo|undefined} value
 * @return {!proto.StickerMessage} returns this
*/
proto.StickerMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.StickerMessage} returns this
 */
proto.StickerMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StickerMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.FourRowTemplate.repeatedFields_ = [8];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.FourRowTemplate.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.FourRowTemplate.TitleCase = {
  TITLE_NOT_SET: 0,
  DOCUMENTMESSAGE: 1,
  HIGHLYSTRUCTUREDMESSAGE: 2,
  IMAGEMESSAGE: 3,
  VIDEOMESSAGE: 4,
  LOCATIONMESSAGE: 5
};

/**
 * @return {proto.FourRowTemplate.TitleCase}
 */
proto.FourRowTemplate.prototype.getTitleCase = function() {
  return /** @type {proto.FourRowTemplate.TitleCase} */(jspb.Message.computeOneofCase(this, proto.FourRowTemplate.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FourRowTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.FourRowTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FourRowTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FourRowTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: (f = msg.getContent()) && proto.HighlyStructuredMessage.toObject(includeInstance, f),
    footer: (f = msg.getFooter()) && proto.HighlyStructuredMessage.toObject(includeInstance, f),
    buttonsList: jspb.Message.toObjectList(msg.getButtonsList(),
    proto.TemplateButton.toObject, includeInstance),
    documentmessage: (f = msg.getDocumentmessage()) && proto.DocumentMessage.toObject(includeInstance, f),
    highlystructuredmessage: (f = msg.getHighlystructuredmessage()) && proto.HighlyStructuredMessage.toObject(includeInstance, f),
    imagemessage: (f = msg.getImagemessage()) && proto.ImageMessage.toObject(includeInstance, f),
    videomessage: (f = msg.getVideomessage()) && proto.VideoMessage.toObject(includeInstance, f),
    locationmessage: (f = msg.getLocationmessage()) && proto.LocationMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FourRowTemplate}
 */
proto.FourRowTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FourRowTemplate;
  return proto.FourRowTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FourRowTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FourRowTemplate}
 */
proto.FourRowTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = new proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 7:
      var value = new proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setFooter(value);
      break;
    case 8:
      var value = new proto.TemplateButton;
      reader.readMessage(value,proto.TemplateButton.deserializeBinaryFromReader);
      msg.addButtons(value);
      break;
    case 1:
      var value = new proto.DocumentMessage;
      reader.readMessage(value,proto.DocumentMessage.deserializeBinaryFromReader);
      msg.setDocumentmessage(value);
      break;
    case 2:
      var value = new proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setHighlystructuredmessage(value);
      break;
    case 3:
      var value = new proto.ImageMessage;
      reader.readMessage(value,proto.ImageMessage.deserializeBinaryFromReader);
      msg.setImagemessage(value);
      break;
    case 4:
      var value = new proto.VideoMessage;
      reader.readMessage(value,proto.VideoMessage.deserializeBinaryFromReader);
      msg.setVideomessage(value);
      break;
    case 5:
      var value = new proto.LocationMessage;
      reader.readMessage(value,proto.LocationMessage.deserializeBinaryFromReader);
      msg.setLocationmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FourRowTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FourRowTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FourRowTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FourRowTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getFooter();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getButtonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.TemplateButton.serializeBinaryToWriter
    );
  }
  f = message.getDocumentmessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.DocumentMessage.serializeBinaryToWriter
    );
  }
  f = message.getHighlystructuredmessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getImagemessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ImageMessage.serializeBinaryToWriter
    );
  }
  f = message.getVideomessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.VideoMessage.serializeBinaryToWriter
    );
  }
  f = message.getLocationmessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.LocationMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional HighlyStructuredMessage content = 6;
 * @return {?proto.HighlyStructuredMessage}
 */
proto.FourRowTemplate.prototype.getContent = function() {
  return /** @type{?proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.HighlyStructuredMessage, 6));
};


/**
 * @param {?proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.FourRowTemplate} returns this
*/
proto.FourRowTemplate.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FourRowTemplate} returns this
 */
proto.FourRowTemplate.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FourRowTemplate.prototype.hasContent = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional HighlyStructuredMessage footer = 7;
 * @return {?proto.HighlyStructuredMessage}
 */
proto.FourRowTemplate.prototype.getFooter = function() {
  return /** @type{?proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.HighlyStructuredMessage, 7));
};


/**
 * @param {?proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.FourRowTemplate} returns this
*/
proto.FourRowTemplate.prototype.setFooter = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FourRowTemplate} returns this
 */
proto.FourRowTemplate.prototype.clearFooter = function() {
  return this.setFooter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FourRowTemplate.prototype.hasFooter = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated TemplateButton buttons = 8;
 * @return {!Array<!proto.TemplateButton>}
 */
proto.FourRowTemplate.prototype.getButtonsList = function() {
  return /** @type{!Array<!proto.TemplateButton>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.TemplateButton, 8));
};


/**
 * @param {!Array<!proto.TemplateButton>} value
 * @return {!proto.FourRowTemplate} returns this
*/
proto.FourRowTemplate.prototype.setButtonsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.TemplateButton=} opt_value
 * @param {number=} opt_index
 * @return {!proto.TemplateButton}
 */
proto.FourRowTemplate.prototype.addButtons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.TemplateButton, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.FourRowTemplate} returns this
 */
proto.FourRowTemplate.prototype.clearButtonsList = function() {
  return this.setButtonsList([]);
};


/**
 * optional DocumentMessage documentMessage = 1;
 * @return {?proto.DocumentMessage}
 */
proto.FourRowTemplate.prototype.getDocumentmessage = function() {
  return /** @type{?proto.DocumentMessage} */ (
    jspb.Message.getWrapperField(this, proto.DocumentMessage, 1));
};


/**
 * @param {?proto.DocumentMessage|undefined} value
 * @return {!proto.FourRowTemplate} returns this
*/
proto.FourRowTemplate.prototype.setDocumentmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FourRowTemplate} returns this
 */
proto.FourRowTemplate.prototype.clearDocumentmessage = function() {
  return this.setDocumentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FourRowTemplate.prototype.hasDocumentmessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HighlyStructuredMessage highlyStructuredMessage = 2;
 * @return {?proto.HighlyStructuredMessage}
 */
proto.FourRowTemplate.prototype.getHighlystructuredmessage = function() {
  return /** @type{?proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.HighlyStructuredMessage, 2));
};


/**
 * @param {?proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.FourRowTemplate} returns this
*/
proto.FourRowTemplate.prototype.setHighlystructuredmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FourRowTemplate} returns this
 */
proto.FourRowTemplate.prototype.clearHighlystructuredmessage = function() {
  return this.setHighlystructuredmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FourRowTemplate.prototype.hasHighlystructuredmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImageMessage imageMessage = 3;
 * @return {?proto.ImageMessage}
 */
proto.FourRowTemplate.prototype.getImagemessage = function() {
  return /** @type{?proto.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.ImageMessage, 3));
};


/**
 * @param {?proto.ImageMessage|undefined} value
 * @return {!proto.FourRowTemplate} returns this
*/
proto.FourRowTemplate.prototype.setImagemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FourRowTemplate} returns this
 */
proto.FourRowTemplate.prototype.clearImagemessage = function() {
  return this.setImagemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FourRowTemplate.prototype.hasImagemessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional VideoMessage videoMessage = 4;
 * @return {?proto.VideoMessage}
 */
proto.FourRowTemplate.prototype.getVideomessage = function() {
  return /** @type{?proto.VideoMessage} */ (
    jspb.Message.getWrapperField(this, proto.VideoMessage, 4));
};


/**
 * @param {?proto.VideoMessage|undefined} value
 * @return {!proto.FourRowTemplate} returns this
*/
proto.FourRowTemplate.prototype.setVideomessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FourRowTemplate} returns this
 */
proto.FourRowTemplate.prototype.clearVideomessage = function() {
  return this.setVideomessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FourRowTemplate.prototype.hasVideomessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LocationMessage locationMessage = 5;
 * @return {?proto.LocationMessage}
 */
proto.FourRowTemplate.prototype.getLocationmessage = function() {
  return /** @type{?proto.LocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.LocationMessage, 5));
};


/**
 * @param {?proto.LocationMessage|undefined} value
 * @return {!proto.FourRowTemplate} returns this
*/
proto.FourRowTemplate.prototype.setLocationmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.FourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.FourRowTemplate} returns this
 */
proto.FourRowTemplate.prototype.clearLocationmessage = function() {
  return this.setLocationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FourRowTemplate.prototype.hasLocationmessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.HydratedFourRowTemplate.repeatedFields_ = [8];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.HydratedFourRowTemplate.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.HydratedFourRowTemplate.TitleCase = {
  TITLE_NOT_SET: 0,
  DOCUMENTMESSAGE: 1,
  HYDRATEDTITLETEXT: 2,
  IMAGEMESSAGE: 3,
  VIDEOMESSAGE: 4,
  LOCATIONMESSAGE: 5
};

/**
 * @return {proto.HydratedFourRowTemplate.TitleCase}
 */
proto.HydratedFourRowTemplate.prototype.getTitleCase = function() {
  return /** @type {proto.HydratedFourRowTemplate.TitleCase} */(jspb.Message.computeOneofCase(this, proto.HydratedFourRowTemplate.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HydratedFourRowTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.HydratedFourRowTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HydratedFourRowTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HydratedFourRowTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    hydratedcontenttext: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    hydratedfootertext: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    hydratedbuttonsList: jspb.Message.toObjectList(msg.getHydratedbuttonsList(),
    proto.HydratedTemplateButton.toObject, includeInstance),
    templateid: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    documentmessage: (f = msg.getDocumentmessage()) && proto.DocumentMessage.toObject(includeInstance, f),
    hydratedtitletext: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    imagemessage: (f = msg.getImagemessage()) && proto.ImageMessage.toObject(includeInstance, f),
    videomessage: (f = msg.getVideomessage()) && proto.VideoMessage.toObject(includeInstance, f),
    locationmessage: (f = msg.getLocationmessage()) && proto.LocationMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HydratedFourRowTemplate}
 */
proto.HydratedFourRowTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HydratedFourRowTemplate;
  return proto.HydratedFourRowTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HydratedFourRowTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HydratedFourRowTemplate}
 */
proto.HydratedFourRowTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setHydratedcontenttext(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setHydratedfootertext(value);
      break;
    case 8:
      var value = new proto.HydratedTemplateButton;
      reader.readMessage(value,proto.HydratedTemplateButton.deserializeBinaryFromReader);
      msg.addHydratedbuttons(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplateid(value);
      break;
    case 1:
      var value = new proto.DocumentMessage;
      reader.readMessage(value,proto.DocumentMessage.deserializeBinaryFromReader);
      msg.setDocumentmessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHydratedtitletext(value);
      break;
    case 3:
      var value = new proto.ImageMessage;
      reader.readMessage(value,proto.ImageMessage.deserializeBinaryFromReader);
      msg.setImagemessage(value);
      break;
    case 4:
      var value = new proto.VideoMessage;
      reader.readMessage(value,proto.VideoMessage.deserializeBinaryFromReader);
      msg.setVideomessage(value);
      break;
    case 5:
      var value = new proto.LocationMessage;
      reader.readMessage(value,proto.LocationMessage.deserializeBinaryFromReader);
      msg.setLocationmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HydratedFourRowTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HydratedFourRowTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HydratedFourRowTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HydratedFourRowTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getHydratedbuttonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.HydratedTemplateButton.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDocumentmessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.DocumentMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getImagemessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ImageMessage.serializeBinaryToWriter
    );
  }
  f = message.getVideomessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.VideoMessage.serializeBinaryToWriter
    );
  }
  f = message.getLocationmessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.LocationMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string hydratedContentText = 6;
 * @return {string}
 */
proto.HydratedFourRowTemplate.prototype.getHydratedcontenttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.HydratedFourRowTemplate} returns this
 */
proto.HydratedFourRowTemplate.prototype.setHydratedcontenttext = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HydratedFourRowTemplate} returns this
 */
proto.HydratedFourRowTemplate.prototype.clearHydratedcontenttext = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedFourRowTemplate.prototype.hasHydratedcontenttext = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string hydratedFooterText = 7;
 * @return {string}
 */
proto.HydratedFourRowTemplate.prototype.getHydratedfootertext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.HydratedFourRowTemplate} returns this
 */
proto.HydratedFourRowTemplate.prototype.setHydratedfootertext = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HydratedFourRowTemplate} returns this
 */
proto.HydratedFourRowTemplate.prototype.clearHydratedfootertext = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedFourRowTemplate.prototype.hasHydratedfootertext = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated HydratedTemplateButton hydratedButtons = 8;
 * @return {!Array<!proto.HydratedTemplateButton>}
 */
proto.HydratedFourRowTemplate.prototype.getHydratedbuttonsList = function() {
  return /** @type{!Array<!proto.HydratedTemplateButton>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.HydratedTemplateButton, 8));
};


/**
 * @param {!Array<!proto.HydratedTemplateButton>} value
 * @return {!proto.HydratedFourRowTemplate} returns this
*/
proto.HydratedFourRowTemplate.prototype.setHydratedbuttonsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.HydratedTemplateButton=} opt_value
 * @param {number=} opt_index
 * @return {!proto.HydratedTemplateButton}
 */
proto.HydratedFourRowTemplate.prototype.addHydratedbuttons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.HydratedTemplateButton, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.HydratedFourRowTemplate} returns this
 */
proto.HydratedFourRowTemplate.prototype.clearHydratedbuttonsList = function() {
  return this.setHydratedbuttonsList([]);
};


/**
 * optional string templateId = 9;
 * @return {string}
 */
proto.HydratedFourRowTemplate.prototype.getTemplateid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.HydratedFourRowTemplate} returns this
 */
proto.HydratedFourRowTemplate.prototype.setTemplateid = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HydratedFourRowTemplate} returns this
 */
proto.HydratedFourRowTemplate.prototype.clearTemplateid = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedFourRowTemplate.prototype.hasTemplateid = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional DocumentMessage documentMessage = 1;
 * @return {?proto.DocumentMessage}
 */
proto.HydratedFourRowTemplate.prototype.getDocumentmessage = function() {
  return /** @type{?proto.DocumentMessage} */ (
    jspb.Message.getWrapperField(this, proto.DocumentMessage, 1));
};


/**
 * @param {?proto.DocumentMessage|undefined} value
 * @return {!proto.HydratedFourRowTemplate} returns this
*/
proto.HydratedFourRowTemplate.prototype.setDocumentmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HydratedFourRowTemplate} returns this
 */
proto.HydratedFourRowTemplate.prototype.clearDocumentmessage = function() {
  return this.setDocumentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedFourRowTemplate.prototype.hasDocumentmessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string hydratedTitleText = 2;
 * @return {string}
 */
proto.HydratedFourRowTemplate.prototype.getHydratedtitletext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.HydratedFourRowTemplate} returns this
 */
proto.HydratedFourRowTemplate.prototype.setHydratedtitletext = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.HydratedFourRowTemplate} returns this
 */
proto.HydratedFourRowTemplate.prototype.clearHydratedtitletext = function() {
  return jspb.Message.setOneofField(this, 2, proto.HydratedFourRowTemplate.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedFourRowTemplate.prototype.hasHydratedtitletext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImageMessage imageMessage = 3;
 * @return {?proto.ImageMessage}
 */
proto.HydratedFourRowTemplate.prototype.getImagemessage = function() {
  return /** @type{?proto.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.ImageMessage, 3));
};


/**
 * @param {?proto.ImageMessage|undefined} value
 * @return {!proto.HydratedFourRowTemplate} returns this
*/
proto.HydratedFourRowTemplate.prototype.setImagemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HydratedFourRowTemplate} returns this
 */
proto.HydratedFourRowTemplate.prototype.clearImagemessage = function() {
  return this.setImagemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedFourRowTemplate.prototype.hasImagemessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional VideoMessage videoMessage = 4;
 * @return {?proto.VideoMessage}
 */
proto.HydratedFourRowTemplate.prototype.getVideomessage = function() {
  return /** @type{?proto.VideoMessage} */ (
    jspb.Message.getWrapperField(this, proto.VideoMessage, 4));
};


/**
 * @param {?proto.VideoMessage|undefined} value
 * @return {!proto.HydratedFourRowTemplate} returns this
*/
proto.HydratedFourRowTemplate.prototype.setVideomessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HydratedFourRowTemplate} returns this
 */
proto.HydratedFourRowTemplate.prototype.clearVideomessage = function() {
  return this.setVideomessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedFourRowTemplate.prototype.hasVideomessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LocationMessage locationMessage = 5;
 * @return {?proto.LocationMessage}
 */
proto.HydratedFourRowTemplate.prototype.getLocationmessage = function() {
  return /** @type{?proto.LocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.LocationMessage, 5));
};


/**
 * @param {?proto.LocationMessage|undefined} value
 * @return {!proto.HydratedFourRowTemplate} returns this
*/
proto.HydratedFourRowTemplate.prototype.setLocationmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.HydratedFourRowTemplate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HydratedFourRowTemplate} returns this
 */
proto.HydratedFourRowTemplate.prototype.clearLocationmessage = function() {
  return this.setLocationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HydratedFourRowTemplate.prototype.hasLocationmessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.TemplateMessage.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.TemplateMessage.FormatCase = {
  FORMAT_NOT_SET: 0,
  FOURROWTEMPLATE: 1,
  HYDRATEDFOURROWTEMPLATE: 2
};

/**
 * @return {proto.TemplateMessage.FormatCase}
 */
proto.TemplateMessage.prototype.getFormatCase = function() {
  return /** @type {proto.TemplateMessage.FormatCase} */(jspb.Message.computeOneofCase(this, proto.TemplateMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TemplateMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.TemplateMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TemplateMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TemplateMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    contextinfo: (f = msg.getContextinfo()) && proto.ContextInfo.toObject(includeInstance, f),
    hydratedtemplate: (f = msg.getHydratedtemplate()) && proto.HydratedFourRowTemplate.toObject(includeInstance, f),
    fourrowtemplate: (f = msg.getFourrowtemplate()) && proto.FourRowTemplate.toObject(includeInstance, f),
    hydratedfourrowtemplate: (f = msg.getHydratedfourrowtemplate()) && proto.HydratedFourRowTemplate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TemplateMessage}
 */
proto.TemplateMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TemplateMessage;
  return proto.TemplateMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TemplateMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TemplateMessage}
 */
proto.TemplateMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.ContextInfo;
      reader.readMessage(value,proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    case 4:
      var value = new proto.HydratedFourRowTemplate;
      reader.readMessage(value,proto.HydratedFourRowTemplate.deserializeBinaryFromReader);
      msg.setHydratedtemplate(value);
      break;
    case 1:
      var value = new proto.FourRowTemplate;
      reader.readMessage(value,proto.FourRowTemplate.deserializeBinaryFromReader);
      msg.setFourrowtemplate(value);
      break;
    case 2:
      var value = new proto.HydratedFourRowTemplate;
      reader.readMessage(value,proto.HydratedFourRowTemplate.deserializeBinaryFromReader);
      msg.setHydratedfourrowtemplate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TemplateMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TemplateMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TemplateMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TemplateMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ContextInfo.serializeBinaryToWriter
    );
  }
  f = message.getHydratedtemplate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.HydratedFourRowTemplate.serializeBinaryToWriter
    );
  }
  f = message.getFourrowtemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.FourRowTemplate.serializeBinaryToWriter
    );
  }
  f = message.getHydratedfourrowtemplate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.HydratedFourRowTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional ContextInfo contextInfo = 3;
 * @return {?proto.ContextInfo}
 */
proto.TemplateMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.ContextInfo, 3));
};


/**
 * @param {?proto.ContextInfo|undefined} value
 * @return {!proto.TemplateMessage} returns this
*/
proto.TemplateMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TemplateMessage} returns this
 */
proto.TemplateMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TemplateMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional HydratedFourRowTemplate hydratedTemplate = 4;
 * @return {?proto.HydratedFourRowTemplate}
 */
proto.TemplateMessage.prototype.getHydratedtemplate = function() {
  return /** @type{?proto.HydratedFourRowTemplate} */ (
    jspb.Message.getWrapperField(this, proto.HydratedFourRowTemplate, 4));
};


/**
 * @param {?proto.HydratedFourRowTemplate|undefined} value
 * @return {!proto.TemplateMessage} returns this
*/
proto.TemplateMessage.prototype.setHydratedtemplate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TemplateMessage} returns this
 */
proto.TemplateMessage.prototype.clearHydratedtemplate = function() {
  return this.setHydratedtemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TemplateMessage.prototype.hasHydratedtemplate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FourRowTemplate fourRowTemplate = 1;
 * @return {?proto.FourRowTemplate}
 */
proto.TemplateMessage.prototype.getFourrowtemplate = function() {
  return /** @type{?proto.FourRowTemplate} */ (
    jspb.Message.getWrapperField(this, proto.FourRowTemplate, 1));
};


/**
 * @param {?proto.FourRowTemplate|undefined} value
 * @return {!proto.TemplateMessage} returns this
*/
proto.TemplateMessage.prototype.setFourrowtemplate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.TemplateMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TemplateMessage} returns this
 */
proto.TemplateMessage.prototype.clearFourrowtemplate = function() {
  return this.setFourrowtemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TemplateMessage.prototype.hasFourrowtemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HydratedFourRowTemplate hydratedFourRowTemplate = 2;
 * @return {?proto.HydratedFourRowTemplate}
 */
proto.TemplateMessage.prototype.getHydratedfourrowtemplate = function() {
  return /** @type{?proto.HydratedFourRowTemplate} */ (
    jspb.Message.getWrapperField(this, proto.HydratedFourRowTemplate, 2));
};


/**
 * @param {?proto.HydratedFourRowTemplate|undefined} value
 * @return {!proto.TemplateMessage} returns this
*/
proto.TemplateMessage.prototype.setHydratedfourrowtemplate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.TemplateMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TemplateMessage} returns this
 */
proto.TemplateMessage.prototype.clearHydratedfourrowtemplate = function() {
  return this.setHydratedfourrowtemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TemplateMessage.prototype.hasHydratedfourrowtemplate = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TemplateButtonReplyMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.TemplateButtonReplyMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TemplateButtonReplyMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TemplateButtonReplyMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectedid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    selecteddisplaytext: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    contextinfo: (f = msg.getContextinfo()) && proto.ContextInfo.toObject(includeInstance, f),
    selectedindex: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TemplateButtonReplyMessage}
 */
proto.TemplateButtonReplyMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TemplateButtonReplyMessage;
  return proto.TemplateButtonReplyMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TemplateButtonReplyMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TemplateButtonReplyMessage}
 */
proto.TemplateButtonReplyMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelectedid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelecteddisplaytext(value);
      break;
    case 3:
      var value = new proto.ContextInfo;
      reader.readMessage(value,proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSelectedindex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TemplateButtonReplyMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TemplateButtonReplyMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TemplateButtonReplyMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TemplateButtonReplyMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ContextInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string selectedId = 1;
 * @return {string}
 */
proto.TemplateButtonReplyMessage.prototype.getSelectedid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.TemplateButtonReplyMessage} returns this
 */
proto.TemplateButtonReplyMessage.prototype.setSelectedid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.TemplateButtonReplyMessage} returns this
 */
proto.TemplateButtonReplyMessage.prototype.clearSelectedid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TemplateButtonReplyMessage.prototype.hasSelectedid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string selectedDisplayText = 2;
 * @return {string}
 */
proto.TemplateButtonReplyMessage.prototype.getSelecteddisplaytext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.TemplateButtonReplyMessage} returns this
 */
proto.TemplateButtonReplyMessage.prototype.setSelecteddisplaytext = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.TemplateButtonReplyMessage} returns this
 */
proto.TemplateButtonReplyMessage.prototype.clearSelecteddisplaytext = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TemplateButtonReplyMessage.prototype.hasSelecteddisplaytext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ContextInfo contextInfo = 3;
 * @return {?proto.ContextInfo}
 */
proto.TemplateButtonReplyMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.ContextInfo, 3));
};


/**
 * @param {?proto.ContextInfo|undefined} value
 * @return {!proto.TemplateButtonReplyMessage} returns this
*/
proto.TemplateButtonReplyMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TemplateButtonReplyMessage} returns this
 */
proto.TemplateButtonReplyMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TemplateButtonReplyMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 selectedIndex = 4;
 * @return {number}
 */
proto.TemplateButtonReplyMessage.prototype.getSelectedindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.TemplateButtonReplyMessage} returns this
 */
proto.TemplateButtonReplyMessage.prototype.setSelectedindex = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.TemplateButtonReplyMessage} returns this
 */
proto.TemplateButtonReplyMessage.prototype.clearSelectedindex = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TemplateButtonReplyMessage.prototype.hasSelectedindex = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CatalogSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.CatalogSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CatalogSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CatalogSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    catalogimage: (f = msg.getCatalogimage()) && proto.ImageMessage.toObject(includeInstance, f),
    title: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CatalogSnapshot}
 */
proto.CatalogSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CatalogSnapshot;
  return proto.CatalogSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CatalogSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CatalogSnapshot}
 */
proto.CatalogSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ImageMessage;
      reader.readMessage(value,proto.ImageMessage.deserializeBinaryFromReader);
      msg.setCatalogimage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CatalogSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CatalogSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CatalogSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CatalogSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCatalogimage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ImageMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ImageMessage catalogImage = 1;
 * @return {?proto.ImageMessage}
 */
proto.CatalogSnapshot.prototype.getCatalogimage = function() {
  return /** @type{?proto.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.ImageMessage, 1));
};


/**
 * @param {?proto.ImageMessage|undefined} value
 * @return {!proto.CatalogSnapshot} returns this
*/
proto.CatalogSnapshot.prototype.setCatalogimage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CatalogSnapshot} returns this
 */
proto.CatalogSnapshot.prototype.clearCatalogimage = function() {
  return this.setCatalogimage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CatalogSnapshot.prototype.hasCatalogimage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.CatalogSnapshot.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.CatalogSnapshot} returns this
 */
proto.CatalogSnapshot.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.CatalogSnapshot} returns this
 */
proto.CatalogSnapshot.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CatalogSnapshot.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.CatalogSnapshot.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.CatalogSnapshot} returns this
 */
proto.CatalogSnapshot.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.CatalogSnapshot} returns this
 */
proto.CatalogSnapshot.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CatalogSnapshot.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ProductSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.ProductSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProductSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProductSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    productimage: (f = msg.getProductimage()) && proto.ImageMessage.toObject(includeInstance, f),
    productid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    title: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    currencycode: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    priceamount1000: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    retailerid: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    url: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    productimagecount: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    firstimageid: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ProductSnapshot}
 */
proto.ProductSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProductSnapshot;
  return proto.ProductSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProductSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProductSnapshot}
 */
proto.ProductSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ImageMessage;
      reader.readMessage(value,proto.ImageMessage.deserializeBinaryFromReader);
      msg.setProductimage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencycode(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPriceamount1000(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRetailerid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProductimagecount(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstimageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ProductSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProductSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProductSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProductSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductimage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ImageMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional ImageMessage productImage = 1;
 * @return {?proto.ImageMessage}
 */
proto.ProductSnapshot.prototype.getProductimage = function() {
  return /** @type{?proto.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.ImageMessage, 1));
};


/**
 * @param {?proto.ImageMessage|undefined} value
 * @return {!proto.ProductSnapshot} returns this
*/
proto.ProductSnapshot.prototype.setProductimage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.clearProductimage = function() {
  return this.setProductimage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProductSnapshot.prototype.hasProductimage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string productId = 2;
 * @return {string}
 */
proto.ProductSnapshot.prototype.getProductid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.setProductid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.clearProductid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProductSnapshot.prototype.hasProductid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.ProductSnapshot.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProductSnapshot.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.ProductSnapshot.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProductSnapshot.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string currencyCode = 5;
 * @return {string}
 */
proto.ProductSnapshot.prototype.getCurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.setCurrencycode = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.clearCurrencycode = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProductSnapshot.prototype.hasCurrencycode = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 priceAmount1000 = 6;
 * @return {number}
 */
proto.ProductSnapshot.prototype.getPriceamount1000 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.setPriceamount1000 = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.clearPriceamount1000 = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProductSnapshot.prototype.hasPriceamount1000 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string retailerId = 7;
 * @return {string}
 */
proto.ProductSnapshot.prototype.getRetailerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.setRetailerid = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.clearRetailerid = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProductSnapshot.prototype.hasRetailerid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string url = 8;
 * @return {string}
 */
proto.ProductSnapshot.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProductSnapshot.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 productImageCount = 9;
 * @return {number}
 */
proto.ProductSnapshot.prototype.getProductimagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.setProductimagecount = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.clearProductimagecount = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProductSnapshot.prototype.hasProductimagecount = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string firstImageId = 11;
 * @return {string}
 */
proto.ProductSnapshot.prototype.getFirstimageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.setFirstimageid = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProductSnapshot} returns this
 */
proto.ProductSnapshot.prototype.clearFirstimageid = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProductSnapshot.prototype.hasFirstimageid = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ProductMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ProductMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProductMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProductMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && proto.ProductSnapshot.toObject(includeInstance, f),
    businessownerjid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    catalog: (f = msg.getCatalog()) && proto.CatalogSnapshot.toObject(includeInstance, f),
    contextinfo: (f = msg.getContextinfo()) && proto.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ProductMessage}
 */
proto.ProductMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProductMessage;
  return proto.ProductMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProductMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProductMessage}
 */
proto.ProductMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ProductSnapshot;
      reader.readMessage(value,proto.ProductSnapshot.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessownerjid(value);
      break;
    case 4:
      var value = new proto.CatalogSnapshot;
      reader.readMessage(value,proto.CatalogSnapshot.deserializeBinaryFromReader);
      msg.setCatalog(value);
      break;
    case 17:
      var value = new proto.ContextInfo;
      reader.readMessage(value,proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ProductMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProductMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProductMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProductMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ProductSnapshot.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCatalog();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.CatalogSnapshot.serializeBinaryToWriter
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProductSnapshot product = 1;
 * @return {?proto.ProductSnapshot}
 */
proto.ProductMessage.prototype.getProduct = function() {
  return /** @type{?proto.ProductSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.ProductSnapshot, 1));
};


/**
 * @param {?proto.ProductSnapshot|undefined} value
 * @return {!proto.ProductMessage} returns this
*/
proto.ProductMessage.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ProductMessage} returns this
 */
proto.ProductMessage.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProductMessage.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string businessOwnerJid = 2;
 * @return {string}
 */
proto.ProductMessage.prototype.getBusinessownerjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProductMessage} returns this
 */
proto.ProductMessage.prototype.setBusinessownerjid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProductMessage} returns this
 */
proto.ProductMessage.prototype.clearBusinessownerjid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProductMessage.prototype.hasBusinessownerjid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CatalogSnapshot catalog = 4;
 * @return {?proto.CatalogSnapshot}
 */
proto.ProductMessage.prototype.getCatalog = function() {
  return /** @type{?proto.CatalogSnapshot} */ (
    jspb.Message.getWrapperField(this, proto.CatalogSnapshot, 4));
};


/**
 * @param {?proto.CatalogSnapshot|undefined} value
 * @return {!proto.ProductMessage} returns this
*/
proto.ProductMessage.prototype.setCatalog = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ProductMessage} returns this
 */
proto.ProductMessage.prototype.clearCatalog = function() {
  return this.setCatalog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProductMessage.prototype.hasCatalog = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ContextInfo contextInfo = 17;
 * @return {?proto.ContextInfo}
 */
proto.ProductMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.ContextInfo, 17));
};


/**
 * @param {?proto.ContextInfo|undefined} value
 * @return {!proto.ProductMessage} returns this
*/
proto.ProductMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ProductMessage} returns this
 */
proto.ProductMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProductMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GroupInviteMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.GroupInviteMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GroupInviteMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GroupInviteMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupjid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    invitecode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    inviteexpiration: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    groupname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    jpegthumbnail: msg.getJpegthumbnail_asB64(),
    caption: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    contextinfo: (f = msg.getContextinfo()) && proto.ContextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GroupInviteMessage}
 */
proto.GroupInviteMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GroupInviteMessage;
  return proto.GroupInviteMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GroupInviteMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GroupInviteMessage}
 */
proto.GroupInviteMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupjid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvitecode(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInviteexpiration(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupname(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJpegthumbnail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 7:
      var value = new proto.ContextInfo;
      reader.readMessage(value,proto.ContextInfo.deserializeBinaryFromReader);
      msg.setContextinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GroupInviteMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GroupInviteMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GroupInviteMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GroupInviteMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getContextinfo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ContextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string groupJid = 1;
 * @return {string}
 */
proto.GroupInviteMessage.prototype.getGroupjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GroupInviteMessage} returns this
 */
proto.GroupInviteMessage.prototype.setGroupjid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.GroupInviteMessage} returns this
 */
proto.GroupInviteMessage.prototype.clearGroupjid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GroupInviteMessage.prototype.hasGroupjid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string inviteCode = 2;
 * @return {string}
 */
proto.GroupInviteMessage.prototype.getInvitecode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.GroupInviteMessage} returns this
 */
proto.GroupInviteMessage.prototype.setInvitecode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.GroupInviteMessage} returns this
 */
proto.GroupInviteMessage.prototype.clearInvitecode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GroupInviteMessage.prototype.hasInvitecode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 inviteExpiration = 3;
 * @return {number}
 */
proto.GroupInviteMessage.prototype.getInviteexpiration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.GroupInviteMessage} returns this
 */
proto.GroupInviteMessage.prototype.setInviteexpiration = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.GroupInviteMessage} returns this
 */
proto.GroupInviteMessage.prototype.clearInviteexpiration = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GroupInviteMessage.prototype.hasInviteexpiration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string groupName = 4;
 * @return {string}
 */
proto.GroupInviteMessage.prototype.getGroupname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.GroupInviteMessage} returns this
 */
proto.GroupInviteMessage.prototype.setGroupname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.GroupInviteMessage} returns this
 */
proto.GroupInviteMessage.prototype.clearGroupname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GroupInviteMessage.prototype.hasGroupname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes jpegThumbnail = 5;
 * @return {!(string|Uint8Array)}
 */
proto.GroupInviteMessage.prototype.getJpegthumbnail = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes jpegThumbnail = 5;
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {string}
 */
proto.GroupInviteMessage.prototype.getJpegthumbnail_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJpegthumbnail()));
};


/**
 * optional bytes jpegThumbnail = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJpegthumbnail()`
 * @return {!Uint8Array}
 */
proto.GroupInviteMessage.prototype.getJpegthumbnail_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJpegthumbnail()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.GroupInviteMessage} returns this
 */
proto.GroupInviteMessage.prototype.setJpegthumbnail = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.GroupInviteMessage} returns this
 */
proto.GroupInviteMessage.prototype.clearJpegthumbnail = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GroupInviteMessage.prototype.hasJpegthumbnail = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string caption = 6;
 * @return {string}
 */
proto.GroupInviteMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.GroupInviteMessage} returns this
 */
proto.GroupInviteMessage.prototype.setCaption = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.GroupInviteMessage} returns this
 */
proto.GroupInviteMessage.prototype.clearCaption = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GroupInviteMessage.prototype.hasCaption = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ContextInfo contextInfo = 7;
 * @return {?proto.ContextInfo}
 */
proto.GroupInviteMessage.prototype.getContextinfo = function() {
  return /** @type{?proto.ContextInfo} */ (
    jspb.Message.getWrapperField(this, proto.ContextInfo, 7));
};


/**
 * @param {?proto.ContextInfo|undefined} value
 * @return {!proto.GroupInviteMessage} returns this
*/
proto.GroupInviteMessage.prototype.setContextinfo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GroupInviteMessage} returns this
 */
proto.GroupInviteMessage.prototype.clearContextinfo = function() {
  return this.setContextinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GroupInviteMessage.prototype.hasContextinfo = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeviceSentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DeviceSentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeviceSentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceSentMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationjid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    message: (f = msg.getMessage()) && proto.Message.toObject(includeInstance, f),
    phash: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeviceSentMessage}
 */
proto.DeviceSentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeviceSentMessage;
  return proto.DeviceSentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeviceSentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeviceSentMessage}
 */
proto.DeviceSentMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationjid(value);
      break;
    case 2:
      var value = new proto.Message;
      reader.readMessage(value,proto.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeviceSentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeviceSentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeviceSentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceSentMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Message.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string destinationJid = 1;
 * @return {string}
 */
proto.DeviceSentMessage.prototype.getDestinationjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceSentMessage} returns this
 */
proto.DeviceSentMessage.prototype.setDestinationjid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DeviceSentMessage} returns this
 */
proto.DeviceSentMessage.prototype.clearDestinationjid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DeviceSentMessage.prototype.hasDestinationjid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message message = 2;
 * @return {?proto.Message}
 */
proto.DeviceSentMessage.prototype.getMessage = function() {
  return /** @type{?proto.Message} */ (
    jspb.Message.getWrapperField(this, proto.Message, 2));
};


/**
 * @param {?proto.Message|undefined} value
 * @return {!proto.DeviceSentMessage} returns this
*/
proto.DeviceSentMessage.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DeviceSentMessage} returns this
 */
proto.DeviceSentMessage.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DeviceSentMessage.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phash = 3;
 * @return {string}
 */
proto.DeviceSentMessage.prototype.getPhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceSentMessage} returns this
 */
proto.DeviceSentMessage.prototype.setPhash = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DeviceSentMessage} returns this
 */
proto.DeviceSentMessage.prototype.clearPhash = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DeviceSentMessage.prototype.hasPhash = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversation: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    senderkeydistributionmessage: (f = msg.getSenderkeydistributionmessage()) && proto.SenderKeyDistributionMessage.toObject(includeInstance, f),
    imagemessage: (f = msg.getImagemessage()) && proto.ImageMessage.toObject(includeInstance, f),
    contactmessage: (f = msg.getContactmessage()) && proto.ContactMessage.toObject(includeInstance, f),
    locationmessage: (f = msg.getLocationmessage()) && proto.LocationMessage.toObject(includeInstance, f),
    extendedtextmessage: (f = msg.getExtendedtextmessage()) && proto.ExtendedTextMessage.toObject(includeInstance, f),
    documentmessage: (f = msg.getDocumentmessage()) && proto.DocumentMessage.toObject(includeInstance, f),
    audiomessage: (f = msg.getAudiomessage()) && proto.AudioMessage.toObject(includeInstance, f),
    videomessage: (f = msg.getVideomessage()) && proto.VideoMessage.toObject(includeInstance, f),
    call: (f = msg.getCall()) && proto.Call.toObject(includeInstance, f),
    chat: (f = msg.getChat()) && proto.Chat.toObject(includeInstance, f),
    protocolmessage: (f = msg.getProtocolmessage()) && proto.ProtocolMessage.toObject(includeInstance, f),
    contactsarraymessage: (f = msg.getContactsarraymessage()) && proto.ContactsArrayMessage.toObject(includeInstance, f),
    highlystructuredmessage: (f = msg.getHighlystructuredmessage()) && proto.HighlyStructuredMessage.toObject(includeInstance, f),
    fastratchetkeysenderkeydistributionmessage: (f = msg.getFastratchetkeysenderkeydistributionmessage()) && proto.SenderKeyDistributionMessage.toObject(includeInstance, f),
    sendpaymentmessage: (f = msg.getSendpaymentmessage()) && proto.SendPaymentMessage.toObject(includeInstance, f),
    livelocationmessage: (f = msg.getLivelocationmessage()) && proto.LiveLocationMessage.toObject(includeInstance, f),
    requestpaymentmessage: (f = msg.getRequestpaymentmessage()) && proto.RequestPaymentMessage.toObject(includeInstance, f),
    declinepaymentrequestmessage: (f = msg.getDeclinepaymentrequestmessage()) && proto.DeclinePaymentRequestMessage.toObject(includeInstance, f),
    cancelpaymentrequestmessage: (f = msg.getCancelpaymentrequestmessage()) && proto.CancelPaymentRequestMessage.toObject(includeInstance, f),
    templatemessage: (f = msg.getTemplatemessage()) && proto.TemplateMessage.toObject(includeInstance, f),
    stickermessage: (f = msg.getStickermessage()) && proto.StickerMessage.toObject(includeInstance, f),
    groupinvitemessage: (f = msg.getGroupinvitemessage()) && proto.GroupInviteMessage.toObject(includeInstance, f),
    templatebuttonreplymessage: (f = msg.getTemplatebuttonreplymessage()) && proto.TemplateButtonReplyMessage.toObject(includeInstance, f),
    productmessage: (f = msg.getProductmessage()) && proto.ProductMessage.toObject(includeInstance, f),
    devicesentmessage: (f = msg.getDevicesentmessage()) && proto.DeviceSentMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Message}
 */
proto.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Message;
  return proto.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Message}
 */
proto.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversation(value);
      break;
    case 2:
      var value = new proto.SenderKeyDistributionMessage;
      reader.readMessage(value,proto.SenderKeyDistributionMessage.deserializeBinaryFromReader);
      msg.setSenderkeydistributionmessage(value);
      break;
    case 3:
      var value = new proto.ImageMessage;
      reader.readMessage(value,proto.ImageMessage.deserializeBinaryFromReader);
      msg.setImagemessage(value);
      break;
    case 4:
      var value = new proto.ContactMessage;
      reader.readMessage(value,proto.ContactMessage.deserializeBinaryFromReader);
      msg.setContactmessage(value);
      break;
    case 5:
      var value = new proto.LocationMessage;
      reader.readMessage(value,proto.LocationMessage.deserializeBinaryFromReader);
      msg.setLocationmessage(value);
      break;
    case 6:
      var value = new proto.ExtendedTextMessage;
      reader.readMessage(value,proto.ExtendedTextMessage.deserializeBinaryFromReader);
      msg.setExtendedtextmessage(value);
      break;
    case 7:
      var value = new proto.DocumentMessage;
      reader.readMessage(value,proto.DocumentMessage.deserializeBinaryFromReader);
      msg.setDocumentmessage(value);
      break;
    case 8:
      var value = new proto.AudioMessage;
      reader.readMessage(value,proto.AudioMessage.deserializeBinaryFromReader);
      msg.setAudiomessage(value);
      break;
    case 9:
      var value = new proto.VideoMessage;
      reader.readMessage(value,proto.VideoMessage.deserializeBinaryFromReader);
      msg.setVideomessage(value);
      break;
    case 10:
      var value = new proto.Call;
      reader.readMessage(value,proto.Call.deserializeBinaryFromReader);
      msg.setCall(value);
      break;
    case 11:
      var value = new proto.Chat;
      reader.readMessage(value,proto.Chat.deserializeBinaryFromReader);
      msg.setChat(value);
      break;
    case 12:
      var value = new proto.ProtocolMessage;
      reader.readMessage(value,proto.ProtocolMessage.deserializeBinaryFromReader);
      msg.setProtocolmessage(value);
      break;
    case 13:
      var value = new proto.ContactsArrayMessage;
      reader.readMessage(value,proto.ContactsArrayMessage.deserializeBinaryFromReader);
      msg.setContactsarraymessage(value);
      break;
    case 14:
      var value = new proto.HighlyStructuredMessage;
      reader.readMessage(value,proto.HighlyStructuredMessage.deserializeBinaryFromReader);
      msg.setHighlystructuredmessage(value);
      break;
    case 15:
      var value = new proto.SenderKeyDistributionMessage;
      reader.readMessage(value,proto.SenderKeyDistributionMessage.deserializeBinaryFromReader);
      msg.setFastratchetkeysenderkeydistributionmessage(value);
      break;
    case 16:
      var value = new proto.SendPaymentMessage;
      reader.readMessage(value,proto.SendPaymentMessage.deserializeBinaryFromReader);
      msg.setSendpaymentmessage(value);
      break;
    case 18:
      var value = new proto.LiveLocationMessage;
      reader.readMessage(value,proto.LiveLocationMessage.deserializeBinaryFromReader);
      msg.setLivelocationmessage(value);
      break;
    case 22:
      var value = new proto.RequestPaymentMessage;
      reader.readMessage(value,proto.RequestPaymentMessage.deserializeBinaryFromReader);
      msg.setRequestpaymentmessage(value);
      break;
    case 23:
      var value = new proto.DeclinePaymentRequestMessage;
      reader.readMessage(value,proto.DeclinePaymentRequestMessage.deserializeBinaryFromReader);
      msg.setDeclinepaymentrequestmessage(value);
      break;
    case 24:
      var value = new proto.CancelPaymentRequestMessage;
      reader.readMessage(value,proto.CancelPaymentRequestMessage.deserializeBinaryFromReader);
      msg.setCancelpaymentrequestmessage(value);
      break;
    case 25:
      var value = new proto.TemplateMessage;
      reader.readMessage(value,proto.TemplateMessage.deserializeBinaryFromReader);
      msg.setTemplatemessage(value);
      break;
    case 26:
      var value = new proto.StickerMessage;
      reader.readMessage(value,proto.StickerMessage.deserializeBinaryFromReader);
      msg.setStickermessage(value);
      break;
    case 28:
      var value = new proto.GroupInviteMessage;
      reader.readMessage(value,proto.GroupInviteMessage.deserializeBinaryFromReader);
      msg.setGroupinvitemessage(value);
      break;
    case 29:
      var value = new proto.TemplateButtonReplyMessage;
      reader.readMessage(value,proto.TemplateButtonReplyMessage.deserializeBinaryFromReader);
      msg.setTemplatebuttonreplymessage(value);
      break;
    case 30:
      var value = new proto.ProductMessage;
      reader.readMessage(value,proto.ProductMessage.deserializeBinaryFromReader);
      msg.setProductmessage(value);
      break;
    case 31:
      var value = new proto.DeviceSentMessage;
      reader.readMessage(value,proto.DeviceSentMessage.deserializeBinaryFromReader);
      msg.setDevicesentmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSenderkeydistributionmessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.SenderKeyDistributionMessage.serializeBinaryToWriter
    );
  }
  f = message.getImagemessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ImageMessage.serializeBinaryToWriter
    );
  }
  f = message.getContactmessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ContactMessage.serializeBinaryToWriter
    );
  }
  f = message.getLocationmessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.LocationMessage.serializeBinaryToWriter
    );
  }
  f = message.getExtendedtextmessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ExtendedTextMessage.serializeBinaryToWriter
    );
  }
  f = message.getDocumentmessage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.DocumentMessage.serializeBinaryToWriter
    );
  }
  f = message.getAudiomessage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.AudioMessage.serializeBinaryToWriter
    );
  }
  f = message.getVideomessage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.VideoMessage.serializeBinaryToWriter
    );
  }
  f = message.getCall();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.Call.serializeBinaryToWriter
    );
  }
  f = message.getChat();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.Chat.serializeBinaryToWriter
    );
  }
  f = message.getProtocolmessage();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.ProtocolMessage.serializeBinaryToWriter
    );
  }
  f = message.getContactsarraymessage();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.ContactsArrayMessage.serializeBinaryToWriter
    );
  }
  f = message.getHighlystructuredmessage();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.HighlyStructuredMessage.serializeBinaryToWriter
    );
  }
  f = message.getFastratchetkeysenderkeydistributionmessage();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.SenderKeyDistributionMessage.serializeBinaryToWriter
    );
  }
  f = message.getSendpaymentmessage();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.SendPaymentMessage.serializeBinaryToWriter
    );
  }
  f = message.getLivelocationmessage();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.LiveLocationMessage.serializeBinaryToWriter
    );
  }
  f = message.getRequestpaymentmessage();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.RequestPaymentMessage.serializeBinaryToWriter
    );
  }
  f = message.getDeclinepaymentrequestmessage();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.DeclinePaymentRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getCancelpaymentrequestmessage();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.CancelPaymentRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getTemplatemessage();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.TemplateMessage.serializeBinaryToWriter
    );
  }
  f = message.getStickermessage();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.StickerMessage.serializeBinaryToWriter
    );
  }
  f = message.getGroupinvitemessage();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.GroupInviteMessage.serializeBinaryToWriter
    );
  }
  f = message.getTemplatebuttonreplymessage();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.TemplateButtonReplyMessage.serializeBinaryToWriter
    );
  }
  f = message.getProductmessage();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.ProductMessage.serializeBinaryToWriter
    );
  }
  f = message.getDevicesentmessage();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.DeviceSentMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string conversation = 1;
 * @return {string}
 */
proto.Message.prototype.getConversation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.setConversation = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearConversation = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SenderKeyDistributionMessage senderKeyDistributionMessage = 2;
 * @return {?proto.SenderKeyDistributionMessage}
 */
proto.Message.prototype.getSenderkeydistributionmessage = function() {
  return /** @type{?proto.SenderKeyDistributionMessage} */ (
    jspb.Message.getWrapperField(this, proto.SenderKeyDistributionMessage, 2));
};


/**
 * @param {?proto.SenderKeyDistributionMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setSenderkeydistributionmessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearSenderkeydistributionmessage = function() {
  return this.setSenderkeydistributionmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasSenderkeydistributionmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImageMessage imageMessage = 3;
 * @return {?proto.ImageMessage}
 */
proto.Message.prototype.getImagemessage = function() {
  return /** @type{?proto.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.ImageMessage, 3));
};


/**
 * @param {?proto.ImageMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setImagemessage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearImagemessage = function() {
  return this.setImagemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasImagemessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ContactMessage contactMessage = 4;
 * @return {?proto.ContactMessage}
 */
proto.Message.prototype.getContactmessage = function() {
  return /** @type{?proto.ContactMessage} */ (
    jspb.Message.getWrapperField(this, proto.ContactMessage, 4));
};


/**
 * @param {?proto.ContactMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setContactmessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearContactmessage = function() {
  return this.setContactmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasContactmessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LocationMessage locationMessage = 5;
 * @return {?proto.LocationMessage}
 */
proto.Message.prototype.getLocationmessage = function() {
  return /** @type{?proto.LocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.LocationMessage, 5));
};


/**
 * @param {?proto.LocationMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setLocationmessage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearLocationmessage = function() {
  return this.setLocationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasLocationmessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ExtendedTextMessage extendedTextMessage = 6;
 * @return {?proto.ExtendedTextMessage}
 */
proto.Message.prototype.getExtendedtextmessage = function() {
  return /** @type{?proto.ExtendedTextMessage} */ (
    jspb.Message.getWrapperField(this, proto.ExtendedTextMessage, 6));
};


/**
 * @param {?proto.ExtendedTextMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setExtendedtextmessage = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearExtendedtextmessage = function() {
  return this.setExtendedtextmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasExtendedtextmessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional DocumentMessage documentMessage = 7;
 * @return {?proto.DocumentMessage}
 */
proto.Message.prototype.getDocumentmessage = function() {
  return /** @type{?proto.DocumentMessage} */ (
    jspb.Message.getWrapperField(this, proto.DocumentMessage, 7));
};


/**
 * @param {?proto.DocumentMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setDocumentmessage = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearDocumentmessage = function() {
  return this.setDocumentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasDocumentmessage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AudioMessage audioMessage = 8;
 * @return {?proto.AudioMessage}
 */
proto.Message.prototype.getAudiomessage = function() {
  return /** @type{?proto.AudioMessage} */ (
    jspb.Message.getWrapperField(this, proto.AudioMessage, 8));
};


/**
 * @param {?proto.AudioMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setAudiomessage = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearAudiomessage = function() {
  return this.setAudiomessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasAudiomessage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional VideoMessage videoMessage = 9;
 * @return {?proto.VideoMessage}
 */
proto.Message.prototype.getVideomessage = function() {
  return /** @type{?proto.VideoMessage} */ (
    jspb.Message.getWrapperField(this, proto.VideoMessage, 9));
};


/**
 * @param {?proto.VideoMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setVideomessage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearVideomessage = function() {
  return this.setVideomessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasVideomessage = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Call call = 10;
 * @return {?proto.Call}
 */
proto.Message.prototype.getCall = function() {
  return /** @type{?proto.Call} */ (
    jspb.Message.getWrapperField(this, proto.Call, 10));
};


/**
 * @param {?proto.Call|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setCall = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearCall = function() {
  return this.setCall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasCall = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Chat chat = 11;
 * @return {?proto.Chat}
 */
proto.Message.prototype.getChat = function() {
  return /** @type{?proto.Chat} */ (
    jspb.Message.getWrapperField(this, proto.Chat, 11));
};


/**
 * @param {?proto.Chat|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setChat = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearChat = function() {
  return this.setChat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasChat = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ProtocolMessage protocolMessage = 12;
 * @return {?proto.ProtocolMessage}
 */
proto.Message.prototype.getProtocolmessage = function() {
  return /** @type{?proto.ProtocolMessage} */ (
    jspb.Message.getWrapperField(this, proto.ProtocolMessage, 12));
};


/**
 * @param {?proto.ProtocolMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setProtocolmessage = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearProtocolmessage = function() {
  return this.setProtocolmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasProtocolmessage = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ContactsArrayMessage contactsArrayMessage = 13;
 * @return {?proto.ContactsArrayMessage}
 */
proto.Message.prototype.getContactsarraymessage = function() {
  return /** @type{?proto.ContactsArrayMessage} */ (
    jspb.Message.getWrapperField(this, proto.ContactsArrayMessage, 13));
};


/**
 * @param {?proto.ContactsArrayMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setContactsarraymessage = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearContactsarraymessage = function() {
  return this.setContactsarraymessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasContactsarraymessage = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional HighlyStructuredMessage highlyStructuredMessage = 14;
 * @return {?proto.HighlyStructuredMessage}
 */
proto.Message.prototype.getHighlystructuredmessage = function() {
  return /** @type{?proto.HighlyStructuredMessage} */ (
    jspb.Message.getWrapperField(this, proto.HighlyStructuredMessage, 14));
};


/**
 * @param {?proto.HighlyStructuredMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setHighlystructuredmessage = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearHighlystructuredmessage = function() {
  return this.setHighlystructuredmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasHighlystructuredmessage = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional SenderKeyDistributionMessage fastRatchetKeySenderKeyDistributionMessage = 15;
 * @return {?proto.SenderKeyDistributionMessage}
 */
proto.Message.prototype.getFastratchetkeysenderkeydistributionmessage = function() {
  return /** @type{?proto.SenderKeyDistributionMessage} */ (
    jspb.Message.getWrapperField(this, proto.SenderKeyDistributionMessage, 15));
};


/**
 * @param {?proto.SenderKeyDistributionMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setFastratchetkeysenderkeydistributionmessage = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearFastratchetkeysenderkeydistributionmessage = function() {
  return this.setFastratchetkeysenderkeydistributionmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasFastratchetkeysenderkeydistributionmessage = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional SendPaymentMessage sendPaymentMessage = 16;
 * @return {?proto.SendPaymentMessage}
 */
proto.Message.prototype.getSendpaymentmessage = function() {
  return /** @type{?proto.SendPaymentMessage} */ (
    jspb.Message.getWrapperField(this, proto.SendPaymentMessage, 16));
};


/**
 * @param {?proto.SendPaymentMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setSendpaymentmessage = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearSendpaymentmessage = function() {
  return this.setSendpaymentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasSendpaymentmessage = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional LiveLocationMessage liveLocationMessage = 18;
 * @return {?proto.LiveLocationMessage}
 */
proto.Message.prototype.getLivelocationmessage = function() {
  return /** @type{?proto.LiveLocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.LiveLocationMessage, 18));
};


/**
 * @param {?proto.LiveLocationMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setLivelocationmessage = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearLivelocationmessage = function() {
  return this.setLivelocationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasLivelocationmessage = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional RequestPaymentMessage requestPaymentMessage = 22;
 * @return {?proto.RequestPaymentMessage}
 */
proto.Message.prototype.getRequestpaymentmessage = function() {
  return /** @type{?proto.RequestPaymentMessage} */ (
    jspb.Message.getWrapperField(this, proto.RequestPaymentMessage, 22));
};


/**
 * @param {?proto.RequestPaymentMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setRequestpaymentmessage = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearRequestpaymentmessage = function() {
  return this.setRequestpaymentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasRequestpaymentmessage = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional DeclinePaymentRequestMessage declinePaymentRequestMessage = 23;
 * @return {?proto.DeclinePaymentRequestMessage}
 */
proto.Message.prototype.getDeclinepaymentrequestmessage = function() {
  return /** @type{?proto.DeclinePaymentRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.DeclinePaymentRequestMessage, 23));
};


/**
 * @param {?proto.DeclinePaymentRequestMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setDeclinepaymentrequestmessage = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearDeclinepaymentrequestmessage = function() {
  return this.setDeclinepaymentrequestmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasDeclinepaymentrequestmessage = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional CancelPaymentRequestMessage cancelPaymentRequestMessage = 24;
 * @return {?proto.CancelPaymentRequestMessage}
 */
proto.Message.prototype.getCancelpaymentrequestmessage = function() {
  return /** @type{?proto.CancelPaymentRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.CancelPaymentRequestMessage, 24));
};


/**
 * @param {?proto.CancelPaymentRequestMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setCancelpaymentrequestmessage = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearCancelpaymentrequestmessage = function() {
  return this.setCancelpaymentrequestmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasCancelpaymentrequestmessage = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional TemplateMessage templateMessage = 25;
 * @return {?proto.TemplateMessage}
 */
proto.Message.prototype.getTemplatemessage = function() {
  return /** @type{?proto.TemplateMessage} */ (
    jspb.Message.getWrapperField(this, proto.TemplateMessage, 25));
};


/**
 * @param {?proto.TemplateMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setTemplatemessage = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearTemplatemessage = function() {
  return this.setTemplatemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasTemplatemessage = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional StickerMessage stickerMessage = 26;
 * @return {?proto.StickerMessage}
 */
proto.Message.prototype.getStickermessage = function() {
  return /** @type{?proto.StickerMessage} */ (
    jspb.Message.getWrapperField(this, proto.StickerMessage, 26));
};


/**
 * @param {?proto.StickerMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setStickermessage = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearStickermessage = function() {
  return this.setStickermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasStickermessage = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional GroupInviteMessage groupInviteMessage = 28;
 * @return {?proto.GroupInviteMessage}
 */
proto.Message.prototype.getGroupinvitemessage = function() {
  return /** @type{?proto.GroupInviteMessage} */ (
    jspb.Message.getWrapperField(this, proto.GroupInviteMessage, 28));
};


/**
 * @param {?proto.GroupInviteMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setGroupinvitemessage = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearGroupinvitemessage = function() {
  return this.setGroupinvitemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasGroupinvitemessage = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional TemplateButtonReplyMessage templateButtonReplyMessage = 29;
 * @return {?proto.TemplateButtonReplyMessage}
 */
proto.Message.prototype.getTemplatebuttonreplymessage = function() {
  return /** @type{?proto.TemplateButtonReplyMessage} */ (
    jspb.Message.getWrapperField(this, proto.TemplateButtonReplyMessage, 29));
};


/**
 * @param {?proto.TemplateButtonReplyMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setTemplatebuttonreplymessage = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearTemplatebuttonreplymessage = function() {
  return this.setTemplatebuttonreplymessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasTemplatebuttonreplymessage = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional ProductMessage productMessage = 30;
 * @return {?proto.ProductMessage}
 */
proto.Message.prototype.getProductmessage = function() {
  return /** @type{?proto.ProductMessage} */ (
    jspb.Message.getWrapperField(this, proto.ProductMessage, 30));
};


/**
 * @param {?proto.ProductMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setProductmessage = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearProductmessage = function() {
  return this.setProductmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasProductmessage = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional DeviceSentMessage deviceSentMessage = 31;
 * @return {?proto.DeviceSentMessage}
 */
proto.Message.prototype.getDevicesentmessage = function() {
  return /** @type{?proto.DeviceSentMessage} */ (
    jspb.Message.getWrapperField(this, proto.DeviceSentMessage, 31));
};


/**
 * @param {?proto.DeviceSentMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setDevicesentmessage = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearDevicesentmessage = function() {
  return this.setDevicesentmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasDevicesentmessage = function() {
  return jspb.Message.getField(this, 31) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MessageKey.prototype.toObject = function(opt_includeInstance) {
  return proto.MessageKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MessageKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MessageKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    remotejid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    fromme: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    id: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    participant: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MessageKey}
 */
proto.MessageKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MessageKey;
  return proto.MessageKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MessageKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MessageKey}
 */
proto.MessageKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemotejid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFromme(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MessageKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MessageKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MessageKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MessageKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string remoteJid = 1;
 * @return {string}
 */
proto.MessageKey.prototype.getRemotejid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MessageKey} returns this
 */
proto.MessageKey.prototype.setRemotejid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.MessageKey} returns this
 */
proto.MessageKey.prototype.clearRemotejid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MessageKey.prototype.hasRemotejid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool fromMe = 2;
 * @return {boolean}
 */
proto.MessageKey.prototype.getFromme = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.MessageKey} returns this
 */
proto.MessageKey.prototype.setFromme = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.MessageKey} returns this
 */
proto.MessageKey.prototype.clearFromme = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MessageKey.prototype.hasFromme = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.MessageKey.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MessageKey} returns this
 */
proto.MessageKey.prototype.setId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.MessageKey} returns this
 */
proto.MessageKey.prototype.clearId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MessageKey.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string participant = 4;
 * @return {string}
 */
proto.MessageKey.prototype.getParticipant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MessageKey} returns this
 */
proto.MessageKey.prototype.setParticipant = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.MessageKey} returns this
 */
proto.MessageKey.prototype.clearParticipant = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MessageKey.prototype.hasParticipant = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WebFeatures.prototype.toObject = function(opt_includeInstance) {
  return proto.WebFeatures.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WebFeatures} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebFeatures.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelsdisplay: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    voipindividualoutgoing: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    groupsv3: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    groupsv3create: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    changenumberv2: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    querystatusv3thumbnail: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    livelocations: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    queryvname: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    voipindividualincoming: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    quickrepliesquery: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    payments: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    stickerpackquery: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    livelocationsfinal: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    labelsedit: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    mediaupload: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
    mediauploadrichquickreplies: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f,
    vnamev2: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    videoplaybackurl: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
    statusranking: (f = jspb.Message.getField(msg, 21)) == null ? undefined : f,
    voipindividualvideo: (f = jspb.Message.getField(msg, 22)) == null ? undefined : f,
    thirdpartystickers: (f = jspb.Message.getField(msg, 23)) == null ? undefined : f,
    frequentlyforwardedsetting: (f = jspb.Message.getField(msg, 24)) == null ? undefined : f,
    groupsv4joinpermission: (f = jspb.Message.getField(msg, 25)) == null ? undefined : f,
    recentstickers: (f = jspb.Message.getField(msg, 26)) == null ? undefined : f,
    catalog: (f = jspb.Message.getField(msg, 27)) == null ? undefined : f,
    starredstickers: (f = jspb.Message.getField(msg, 28)) == null ? undefined : f,
    voipgroupcall: (f = jspb.Message.getField(msg, 29)) == null ? undefined : f,
    templatemessage: (f = jspb.Message.getField(msg, 30)) == null ? undefined : f,
    templatemessageinteractivity: (f = jspb.Message.getField(msg, 31)) == null ? undefined : f,
    ephemeralmessages: (f = jspb.Message.getField(msg, 32)) == null ? undefined : f,
    e2enotificationsync: (f = jspb.Message.getField(msg, 33)) == null ? undefined : f,
    recentstickersv2: (f = jspb.Message.getField(msg, 34)) == null ? undefined : f,
    syncdrelease1: (f = jspb.Message.getField(msg, 35)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WebFeatures}
 */
proto.WebFeatures.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WebFeatures;
  return proto.WebFeatures.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WebFeatures} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WebFeatures}
 */
proto.WebFeatures.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setLabelsdisplay(value);
      break;
    case 2:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVoipindividualoutgoing(value);
      break;
    case 3:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setGroupsv3(value);
      break;
    case 4:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setGroupsv3create(value);
      break;
    case 5:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setChangenumberv2(value);
      break;
    case 6:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setQuerystatusv3thumbnail(value);
      break;
    case 7:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setLivelocations(value);
      break;
    case 8:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setQueryvname(value);
      break;
    case 9:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVoipindividualincoming(value);
      break;
    case 10:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setQuickrepliesquery(value);
      break;
    case 11:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setPayments(value);
      break;
    case 12:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setStickerpackquery(value);
      break;
    case 13:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setLivelocationsfinal(value);
      break;
    case 14:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setLabelsedit(value);
      break;
    case 15:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setMediaupload(value);
      break;
    case 18:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setMediauploadrichquickreplies(value);
      break;
    case 19:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVnamev2(value);
      break;
    case 20:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVideoplaybackurl(value);
      break;
    case 21:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setStatusranking(value);
      break;
    case 22:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVoipindividualvideo(value);
      break;
    case 23:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setThirdpartystickers(value);
      break;
    case 24:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setFrequentlyforwardedsetting(value);
      break;
    case 25:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setGroupsv4joinpermission(value);
      break;
    case 26:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setRecentstickers(value);
      break;
    case 27:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setCatalog(value);
      break;
    case 28:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setStarredstickers(value);
      break;
    case 29:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setVoipgroupcall(value);
      break;
    case 30:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setTemplatemessage(value);
      break;
    case 31:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setTemplatemessageinteractivity(value);
      break;
    case 32:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setEphemeralmessages(value);
      break;
    case 33:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setE2enotificationsync(value);
      break;
    case 34:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setRecentstickersv2(value);
      break;
    case 35:
      var value = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (reader.readEnum());
      msg.setSyncdrelease1(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WebFeatures.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WebFeatures.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WebFeatures} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebFeatures.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeEnum(
      18,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeEnum(
      19,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeEnum(
      20,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeEnum(
      23,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeEnum(
      24,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeEnum(
      25,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeEnum(
      26,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeEnum(
      27,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 28));
  if (f != null) {
    writer.writeEnum(
      28,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 29));
  if (f != null) {
    writer.writeEnum(
      29,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 30));
  if (f != null) {
    writer.writeEnum(
      30,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 31));
  if (f != null) {
    writer.writeEnum(
      31,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 32));
  if (f != null) {
    writer.writeEnum(
      32,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 33));
  if (f != null) {
    writer.writeEnum(
      33,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 34));
  if (f != null) {
    writer.writeEnum(
      34,
      f
    );
  }
  f = /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getField(message, 35));
  if (f != null) {
    writer.writeEnum(
      35,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.WebFeatures.WEB_FEATURES_FLAG = {
  NOT_STARTED: 0,
  FORCE_UPGRADE: 1,
  DEVELOPMENT: 2,
  PRODUCTION: 3
};

/**
 * optional WEB_FEATURES_FLAG labelsDisplay = 1;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getLabelsdisplay = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setLabelsdisplay = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearLabelsdisplay = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasLabelsdisplay = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WEB_FEATURES_FLAG voipIndividualOutgoing = 2;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getVoipindividualoutgoing = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setVoipindividualoutgoing = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearVoipindividualoutgoing = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasVoipindividualoutgoing = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional WEB_FEATURES_FLAG groupsV3 = 3;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getGroupsv3 = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setGroupsv3 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearGroupsv3 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasGroupsv3 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WEB_FEATURES_FLAG groupsV3Create = 4;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getGroupsv3create = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setGroupsv3create = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearGroupsv3create = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasGroupsv3create = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional WEB_FEATURES_FLAG changeNumberV2 = 5;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getChangenumberv2 = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setChangenumberv2 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearChangenumberv2 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasChangenumberv2 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional WEB_FEATURES_FLAG queryStatusV3Thumbnail = 6;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getQuerystatusv3thumbnail = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setQuerystatusv3thumbnail = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearQuerystatusv3thumbnail = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasQuerystatusv3thumbnail = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional WEB_FEATURES_FLAG liveLocations = 7;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getLivelocations = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setLivelocations = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearLivelocations = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasLivelocations = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional WEB_FEATURES_FLAG queryVname = 8;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getQueryvname = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setQueryvname = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearQueryvname = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasQueryvname = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional WEB_FEATURES_FLAG voipIndividualIncoming = 9;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getVoipindividualincoming = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setVoipindividualincoming = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearVoipindividualincoming = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasVoipindividualincoming = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional WEB_FEATURES_FLAG quickRepliesQuery = 10;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getQuickrepliesquery = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setQuickrepliesquery = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearQuickrepliesquery = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasQuickrepliesquery = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional WEB_FEATURES_FLAG payments = 11;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getPayments = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setPayments = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearPayments = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasPayments = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional WEB_FEATURES_FLAG stickerPackQuery = 12;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getStickerpackquery = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setStickerpackquery = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearStickerpackquery = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasStickerpackquery = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional WEB_FEATURES_FLAG liveLocationsFinal = 13;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getLivelocationsfinal = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setLivelocationsfinal = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearLivelocationsfinal = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasLivelocationsfinal = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional WEB_FEATURES_FLAG labelsEdit = 14;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getLabelsedit = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setLabelsedit = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearLabelsedit = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasLabelsedit = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional WEB_FEATURES_FLAG mediaUpload = 15;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getMediaupload = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setMediaupload = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearMediaupload = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasMediaupload = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional WEB_FEATURES_FLAG mediaUploadRichQuickReplies = 18;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getMediauploadrichquickreplies = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setMediauploadrichquickreplies = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearMediauploadrichquickreplies = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasMediauploadrichquickreplies = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional WEB_FEATURES_FLAG vnameV2 = 19;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getVnamev2 = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setVnamev2 = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearVnamev2 = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasVnamev2 = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional WEB_FEATURES_FLAG videoPlaybackUrl = 20;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getVideoplaybackurl = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setVideoplaybackurl = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearVideoplaybackurl = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasVideoplaybackurl = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional WEB_FEATURES_FLAG statusRanking = 21;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getStatusranking = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setStatusranking = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearStatusranking = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasStatusranking = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional WEB_FEATURES_FLAG voipIndividualVideo = 22;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getVoipindividualvideo = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setVoipindividualvideo = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearVoipindividualvideo = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasVoipindividualvideo = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional WEB_FEATURES_FLAG thirdPartyStickers = 23;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getThirdpartystickers = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setThirdpartystickers = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearThirdpartystickers = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasThirdpartystickers = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional WEB_FEATURES_FLAG frequentlyForwardedSetting = 24;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getFrequentlyforwardedsetting = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setFrequentlyforwardedsetting = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearFrequentlyforwardedsetting = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasFrequentlyforwardedsetting = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional WEB_FEATURES_FLAG groupsV4JoinPermission = 25;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getGroupsv4joinpermission = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setGroupsv4joinpermission = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearGroupsv4joinpermission = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasGroupsv4joinpermission = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional WEB_FEATURES_FLAG recentStickers = 26;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getRecentstickers = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setRecentstickers = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearRecentstickers = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasRecentstickers = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional WEB_FEATURES_FLAG catalog = 27;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getCatalog = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setCatalog = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearCatalog = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasCatalog = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional WEB_FEATURES_FLAG starredStickers = 28;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getStarredstickers = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setStarredstickers = function(value) {
  return jspb.Message.setField(this, 28, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearStarredstickers = function() {
  return jspb.Message.setField(this, 28, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasStarredstickers = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional WEB_FEATURES_FLAG voipGroupCall = 29;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getVoipgroupcall = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setVoipgroupcall = function(value) {
  return jspb.Message.setField(this, 29, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearVoipgroupcall = function() {
  return jspb.Message.setField(this, 29, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasVoipgroupcall = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional WEB_FEATURES_FLAG templateMessage = 30;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getTemplatemessage = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setTemplatemessage = function(value) {
  return jspb.Message.setField(this, 30, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearTemplatemessage = function() {
  return jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasTemplatemessage = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional WEB_FEATURES_FLAG templateMessageInteractivity = 31;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getTemplatemessageinteractivity = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setTemplatemessageinteractivity = function(value) {
  return jspb.Message.setField(this, 31, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearTemplatemessageinteractivity = function() {
  return jspb.Message.setField(this, 31, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasTemplatemessageinteractivity = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional WEB_FEATURES_FLAG ephemeralMessages = 32;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getEphemeralmessages = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setEphemeralmessages = function(value) {
  return jspb.Message.setField(this, 32, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearEphemeralmessages = function() {
  return jspb.Message.setField(this, 32, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasEphemeralmessages = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional WEB_FEATURES_FLAG e2ENotificationSync = 33;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getE2enotificationsync = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setE2enotificationsync = function(value) {
  return jspb.Message.setField(this, 33, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearE2enotificationsync = function() {
  return jspb.Message.setField(this, 33, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasE2enotificationsync = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional WEB_FEATURES_FLAG recentStickersV2 = 34;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getRecentstickersv2 = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setRecentstickersv2 = function(value) {
  return jspb.Message.setField(this, 34, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearRecentstickersv2 = function() {
  return jspb.Message.setField(this, 34, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasRecentstickersv2 = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional WEB_FEATURES_FLAG syncdRelease1 = 35;
 * @return {!proto.WebFeatures.WEB_FEATURES_FLAG}
 */
proto.WebFeatures.prototype.getSyncdrelease1 = function() {
  return /** @type {!proto.WebFeatures.WEB_FEATURES_FLAG} */ (jspb.Message.getFieldWithDefault(this, 35, 0));
};


/**
 * @param {!proto.WebFeatures.WEB_FEATURES_FLAG} value
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.setSyncdrelease1 = function(value) {
  return jspb.Message.setField(this, 35, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebFeatures} returns this
 */
proto.WebFeatures.prototype.clearSyncdrelease1 = function() {
  return jspb.Message.setField(this, 35, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebFeatures.prototype.hasSyncdrelease1 = function() {
  return jspb.Message.getField(this, 35) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.TabletNotificationsInfo.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TabletNotificationsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.TabletNotificationsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TabletNotificationsInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TabletNotificationsInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    unreadchats: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    notifymessagecount: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    notifymessageList: jspb.Message.toObjectList(msg.getNotifymessageList(),
    proto.NotificationMessageInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TabletNotificationsInfo}
 */
proto.TabletNotificationsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TabletNotificationsInfo;
  return proto.TabletNotificationsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TabletNotificationsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TabletNotificationsInfo}
 */
proto.TabletNotificationsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnreadchats(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNotifymessagecount(value);
      break;
    case 5:
      var value = new proto.NotificationMessageInfo;
      reader.readMessage(value,proto.NotificationMessageInfo.deserializeBinaryFromReader);
      msg.addNotifymessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TabletNotificationsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TabletNotificationsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TabletNotificationsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TabletNotificationsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getNotifymessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.NotificationMessageInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 2;
 * @return {number}
 */
proto.TabletNotificationsInfo.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.TabletNotificationsInfo} returns this
 */
proto.TabletNotificationsInfo.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.TabletNotificationsInfo} returns this
 */
proto.TabletNotificationsInfo.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TabletNotificationsInfo.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 unreadChats = 3;
 * @return {number}
 */
proto.TabletNotificationsInfo.prototype.getUnreadchats = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.TabletNotificationsInfo} returns this
 */
proto.TabletNotificationsInfo.prototype.setUnreadchats = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.TabletNotificationsInfo} returns this
 */
proto.TabletNotificationsInfo.prototype.clearUnreadchats = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TabletNotificationsInfo.prototype.hasUnreadchats = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 notifyMessageCount = 4;
 * @return {number}
 */
proto.TabletNotificationsInfo.prototype.getNotifymessagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.TabletNotificationsInfo} returns this
 */
proto.TabletNotificationsInfo.prototype.setNotifymessagecount = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.TabletNotificationsInfo} returns this
 */
proto.TabletNotificationsInfo.prototype.clearNotifymessagecount = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TabletNotificationsInfo.prototype.hasNotifymessagecount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated NotificationMessageInfo notifyMessage = 5;
 * @return {!Array<!proto.NotificationMessageInfo>}
 */
proto.TabletNotificationsInfo.prototype.getNotifymessageList = function() {
  return /** @type{!Array<!proto.NotificationMessageInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.NotificationMessageInfo, 5));
};


/**
 * @param {!Array<!proto.NotificationMessageInfo>} value
 * @return {!proto.TabletNotificationsInfo} returns this
*/
proto.TabletNotificationsInfo.prototype.setNotifymessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.NotificationMessageInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.NotificationMessageInfo}
 */
proto.TabletNotificationsInfo.prototype.addNotifymessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.NotificationMessageInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.TabletNotificationsInfo} returns this
 */
proto.TabletNotificationsInfo.prototype.clearNotifymessageList = function() {
  return this.setNotifymessageList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NotificationMessageInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.NotificationMessageInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NotificationMessageInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NotificationMessageInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.MessageKey.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && proto.Message.toObject(includeInstance, f),
    messagetimestamp: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    participant: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NotificationMessageInfo}
 */
proto.NotificationMessageInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NotificationMessageInfo;
  return proto.NotificationMessageInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NotificationMessageInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NotificationMessageInfo}
 */
proto.NotificationMessageInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MessageKey;
      reader.readMessage(value,proto.MessageKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.Message;
      reader.readMessage(value,proto.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMessagetimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NotificationMessageInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NotificationMessageInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NotificationMessageInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NotificationMessageInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MessageKey.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Message.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional MessageKey key = 1;
 * @return {?proto.MessageKey}
 */
proto.NotificationMessageInfo.prototype.getKey = function() {
  return /** @type{?proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.MessageKey, 1));
};


/**
 * @param {?proto.MessageKey|undefined} value
 * @return {!proto.NotificationMessageInfo} returns this
*/
proto.NotificationMessageInfo.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.NotificationMessageInfo} returns this
 */
proto.NotificationMessageInfo.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NotificationMessageInfo.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message message = 2;
 * @return {?proto.Message}
 */
proto.NotificationMessageInfo.prototype.getMessage = function() {
  return /** @type{?proto.Message} */ (
    jspb.Message.getWrapperField(this, proto.Message, 2));
};


/**
 * @param {?proto.Message|undefined} value
 * @return {!proto.NotificationMessageInfo} returns this
*/
proto.NotificationMessageInfo.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.NotificationMessageInfo} returns this
 */
proto.NotificationMessageInfo.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NotificationMessageInfo.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 messageTimestamp = 3;
 * @return {number}
 */
proto.NotificationMessageInfo.prototype.getMessagetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.NotificationMessageInfo} returns this
 */
proto.NotificationMessageInfo.prototype.setMessagetimestamp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.NotificationMessageInfo} returns this
 */
proto.NotificationMessageInfo.prototype.clearMessagetimestamp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NotificationMessageInfo.prototype.hasMessagetimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string participant = 4;
 * @return {string}
 */
proto.NotificationMessageInfo.prototype.getParticipant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.NotificationMessageInfo} returns this
 */
proto.NotificationMessageInfo.prototype.setParticipant = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.NotificationMessageInfo} returns this
 */
proto.NotificationMessageInfo.prototype.clearParticipant = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NotificationMessageInfo.prototype.hasParticipant = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.WebNotificationsInfo.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WebNotificationsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.WebNotificationsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WebNotificationsInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebNotificationsInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    unreadchats: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    notifymessagecount: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    notifymessagesList: jspb.Message.toObjectList(msg.getNotifymessagesList(),
    proto.WebMessageInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WebNotificationsInfo}
 */
proto.WebNotificationsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WebNotificationsInfo;
  return proto.WebNotificationsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WebNotificationsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WebNotificationsInfo}
 */
proto.WebNotificationsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnreadchats(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNotifymessagecount(value);
      break;
    case 5:
      var value = new proto.WebMessageInfo;
      reader.readMessage(value,proto.WebMessageInfo.deserializeBinaryFromReader);
      msg.addNotifymessages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WebNotificationsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WebNotificationsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WebNotificationsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebNotificationsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getNotifymessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.WebMessageInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 2;
 * @return {number}
 */
proto.WebNotificationsInfo.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.WebNotificationsInfo} returns this
 */
proto.WebNotificationsInfo.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebNotificationsInfo} returns this
 */
proto.WebNotificationsInfo.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebNotificationsInfo.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 unreadChats = 3;
 * @return {number}
 */
proto.WebNotificationsInfo.prototype.getUnreadchats = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.WebNotificationsInfo} returns this
 */
proto.WebNotificationsInfo.prototype.setUnreadchats = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebNotificationsInfo} returns this
 */
proto.WebNotificationsInfo.prototype.clearUnreadchats = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebNotificationsInfo.prototype.hasUnreadchats = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 notifyMessageCount = 4;
 * @return {number}
 */
proto.WebNotificationsInfo.prototype.getNotifymessagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.WebNotificationsInfo} returns this
 */
proto.WebNotificationsInfo.prototype.setNotifymessagecount = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebNotificationsInfo} returns this
 */
proto.WebNotificationsInfo.prototype.clearNotifymessagecount = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebNotificationsInfo.prototype.hasNotifymessagecount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated WebMessageInfo notifyMessages = 5;
 * @return {!Array<!proto.WebMessageInfo>}
 */
proto.WebNotificationsInfo.prototype.getNotifymessagesList = function() {
  return /** @type{!Array<!proto.WebMessageInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.WebMessageInfo, 5));
};


/**
 * @param {!Array<!proto.WebMessageInfo>} value
 * @return {!proto.WebNotificationsInfo} returns this
*/
proto.WebNotificationsInfo.prototype.setNotifymessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.WebMessageInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.WebMessageInfo}
 */
proto.WebNotificationsInfo.prototype.addNotifymessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.WebMessageInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.WebNotificationsInfo} returns this
 */
proto.WebNotificationsInfo.prototype.clearNotifymessagesList = function() {
  return this.setNotifymessagesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PaymentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PaymentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PaymentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PaymentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencydeprecated: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    amount1000: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    receiverjid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    transactiontimestamp: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    requestmessagekey: (f = msg.getRequestmessagekey()) && proto.MessageKey.toObject(includeInstance, f),
    expirytimestamp: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    futureproofed: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    currency: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    txnstatus: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PaymentInfo}
 */
proto.PaymentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PaymentInfo;
  return proto.PaymentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PaymentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PaymentInfo}
 */
proto.PaymentInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.PaymentInfo.PAYMENT_INFO_CURRENCY} */ (reader.readEnum());
      msg.setCurrencydeprecated(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount1000(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiverjid(value);
      break;
    case 4:
      var value = /** @type {!proto.PaymentInfo.PAYMENT_INFO_STATUS} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTransactiontimestamp(value);
      break;
    case 6:
      var value = new proto.MessageKey;
      reader.readMessage(value,proto.MessageKey.deserializeBinaryFromReader);
      msg.setRequestmessagekey(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpirytimestamp(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFutureproofed(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 10:
      var value = /** @type {!proto.PaymentInfo.PAYMENT_INFO_TXNSTATUS} */ (reader.readEnum());
      msg.setTxnstatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PaymentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PaymentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PaymentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PaymentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.PaymentInfo.PAYMENT_INFO_CURRENCY} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!proto.PaymentInfo.PAYMENT_INFO_STATUS} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getRequestmessagekey();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.MessageKey.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {!proto.PaymentInfo.PAYMENT_INFO_TXNSTATUS} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.PaymentInfo.PAYMENT_INFO_CURRENCY = {
  UNKNOWN_CURRENCY: 0,
  INR: 1
};

/**
 * @enum {number}
 */
proto.PaymentInfo.PAYMENT_INFO_STATUS = {
  UNKNOWN_STATUS: 0,
  PROCESSING: 1,
  SENT: 2,
  NEED_TO_ACCEPT: 3,
  COMPLETE: 4,
  COULD_NOT_COMPLETE: 5,
  REFUNDED: 6,
  EXPIRED: 7,
  REJECTED: 8,
  CANCELLED: 9,
  WAITING_FOR_PAYER: 10,
  WAITING: 11
};

/**
 * @enum {number}
 */
proto.PaymentInfo.PAYMENT_INFO_TXNSTATUS = {
  UNKNOWN: 0,
  PENDING_SETUP: 1,
  PENDING_RECEIVER_SETUP: 2,
  INIT: 3,
  SUCCESS: 4,
  COMPLETED: 5,
  FAILED: 6,
  FAILED_RISK: 7,
  FAILED_PROCESSING: 8,
  FAILED_RECEIVER_PROCESSING: 9,
  FAILED_DA: 10,
  FAILED_DA_FINAL: 11,
  REFUNDED_TXN: 12,
  REFUND_FAILED: 13,
  REFUND_FAILED_PROCESSING: 14,
  REFUND_FAILED_DA: 15,
  EXPIRED_TXN: 16,
  AUTH_CANCELED: 17,
  AUTH_CANCEL_FAILED_PROCESSING: 18,
  AUTH_CANCEL_FAILED: 19,
  COLLECT_INIT: 20,
  COLLECT_SUCCESS: 21,
  COLLECT_FAILED: 22,
  COLLECT_FAILED_RISK: 23,
  COLLECT_REJECTED: 24,
  COLLECT_EXPIRED: 25,
  COLLECT_CANCELED: 26,
  COLLECT_CANCELLING: 27
};

/**
 * optional PAYMENT_INFO_CURRENCY currencyDeprecated = 1;
 * @return {!proto.PaymentInfo.PAYMENT_INFO_CURRENCY}
 */
proto.PaymentInfo.prototype.getCurrencydeprecated = function() {
  return /** @type {!proto.PaymentInfo.PAYMENT_INFO_CURRENCY} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.PaymentInfo.PAYMENT_INFO_CURRENCY} value
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.setCurrencydeprecated = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.clearCurrencydeprecated = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PaymentInfo.prototype.hasCurrencydeprecated = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 amount1000 = 2;
 * @return {number}
 */
proto.PaymentInfo.prototype.getAmount1000 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.setAmount1000 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.clearAmount1000 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PaymentInfo.prototype.hasAmount1000 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string receiverJid = 3;
 * @return {string}
 */
proto.PaymentInfo.prototype.getReceiverjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.setReceiverjid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.clearReceiverjid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PaymentInfo.prototype.hasReceiverjid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PAYMENT_INFO_STATUS status = 4;
 * @return {!proto.PaymentInfo.PAYMENT_INFO_STATUS}
 */
proto.PaymentInfo.prototype.getStatus = function() {
  return /** @type {!proto.PaymentInfo.PAYMENT_INFO_STATUS} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.PaymentInfo.PAYMENT_INFO_STATUS} value
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PaymentInfo.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 transactionTimestamp = 5;
 * @return {number}
 */
proto.PaymentInfo.prototype.getTransactiontimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.setTransactiontimestamp = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.clearTransactiontimestamp = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PaymentInfo.prototype.hasTransactiontimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MessageKey requestMessageKey = 6;
 * @return {?proto.MessageKey}
 */
proto.PaymentInfo.prototype.getRequestmessagekey = function() {
  return /** @type{?proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.MessageKey, 6));
};


/**
 * @param {?proto.MessageKey|undefined} value
 * @return {!proto.PaymentInfo} returns this
*/
proto.PaymentInfo.prototype.setRequestmessagekey = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.clearRequestmessagekey = function() {
  return this.setRequestmessagekey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PaymentInfo.prototype.hasRequestmessagekey = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 expiryTimestamp = 7;
 * @return {number}
 */
proto.PaymentInfo.prototype.getExpirytimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.setExpirytimestamp = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.clearExpirytimestamp = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PaymentInfo.prototype.hasExpirytimestamp = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool futureproofed = 8;
 * @return {boolean}
 */
proto.PaymentInfo.prototype.getFutureproofed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.setFutureproofed = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.clearFutureproofed = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PaymentInfo.prototype.hasFutureproofed = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string currency = 9;
 * @return {string}
 */
proto.PaymentInfo.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.setCurrency = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.clearCurrency = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PaymentInfo.prototype.hasCurrency = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional PAYMENT_INFO_TXNSTATUS txnStatus = 10;
 * @return {!proto.PaymentInfo.PAYMENT_INFO_TXNSTATUS}
 */
proto.PaymentInfo.prototype.getTxnstatus = function() {
  return /** @type {!proto.PaymentInfo.PAYMENT_INFO_TXNSTATUS} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.PaymentInfo.PAYMENT_INFO_TXNSTATUS} value
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.setTxnstatus = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.PaymentInfo} returns this
 */
proto.PaymentInfo.prototype.clearTxnstatus = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PaymentInfo.prototype.hasTxnstatus = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.WebMessageInfo.repeatedFields_ = [26,28];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WebMessageInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.WebMessageInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WebMessageInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebMessageInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.MessageKey.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && proto.Message.toObject(includeInstance, f),
    messagetimestamp: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    participant: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    ignore: (f = jspb.Message.getBooleanField(msg, 16)) == null ? undefined : f,
    starred: (f = jspb.Message.getBooleanField(msg, 17)) == null ? undefined : f,
    broadcast: (f = jspb.Message.getBooleanField(msg, 18)) == null ? undefined : f,
    pushname: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    mediaciphertextsha256: msg.getMediaciphertextsha256_asB64(),
    multicast: (f = jspb.Message.getBooleanField(msg, 21)) == null ? undefined : f,
    urltext: (f = jspb.Message.getBooleanField(msg, 22)) == null ? undefined : f,
    urlnumber: (f = jspb.Message.getBooleanField(msg, 23)) == null ? undefined : f,
    messagestubtype: (f = jspb.Message.getField(msg, 24)) == null ? undefined : f,
    clearmedia: (f = jspb.Message.getBooleanField(msg, 25)) == null ? undefined : f,
    messagestubparametersList: (f = jspb.Message.getRepeatedField(msg, 26)) == null ? undefined : f,
    duration: (f = jspb.Message.getField(msg, 27)) == null ? undefined : f,
    labelsList: (f = jspb.Message.getRepeatedField(msg, 28)) == null ? undefined : f,
    paymentinfo: (f = msg.getPaymentinfo()) && proto.PaymentInfo.toObject(includeInstance, f),
    finallivelocation: (f = msg.getFinallivelocation()) && proto.LiveLocationMessage.toObject(includeInstance, f),
    quotedpaymentinfo: (f = msg.getQuotedpaymentinfo()) && proto.PaymentInfo.toObject(includeInstance, f),
    ephemeralstarttimestamp: (f = jspb.Message.getField(msg, 32)) == null ? undefined : f,
    ephemeralduration: (f = jspb.Message.getField(msg, 33)) == null ? undefined : f,
    ephemeralofftoon: (f = jspb.Message.getBooleanField(msg, 34)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WebMessageInfo}
 */
proto.WebMessageInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WebMessageInfo;
  return proto.WebMessageInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WebMessageInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WebMessageInfo}
 */
proto.WebMessageInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MessageKey;
      reader.readMessage(value,proto.MessageKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.Message;
      reader.readMessage(value,proto.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMessagetimestamp(value);
      break;
    case 4:
      var value = /** @type {!proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipant(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnore(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStarred(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBroadcast(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setPushname(value);
      break;
    case 20:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMediaciphertextsha256(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMulticast(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUrltext(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUrlnumber(value);
      break;
    case 24:
      var value = /** @type {!proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE} */ (reader.readEnum());
      msg.setMessagestubtype(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearmedia(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.addMessagestubparameters(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDuration(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabels(value);
      break;
    case 29:
      var value = new proto.PaymentInfo;
      reader.readMessage(value,proto.PaymentInfo.deserializeBinaryFromReader);
      msg.setPaymentinfo(value);
      break;
    case 30:
      var value = new proto.LiveLocationMessage;
      reader.readMessage(value,proto.LiveLocationMessage.deserializeBinaryFromReader);
      msg.setFinallivelocation(value);
      break;
    case 31:
      var value = new proto.PaymentInfo;
      reader.readMessage(value,proto.PaymentInfo.deserializeBinaryFromReader);
      msg.setQuotedpaymentinfo(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEphemeralstarttimestamp(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEphemeralduration(value);
      break;
    case 34:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEphemeralofftoon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WebMessageInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WebMessageInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WebMessageInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebMessageInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MessageKey.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Message.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {!proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeString(
      19,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeBytes(
      20,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeBool(
      21,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeBool(
      22,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeBool(
      23,
      f
    );
  }
  f = /** @type {!proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeEnum(
      24,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeBool(
      25,
      f
    );
  }
  f = message.getMessagestubparametersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      26,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeUint32(
      27,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      28,
      f
    );
  }
  f = message.getPaymentinfo();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.PaymentInfo.serializeBinaryToWriter
    );
  }
  f = message.getFinallivelocation();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.LiveLocationMessage.serializeBinaryToWriter
    );
  }
  f = message.getQuotedpaymentinfo();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.PaymentInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 32));
  if (f != null) {
    writer.writeUint64(
      32,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 33));
  if (f != null) {
    writer.writeUint32(
      33,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 34));
  if (f != null) {
    writer.writeBool(
      34,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS = {
  ERROR: 0,
  PENDING: 1,
  SERVER_ACK: 2,
  DELIVERY_ACK: 3,
  READ: 4,
  PLAYED: 5
};

/**
 * @enum {number}
 */
proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE = {
  UNKNOWN: 0,
  REVOKE: 1,
  CIPHERTEXT: 2,
  FUTUREPROOF: 3,
  NON_VERIFIED_TRANSITION: 4,
  UNVERIFIED_TRANSITION: 5,
  VERIFIED_TRANSITION: 6,
  VERIFIED_LOW_UNKNOWN: 7,
  VERIFIED_HIGH: 8,
  VERIFIED_INITIAL_UNKNOWN: 9,
  VERIFIED_INITIAL_LOW: 10,
  VERIFIED_INITIAL_HIGH: 11,
  VERIFIED_TRANSITION_ANY_TO_NONE: 12,
  VERIFIED_TRANSITION_ANY_TO_HIGH: 13,
  VERIFIED_TRANSITION_HIGH_TO_LOW: 14,
  VERIFIED_TRANSITION_HIGH_TO_UNKNOWN: 15,
  VERIFIED_TRANSITION_UNKNOWN_TO_LOW: 16,
  VERIFIED_TRANSITION_LOW_TO_UNKNOWN: 17,
  VERIFIED_TRANSITION_NONE_TO_LOW: 18,
  VERIFIED_TRANSITION_NONE_TO_UNKNOWN: 19,
  GROUP_CREATE: 20,
  GROUP_CHANGE_SUBJECT: 21,
  GROUP_CHANGE_ICON: 22,
  GROUP_CHANGE_INVITE_LINK: 23,
  GROUP_CHANGE_DESCRIPTION: 24,
  GROUP_CHANGE_RESTRICT: 25,
  GROUP_CHANGE_ANNOUNCE: 26,
  GROUP_PARTICIPANT_ADD: 27,
  GROUP_PARTICIPANT_REMOVE: 28,
  GROUP_PARTICIPANT_PROMOTE: 29,
  GROUP_PARTICIPANT_DEMOTE: 30,
  GROUP_PARTICIPANT_INVITE: 31,
  GROUP_PARTICIPANT_LEAVE: 32,
  GROUP_PARTICIPANT_CHANGE_NUMBER: 33,
  BROADCAST_CREATE: 34,
  BROADCAST_ADD: 35,
  BROADCAST_REMOVE: 36,
  GENERIC_NOTIFICATION: 37,
  E2E_IDENTITY_CHANGED: 38,
  E2E_ENCRYPTED: 39,
  CALL_MISSED_VOICE: 40,
  CALL_MISSED_VIDEO: 41,
  INDIVIDUAL_CHANGE_NUMBER: 42,
  GROUP_DELETE: 43,
  GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE: 44,
  CALL_MISSED_GROUP_VOICE: 45,
  CALL_MISSED_GROUP_VIDEO: 46,
  PAYMENT_CIPHERTEXT: 47,
  PAYMENT_FUTUREPROOF: 48,
  PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED: 49,
  PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED: 50,
  PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED: 51,
  PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP: 52,
  PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP: 53,
  PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER: 54,
  PAYMENT_ACTION_SEND_PAYMENT_REMINDER: 55,
  PAYMENT_ACTION_SEND_PAYMENT_INVITATION: 56,
  PAYMENT_ACTION_REQUEST_DECLINED: 57,
  PAYMENT_ACTION_REQUEST_EXPIRED: 58,
  PAYMENT_ACTION_REQUEST_CANCELLED: 59,
  BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM: 60,
  BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP: 61,
  BIZ_INTRO_TOP: 62,
  BIZ_INTRO_BOTTOM: 63,
  BIZ_NAME_CHANGE: 64,
  BIZ_MOVE_TO_CONSUMER_APP: 65,
  BIZ_TWO_TIER_MIGRATION_TOP: 66,
  BIZ_TWO_TIER_MIGRATION_BOTTOM: 67,
  OVERSIZED: 68,
  GROUP_CHANGE_NO_FREQUENTLY_FORWARDED: 69,
  GROUP_V4_ADD_INVITE_SENT: 70,
  GROUP_PARTICIPANT_ADD_REQUEST_JOIN: 71,
  CHANGE_EPHEMERAL_SETTING: 72
};

/**
 * required MessageKey key = 1;
 * @return {!proto.MessageKey}
 */
proto.WebMessageInfo.prototype.getKey = function() {
  return /** @type{!proto.MessageKey} */ (
    jspb.Message.getWrapperField(this, proto.MessageKey, 1, 1));
};


/**
 * @param {!proto.MessageKey} value
 * @return {!proto.WebMessageInfo} returns this
*/
proto.WebMessageInfo.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearKey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message message = 2;
 * @return {?proto.Message}
 */
proto.WebMessageInfo.prototype.getMessage = function() {
  return /** @type{?proto.Message} */ (
    jspb.Message.getWrapperField(this, proto.Message, 2));
};


/**
 * @param {?proto.Message|undefined} value
 * @return {!proto.WebMessageInfo} returns this
*/
proto.WebMessageInfo.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 messageTimestamp = 3;
 * @return {number}
 */
proto.WebMessageInfo.prototype.getMessagetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setMessagetimestamp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearMessagetimestamp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasMessagetimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WEB_MESSAGE_INFO_STATUS status = 4;
 * @return {!proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS}
 */
proto.WebMessageInfo.prototype.getStatus = function() {
  return /** @type {!proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string participant = 5;
 * @return {string}
 */
proto.WebMessageInfo.prototype.getParticipant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setParticipant = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearParticipant = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasParticipant = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool ignore = 16;
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.getIgnore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setIgnore = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearIgnore = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasIgnore = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool starred = 17;
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.getStarred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setStarred = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearStarred = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasStarred = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool broadcast = 18;
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.getBroadcast = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setBroadcast = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearBroadcast = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasBroadcast = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string pushName = 19;
 * @return {string}
 */
proto.WebMessageInfo.prototype.getPushname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setPushname = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearPushname = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasPushname = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional bytes mediaCiphertextSha256 = 20;
 * @return {!(string|Uint8Array)}
 */
proto.WebMessageInfo.prototype.getMediaciphertextsha256 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * optional bytes mediaCiphertextSha256 = 20;
 * This is a type-conversion wrapper around `getMediaciphertextsha256()`
 * @return {string}
 */
proto.WebMessageInfo.prototype.getMediaciphertextsha256_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMediaciphertextsha256()));
};


/**
 * optional bytes mediaCiphertextSha256 = 20;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMediaciphertextsha256()`
 * @return {!Uint8Array}
 */
proto.WebMessageInfo.prototype.getMediaciphertextsha256_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMediaciphertextsha256()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setMediaciphertextsha256 = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearMediaciphertextsha256 = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasMediaciphertextsha256 = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bool multicast = 21;
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.getMulticast = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setMulticast = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearMulticast = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasMulticast = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool urlText = 22;
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.getUrltext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setUrltext = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearUrltext = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasUrltext = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional bool urlNumber = 23;
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.getUrlnumber = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setUrlnumber = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearUrlnumber = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasUrlnumber = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional WEB_MESSAGE_INFO_STUBTYPE messageStubType = 24;
 * @return {!proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE}
 */
proto.WebMessageInfo.prototype.getMessagestubtype = function() {
  return /** @type {!proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {!proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setMessagestubtype = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearMessagestubtype = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasMessagestubtype = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional bool clearMedia = 25;
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.getClearmedia = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setClearmedia = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearClearmedia = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasClearmedia = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * repeated string messageStubParameters = 26;
 * @return {!Array<string>}
 */
proto.WebMessageInfo.prototype.getMessagestubparametersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 26));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setMessagestubparametersList = function(value) {
  return jspb.Message.setField(this, 26, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.addMessagestubparameters = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 26, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearMessagestubparametersList = function() {
  return this.setMessagestubparametersList([]);
};


/**
 * optional uint32 duration = 27;
 * @return {number}
 */
proto.WebMessageInfo.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setDuration = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearDuration = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * repeated string labels = 28;
 * @return {!Array<string>}
 */
proto.WebMessageInfo.prototype.getLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 28));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 28, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 28, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * optional PaymentInfo paymentInfo = 29;
 * @return {?proto.PaymentInfo}
 */
proto.WebMessageInfo.prototype.getPaymentinfo = function() {
  return /** @type{?proto.PaymentInfo} */ (
    jspb.Message.getWrapperField(this, proto.PaymentInfo, 29));
};


/**
 * @param {?proto.PaymentInfo|undefined} value
 * @return {!proto.WebMessageInfo} returns this
*/
proto.WebMessageInfo.prototype.setPaymentinfo = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearPaymentinfo = function() {
  return this.setPaymentinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasPaymentinfo = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional LiveLocationMessage finalLiveLocation = 30;
 * @return {?proto.LiveLocationMessage}
 */
proto.WebMessageInfo.prototype.getFinallivelocation = function() {
  return /** @type{?proto.LiveLocationMessage} */ (
    jspb.Message.getWrapperField(this, proto.LiveLocationMessage, 30));
};


/**
 * @param {?proto.LiveLocationMessage|undefined} value
 * @return {!proto.WebMessageInfo} returns this
*/
proto.WebMessageInfo.prototype.setFinallivelocation = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearFinallivelocation = function() {
  return this.setFinallivelocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasFinallivelocation = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional PaymentInfo quotedPaymentInfo = 31;
 * @return {?proto.PaymentInfo}
 */
proto.WebMessageInfo.prototype.getQuotedpaymentinfo = function() {
  return /** @type{?proto.PaymentInfo} */ (
    jspb.Message.getWrapperField(this, proto.PaymentInfo, 31));
};


/**
 * @param {?proto.PaymentInfo|undefined} value
 * @return {!proto.WebMessageInfo} returns this
*/
proto.WebMessageInfo.prototype.setQuotedpaymentinfo = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearQuotedpaymentinfo = function() {
  return this.setQuotedpaymentinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasQuotedpaymentinfo = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional uint64 ephemeralStartTimestamp = 32;
 * @return {number}
 */
proto.WebMessageInfo.prototype.getEphemeralstarttimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {number} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setEphemeralstarttimestamp = function(value) {
  return jspb.Message.setField(this, 32, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearEphemeralstarttimestamp = function() {
  return jspb.Message.setField(this, 32, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasEphemeralstarttimestamp = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional uint32 ephemeralDuration = 33;
 * @return {number}
 */
proto.WebMessageInfo.prototype.getEphemeralduration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {number} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setEphemeralduration = function(value) {
  return jspb.Message.setField(this, 33, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearEphemeralduration = function() {
  return jspb.Message.setField(this, 33, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasEphemeralduration = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional bool ephemeralOffToOn = 34;
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.getEphemeralofftoon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 34, false));
};


/**
 * @param {boolean} value
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.setEphemeralofftoon = function(value) {
  return jspb.Message.setField(this, 34, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WebMessageInfo} returns this
 */
proto.WebMessageInfo.prototype.clearEphemeralofftoon = function() {
  return jspb.Message.setField(this, 34, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WebMessageInfo.prototype.hasEphemeralofftoon = function() {
  return jspb.Message.getField(this, 34) != null;
};


goog.object.extend(exports, proto);
