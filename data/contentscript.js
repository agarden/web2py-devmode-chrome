//body.h1 usually contains the Error message title
var h1 = document.body.firstChild.textContent;
if (h1 === 'Internal error') {
	var iframe = document.createElement('iframe');
    //body.a.href is the link to the web2py error
	iframe.src = document.body.children[1].href;
	iframe.width = "100%";
    iframe.height = "80%";
	document.body.appendChild(iframe);
}