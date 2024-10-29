function setup() {
	simple();
}

function draw() {
noStroke();
	repeat(1000,particle);
}

function particle(){
	var x=randomNumber(800);
	var y=randomNumber(600);
	var d=dist(x,y,400,300);
	
	var r=128;
	var g= 0;
	var b= d/2;
	fill(r,g,b);
	
	var size=25*sq(sin(d));
			circle(x,y,size);
}
