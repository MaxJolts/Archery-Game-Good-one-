// Massimo Giolti
// Nick Brown-Hernandez 
// Web and fx, 502-A22-La, section 03
// Achery Tournament (best time for me 0:26)
//<iframe src="https://openprocessing.org/sketch/1887567
// Shoot the bull'eye 10 times to win the tournament and be declared a true Robin Hood archer, press 'space' to start over

// So, in this little game you are presented with a simple task, to score 10 bulls ‘eye on the target. 
//Right now, you’re at a tournament, your bow and arrow ready to be fired from your mouse. 
//You really want to be known as the one who is as good as the notorious outlaw Robin Hood, for you trained for this even before you started walking 
//(Made it a bit dramatic but the point gets across… you REALLY love archery).


let hit = 0
let x = 0
let y = 0
let xLimit = 0
let yLimit = 0
//let bullseye = 250 

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	frameRate(0.75);
	
}

function draw() {
	background(100);
	xLimit= random(windowWidth);
	yLimit = random(windowHeight);
	if (xLimit <300 ) { 
		xLimit=300
	}
	if (xLimit >(windowWidth-300) ) { 
		xLimit=windowWidth-300
	}
	
	yLimit= random(windowHeight);
	if (yLimit <300 ) { 
		yLimit=300
	}
	if (yLimit >(windowHeight-300) ) { 
		yLimit=windowHeight-300
	}
	
	x = xLimit
	y = yLimit

	
	{
		//outer rim
		fill(250,0,0)
	circle(x,y,400)
	 }
	
	{
		//middle rim
	fill(255, 153, 51)
	circle(x,y,275)
	}
	
	{
		//inner circle
	fill(250,250,0)
	circle(x,y,130)
		
	}

	{
		//bull's eye
	 let bullseye = 250 
	 fill (bullseye,bullseye,bullseye)
	 circle(x,y,20)	
		textSize(20);
		fill(255,0,0);
		text(str(hit),x-5,y+5) 
	}	
		if (hit >= 10){ // if the counter (hit) gets above 15, a prompt appears
		text("Bull's Eye!!! A true Robin Hood!", width/2,height/2)
		}	
}
		
	function mouseClicked(){	
		if (mouseX >= (x-2) && mouseX <= (x+2)){
			hit= hit+1
		}	
	}	

	function keyPressed(){ // when spacebar is pressed, hit gets reset back to 0
			if (key == " "){
				hit = 0
			}
		}

	