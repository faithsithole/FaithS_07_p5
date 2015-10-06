/*

	Remember our good friend p5?  The client-side library for drawing using 
	HTML5 canvas?  Perfect.

	1. Create a drawing app that draws a colored circle (with an outline) at the 
	   mouse position when the user presses the left mouse button.
	2. Upload the project to your GitHub account. (E.g. add repository, commit
	   and publish)
	
	These two short tutorials should help jog your p5 memory:
		http://p5js.org/get-started/ 
		http://coursescript.com/notes/interactivecomputing/drawing/index.html

	p5 Hints
	========
	createCanvas(...)
	windowWidth, windowHeight
	background(...)
	mouseIsPressed, mouseButton (http://p5js.org/reference/#/p5/mouseButton)
	ellipse(...)
	fill(...)
	stroke(...)
	strokeWeight(...)
	mouseX, mouseY
	
*/

// Global variables go up here


// Setup runs ONCE at the start of the sketch
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	
}

// Draw runs 60 times a second
function draw() {

	// background(0);

	if (mouseIsPressed) {
		if (mouseButton === LEFT) {
			stroke(255, 204, 0);
			strokeWeight(5);
			fill(255,255,255);
			ellipse(mouseX, mouseY, 100, 100);
	  }
	}
}