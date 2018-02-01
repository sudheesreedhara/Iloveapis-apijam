 //
var replacePath = "\/cache$";
var replacePaths = ["\/cache$", "\/transform$"];

var targetUrl = context.getVariable('target.url');
var proxyPathSuffix = context.getVariable('proxy.pathsuffix')

for (var i = 0; i < replacePaths.length; i++) {
    var regEx = new RegExp(replacePaths[i]);
    if (regEx.test(proxyPathSuffix)) {
        context.setVariable('target.copy.pathsuffix', false);
        // context.setVariable('target.copy.queryparams', true);
        newPathSuffix = proxyPathSuffix.replace(regEx, "");
        context.setVariable('target.url', targetUrl + newPathSuffix);
        break;
    }
}

