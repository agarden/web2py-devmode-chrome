// Searches the page for a web2py ticket. If it finds one,
// creates an iframe and loads the ticket in it.


h1 = document.getElementsByTagName('h1')[0];
if (h1.innerText === 'Internal error') {
	var iframe = document.createElement('iframe');
	iframe.src = document.body.getElementsByTagName('a')[0].href;
	iframe.width="100%";
	set_iframe_height = function() {
		bodyheight = document.body.clientHeight;
		// Twenty is about the height of the line of text
		iframe.height = bodyheight - h1.clientHeight - h1.offsetHeight - 25;
	}
	set_iframe_height();

	document.body.appendChild(iframe);
	window.onresize = set_iframe_height;
}
