var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    //TODO: Require a regex to include only localhost, 127.0.0.1 pages
	include : "*",
	contentScriptFile : data.url("contentscript.js")
});
