// leadpages_input_data variables come from the template.json "variables" section
var leadpages_input_data = {};
var requestedHeight = 3421;


var myEventMethod = window.addEventListener ? "addEventListener" : "attachEvent";var myEventListener = window[myEventMethod];var myEventMessage = myEventMethod == "attachEvent" ? "onmessage" : "message";myEventListener(myEventMessage, function (e) {document.getElementById("myFrame").height = e.data + "px";}, false);
