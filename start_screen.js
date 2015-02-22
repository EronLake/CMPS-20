// --------------------------------------------
//        Title Screen Setup
// --------------------------------------------

var titleScreen = true;
addEventListener("keydown", function(key) {
	if (key.keyCode == 32) {
		titleScreen = false;
	}
});

var titleImage = document.getElementById("title");
function draw() {
	//clears screen every loop
	canvas.width = canvas.width;
	if (titleScreen) {
		var titleimg = new Image();
		titleimg.src = "http://i.imgur.com/nDxvHh5.png?5";
		c.drawImage(titleimg, 400, 0, 522, 670);
		//display cover image
		c.lineWidth = 15;
		c.font = "40px Arial";
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeText("SCORCHING SEA", canvas.width / 3, canvas.height / 2 - 200);
		c.fillText("SCORCHING SEA", canvas.width / 3, canvas.height / 2 - 200);
		c.strokeText("press spacebar to play", canvas.width / 2 - 200, canvas.height / 2 + 200);
		c.fillText("press spacebar to play", canvas.width / 2 - 200, canvas.height / 2 + 200);

	} else {
		clearInterval(refreshIntervalId);
		//stop game_loop after spacebar pressed
		main();
		//start playing
	}
}