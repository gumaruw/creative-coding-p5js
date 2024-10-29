function setup() {
	simple();
}

function draw() {
	noStroke();
	repeat(-40,800,12,my_func);
}

function my_func(x){
	var h=100*sin(x);
	
	fill('rgb(255,150,0)');
	rectangle(x,300,8,-h);
	rectangle(x,310,5,-h*1.3);
		rectangle(x,300,2,h);
	
	fill('red');
	rectangle(x,310,8,-h/2);
	
	fill('rgb(0,148,255)');
	circle(x,310+h,randomNumber(5,15));
}
