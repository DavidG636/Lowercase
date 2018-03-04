var userinput;
var startover;

function setup() {
	noCanvas();
	startover = createButton("Start Over!");
	startover.mousePressed(loweruserinput);
	loweruserinput();
}

function loweruserinput(){
	userinput = prompt("Type the thing you want to lowercase!");
	confirm(userinput.toLowerCase())
}
