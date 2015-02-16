var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');


var titleScreen = true;



addEventListener("keydown", function(key){ 
    if(key.keyCode == 32){
        titleScreen = false;
    //    document.body.style.background = "violet";
    }
});

// if(mouseloc >50 && < 100)

function draw() {
	//clears scren every loop
	canvas.width = canvas.width;
	
	if(titleScreen){
		//PUT ACTUAL TITLE SCREEN
		context.fillRect(0,0,600,600);
		context.fillText("Title Screen", 50, 150);
		context.fillText("press space to play game", 50, 250);
	} else{
		//PUT ACTUAL GAME
		context.fillRect(0,0,300,300);
		context.fillText("Game", 50, 150);
	}
}

function game_loop() {
	// update();
	draw();
}

setInterval(game_loop, 60);