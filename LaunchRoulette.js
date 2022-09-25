
window.onload = function(){
	powerSelected(3);
	theWheel.numSegments = theWheel.segments.length - 1
}

function addItem(){
	var text = document.getElementById("addItemInput").value
	var colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
	
	segments.push({'fillStyle' : colorCode, 'text' : text})
	numSegments = segments.length;
	
	theWheel = new Winwheel({
	    'numSegments'  : numSegments,     // Specify number of segments.
	    'outerRadius'  : 212,   // Set outer radius so wheel fits inside the background.
	    'textFontSize' : 28,    // Set font size as desired.
	    'segments'     : segments,       // Define segments including colour and text.
	    'animation'    : animation,          // Specify the animation to use.
	    'pins'         : pins // Number of pins. They space evenly around the wheel.
	});	
	
}

