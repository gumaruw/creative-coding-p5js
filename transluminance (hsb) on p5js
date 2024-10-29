function setup() {
	simple();
	colourMode(HSB);
}

function draw() {
	repeat(100,700,20,0,200,20,my_blob);
	
}

function my_blob(x,y){
	//map(x, starting range, ending range)
	var hue=map(x,100,700,0,360);
	var sat=map(y,0,200,100,0);
	var aplha=map(y,0,200,1,0);
	
	var size=map(y,0,200,16,5);
	
	//noStroke();
	stroke(hue,sat,80,alpha);
	
	// angle, saturation, brightness, pale
	fill(hue,sat,80,alpha);
	
	var shift =sin(x);
	
	circle(x,300-y+ shift ,size);
	circle(x,300+y+ shift,size);
}
