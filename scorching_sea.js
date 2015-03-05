//IMPORTANT NOTES:
//
//find utilities/clues in towns to help
//player find the cordinates of the
//sacred water source to win game
//cost water though
//ex: map, where water is by quadrents,
//cordinate indicator, quadrent indicator,
//shovel <-- need this to win,
//town finder, etc...

var img = new Image();
img.src = 'http://people.ucsc.edu/~brlgomez/20/textures/dune.png';
//img.src = 'http://ccrgeek.files.wordpress.com/2012/11/a2-tiles-with-overlays_2.png?w=512&h=384';

//var img2 = new Image();
//img2.src = '/Images/village_prototype.png';

var cactusImg = new Image();
cactusImg.src = 'Images/cool_cactus_1.png';
var cactusShadowImg = new Image();
cactusShadowImg.src = 'Images/cool_cactus_1_shadow.png';

var rockImg = new Image();
rockImg.src = 'Images/cool_rock_1.png';
var rockShadowImg = new Image();
rockShadowImg.src = 'Images/cool_rock_1_shadow.png';

var rock2Img = new Image();
rock2Img.src = 'Images/cool_rock_2.png';
var rock2ShadowImg = new Image();
rock2ShadowImg.src = 'Images/cool_rock_2_shadow.png';

var rock3Img = new Image();
rock3Img.src = 'Images/cool_rock_3.png';
var rock3ShadowImg = new Image();
rock3ShadowImg.src = 'Images/cool_rock_3_shadow.png';

var groundImg = new Image();
groundImg.src = 'http://people.ucsc.edu/~brlgomez/20/textures/ground.png';

var seaHorseImg = new Image();
seaHorseImg.src = 'http://people.ucsc.edu/~brlgomez/20/textures/seahorse_enemy.png';
// ----------------------------------------
//     Canvas Setup
// ----------------------------------------

var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
c.canvas.width = window.innerWidth;
c.canvas.height = window.innerHeight;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

// --------------------------------------------
//        Title and Instruction Screens Setup
// --------------------------------------------
var instrScreen = false;
var titleScreen = true;
addEventListener("keydown", function(key) {
	if (key.keyCode == 32 && instrScreen == false) {
		titleScreen = false;
		instrScreen = true;
	} else if (key.keyCode == 32 && instrScreen == true && titleScreen == false) {
		instrScreen = false;
	}
});
//c.textAlign = "center"
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
		c.textAlign = "center";
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeText("SCORCHING SEA", canvas.width / 2, canvas.height / 2 - 200);
		c.fillText("SCORCHING SEA", canvas.width / 2, canvas.height / 2 - 200);
		c.strokeText("press spacebar to play", canvas.width / 2, canvas.height / 2 + 200);
		c.fillText("press spacebar to play", canvas.width / 2, canvas.height / 2 + 200);
	} else if (titleScreen == false && instrScreen == true) {
		c.fillRect(0, 0, canvas.width, canvas.height);
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.font = "40px Arial";
		c.fillText("Instructions", canvas.width / 2 - 150, canvas.height / 2 - 200);
		c.font = "15px Arial";
		c.fillText("Use the 'A' 'W' 'S' 'D' keys to move", 0, canvas.height / 2 - 160);
		c.fillText("Spacebar is the main action key and is used to fight, enter and exit villages, cut cacti, etc.", 0, canvas.height / 2 - 140);
		c.fillText("At the beginning of the game press 1, 2, 3, or 4 to decide how many people to take in your party and then press spacebar to confirm your selection", 0, canvas.height / 2 - 120);
		c.fillText("If your blue water meter hits zero then your health will begin to decrease", 0, canvas.height / 2 - 100);
		c.fillText("If your health hits zero then the game ends", 0, canvas.height / 2 - 80);
		c.fillText("Take refuge in shade to keep skin integrity and water from depleting", 0, canvas.height / 2 - 60);
		c.fillText("During the day, a yellow box representing the sun will be displayed in the upper right and the screen will be brighter", 0, canvas.height / 2 - 40);
		c.fillText("Skin integrity determines how many steps that you can take in the sun and it will decrease as you move during the day", 0, canvas.height / 2 - 20);
		c.fillText("You will lose more water during the day, but the stronger orange enemies won't appear", 0, canvas.height / 2);
		c.fillText("The enemies are represented for now by the orange and green rectangles", 0, canvas.height / 2 + 20);
		c.fillText("The main base is represented by the aqua square that you start at in the beginning", 0, canvas.height / 2 + 40);
		c.fillText("The ml: represents the milileters of water that you have left, while the Home ml: denotes how much water is left at the base", 0, canvas.height / 2 + 60);
		c.fillText("Boulders and cacti provide shade but cacti can also be cut to replenish water by pressing spacebar", 0, canvas.height / 2 + 80);
		c.fillText("Villages are represented by the gray collections of squares and can be entered by pressing spacebar and exited in the same fashion", 0, canvas.height / 2 + 100);
		c.fillText("Villages contain items that will be useful to you on your journey", 0, canvas.height / 2 + 120);
		c.fillText("Village items are numbered 1,2,3,4 and can be obtained by pressing the corresponding key as many times as the number of each available", 0, canvas.height / 2 + 140);
		c.fillText("Press the escape key to pause and press again to unpause", 0, canvas.height / 2 + 160);
		c.fillText("Fight green enemies by pressing spacebar as soon as the word 'Draw' appears onscreen", 0, canvas.height / 2 + 180);
		c.fillText("Fight orange enemies by pressing the keys displayed onscreen in order(quick time style)", 0, canvas.height / 2 + 200);
		c.fillText("You can replenish your water at home base", 0, canvas.height / 2 + 220);
	} else if (titleScreen == false && instrScreen == false) {
		clearInterval(refreshIntervalId);
		//stop game_loop after spacebar pressed
		main();
		//start playing
	}
}

function game_loop() {
	draw();

}

var refreshIntervalId = setInterval(game_loop, 60);

// ----------------------------------------
//     Main Game
// ----------------------------------------

function main() {
	document.getElementById("overworld").volume = 0.01;
	document.getElementById("overworld").play();
	hookKeys();
	hookKeys2();

	// ----------------------------------------
	//     Tiles Setup
	// ----------------------------------------
	var tiles_dimension = 1000;

	var tileCount = 0;
	var tileMap = new Array();
	for ( x = 0; x < tiles_dimension; x++) {
		var row = new Array();
		for ( y = 0; y < tiles_dimension; y++) {
			//row[y] = x * 20 + y * 30 + 0 | (Math.random() * 20);
			row[y] = x * 20;
			tileCount++;
		}
		tileMap[x] = row;
	}

	//-----------------------------------------
	//       Time parameters
	//-----------------------------------------
	var day = true;
	var counter = 0;
	var dayLength = 60;
	//seconds
	setInterval(function() {
		if (!pause && !inVillage && !inBattle && !gameOver && !inHome && !talking && !inCave && !inBoat) {++counter;
		}
	}, 1000);

	// ----------------------------------------
	//     Display parameters
	// ----------------------------------------
	// center of the display on screen
	var displayCenterX = 1 * canvas.width / 3;
	var displayCenterY = 2 * canvas.height / 3;

	// angle of the x axis. Should be in [0, PI/2]
	var angleX = 0;
	// angle of the y axis. Should be in [PI/2, PI]
	var angleY = 2.2;

	// scale for the tiles
	var scale = 125.0;
	// relative scale for the x of the tile. use it to stretch tiles.
	var relScaleX = 1;

	var experimental_useBitmapTiles = true;

	// how many tiles do we show in the back ?
	var viewBackDepth = 15;
	// how many tiles do we show in the front ?
	var viewFrontDepth = 21;
	// how many tiles do we show on the left ?
	var viewLeftDepth = 10;
	// how many tiles do we show on the right ?
	var viewRightDepth = 11;

	// tile offset from 0,0 at which we start shadowing.
	var shadowStart = 9;
	//8
	// at shadowStart + shadowLength, tiles are black.
	var shadowLength = 0;
	//5

	// zShift : bigger means less influence for z
	var zShift = 1.0;
	// 1
	// zStrength bigger means more influence for z
	var zStrength = 3 / 12;
	// 4/12

	// ----------------------------------------
	//     Transforms
	// ----------------------------------------
	var transfMatrix = [Math.cos(angleX), Math.sin(angleX), Math.cos(angleY), Math.sin(angleY)];
	var _norm = relScaleX + 1;
	relScaleX /= _norm;
	transfMatrix[0] *= scale * relScaleX;
	transfMatrix[1] *= scale * relScaleX;
	transfMatrix[2] *= scale / _norm;
	transfMatrix[3] *= scale / _norm;
	var determinant = transfMatrix[0] * transfMatrix[3] - transfMatrix[2] * transfMatrix[1];
	var transfMatrixRev = [transfMatrix[3], -transfMatrix[1], -transfMatrix[2], transfMatrix[0]];
	transfMatrixRev[0] /= determinant;
	transfMatrixRev[1] /= determinant;
	transfMatrixRev[2] /= determinant;
	transfMatrixRev[3] /= determinant;

	// project on place vector from world to screen coordinates
	// not 3D-compliant
	function projectVector(v) {
		var col = v[0],
		    row = v[1];
		v[0] = (transfMatrix[0] * col + transfMatrix[2] * row);
		v[1] = (transfMatrix[1] * col + transfMatrix[3] * row);
	}

	// project on place vector from screen to world coordinates
	// not 3D-compliant
	function revertVector(v) {
		var col = v[0],
		    row = v[1];
		v[0] = (transfMatrixRev[0] * col + transfMatrixRev[2] * row);
		v[1] = (transfMatrixRev[1] * col + transfMatrixRev[3] * row);
	}

	// project on place the screen point into world coordinates
	function revertPoint(v, center) {
		v[0] -= displayCenterX;
		v[1] -= displayCenterY;

		revertVector(v);
		v[0] += center[0];
		v[1] += center[1];
	}

	// project centered world coordinates (col, row) into screen coordinates
	//  col and row do not have to be rounded.
	function projectFromCenter(col, row, pt) {
		var drawBaseX = (transfMatrix[0] * col + transfMatrix[2] * row);
		var drawBaseY = (transfMatrix[1] * col + transfMatrix[3] * row);

		pt[0] = displayCenterX + drawBaseX;
		pt[1] = displayCenterY + drawBaseY;
	}

	// ----------------------------------------
	//     Rendering/drawing functions
	// ----------------------------------------

	function setWorldTransform() {
		c.setTransform(transfMatrix[0], transfMatrix[1], transfMatrix[2], transfMatrix[3], displayCenterX, displayCenterY);
	}

	function drawRock(colOffset, rowOffset, i) {
		var pt = [0, 0];
		c.beginPath();
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		if (i%4 == 0) {
			c.drawImage(rock2Img, -55, -38, 92, 64);
			c.transform(1, 0, .7, -1, -18, 28);
			c.drawImage(rock2ShadowImg, -38, -62, 90, 64);
		} 
		else if (i%6 == 0){
			c.drawImage(rock3Img, -55, -38, 92, 64);
			c.transform(1, 0, .7, -1, -18, 28);
			c.drawImage(rock3ShadowImg, -38, -62, 90, 64);
		}
		else {
			c.drawImage(rockImg, -55, -38, 92, 64);
			c.transform(1, 0, .7, -1, -18, 28);
			c.drawImage(rockShadowImg, -38, -62, 92, 64);
		}
		c.restore();
	}

	//cacti that replenish water when destroyed
	function drawCactus(colOffset, rowOffset) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(0, 51, 0)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		c.drawImage(cactusImg, -50, -38, 64, 64);
		c.transform(1, 0, .7, -1, -8, 28);
		c.drawImage(cactusShadowImg, -45, -48, 64, 50);
		c.restore();
	}

	function drawPlayer(colOffset, rowOffset) {
		var pt = [0, 0];
		var waterLevel = "ml: " + player.WATER;
		var uvLevel = "UV: " + player.UV;
		c.beginPath();
		c.fillStyle = 'rgb(200, 150, 100)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		c.fillRect(-15, -30, 20, 35);
		c.fillStyle = 'rgba(100, 63, 63, 0.5)';
		c.transform(1, 0, -.7, 1, 5, 0);
		c.fillRect(-15, 5, 20, 25);
		c.lineWidth = 5;
		c.fillStyle = 'rgba(255, 255, 255, 0.75)';
		c.strokeStyle = 'rgba(0, 0, 0, 0.5)';
		c.restore();
	}

	function drawHomeBase(colOffset, rowOffset) {
		var pt = [0, 0];
		var homeWaterLev = "ml: " + homeBase.WATER;
		c.beginPath();
		c.fillStyle = 'rgb(50, 150, 150)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		c.fillRect(-50, -38, 64, 64);
		c.lineWidth = 5;
		c.fillStyle = 'rgba(255, 255, 255, 0.75)';
		c.strokeStyle = 'rgba(0, 0, 0, 0.5)';
		c.font = "10px Arial";
		c.strokeText(homeWaterLev, -35, -32);
		c.fillText(homeWaterLev, -35, -32);
		c.restore();
	}

	function drawVillage(colOffset, rowOffset) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(145, 120, 110)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		c.fillRect(-50, -38, 64, 64);
		c.restore();
	}

	function drawEnemy(colOffset, rowOffset) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(100, 150, 100)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		c.fillRect(-15, -30, 20, 35);
		c.fillStyle = 'rgba(100, 63, 63, 0.5)';
		c.transform(1, 0, -.7, 1, 5, 0);
		c.fillRect(-15, 5, 20, 25);
		c.restore();
	}

	function drawFishEnemy(colOffset, rowOffset) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(200, 125, 75)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		c.drawImage(seaHorseImg, -45, -45, 64, 64);
		//c.fillRect(-15, -30, 20, 35);
		c.fillStyle = 'rgba(100, 63, 63, 0.5)';
		c.transform(1, 0, -.7, 1, 5, 0);
		c.fillRect(-15, 5, 20, 25);
		c.restore();
	}

	function drawTraveller(colOffset, rowOffset) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(200, 225, 175)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		c.fillRect(-15, -30, 20, 35);
		c.fillStyle = 'rgba(100, 63, 63, 0.5)';
		c.transform(1, 0, -.7, 1, 5, 0);
		c.fillRect(-15, 5, 20, 25);
		c.restore();
	}

	function drawCave(colOffset, rowOffset) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(50, 25, 25)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		c.fillRect(-50, -38, 64, 64);
		c.restore();
	}

	function drawBoat(colOffset, rowOffset) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(150, 150, 200)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		c.fillRect(-50, -38, 64, 64);
		c.restore();
	}

	// with sprites
	function drawFilledTile(colOffset, rowOffset, tileValue) {
		tileValue = tileValue % 11;
		//1
		var pt = [colOffset - 0.5, rowOffset - 0.5];
		// where is the tile ?
		//var tileBitmapX = (0 | (tileValue / 1)) * 32 * 2;
		//var tileBitmapY = (tileValue % 1) * 32 * 2;//3
		var tileBitmapX = tileValue % 32;
		var tileBitmapY = tileValue / 224;
		//c.drawImage(groundImg, tileBitmapX, tileBitmapY, 64, 64, colOffset - 0.5, rowOffset - 0.5, 1, 1);
		c.drawImage(img, tileBitmapX, tileBitmapY, 32, 32, colOffset - 0.5, rowOffset - 0.5, 1, 1);
		// c.drawImage(img, 0, 0, 32,32,
		// colOffset - 0.5, rowOffset - 0.5, 1, 1);

	}

	// draw a tile at (colOffset, rowOffset ) centered world coordinates.
	function drawTile(colOffset, rowOffset, tileValue) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'hsla(' + (tileValue) + ',25%,25%,.5)';
		projectFromCenter(colOffset - 0.5, rowOffset - 0.5, pt);
		if (pt[1] > canvasHeight)
			return;
		c.moveTo(pt[0], pt[1]);
		projectFromCenter(colOffset + 0.5, rowOffset - 0.5, pt);
		c.lineTo(pt[0], pt[1]);
		projectFromCenter(colOffset + 0.5, rowOffset + 0.5, pt);
		c.lineTo(pt[0], pt[1]);
		projectFromCenter(colOffset - 0.5, rowOffset + 0.5, pt);
		c.lineTo(pt[0], pt[1]);
		if (pt[1] < displayCenterY) {
			var dist = Math.max(Math.abs(colOffset), Math.abs(rowOffset));
			var alpha = 1.0;
			if (dist >= shadowStart)
				alpha = 1 - Math.pow((dist - shadowStart) / shadowLength, 0.8);
			c.globalAlpha = alpha;
		}
		c.fill();
		c.closePath();
		c.fillStyle = '#000';
		c.globalAlpha = 1.0;
		projectFromCenter(colOffset, rowOffset, pt);
		if (!(tileValue % 17) || ((tileValue + 1) % 17) == 0)
			drawTree(pt, alpha + 0.05);
		//   c.fillText((0 |colOffset) + ',' + (0|rowOffset),pt[0]-6,pt[1]);
	}

	// draw all tiles of the tileMap, with a view centered on
	// newCenterPoint
	function drawTiles(newCenterPoint) {
		// get rounded coordinates and floating part.
		var centerPoint = [0, 0];

		centerPoint[0] = Math.floor(newCenterPoint[0]);
		centerPoint[1] = Math.floor(newCenterPoint[1]);
		var remains = [newCenterPoint[0] - centerPoint[0], newCenterPoint[1] - centerPoint[1]];
		// compute start/end for loops on col/row
		var colStart = centerPoint[0] - viewBackDepth;
		var colEnd = centerPoint[0] + viewFrontDepth;
		var rowStart = centerPoint[1] - viewRightDepth;
		var rowEnd = centerPoint[1] + viewLeftDepth;
		// clamp start/end values
		if ((colEnd < 0) || (colStart >= tiles_dimension))
			return;
		if (colStart < 0)
			colStart = 0;
		if (colEnd >= tiles_dimension)
			colEnd = tiles_dimension;
		if ((rowEnd < 0) || (rowStart >= tiles_dimension))
			return;
		if (rowStart < 0)
			rowStart = 0;
		if (rowEnd >= tiles_dimension)
			rowEnd = tiles_dimension;

		if (experimental_useBitmapTiles) {
			c.save();
			setWorldTransform();
		}

		//var drawTileMethod = (experimental_useBitmapTiles) ? drawFilledTile : drawTile;
		// iterate on col/rows
		var pt = [0, 0];
		for (var colIndex = colStart; colIndex < colEnd; colIndex++) {
			var colOffset = colIndex - centerPoint[0];
			for ( rowIndex = rowStart; rowIndex < rowEnd; rowIndex++) {
				var rowOffset = rowIndex - centerPoint[1];
				var thisTile = tileMap[colIndex][rowIndex];
				//drawTileMethod(colOffset - remains[0], rowOffset - remains[1], thisTile);
				drawFilledTile(colOffset - remains[0], rowOffset - remains[1], thisTile);
			}
		}
		if (experimental_useBitmapTiles)
			c.restore();

	}

	var villagePosX = 0;
	var villagePosY = 0;
	var villagePenPos = new Array();
	function drawUI() {
		//draw ui sun
		if (day) {
			c.fillStyle = 'rgba(255, 220, 100, 0.7)';
			c.fillRect(canvasWidth - 100, 0, 100, 100);
			c.fillStyle = "rgba(50, 25, 100, " + (.1 + counter % dayLength) / (dayLength * 3) + ")";
			c.fillRect(0, 0, canvasWidth, canvasHeight);
		} else {
			c.fillStyle = "rgba(50, 25, 100, " + (.4 - (counter % dayLength) / (dayLength * 3)) + ")";
			c.fillRect(0, 0, canvasWidth, canvasHeight);
		}

		//text
		var waterLevel = "ml: " + player.WATER;
		var uvLevel = "Integrity: " + player.UV;
		var hpLevel = "P1 Health: " + player.HEALTH;
		var hpLevel2 = "P2 Health: " + player2.HEALTH;
		var hpLevel3 = "P3 Health: " + player3.HEALTH;
		var hpLevel4 = "P4 Health: " + player4.HEALTH;
		var homeWaterLev = "Home ml: " + homeBase.WATER;
		var homeDir = "Compass: ";
		if (homeBase[1] + 1 < player.Y) {
			homeDir += "North ";
		} else {
			homeDir += "South ";
		}
		if (homeBase[0] > player.X) {
			homeDir += "East";
		} else {
			homeDir += "West";
		}
		if (homeBase[0] == player.X && homeBase[1] + 1 == player.Y) {
			homeDir = "Compass: X";
		}
		var time = Math.floor(counter / 60) + " : " + counter % 60;
		var line = 20;
		c.lineWidth = 7;
		c.fillStyle = 'rgba(255, 255, 255, 0.75)';
		c.strokeStyle = 'rgba(0, 0, 0, 0.75)';
		c.font = "15px Arial";
		c.strokeText(uvLevel, canvasWidth / 8, canvasHeight / 8 + line);
		c.fillText(uvLevel, canvasWidth / 8, canvasHeight / 8 + line);
		line += 20;
		c.strokeText(hpLevel, canvasWidth / 8, canvasHeight / 8 + line);
		c.fillText(hpLevel, canvasWidth / 8, canvasHeight / 8 + line);
		if (numOfPlayers > 1) {
			line += 20;
			c.strokeText(hpLevel2, canvasWidth / 8, canvasHeight / 8 + line);
			c.fillText(hpLevel2, canvasWidth / 8, canvasHeight / 8 + line);
		}
		if (numOfPlayers > 2) {
			line += 20;
			c.strokeText(hpLevel3, canvasWidth / 8, canvasHeight / 8 + line);
			c.fillText(hpLevel3, canvasWidth / 8, canvasHeight / 8 + line);
		}
		if (numOfPlayers > 3) {
			line += 20;
			c.strokeText(hpLevel4, canvasWidth / 8, canvasHeight / 8 + line);
			c.fillText(hpLevel4, canvasWidth / 8, canvasHeight / 8 + line);
		}
		line += 20;
		c.strokeText(waterLevel, canvasWidth / 8, canvasHeight / 8 + line);
		c.fillText(waterLevel, canvasWidth / 8, canvasHeight / 8 + line);
		line += 20;
		c.strokeText(homeWaterLev, canvasWidth / 8, canvasHeight / 8 + line);
		c.fillText(homeWaterLev, canvasWidth / 8, canvasHeight / 8 + line);
		line += 20;
		c.strokeText(time, canvasWidth / 8, canvasHeight / 8 + line);
		c.fillText(time, canvasWidth / 8, canvasHeight / 8 + line);

		if (player.SHOVEL == true || player.DETECTOR == true || player.COMPASS == true || player.MAP == true || player.PEN == true) {
			line += 20;
			c.strokeText("Items:", canvasWidth / 8, canvasHeight / 8 + line);
			c.fillText("Items:", canvasWidth / 8, canvasHeight / 8 + line);
			if (player.SHOVEL == true) {
				line += 20;
				c.strokeText("Shovel", canvasWidth / 8 + 20, canvasHeight / 8 + line);
				c.fillText("Shovel", canvasWidth / 8 + 20, canvasHeight / 8 + line);
			}
			if (player.DETECTOR == true) {
				line += 20;
				if (promiseWater[0] > -10 && promiseWater[0] < 10 && promiseWater[1] > -10 && promiseWater[1] < 10 && (counter + player.WATER) % 2 == 0) {
					c.fillStyle = 'rgba(255, 100, 100, 0.75)';
				}
				c.strokeText("Detector", canvasWidth / 8 + 20, canvasHeight / 8 + line);
				c.fillText("Detector", canvasWidth / 8 + 20, canvasHeight / 8 + line);
				c.fillStyle = 'rgba(255, 255, 255, 0.75)';
			}
			if (player.COMPASS == true) {
				line += 20;
				c.strokeText(homeDir, canvasWidth / 8 + 20, canvasHeight / 8 + line);
				c.fillText(homeDir, canvasWidth / 8 + 20, canvasHeight / 8 + line);
			}
			if (player.MAP == true) {
				line += 20;
				c.strokeText("Map", canvasWidth / 8 + 20, canvasHeight / 8 + line);
				c.fillText("Map", canvasWidth / 8 + 20, canvasHeight / 8 + line);
				c.fillStyle = 'rgba(255, 255, 255, 0.5)';
				c.fillRect(150, 400, tiles_dimension / 5, tiles_dimension / 5);
				c.fillStyle = 'rgba(0, 0, 0, 1)';
				c.fillRect(150 + (center[0] - 1) / 5, 400 + (center[1] - 1) / 5, 3, 3);
				if (player.PEN == true) {
					villagePenPos.push(villagePosX / 5);
					villagePenPos.push(villagePosY / 5);
					c.fillStyle = 'rgba(100, 75, 50, 1)';
					for (var j = 0; j < villagePenPos.length; j += 2) {
						c.fillRect(150 + villagePenPos[j], 400 + villagePenPos[j + 1], 2, 2);
					}
					c.fillStyle = 'rgba(255, 255, 255, 0.75)';
				}
			}
			if (player.PEN == true) {
				line += 20;
				c.strokeText("Pen", canvasWidth / 8 + 20, canvasHeight / 8 + line);
				c.fillText("Pen", canvasWidth / 8 + 20, canvasHeight / 8 + line);
			}
		}

		//draw water meter
		var divWater = player.WATERORIG / (player.WATERORIG / 500);
		c.fillStyle = 'rgba(0, 0, 0, 0.75)';
		c.fillRect(canvasWidth / 12, canvasHeight / 8 + ((-player.WATERORIG / divWater) + player.WATERORIG / divWater) + 5, 25, (player.WATERORIG / divWater + player.WATERORIG / divWater) + 10);
		c.fillStyle = 'rgba(150, 150, 150, 0.75)';
		c.fillRect(canvasWidth / 12 + 5, canvasHeight / 8 + ((-player.WATERORIG / divWater) + player.WATERORIG / divWater) + 10, 15, (player.WATERORIG / divWater + player.WATERORIG / divWater));
		if (!inSun) {
			c.fillStyle = 'rgba(100, 100, 255, 0.9)';
		} else {
			c.fillStyle = 'rgba(255, 150, 200, 0.9)';
		}
		c.fillRect(canvasWidth / 12 + 5, canvasHeight / 8 + player.WATERORIG / divWater * 2 - player.WATER / (divWater / 2) + 10, 15, ((player.WATER / divWater * 2) + player.WATERORIG / (divWater)) - 40);

		if (pause) {
			c.fillStyle = "rgba(0,50,50, 0.5)";
			c.fillRect(0, 0, canvasWidth, canvasHeight);
			c.lineWidth = 10;
			c.fillStyle = 'rgba(255, 255, 255, 1)';
			c.strokeStyle = 'rgba(0, 0, 0, 1)';
			c.font = "20px Arial";
			c.strokeText("PAUSE", (canvasWidth / 2) - 25, (canvasHeight / 2) - 25);
			c.fillText("PAUSE", (canvasWidth / 2) - 25, (canvasHeight / 2) - 25);
		}
	}

	var clues = new Array(20);
	function setClues() {
		var finalX = promiseWater[0];
		var finalY = promiseWater[1];
		if (promiseWater[1] > 0) {
			clues[0] = "I heard the 'Promise Land' is down South.";
		} else {
			clues[0] = "I heard the 'Promise Land' is up North.";
		}
		if (promiseWater[0] < 0) {
			//west
			clues[1] = "You should go towards the rising sun.";
		} else {
			clues[1] = "I have never been to the East, you should go there.";
		}
		clues[2] = "A compass always points home.";
		clues[3] = "If you have pen and paper you will know where we are";
		if ((promiseWater[0] > tiles_dimension / 2 || promiseWater[0] < -tiles_dimension / 2) && (promiseWater[1] > tiles_dimension / 2 || promiseWater[1] < -tiles_dimension / 2)) {
			clues[4] = "I have never heard any stories of the promise land around this part";
		} else {
			clues[4] = "I felt a stange disturbance on my walk to the other village";
		}
		if ((promiseWater[0] < 50 && promiseWater[0] > -50) && (promiseWater[1] < 50 && promiseWater[1] < -50)) {
			clues[5] = "I felt it tell ya, if only I had a shovel";
		} else {
			clues[5] = "A shovel will be your best friend";
		}
		clues[6] = "My friend had a detector, but it only blinked once while on her way to another village";
		clues[7] = "Have you heard of the mysterious 'Promise Land'?";
		clues[8] = "Its so hot nowadays, I would rather dig and live with Lucifer!";
		if (promiseWater[0] < 20 && promiseWater[0] > -20) {
			clues[9] = "My feet always feel cool breeze when I walk to the North...or was it South? ";
		} else {
			clues[9] = "I wish I had more friends so I don't get beat up by bandits!";
		}
		clues[10] = "I better stay in the shade to get some rest";
		clues[11] = "My friends keep hogging the water!";
		if (promiseWater[1] < 20 && promiseWater[1] > -20) {
			clues[12] = "I love walking on this East and West road. I always feel a slight breeze";
		} else {
			clues[12] = "I need to drink more water if the suns out";
		}
		clues[13] = "I always go back home to refill my water bottle";
		clues[14] = "Don't tell me you are looking for the 'Promise Land' too!";
		clues[15] = "It is cooler at night...but a lot more scarier.";
		clues[16] = "My father got devoured by those quick things!";
		clues[17] = "I never get tired at night!";
		clues[18] = "My favorite drink is cactus water.";
		clues[19] = "Water...";
	}

	var buyHealth = false;
	var buyWater = false;
	var buyItem = false;
	var getClue = false;
	var clueNumber = Math.ceil(Math.random() * 10);
	var pickClue = Math.floor(Math.random() * 12);
	function drawVillageUI(i) {
		var health;
		var water;
		var item;
		var clue;
		var place = i;
		if (i % 12 == 0) {
			health = villageItems[i];
			water = villageItems[i + 1];
			item = villageItems[i + 2];
			clue = villageItems[i + 3];
		}
		if (i % 12 == 2) {
			health = villageItems[i - 2];
			water = villageItems[i - 1];
			item = villageItems[i];
			clue = villageItems[i + 1];
			place = i - 2;
		}
		if (i % 12 == 4) {
			health = villageItems[i - 4];
			water = villageItems[i - 3];
			item = villageItems[i - 2];
			clue = villageItems[i - 1];
			place = i - 4;
		}
		if (health > 0)
			var healthAmount = "1. Food: " + health + " for 1000 ml each";
		else
			var healthAmount = "1. No food here";
		if (water > 0)
			var waterAmount = "2. ml found: " + water;
		else
			var waterAmount = "2. No water here";
		if (item == 0 || item > 5)
			var itemAmount = "3. No items here";
		if (item == 1)
			var itemAmount = "3. Item: Shovel for 2500ml";
		if (item == 2)
			var itemAmount = "3. Item: Detector for 2500ml";
		if (item == 3)
			var itemAmount = "3. Item: Compass for 2500ml";
		if (item == 4)
			var itemAmount = "3. Item: Map for 2500ml";
		if (item == 5)
			var itemAmount = "3. Item: Pen for 2500ml";
		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 10;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "20px Arial";
		c.strokeText("VILLAGE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("VILLAGE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.strokeText(healthAmount, (canvasWidth / 3), canvasHeight / 3);
		c.fillText(healthAmount, (canvasWidth / 3), canvasHeight / 3);
		c.strokeText(waterAmount, (canvasWidth / 3) + 10, (canvasHeight / 3) + 30);
		c.fillText(waterAmount, (canvasWidth / 3) + 10, (canvasHeight / 3) + 30);
		c.strokeText(itemAmount, (canvasWidth / 3) + 20, (canvasHeight / 3) + 60);
		c.fillText(itemAmount, (canvasWidth / 3) + 20, (canvasHeight / 3) + 60);
		c.strokeText("4. Talk", (canvasWidth / 3) + 30, (canvasHeight / 3) + 90);
		c.fillText("4. Talk", (canvasWidth / 3) + 30, (canvasHeight / 3) + 90);
		//if player wants to buy health
		if (buyHealth && health > 0 && player.WATER - 1000 > 0) {
			villageItems[place] -= 1;
			if (player.Health > 0 && numOfPlayers > 0) {
				player.HEALTH += 10;
			}
			if (player2.HEALTH > 0 && numOfPlayers > 1) {
				player2.HEALTH += 10;
			}
			if (player3.HEALTH > 0 && numOfPlayers > 2) {
				player3.HEALTH += 10;
			}
			if (player4.HEALTH > 0 && numOfPlayers > 3) {
				player4.HEALTH += 10;
			}
			player.WATER -= 1000;
			buyHealth = false;
		}
		if (buyWater && water > 0) {
			player.WATER += villageItems[place + 1];
			villageItems[place + 1] -= villageItems[place + 1];
			buyWater = false;
		}
		if (buyItem && player.WATER > 2500 && !(item == 0 || item > 5)) {
			if (item == 1)
				player.SHOVEL = true;
			if (item == 2)
				player.DETECTOR = true;
			if (item == 3)
				player.COMPASS = true;
			if (item == 4)
				player.MAP = true;
			if (item == 5)
				player.PEN = true;
			villageItems[place + 2] = 0;
			player.WATER -= 2500;
			buyItem = false;
		}
		if (player.PEN == true && player.MAP == true) {
			villagePosX = center[0];
			villagePosY = center[1];
		}
		if (getClue) {
			setClues();
			if (clue % 12 == 1 && player.PEN == true) {
				villagePosX = center[0];
			}
			if (clue % 12 == 0 && player.PEN == true) {
				villagePosY = center[1];
			}
			c.strokeText(clues[clue % 12], (canvasWidth / 3) + 40, (canvasHeight / 3) + 120);
			c.fillText(clues[clue % 12], (canvasWidth / 3) + 40, (canvasHeight / 3) + 120);
		}
		if (!getClue) {
			pickClue = Math.floor(Math.random() * clues.length);
		}
	}

	function drawTravellerUI(i) {
		if (travellerStats[i] != 0)
			var water = "Here take this water: " + travellerStats[i];
		else
			var water = "I wish I could give you more water";
		var item = travellerStats[i + 1];
		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 10;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "20px Arial";
		c.strokeText("HELLO, STANGER", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("HELLO, STANGER", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.strokeText(water, (canvasWidth / 3), canvasHeight / 3);
		c.fillText(water, (canvasWidth / 3), canvasHeight / 3);
		c.strokeText(item, (canvasWidth / 3) + 10, (canvasHeight / 3) + 30);
		c.fillText(item, (canvasWidth / 3) + 10, (canvasHeight / 3) + 30);
		if (getWater) {
			player.WATER += travellerStats[i];
			travellerStats[i] = 0;
			getWater = false;
		}
	}

	function drawCaveUI(i) {
		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 10;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "20px Arial";
		c.strokeText("CAVE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("CAVE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		
	}

	function drawBoatUI(i) {
		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 10;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "20px Arial";
		c.strokeText("ABANDONED BOAT", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("ABANDONED BOAT", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
	}

	var hurt = false;
	var drawStart = 20;
	var enemyHp = Math.ceil(Math.random() * (100 - 25) + 25);
	function drawBattleScreen(i, count, playerCount, randDrawSpeed) {
		if (numOfPlayers == 1)
			var drawEnd = Math.random() * (44 - 24) + 24;
		if (numOfPlayers == 2)
			var drawEnd = Math.random() * (46 - 26) + 26;
		if (numOfPlayers == 3)
			var drawEnd = Math.random() * (48 - 28) + 28;
		if (numOfPlayers == 4)
			var drawEnd = Math.random() * (50 - 30) + 30;
		var yourHealth = "P1 Health: " + player.HEALTH;
		var yourHealth2 = "P2 Health: " + player2.HEALTH;
		var yourHealth3 = "P3 Health: " + player3.HEALTH;
		var yourHealth4 = "P4 Health: " + player4.HEALTH;
		var yourWater = "ml: " + player.WATER;
		var enemyHealth = "Enemy Health: " + enemyHp;
		var line = 30;
		var indent = 10;
		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 20;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "60px Arial";
		if (count > (drawStart + randDrawSpeed)) {
			c.strokeText("DRAW", (canvasWidth / 2) - 75, (canvasHeight / 2) - 20);
			c.fillText("DRAW", (canvasWidth / 2) - 75, (canvasHeight / 2) - 20);
			document.getElementById("weaponDraw").volume = .5;
			document.getElementById("weaponDraw").play();
		}
		c.lineWidth = 10;
		c.font = "20px Arial";
		c.strokeText("GET READY TO DRAW", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("GET READY TO DRAW", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.strokeText(yourWater, (canvasWidth / 4), (canvasHeight / 3));
		c.fillText(yourWater, (canvasWidth / 4), (canvasHeight / 3));
		c.strokeText(yourHealth, (canvasWidth / 4) + indent, (canvasHeight / 3) + line);
		c.fillText(yourHealth, (canvasWidth / 4) + indent, (canvasHeight / 3) + line);
		if (numOfPlayers > 1) {
			line += 30;
			indent += 10;
			c.strokeText(yourHealth2, (canvasWidth / 4) + indent, (canvasHeight / 3) + line);
			c.fillText(yourHealth2, (canvasWidth / 4) + indent, (canvasHeight / 3) + line);
			if (numOfPlayers > 2) {
				line += 30;
				indent += 10;
				c.strokeText(yourHealth3, (canvasWidth / 4) + indent, (canvasHeight / 3) + line);
				c.fillText(yourHealth3, (canvasWidth / 4) + indent, (canvasHeight / 3) + line);
				if (numOfPlayers > 3) {
					line += 30;
					indent += 10;
					c.strokeText(yourHealth4, (canvasWidth / 4) + indent, (canvasHeight / 3) + line);
					c.fillText(yourHealth4, (canvasWidth / 4) + indent, (canvasHeight / 3) + line);
				}
			}
		}
		line += 30;
		indent += 10;
		c.strokeText(enemyHealth, (canvasWidth / 4) + indent, (canvasHeight / 3) + line);
		c.fillText(enemyHealth, (canvasWidth / 4) + indent, (canvasHeight / 3) + line);

		if ((playerCount > (drawStart + randDrawSpeed)) && (playerCount < (drawEnd + randDrawSpeed)) && playerCount != 0 && hurt == true) {
			if (numOfPlayers == 4)
				enemyHp -= Math.floor(Math.random() * (100 - 85) + 85);
			if (numOfPlayers == 3)
				enemyHp -= Math.floor(Math.random() * (90 - 65) + 65);
			if (numOfPlayers == 2)
				enemyHp -= Math.floor(Math.random() * (70 - 45) + 45);
			if (numOfPlayers == 1)
				enemyHp -= Math.floor(Math.random() * (50 - 25) + 25);
			if (enemyHp <= 0) {
				humanEnemies[i] = -tiles_dimension;
				humanEnemies[i + 1] = -tiles_dimension;
				playerCount = 0;
				player.WATER += Math.floor((Math.random() * (500 - 100)) + 100);
				inBattle = false;
				humBat = false;
				document.getElementById("wind").pause();
				document.getElementById("wind").currentTime = 0;
				enemyHp = Math.ceil(Math.random() * (100 - 50) + 50);
			}
		}

		if (hurt == true && ((playerCount > (drawEnd + randDrawSpeed)) || (playerCount < (drawStart + randDrawSpeed))) && playerCount != 0) {
			var who = Math.ceil((Math.random() * numOfPlayers));
			if (who == 1 && numOfPlayers > 0)
				player.HEALTH -= Math.ceil((Math.random() * (20 - numOfPlayers)) + 5);
			if (who == 2 && numOfPlayers > 1)
				player2.HEALTH -= Math.ceil((Math.random() * (20 - numOfPlayers)) + 5);
			if (who == 3 && numOfPlayers > 2)
				player3.HEALTH -= Math.ceil((Math.random() * (20 - numOfPlayers)) + 5);
			if (who == 4 && numOfPlayers > 3)
				player4.HEALTH -= Math.ceil((Math.random() * (20 - numOfPlayers)) + 5);
			player.WATER -= Math.floor((Math.random() * (1000 - 500)) + 500);
			playerCount = 0;
		}
		hurt = false;
	}

	function homeUI() {
		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 10;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "20px Arial";
		c.strokeText("IN HOME", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("IN HOME", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.strokeText("People on journey: " + numOfPlayers, (canvasWidth / 3), (canvasHeight / 3));
		c.fillText("People on journey: " + numOfPlayers, (canvasWidth / 3), (canvasHeight / 3));
	}

	function drawBattleScreen_fish(i, count, playerCount) {
		//var drawEnd = Math.random() * (90 - 70) + 70;
		var yourHealth = "Health: " + player.HEALTH;
		var yourWater = "ml: " + player.WATER;
		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 20;
		// Display prompt fight on screen
		c.lineWidth = 20;
		c.font = "60px Arial";
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.strokeText("FIGHT FOR YOUR LIFE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("FIGHT FOR YOUR LIFE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		// If you successfuly beat the fish, delete fish from grid and gain reward
		if (keysDone == true) {
			fishEnemies[i] = -tiles_dimension;
			fishEnemies[i + 1] = -tiles_dimension;
			playerCount = 0;
			player.WATER += Math.floor((Math.random() * (1000 - 500)) + 500);
			inBattle = false;
			fishBat = false;
			keysDone = false;
			console.log("currKey: " + currKey + " hitKeys length: " + hitKeys.length);
			hitKeys.length = 0;
			currKey = 0;
		}
		//If you do not beat the fish, lose some health and continue fight
		if (hurt == true) {
			player.HEALTH -= Math.floor((Math.random() * 10) + 1);
			player.WATER -= Math.floor((Math.random() * (500 - 250)) + 250);
			playerCount = 0;
		}
		hurt = false;
	}

	function gameOverUI() {
		var time = "Time at sea: " + Math.floor(counter / 60) + " : " + counter % 60;
		c.textAlign = "center";
		c.fillStyle = "rgba(25, 25, 55, 0.90)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 15;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "30px Arial";
		c.strokeText("THE SCORCHING SEA HAS CLAIMED ANOTHER VICTIM", (canvasWidth / 2), (canvasHeight / 2) - 60);
		c.fillText("THE SCORCHING SEA HAS CLAMIED ANOTHER VICTIM", (canvasWidth / 2), (canvasHeight / 2) - 60);
		c.strokeText(time, (canvasWidth / 2), (canvasHeight / 2) + 60);
		c.fillText(time, (canvasWidth / 2), (canvasHeight / 2) + 60);
	}

	function winScreen() {
		c.textAlign = "center";
		c.fillStyle = "rgba(225, 255, 255, 0.90)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 15;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "30px Arial";
		c.strokeText("FOUND ATLANTIS", (canvasWidth / 2), (canvasHeight / 2) - 60);
		c.fillText("FOUND ATLANTIS", (canvasWidth / 2), (canvasHeight / 2) - 60);
	}

	//var centerX = Math.floor(Math.random() * ((tiles_dimension - tiles_dimension / 4) - tiles_dimension / 4) + (tiles_dimension / 4));
	//var centerY = Math.floor(Math.random() * ((tiles_dimension - tiles_dimension / 4) - tiles_dimension / 4) + (tiles_dimension / 4));
	var centerX = Math.floor(tiles_dimension / 2);
	var centerY = Math.floor(tiles_dimension / 2);
	var center = [centerX, centerY];
	drawTiles(center);

	function sq(x) {
		return x * x;
	};

	//-----------------------------------------
	// Create Objects
	//-----------------------------------------

	//multiples of 2
	var rockPos = new Array(10000);
	var cactusPos = new Array(2000);
	var homeBase = new Array(2);
	var promiseWater = new Array(2);
	//multiples of 12
	var villages = new Array(3600);
	//multiples of 8
	var caves = new Array(1200);
	//multiples of 12
	var boats = new Array(600);

	var objectSize = rockPos.length + homeBase.length + villages.length + promiseWater.length + cactusPos.length + caves.length + boats.length;
	var allObjects = new Array(objectSize);
	var shadows = new Array(objectSize);

	//multiples of 2
	var humanEnemies = new Array(4000);
	var fishEnemies = new Array(6500);
	var fishOrig = new Array(fishEnemies.length);
	var travellers = new Array(500);

	//items/stats
	var travellerStats = new Array(travellers.length);
	var villageItems = new Array(villages.length);
	var humanEnemiesStats = new Array(humanEnemies.length);

	var numOfPlayers = 4;
	var player = {
		X : 2,
		Y : -2,
		WATERORIG : 20000,
		WATER : 20000,
		UVORIG : 100,
		UV : 100,
		HEALTH : 100,
		SHOVEL : false,
		DETECTOR : false,
		COMPASS : false,
		MAP : false,
		PEN : false
	};

	var player2 = {
		X : 2,
		Y : -2,
		HEALTH : 100
	};

	var player3 = {
		X : 2,
		Y : -2,
		HEALTH : 100
	};

	var player4 = {
		X : 2,
		Y : -2,
		HEALTH : 100
	};

	var homeBase = {
		WATER : 25000
	};

	//------------------------------------------
	// Create Object Random Positions
	//------------------------------------------

	var i = 0;
	//create rocks and shadow positions
	for (; i < rockPos.length; i++) {
		rockPos[i] = Math.floor(Math.random() * (tiles_dimension) - tiles_dimension / 2);
		allObjects[i] = rockPos[i];
		if (!(i % 2 == 0)) {
			shadows[i] = rockPos[i] + 1;
		} else {
			shadows[i] = rockPos[i];
		}
	}

	//creates cactus positions
	for (var j = 0; j < cactusPos.length; j++) {
		cactusPos[j] = Math.floor(Math.random() * (tiles_dimension) - tiles_dimension / 2);
		allObjects[i] = cactusPos[j];
		if (!(i % 2 == 0)) {
			shadows[i] = cactusPos[j] + 1;
		} else {
			shadows[i] = cactusPos[j];
		}
		i++;
	}

	//create villages positions
	for (var j = 0; j < villages.length; j = j + 12) {
		//food 0-5
		villageItems[j] = Math.floor(Math.random() * (5));
		//water 100 - 1000
		villageItems[j + 1] = Math.floor((Math.random() * (1000 - 100)) + 100);
		//items 0 - 10
		villageItems[j + 2] = Math.floor(Math.random() * (10));
		//clues 0 - 12
		villageItems[j + 3] = Math.floor(Math.random() * clues.length);

		villages[j] = Math.floor(Math.random() * (tiles_dimension) - (tiles_dimension / 2) - 2);
		villages[j + 1] = Math.floor(Math.random() * (tiles_dimension) - (tiles_dimension / 2) - 2);
		villages[j + 2] = villages[j] + 1;
		villages[j + 3] = villages[j + 1];
		villages[j + 4] = villages[j] + 2;
		villages[j + 5] = villages[j + 1];

		villages[j + 6] = villages[j];
		villages[j + 7] = villages[j + 1] - 1;
		villages[j + 8] = villages[j] + 1;
		villages[j + 9] = villages[j + 1] - 1;
		villages[j + 10] = villages[j] + 2;
		villages[j + 11] = villages[j + 1] - 1;

		for (var x = 0; x < 12; x++) {
			allObjects[i + x] = villages[j + x];
			if (!(x % 2 == 0) && x < 6) {
				shadows[i + x] = villages[j + x] + 1;
			} else {
				shadows[i + x] = villages[j + x];
			}
			if (x > 6) {
				shadows[i + x] = -tiles_dimension;
			}
		}
		i += 12;
	}

	//create cave positions
	for (var j = 0; j < caves.length; j = j + 8) {
		caves[j] = Math.floor(Math.random() * (tiles_dimension) - (tiles_dimension / 2) - 2);
		caves[j + 1] = Math.floor(Math.random() * (tiles_dimension) - (tiles_dimension / 2) - 2);
		caves[j + 2] = caves[j] + 1;
		caves[j + 3] = caves[j + 1];
		caves[j + 4] = caves[j];
		caves[j + 5] = caves[j + 1] - 1;
		caves[j + 6] = caves[j] + 1;
		caves[j + 7] = caves[j + 1] - 1;
		for (var x = 0; x < 8; x++) {
			allObjects[i + x] = caves[j + x];
			if (!(x % 2 == 0) && x < 4) {
				shadows[i + x] = caves[j + x] + 1;
			} else {
				shadows[i + x] = caves[j + x];
			}
			if (x > 4) {
				shadows[i + x] = -tiles_dimension;
			}
		}
		i += 8;
	}

	for (var j = 0; j < boats.length; j = j + 12) {
		boats[j] = Math.floor(Math.random() * (tiles_dimension) - (tiles_dimension / 2) - 2);
		boats[j + 1] = Math.floor(Math.random() * (tiles_dimension) - (tiles_dimension / 2) - 2);
		boats[j + 2] = boats[j] + 1;
		boats[j + 3] = boats[j + 1];
		boats[j + 4] = boats[j];
		boats[j + 5] = boats[j + 1] - 1;
		boats[j + 6] = boats[j] + 1;
		boats[j + 7] = boats[j + 1] - 1;
		boats[j + 8] = boats[j];
		boats[j + 9] = boats[j + 1] - 2;
		boats[j + 10] = boats[j] + 1;
		boats[j + 11] = boats[j + 1] - 2;
		for (var x = 0; x < 12; x++) {
			allObjects[i + x] = boats[j + x];
			if (!(x % 2 == 0) && x < 4) {
				shadows[i + x] = boats[j + x] + 1;
			} else {
				shadows[i + x] = boats[j + x];
			}
			if (x > 4) {
				shadows[i + x] = -tiles_dimension;
			}
		}
		i += 12;
	}

	//create home base
	homeBase[0] = player.X;
	homeBase[1] = player.Y - 1;
	allObjects[i] = homeBase[0];
	shadows[i] = homeBase[0];
	allObjects[++i] = homeBase[1];
	shadows[i] = player.Y;
	promiseWater[0] = Math.floor(Math.random() * (tiles_dimension) - tiles_dimension / 2);
	promiseWater[1] = Math.floor(Math.random() * (tiles_dimension) - tiles_dimension / 2);

	//create human enemy positions
	for (var i = 0; i < humanEnemies.length; i++) {
		humanEnemies[i] = Math.floor(Math.random() * (tiles_dimension) - tiles_dimension / 2);
	}

	for (var i = 0; i < fishEnemies.length; i++) {
		fishEnemies[i] = Math.floor(Math.random() * (tiles_dimension) - tiles_dimension / 2);
		fishOrig[i] = fishEnemies[i];
	}

	for (var i = 0; i < travellers.length; i++) {
		if (!(i % 2 == 0))
			travellerStats[i] = Math.ceil((Math.random() * 5));
		else
			travellerStats[i] = Math.floor((Math.random() * (5000 - 500)) + 500);
		travellers[i] = Math.floor(Math.random() * (tiles_dimension) - tiles_dimension / 2);
	}

	//-------------------------------------------
	//helper functions for hookKeys()
	//-------------------------------------------

	var speed = .1;
	function decAll(i) {
		rockPos[i] -= moveSpeed;
		cactusPos[i] -= moveSpeed;
		shadows[i] -= moveSpeed;
		humanEnemies[i] -= moveSpeed;
		fishEnemies[i] -= moveSpeed;
		fishOrig[i] -= moveSpeed;
		homeBase[i] -= moveSpeed;
		villages[i] -= moveSpeed;
		allObjects[i] -= moveSpeed;
		promiseWater[i] -= moveSpeed;
		travellers[i] -= moveSpeed;
		caves[i] -= moveSpeed;
		boats[i] -= moveSpeed;
	}

	function inAll(i) {
		rockPos[i] += moveSpeed;
		cactusPos[i] += moveSpeed;
		shadows[i] += moveSpeed;
		humanEnemies[i] += moveSpeed;
		fishEnemies[i] += moveSpeed;
		fishOrig[i] += moveSpeed;
		homeBase[i] += moveSpeed;
		villages[i] += moveSpeed;
		allObjects[i] += moveSpeed;
		promiseWater[i] += moveSpeed;
		travellers[i] += moveSpeed;
		caves[i] += moveSpeed;
		boats[i] += moveSpeed;
	}

	function fight() {
		var keyNum = 0;
		// var keySym;
		// var keyPosX = 0;
		printKeys = true;
		for (var i = 0; i < 4; ++i) {
			keyNum = Math.random();
			if (keyNum >= 0 && keyNum < .25) {
				//keySym = "w";
				//drawKey(keySym, keyPosX);
				hitKeys.push("W");
			} else if (keyNum >= .25 && keyNum < .50) {
				//keySym = "a";
				//drawKey(keySym, keyPosX);
				hitKeys.push("A");
			} else if (keyNum >= .50 && keyNum < .75) {
				//keySym = "s";
				//drawKey(keySym, keyPosX);
				hitKeys.push("S");
			} else {
				//keySym = "d";
				//drawKey(keySym, keyPosX);
				hitKeys.push("D");
			}
		}

	}

	function drawKeys(hitKeys) {
		for (var i = 0; i < hitKeys.length; i++) {
			c.lineWidth = 3;
			c.fillStyle = 'rgba(255, 255, 255, 1)';
			c.strokeStyle = 'rgba(0, 0, 0, 1)';
			c.font = "40px Arial";
			c.strokeText(hitKeys[i], (canvasWidth / 6) + i * 40, (canvasHeight / 10));
			c.fillText(hitKeys[i], (canvasWidth / 6) + i * 40, (canvasHeight / 10));
			//console.log("contents of hitkeys " + hitKeys[i]);
		}
		//console.log("size of array: " + hitKeys.length);
	}

	function changeKeyColor(hitKeys) {
		for (var i = 0; i < currKey; i++) {
			//Outline finished keys red
			c.lineWidth = 3;
			c.fillStyle = 'rgba(255, 255, 255, 1)';
			c.strokeStyle = 'rgba(255, 0, 0, 1)';
			c.font = "40px Arial";
			c.strokeText(hitKeys[i], (canvasWidth / 6) + i * 40, (canvasHeight / 10));
			c.fillText(hitKeys[i], (canvasWidth / 6) + i * 40, (canvasHeight / 10));
			//console.log("size of changekeycolorarray: " + hitKeys.length);
			//console.log("contents of change key color" + hitKeys[i]);
		}
		//Outline current key green
		c.lineWidth = 3;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 255, 43, 1)';
		c.font = "40px Arial";
		c.strokeText(hitKeys[currKey], (canvasWidth / 6) + currKey * 40, (canvasHeight / 10));
		c.fillText(hitKeys[currKey], (canvasWidth / 6) + currKey * 40, (canvasHeight / 10));
	}

	function execKeys(hitKeys, matchKey) {
		// Keeps track of the current index we are at
		if (hitKeys[currKey] == matchKey) {
			currKey++;
			console.log(currKey);
		} else
			hurt = true;

	}

	var moveSpeed = 1;

	function moveOthersY(i) {
		if (player.HEALTH != 0)
			player2.Y += moveSpeed * i;
		if (player.HEALTH != 0 && player2.HEALTH != 0)
			player3.Y += moveSpeed * i;
		if (player.HEALTH != 0 && player2.HEALTH != 0 && player3.HEALTH != 0)
			player4.Y += moveSpeed * i;
	}

	function moveOthersX(i) {
		if (player.HEALTH != 0)
			player2.X += moveSpeed * i;
		if (player.HEALTH != 0 && player2.HEALTH != 0)
			player3.X += moveSpeed * i;
		if (player.HEALTH != 0 && player2.HEALTH != 0 && player3.HEALTH != 0)
			player4.X += moveSpeed * i;
	}

	//enemy ai
	var othersSpeed = .25;
	var skip = false;
	var humanSpeed = 40;
	setInterval(function() {
		//for loop
		if (!inBattle && !inVillage && !inHome && !talking && !pause && !inCave && !inBoat) {
			for (var i = 0; i < humanEnemies.length; i += 2) {
				if (humanEnemies[i] > player.X && humanEnemies[i] < 10 && humanEnemies[i + 1] > -10 && humanEnemies[i + 1] < 4 && skip == false) {
					humanEnemies[i] -= othersSpeed;
					skip = true;
				}
				if (humanEnemies[i] < player.X && humanEnemies[i] > -4 && humanEnemies[i + 1] > -10 && humanEnemies[i + 1] < 4 && skip == false) {
					humanEnemies[i] += othersSpeed;
					skip = true;
				}
				if (humanEnemies[i + 1] > player.Y && humanEnemies[i + 1] < 4 && humanEnemies[i] > -4 && humanEnemies[i] < 10 && skip == false) {
					humanEnemies[i + 1] -= othersSpeed;
					skip = true;
				}
				if (humanEnemies[i + 1] < player.Y && humanEnemies[i + 1] > -10 && humanEnemies[i] > -4 && humanEnemies[i] < 10 && skip == false) {
					humanEnemies[i + 1] += othersSpeed;
					skip = true;
				}
				if (humanEnemies[i] == player.X && humanEnemies[i + 1] == player.Y) {
					inBattle = true;
					humBat = true;
					enemyPosition = i;
					randomDrawSpeed = Math.random() * 100;
					break;
				}
				skip = false;
			}
		}
	}, humanSpeed);

	//fish enemy ai
	var fishSkip = false;
	var fishSpeed = 25;
	setInterval(function() {
		//for loop
		if (!inBattle && !inVillage && !inHome && !day && !talking && !pause && !inCave && !inBoat) {
			for (var i = 0; i < fishEnemies.length; i += 2) {
				if (fishEnemies[i] > player.X && fishEnemies[i] < 12 && fishEnemies[i + 1] > -12 && fishEnemies[i + 1] < 6 && fishSkip == false) {
					fishEnemies[i] -= othersSpeed;
					fishSkip = true;
				}
				if (fishEnemies[i] < player.X && fishEnemies[i] > -6 && fishEnemies[i + 1] > -12 && fishEnemies[i + 1] < 6 && fishSkip == false) {
					fishEnemies[i] += othersSpeed;
					fishSkip = true;
				}
				if (fishEnemies[i + 1] > player.Y && fishEnemies[i + 1] < 6 && fishEnemies[i] > -6 && fishEnemies[i] < 12 && fishSkip == false) {
					fishEnemies[i + 1] -= othersSpeed;
					fishSkip = true;
				}
				if (fishEnemies[i + 1] < player.Y && fishEnemies[i + 1] > -12 && fishEnemies[i] > -6 && fishEnemies[i] < 12 && fishSkip == false) {
					fishEnemies[i + 1] += othersSpeed;
					fishSkip = true;
				}
				if (fishEnemies[i] == player.X && fishEnemies[i + 1] == player.Y) {
					inBattle = true;
					fishBat = true;
					enemyPosition = i;
					fight();
					break;
				}
				fishSkip = false;
			}
		}
	}, fishSpeed);

	setInterval(function() {
		if (!inVillage && !inBattle && !talking && !pause && !inCave && !inBoat) {
			if (player2.X > player.X)
				player2.X -= othersSpeed;
			if (player2.X < player.X)
				player2.X += othersSpeed;
			if (player2.Y > player.Y)
				player2.Y -= othersSpeed;
			if (player2.Y < player.Y)
				player2.Y += othersSpeed;
		}
	}, 20);
	setInterval(function() {
		if (!inVillage && !inBattle && !talking && !pause && !inCave && !inBoat) {
			if (player3.X > player.X)
				player3.X -= othersSpeed;
			if (player3.X < player.X)
				player3.X += othersSpeed;
			if (player3.Y > player.Y)
				player3.Y -= othersSpeed;
			if (player3.Y < player.Y)
				player3.Y += othersSpeed;
		}
	}, 25);
	setInterval(function() {
		if (!inVillage && !inBattle && !talking && !pause && !inCave && !inBoat) {
			if (player4.X > player.X)
				player4.X -= othersSpeed;
			if (player4.X < player.X)
				player4.X += othersSpeed;
			if (player4.Y > player.Y)
				player4.Y -= othersSpeed;
			if (player4.Y < player.Y)
				player4.Y += othersSpeed;
		}
	}, 30);

	//the lower the faster
	var playerSpeed = 60;
	setInterval(function() {
		if (goDown) {
			if (center[1] < tiles_dimension + 2) {
				center[1] += moveSpeed;
				moveOthersY(-1);
				for (var i = 1; i < allObjects.length; i += 2) {
					decAll(i);
					if (allObjects[i] == player.Y && allObjects[i - 1] == player.X) {
						center[1] -= moveSpeed;
						moveOthersY(1);
						document.getElementById("footstep").volume = 0.05;
						document.getElementById("footstep").play();
						for (var j = 1; j < allObjects.length; j += 2) {
							inAll(j);
						}
					}
				}
			}
			if (inSun && player.WATER > 0) {
				if (player.UV > 0) {
					player.UV--;
				}
				player.WATER -= 1 * numOfPlayers;
			}
		}
	}, playerSpeed);

	setInterval(function() {
		if (goUp) {
			if (center[1] > 3) {
				center[1] -= moveSpeed;
				moveOthersY(1);
				for (var i = 1; i < allObjects.length; i += 2) {
					inAll(i);
					if (allObjects[i] == player.Y && allObjects[i - 1] == player.X) {
						center[1] += moveSpeed;
						moveOthersY(-1);
						document.getElementById("footstep").volume = 0.05;
						document.getElementById("footstep").play();
						for (var j = 1; j < allObjects.length; j += 2) {
							decAll(j);
						}
					}
				}
			}
			if (inSun && player.WATER > 0) {
				if (player.UV > 0) {
					player.UV--;
				}
				player.WATER -= 1 * numOfPlayers;
			}

		}
	}, playerSpeed);

	setInterval(function() {
		if (goLeft) {
			if (center[0] > -3) {
				center[0] -= moveSpeed;
				moveOthersX(1);
				for (var i = 0; i < allObjects.length; i += 2) {
					inAll(i);
					if (allObjects[i] == player.X && allObjects[i + 1] == player.Y) {
						center[0] += moveSpeed;
						moveOthersX(-1);
						document.getElementById("footstep").volume = 0.05;
						document.getElementById("footstep").play();
						for (var j = 0; j < allObjects.length; j += 2) {
							decAll(j);
						}
					}
				}
			}
			if (inSun && player.WATER > 0) {
				if (player.UV > 0) {
					player.UV--;
				}
				player.WATER -= 1 * numOfPlayers;
			}
		}
	}, playerSpeed);

	setInterval(function() {
		if (goRight) {
			if (center[0] < tiles_dimension - 4) {
				center[0] += moveSpeed;
				moveOthersX(-1);
				for (var i = 0; i < allObjects.length; i += 2) {
					decAll(i);
					if (allObjects[i] == player.X && allObjects[i + 1] == player.Y) {
						center[0] -= moveSpeed;
						moveOthersX(1);
						document.getElementById("footstep").volume = 0.05;
						document.getElementById("footstep").play();
						for (var j = 0; j < allObjects.length; j += 2) {
							inAll(j);
						}
					}
				}
			}
			if (inSun && player.WATER > 0) {
				if (player.UV > 0) {
					player.UV--;
				}
				player.WATER -= 1 * numOfPlayers;
			}

		}
	}, playerSpeed);

	//-------------------------------------------------
	//control player which moves all objects also
	//AI movement is in here UP and DOWN are flipped
	//-------------------------------------------------

	// The keys without numbers are WASD keys
	var matchKey;
	var keys = {
		LEFT : 65,
		LEFT2 : 37,
		UP : 87,
		UP2 : 38,
		RIGHT : 68,
		RIGHT2 : 39,
		DOWN : 83,
		DOWN2 : 40,
		ONE : 49,
		TWO : 50,
		THREE : 51,
		FOUR : 52,
		ENTER : 13,
		PAUSE : 27,
		SPACE : 32,
		DoN_E : 69
	};

	var goUp = false;
	var goDown = false;
	var goLeft = false;
	var goRight = false;
	function hookKeys() {
		window.addEventListener('keydown', function(evt) {
			if (!pause) {
				switch (evt.keyCode) {
				case keys.DOWN:
					if (!inVillage && !inBattle && !gameOver && !inHome && !youWin && !talking && !inCave && !inBoat)
						goDown = true;
					else if (!inVillage && fishBat && inBattle) {
						matchKey = "S";
						execKeys(hitKeys, matchKey);
					}
					break;
				case keys.UP:
					if (!inVillage && !inBattle && !gameOver && !inHome && !youWin && !talking && !inCave && !inBoat)
						goUp = true;
					else if (!inVillage && fishBat && inBattle) {
						matchKey = "W";
						execKeys(hitKeys, matchKey);
					}
					break;
				case keys.LEFT:
					if (!inVillage && !inBattle && !gameOver && !inHome && !youWin && !talking && !inCave && !inBoat)
						goLeft = true;
					else if (!inVillage && fishBat && inBattle) {
						matchKey = "A";
						execKeys(hitKeys, matchKey);
					}
					break;
				case keys.RIGHT:
					if (!inVillage && !inBattle && !gameOver && !inHome && !youWin && !talking && !inCave && !inBoat)
						goRight = true;
					else if (!inVillage && fishBat && inBattle) {
						matchKey = "D";
						execKeys(hitKeys, matchKey);
					}
					break;
				case keys.ONE:
					if (inVillage)
						buyHealth = true;
					if (inHome)
						numOfPlayers = 1;
					if (talking)
						getWater = true;
					break;
				case keys.TWO:
					if (inVillage)
						buyWater = true;
					if (inHome)
						numOfPlayers = 2;
					break;
				case keys.THREE:
					if (inVillage && player.WATER > 1000)
						buyItem = true;
					if (inHome)
						numOfPlayers = 3;
					break;
				case keys.FOUR:
					if (inVillage) {
						pickClue = Math.floor(Math.random() * clues.length);
						getClue = true;
					}
					if (inHome)
						numOfPlayers = 4;
					break;
				case keys.ENTER:
					break;
				case keys.PAUSE:
					pause = true;
					break;
				case keys.DoN_E:
					if (day)
						counter = 60;
					else
						counter = 0;
				case keys.SPACE:
					if (inBattle) {
						document.getElementById("gunShot").volume = .5;
			            document.getElementById("gunShot").play();
						playerCount = count;
						count = 0;
						hurt = true;
					}
					if (!inBattle) {
						drinkCac = true;
						enter = !enter;
						talk = !talk;
						enterCave = !enterCave;
						enterBoat = !enterBoat;
						if (player.SHOVEL == true)
							dig = true;
					}
					if (nearHome) {
						inHome = false;
					}
					if (talking) {
						talking = !talking;
					}
					if (inCave) {
						inCave = !inCave;
					}
					if(inBoat){
						inBoat = !inBoat;
					}
					if (inVillage) {
						inVillage = !inVillage;
					}
					if (getClue) {
						getClue = false;
					}
					break;
				};
			} else {
				switch(evt.keyCode) {
				case keys.PAUSE:
					pause = false;
					break;
				};
			}
		}, false);

	}

	function hookKeys2() {
		window.addEventListener('keyup', function(evt) {
			if (!pause) {
				switch (evt.keyCode) {
				case keys.DOWN:
					if (!inVillage && !inBattle && !gameOver && !inHome && !youWin && !talking && !inCave && !inBoat)
						goDown = false;
					break;
				case keys.UP:
					if (!inVillage && !inBattle && !gameOver && !inHome && !youWin && !talking && !inCave && !inBoat)
						goUp = false;
					break;
				case keys.LEFT:
					if (!inVillage && !inBattle && !gameOver && !inHome && !youWin && !talking && !inCave && !inBoat)
						goLeft = false;
					break;
				case keys.RIGHT:
					if (!inVillage && !inBattle && !gameOver && !inHome && !youWin && !talking && !inCave && !inBoat)
						goRight = false;
					break;

				};
			}
		}, false);

	}

	//draw all objects
	var range = 17;
	function drawAll() {
		//draw floor
		drawTiles(center);
		for (var i = 0; i < allObjects.length; i += 2) {
			if (shadows[i] < range && shadows[i] > -range && shadows[i + 1] < range && shadows[i + 1] > -range) {
				//comment this out when draw all shadow sprites
				drawTile(shadows[i], shadows[i + 1], 1.0);
			}
			if (rockPos[i] < range && rockPos[i] > -range && rockPos[i + 1] < range && rockPos[i + 1] > -range)
				drawRock(rockPos[i], rockPos[i + 1], i);
			if (cactusPos[i] < range && cactusPos[i] > -range && cactusPos[i + 1] < range && cactusPos[i + 1] > -range)
				drawCactus(cactusPos[i], cactusPos[i + 1]);
			if (humanEnemies[i] < range && humanEnemies[i] > -range && humanEnemies[i + 1] < range && humanEnemies[i + 1] > -range)
				drawEnemy(humanEnemies[i], humanEnemies[i + 1]);
			if (villages[i] < range && villages[i] > -range && villages[i + 1] < range && villages[i + 1] > -range)
				drawVillage(villages[i], villages[i + 1]);
			if (!day && fishEnemies[i] < range && fishEnemies[i] > -range && fishEnemies[i + 1] < range && fishEnemies[i + 1] > -range)
				drawFishEnemy(fishEnemies[i], fishEnemies[i + 1]);
			if (travellers[i] < range && travellers[i] > -range && travellers[i + 1] < range && travellers[i + 1] > -range)
				drawTraveller(travellers[i], travellers[i + 1]);
			if (caves[i] < range && caves[i] > -range && caves[i + 1] < range && caves[i + 1] > -range)
				drawCave(caves[i], caves[i + 1]);
			if (boats[i] < range && boats[i] > -range && boats[i + 1] < range && boats[i + 1] > -range)
				drawBoat(boats[i], boats[i + 1]);
		}
		drawHomeBase(homeBase[0], homeBase[1]);
		if (player4.HEALTH > 0 && numOfPlayers > 3)
			drawPlayer(player4.X - .3, player4.Y - .3);
		if (player3.HEALTH > 0 && numOfPlayers > 2)
			drawPlayer(player3.X - .3, player3.Y + .3);
		if (player2.HEALTH > 0 && numOfPlayers > 1)
			drawPlayer(player2.X + .3, player2.Y - .3);
		if (player.HEALTH > 0 && numOfPlayers > 0)
			drawPlayer(player.X + .3, player.Y + .3);
	}

	//decrease variables if situation
	setInterval(function() {
		if (!inBattle && !gameOver && !inHome && !pause && !youWin && !inVillage && !talking && !inCave && !inBoat) {
			if (inSun && player.WATER > 0 && day)
				player.WATER -= 5 * numOfPlayers;
			if (!inSun && player.WATER > 0 && day)
				player.WATER -= 3 * numOfPlayers;
			if (player.WATER > 0 && !day)
				player.WATER -= 1 * numOfPlayers;
			if (player.WATER <= 0 || player.UV <= 0) {
				if (numOfPlayers > 0)
					player.HEALTH -= Math.floor(Math.random() * (6 - 1) + 1);
				if (numOfPlayers > 1)
					player2.HEALTH -= Math.floor(Math.random() * (6 - 1) + 1);
				if (numOfPlayers > 2)
					player3.HEALTH -= Math.floor(Math.random() * (6 - 1) + 1);
				if (numOfPlayers > 3)
					player4.HEALTH -= Math.floor(Math.random() * (6 - 1) + 1);
			}
			if (!inSun && player.UV != player.UVORIG)
				player.UV += 11;
		}
	}, 400);

	function normalStats() {
		if (player.HEALTH < 0)
			player.HEALTH = 0;
		if (player.HEALTH > 100)
			player.HEALTH = 100;
		if (player2.HEALTH < 0)
			player2.HEALTH = 0;
		if (player2.HEALTH > 100)
			player2.HEALTH = 100;
		if (player3.HEALTH < 0)
			player3.HEALTH = 0;
		if (player3.HEALTH > 100)
			player3.HEALTH = 100;
		if (player4.HEALTH < 0)
			player4.HEALTH = 0;
		if (player4.HEALTH > 100)
			player4.HEALTH = 100;
		if (player.WATER < 0)
			player.WATER = 0;
		if (player.WATER > player.WATERORIG)
			player.WATER = player.WATERORIG;
		if (player.UV < 0)
			player.UV = 0;
		if (player.UV >= player.UVORIG)
			player.UV = player.UVORIG;
	}

	// ----------------------------------------
	//     Animation
	// ----------------------------------------

	var inSun = false;
	var inBattle = false;
	var printKeys = false;
	var pause = false;
	var enter = false;
	var inVillage = false;
	var drinkCac = false;
	var fishBat = false;
	var humBat = false;
	//var changeColor = false;
	var keysDone = false;
	//var keySym;
	var hitKeys = new Array();
	var currKey = 0;
	var count = 0;
	var playerCount = 0;
	var enemyPosition = -1;
	var randomDrawSpeed = 0;
	var dig = false;
	var gameOver = false;
	var nearHome = false;
	var inHome = true;
	var youWin = false;
	var inShadow = false;
	var talk = false;
	var talking = false;
	var getWater = false;
	var enterCave = false;
	var inCave = false;
	var enterBoat = false;
	var inBoat = false;
	function animate() {
		requestAnimationFrame(animate);
		//where end game is at
		//console.log(promiseWater[0], promiseWater[1]);
		c.clearRect(0, 0, canvasWidth, canvasHeight);
		drawAll();
		drawUI();
		if (!pause) {
			//---------------------conditions-----------------------
			//if in shadow
			for (var i = 0; i < shadows.length; i += 2) {
				if (shadows[i] == player.X && shadows[i + 1] == player.Y) {
					inSun = false;
					inShadow = true;
					break;
				} else {
					inSun = true;
					inShadow = false;
				}
			}

			//destroy cactus and replenish water
			for (var i = 0; i < cactusPos.length; i += 2) {
				if (((cactusPos[i] == player.X && cactusPos[i + 1] + 1 == player.Y) || (cactusPos[i] == player.X && cactusPos[i + 1] - 1 == player.Y) || (cactusPos[i] == player.X + 1 && cactusPos[i + 1] == player.Y) || (cactusPos[i] == player.X - 1 && cactusPos[i + 1] == player.Y)) && drinkCac == true) {
					//document.getElementById('drink').volume =0.05;
					document.getElementById('drink').play();
					player.WATER += 250;
					cactusPos[i] = -tiles_dimension;
					allObjects[10000 + i] = -tiles_dimension;
					shadows[10000 + i] = -tiles_dimension;
					break;
				}
			}

			//if near a traveller
			if (talk && !inBattle) {
				for (var i = 0; i < travellers.length; i += 2) {
					if ((player.X == travellers[i] && player.Y == travellers[i + 1]) || (player.X == travellers[i] + 1 && player.Y == travellers[i + 1]) || (player.X == travellers[i] - 1 && player.Y == travellers[i + 1]) || (player.X == travellers[i] && player.Y == travellers[i + 1] + 1) || (player.X == travellers[i] && player.Y == travellers[i + 1] - 1)) {
						talking = true;
						drawTravellerUI(i);
						break;
					}
				}
			}
			if (talking == false) {
				talk = false;
			}
			if (enterCave && !inBattle) {
				for (var i = 0; i < caves.length; i += 2) {
					if (player.X == caves[i] && player.Y == caves[i + 1] + 1) {
						inCave = true;
						drawCaveUI(i);
						break;
					}
				}
			}
			if (inCave == false) {
				enterCave = false;
			}
			if (enterBoat && !inBattle) {
				for (var i = 0; i < boats.length; i += 2) {
					if (player.X == boats[i] && player.Y == boats[i + 1] + 1) {
						inBoat = true;
						drawBoatUI(i);
						break;
					}
				}
			}
			if (inBoat == false) {
				enterBoat = false;
			}

			drinkCac = false;
			if (inSun) {
				enter = false;
			}
			// If Party encounters a Human battle
			if (inBattle && !enter && !fishBat && humBat && !inVillage && !inHome && !gameOver && !youWin) {
				document.getElementById('overworld').pause();
				document.getElementById("wind").volume = 0.05;
				document.getElementById('wind').play();
				count++;
				drawBattleScreen(enemyPosition, count, playerCount, randomDrawSpeed);
			}

			// If in a Fish battle, display keys on screen
			if (fishBat && !enter && inBattle && !humBat && !inVillage && !inHome && !gameOver && !youWin) {
				//console.log("2 currKey: " + currKey + " hitKeys length: " + hitKeys.length);
				count++;
				drawBattleScreen_fish(enemyPosition, count, playerCount);
				drawKeys(hitKeys);
				changeKeyColor(hitKeys);
				if (currKey == hitKeys.length && hitKeys.length != 0) {
					keysDone = true;
					console.log(currKey);
				}
			}

			//if press enter and in village go to a village ui
			if (enter && !inBattle) {
				for (var i = 0; i < villages.length; i += 2) {
					if (player.X == villages[i] && player.Y == villages[i + 1] + 1) {
						inVillage = true;
						drawVillageUI(i);
						document.getElementById("overworld").pause();
						document.getElementById("overworld").currentTime = 0;
						document.getElementById('village').volume = 0.1;
						document.getElementById('village').play();
						break;
					}
				}
			}
			if (inBattle || gameOver || inVillage || youWin || talking || inCave || inBoat) {
				goDown = false;
				goUp = false;
				goRight = false;
				goLeft = false;
			}

			//if all death conditions
			if ((player.HEALTH < 1 && player2.HEALTH < 1 && player3.HEALTH < 1 && player4.HEALTH < 1) && numOfPlayers == 4) {
				gameOverUI();
				gameOver = true;
			}
			if ((player.HEALTH < 1 && player2.HEALTH < 1 && player3.HEALTH < 1) && numOfPlayers == 3) {
				gameOverUI();
				gameOver = true;
			}
			if ((player.HEALTH < 1 && player2.HEALTH < 1) && numOfPlayers == 2) {
				gameOverUI();
				gameOver = true;
			}
			if ((player.HEALTH < 1) && numOfPlayers == 1) {
				gameOverUI();
				gameOver = true;
			}
			if (inHome == true && nearHome == true && counter == 0) {
				homeUI();
			}
			if (youWin) {
				winScreen();
			}

			//flow of stats based on conditions here
			if (!inBattle && !gameOver && !inHome && !youWin) {
				//inVillage = false;
				document.getElementById("overworld").play();
				document.getElementById('village').pause();
				document.getElementById('village').currentTime = 0;
				//sun out?
				if ((Math.floor(counter / dayLength)) % 2 == 1) {
					day = false;
					inSun = false;
					player.UV = player.UVORIG;
				}

				if ((Math.floor(counter / dayLength)) % 2 == 0) {
					day = true;
				}

				//if found sacred water
				if (5 <= promiseWater[0] && -5 >= promiseWater[0] && 5 <= promiseWater[1] && -5 >= promiseWater[1] && dig == true) {
					youWin = true;
				}

			}

			//if at base, refill water and use base's water supply and press enter
			if (player.X == homeBase[0] && player.Y == homeBase[1] + 1 && enter && homeBase.WATER > 0) {
				homeBase.WATER -= (player.WATERORIG - player.WATER);
				player.WATER = player.WATERORIG;
				enter = false;
			}
			if (player.X == homeBase[0] && player.Y == homeBase[1] + 1) {
				nearHome = true;
			} else {
				nearHome = false;
			}

			dig = false;
			normalStats();
			if (inBattle) {
				goUp = false;
				goRight = false;
				goLeft = false;
				goDown = false;
			}
		}

	}

	animate();

}

