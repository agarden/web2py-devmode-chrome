# Web2py Browser Extensions
web2py has no development mode. Production or development, it logs all exceptions to its internal ticket system and to the user displays an error page with a link to the ticket. 

Are you tired of clicking the ticket links and waiting for them to load, then these browser extensions are for you - Google Chrome & Mozilla Firefox extension. 
The extension creates an iframe and opens the ticket in there. 
The result: **much faster debugging during web2py development.**

## Building the extension
* Clone this repository, or download the source code
* You will see the following folder structure:
```
<extension_code_root>
    |__data
    |   |__contentscript.js     # chrome and firefox common extension code
    |   |__manifest.json        # chrome extension's manifest
    |   |__web2py-32.png        # extension's icon
    |   |__web2py-64.png        # extension's icon
    |__lib
    |   |__main.js              # firefox extension's entry point
    |__test
    |   |__test-main.js         # firefox extension's unit testcase
    |__package.json             # firefox extension's manifest

    
```
* Chrome extension packaging: Follow the instructions here: https://developer.chrome.com/extensions/packaging . The extension's root directory is `<extension_code_root>/data`.
* Firefox extension packaging: Install the Addon's SDK, and activate the `cfx` tool: https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_started. The extension's root directory is `<extension_code_root>`. Then in that _activated_ directory, run `cfx xpi`