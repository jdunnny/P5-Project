var pressure= 128//baseline oppacity for ellipse

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
	background(242,218,157);

}

//The draw function happens over and over again
function draw() {

 //ellipse
  noStroke();
  fill(18,13,0,pressure); //pressure is half oppacity
  ellipse(mouseX, mouseY, 10, 10); // center of canvas, 20px dia
}

function mousePressed(){
pressure= pressure+10//by adding 10 we increase oppacity
}
function keyPressed(){
	background(242,218,157);//clears the canvas 
}



