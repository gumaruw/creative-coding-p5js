function setup() {
	simple();
}

function draw() {
	noStroke();
	repeat(420,blob);
}

function blob(){
	var x=randomNumber(0,800);
	var y=randomNumber(0,600);
	
	var d=dist(400,300,x,y);
	var size=42*Math.exp(-sq (d/150));
	
	fill(255-size*6,128);
	circle(x,y,size);
}
