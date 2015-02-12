var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

/*
 function row(location){
 var loc = location * convas.height - location *5;
 return loc;
 }
 */
var x = 0;
var y = 0;

var chax = 10;
var chay = 10;

var cha = {
	x : 30,
	y : 30,
	size : 30
};

function draw() {
	canvas.width = canvas.width;
	drawChar();
	grid();
}

console.log("this works");
console.log(chax);
console.log(chay);
grid();
drawChar();

function drawChar() {
	context.fillRect(cha.x, cha.y, cha.size, cha.size);
}

/*
 function drawChar(){
 context.fillRect(10,10,30,30);
 }
 */

addEventListener('keydown', function(key) {
	if (key.keyCode == 37) {
		console.log('left');
		//d = "left";
		left();
	} else if (key.keyCode == "38") {
		console.log('up');
		//d = "up	";
		up();
	} else if (key.keyCode == "39") {
		console.log('right');
		//d = "right";
		right()
	} else if (key.keyCode == "40") {
		console.log('down');
		//d = "down";
		down();
	}
});

function right() {
	cha.x += 60;
}

function left() {
	cha.x -= 60;
}

function down() {
	cha.x -= 30;
	cha.y += 30;
}

function up() {
	cha.x += 30;
	cha.y -= 30;
}

function grid() {
	for (var p = 0; p < 60; ++p) {
		x = p * 60;
		y = canvas.height;
		for (var i = 0; ; i++) {
			x += 1;
			y -= 1;
			context.fillRect(x, y, 1, 1);
			if (i > canvas.width) {
				break;
			}
		}

		x = p * 60;
		y = 0;
		for (var i = 0; ; i++) {
			x -= 1;
			y += 1;
			context.fillRect(x, y, 1, 1);
			if (i > canvas.width) {
				break;
			}
		}
	}

	for (var p = 0; p < 60; ++p) {
		x = 0;
		y = p * 30;
		for (var i = 0; ; i++) {
			x += 1;
			context.fillRect(x, y, 1, 1);
			if (i > canvas.width) {
				break;
			}
		}
	}
}

//FINAL GAME LOOP/////////////////////////////////////////
//---------------------------------------------------------
function game_loop() {
	// update();
	draw();
}

setInterval(game_loop, 60);
//---------------------------------------------------------
///////////////////////////////////////////////////////////
