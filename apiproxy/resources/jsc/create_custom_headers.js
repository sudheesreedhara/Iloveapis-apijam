 // 
// Chris Page <chrispage@google.com>
// 
// Create custom headers message if debug is set.
var customHeaders = [];
if (context.getVariable('custom.headers')) {
    customHeaders = JSON.parse(context.getVariable('custom.headers'));
}
if (context.getVariable("request.queryparam.debug")) {
    var customHeader = {};
    messageIdHeaderName = "X-Apigee-MessageId"
    customHeader[messageIdHeaderName] = context.getVariable("messageid");
    customHeaders.push(customHeader)
    context.setVariable('request.header.' + messageIdHeaderName, customHeader[messageIdHeaderName]);
}
context.setVariable("custom.headers", JSON.stringify(customHeaders));
