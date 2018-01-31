// 
// Chris Page <chrispage@google.com>
// 
// Capture request URL parameters based off whitelist and add as custom request headers and payload.
// ** Might be a more efficient array search than O(n^2) in JS.
//
var whiteList = ["a", "b", "c"];
var requestParams = context.getVariable('request.queryparams.names').toArray();
var customHeaders = [];
if (context.getVariable('custom.headers')) {
    customHeaders = JSON.parse(context.getVariable('custom.headers'));
}
for (var i = 0; i < requestParams.length; i++) {
    for (var j = 0; j < whiteList.length; j++) {
        if (whiteList[j].toLowerCase() == requestParams[i].toLowerCase()) {
            // custom business logic here
            var customHeaderName = "X-Param-" + requestParams[i];
            var customHeaderValue = context.getVariable('request.queryparam.' + requestParams[i]);
            context.setVariable('request.header.' + customHeaderName, customHeaderValue);
            var customHeader = {};
            customHeader[customHeaderName] = customHeaderValue
            customHeaders.push(customHeader);
            // context.setVariable('response.header.' + customHeaderName, customHeaderValue);
        }
    }
}
context.setVariable('custom.headers', JSON.stringify(customHeaders));
