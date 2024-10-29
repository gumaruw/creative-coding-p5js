function setup() {
	simple();
}

function draw() {
	space();
	repeat(-100,900,3,veins);
	repeat(-100,900,3,worm);
}
function space(){
	noStroke();
	fill('MidnightBlue');
	circle(400,300,1000);
  fill('black');
	circle(400,300,800);
	
}
function veins(x){
	//var y=sq(x/10);
	
	noStroke();
	fill('darkred');
	var y=(300+(100*sin(x)));
	circle(x,y,randomNumber(10));
	circle(2*x+42,y+50,randomNumber(10));
	circle(x+105,y+100,randomNumber(10));
	circle(2*x+42,y-100,randomNumber(5,15));
}

function worm(x){
	noFill();
	var y=(300+(100*sin(x)));

	// 'tan' rengini color fonksiyonu ile oluştur
  var tanColor = color('tan');
  tanColor.setAlpha(120); // Alpha değerini belirle
  stroke(tanColor); 
	
	strokeWeight(2);
	circle(x,y,56);
	circle(2*x+42,y+50,56);
	circle(x+105,y+100,76);
	circle(2*x+42,y-100,96);
}
