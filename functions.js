function setup() {
	simple();
}

function draw() {
	//i made a lil chain here!
	//i can always change the distances between them 
	circle(400,200,50);
	circle(400,250,50);
	circle(400,300,50);
	
	//create a box for storing :) i mean remembering
	var x = randomNumber(800);
	var y= randomNumber(600);
	fill('red');
	circle(x,y,50);
	circle(x,(y+50),50);
	
	//im gonna make a random flower
	repeat(5,flower);
	repeat(30,button);
}

function flower(){
	var a= randomNumber(100,700);
	var b= randomNumber (100,500);
	fill('yellow');
	circle(a,b+50,50);
	
	fill('pink');
	circle(a,b,50);
	circle(a,b+100,50);
	circle(a-50,b+50,50);
	circle(a+50,b+50,50);
}

function button(){
	var q=randomNumber(800);
	var z=randomNumber(600);
	fill('purple');
	circle(q,z,50);
	fill('yellow');
	circle(q,z,25);
}
