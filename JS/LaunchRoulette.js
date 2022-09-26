
window.onload = function(){
	powerSelected(3);
	theWheel.numSegments = theWheel.segments.length - 1

	for(i = 0; i < segments.length; i++){
		$('#btnTable').append('<tr><td><p>'+ segments[i].text +'</p></td>' 
							+ '<td><button id="'+ i +'" type="button" class="btn" onclick="removeItem(this)">삭제</button></td>'
							+ '</tr>')	
	}
	
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

function removeItem(me){
	console.log($(me).html());
	console.log($(me).attr('id'));
	
}
