function setup() {
	simple();
}

function draw() {
	repeat(100,700,49,circlesX);  
	repeat(100,500,49,circlesY);  
}


function circlesX(x){
	noStroke();
	fill('black');
	circle(x,300,42);
}

function circlesY(y){
	noStroke();
	fill('black');
	circle(300,y,42);
}
