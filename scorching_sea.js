//IMPORTANT NOTES:
//4 random keys will appear in a battle
//(maybe just arrow keys to compact and simplicity)
//if fast enough player kills enemy and
//gets its water, else player loses hp
//
//find utilities in towns to help
//player find the cordinates of the
//sacred water source to win game
//cost water though
//ex: map, where water is by quadrents,
//cordinate indicator, quadrent indicator,
//shovel <-- need this to win,
//town finder, etc...
//
//implement more files because this
//one is too big

var img = new Image();
//img.onload = launchMe;
img.src = 'http://people.ucsc.edu/~brlgomez/20/textures/dune.png';
//img.src = 'http://ccrgeek.files.wordpress.com/2012/11/a2-tiles-with-overlays_2.png?w=512&h=384';

//var img2 = new Image();
//img2.onload = launchMe;
//img2.src = '/Images/village_prototype.png';

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
<<<<<<< HEAD

=======
var instrScreen = false;
>>>>>>> bfb6d1d35856e2c9c9e4ce17ea2578802038467c
var titleScreen = true;
addEventListener("keydown", function(key) {
	if (key.keyCode == 32 && instrScreen == false) {
		titleScreen = false;
		instrScreen = true;
	}
	else if(key.keyCode == 32 && instrScreen == true && titleScreen == false){
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
	}else if(titleScreen == false && instrScreen == true){
		c.fillRect(0,0,canvas.width,canvas.height);
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.font = "40px Arial";
		c.fillText("Instructions", canvas.width/2 - 150, canvas.height/2 - 200);
		c.font = "20px Arial";
		c.fillText("Use the 'A' 'W' 'S' 'D' keys to move", canvas.width/2 - 150, canvas.height/2 - 175);
		c.fillText("keep an eye on your water and hp meters", canvas.width/2 - 150, canvas.height/2 -150);
		c.fillText("You will need both to survive", canvas.width/2 - 150, canvas.height/2 - 100);
		c.fillText("Take refuge in shade to keep skin integrity and water from depleting", canvas.width/2 - 150, canvas.height/2 - 50);
		c.fillText("Refill water at main base that is marked by aqua square", canvas.width/2 - 150, canvas.height/2 - 25);
		c.fillText("Fight enemies by pressing spacebar as soon as the word 'Draw' appears onscreen", canvas.width/2 - 150, canvas.height/2);
	}else if(titleScreen == false && instrScreen == false ) {
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
	hookKeys();

	// ----------------------------------------
	//     Tiles Setup
	// ----------------------------------------
	var tiles_dimension = 200;

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
	var dayLength = 10;
	//seconds
	setInterval(function() {
		if (!pause && !inVillage && !inBattle && player.HEALTH > 0) {++counter;
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
	var scale = 90.0;
	// relative scale for the x of the tile. use it to stretch tiles.
	var relScaleX = 1;

	var experimental_useBitmapTiles = true;

	// how many tiles do we show in the back ?
	var viewBackDepth = 17;
	//13
	// how many tiles do we show in the front ?
	var viewFrontDepth = 23;
	//14
	// how many tiles do we show on the left ?
	var viewLeftDepth = 12;
	//10
	// how many tiles do we show on the right ?
	var viewRightDepth = 13;
	//16

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

	// draw at tree at point coord.
	function drawTree(pt, alpha) {
		c.save();
		c.translate(pt[0], pt[1]);
		if (alpha < 1.0)
			c.globalAlpha = alpha;
		c.fillStyle = 'hsl(19,56%,40%);';
		c.fillRect(-4, -6, 8, 6);
		c.fillStyle = 'hsl(90,100%,47%);';
		c.fillRect(-8, -22, 16, 18);
		c.restore();
	}

	function drawRock(colOffset, rowOffset) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(45, 20, 10)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		c.fillRect(-35, -22, 45, 40);
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
		c.fillRect(-35, -22, 25, 40);
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
		c.lineWidth = 5;
		c.fillStyle = 'rgba(255, 255, 255, 0.75)';
		c.strokeStyle = 'rgba(0, 0, 0, 0.5)';
		c.font = "10px Arial";
		c.strokeText(waterLevel, -30, 20);
		c.fillText(waterLevel, -30, 20);
		c.strokeText(uvLevel, -20, 0);
		c.fillText(uvLevel, -20, 0);
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
		c.fillRect(-35, -22, 45, 40);
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
		c.fillRect(-35, -22, 45, 40);
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
		c.restore();
	}

	var tileBitmapX = 0;
	var tileBitmapY = 32;
	// with sprites
	function drawFilledTile(colOffset, rowOffset, tileValue) {
		tileValue = tileValue % 11;
		//1
		var pt = [colOffset - 0.5, rowOffset - 0.5];
		// where is the tile ?
		//var tileBitmapX = (0 | (tileValue / 4)) * 32 * 2;
		//var tileBitmapY = (tileValue % 4) * 32 * 2;//3
		//need global variable for the texture
		tileBitmapX = tileValue % 32;
		tileBitmapY = tileValue / 224;
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

	var steamX = 10;
	var steamY = 10;
	var mini = tiles_dimension;
	function drawUI() {
		//draw ui sun
		if (day) {
			c.fillStyle = 'rgba(255, 220, 100, 0.7)';
			c.fillRect(canvasWidth / 4, 10, 50, 50);
		} else {
			c.fillStyle = 'rgba(50, 25, 100, 0.2)';
			c.fillRect(0, 0, canvasWidth, canvasHeight);
		}

		//text
		var waterLevel = "ml: " + player.WATER;
		var uvLevel = "Integrity: " + player.UV;
		var hpLevel = "Health: " + player.HEALTH;
		var homeWaterLev = "Home ml: " + homeBase.WATER;
		var time = Math.floor(counter / 60) + " : " + counter % 60;
		var sunshine = "Sun out: " + day;
		c.lineWidth = 7;
		c.fillStyle = 'rgba(255, 255, 255, 0.75)';
		c.strokeStyle = 'rgba(0, 0, 0, 0.75)';
		c.font = "15px Arial";
		c.strokeText(sunshine, 50, 120);
		c.fillText(sunshine, 50, 120);
		c.strokeText(time, 50, 100);
		c.fillText(time, 50, 100);
		c.strokeText(homeWaterLev, 50, 80);
		c.fillText(homeWaterLev, 50, 80);
		c.strokeText(waterLevel, 50, 60);
		c.fillText(waterLevel, 50, 60);
		c.strokeText(hpLevel, 50, 40);
		c.fillText(hpLevel, 50, 40);
		c.strokeText(uvLevel, 50, 20);
		c.fillText(uvLevel, 50, 20);
		if (player.SHOVEL == true) {
			c.strokeText("Items:", 50, 140);
			c.fillText("Items:", 50, 140);
			c.strokeText("Shovel", 70, 160);
			c.fillText("Shovel", 70, 160);
		}

		//draw water meter
		steamY -= .01;
		if (steamY < -5) {
			steamY = 10;
		}
		var divWater = player.WATERORIG / (player.WATERORIG / 500);
		c.fillStyle = 'rgba(0, 0, 0, 0.75)';
		c.fillRect(5, ((-player.WATERORIG / divWater) + player.WATERORIG / divWater) + 5, 25, (player.WATERORIG / divWater + player.WATERORIG / divWater) + 10);
		c.fillStyle = 'rgba(150, 150, 150, 0.75)';
		c.fillRect(10, ((-player.WATERORIG / divWater) + player.WATERORIG / divWater) + 10, 15, (player.WATERORIG / divWater + player.WATERORIG / divWater));
		if (!inSun) {
			c.fillStyle = 'rgba(100, 100, 255, 0.9)';
		} else {
			c.fillStyle = 'rgba(255, 220, 255, 0.9)';
			c.fillRect(steamX, steamY, 5, 5);
			c.fillRect(steamX + 2, steamY - 4, 5, 5);
			c.fillRect(steamX + 4, steamY + 6, 5, 5);
			c.fillRect(steamX + 6, steamY - 3, 5, 5);
			c.fillRect(steamX + 8, steamY + 7, 5, 5);
			c.fillStyle = 'rgba(255, 150, 200, 0.9)';
		}
		c.fillRect(10, +player.WATERORIG / divWater * 2 - player.WATER / (divWater / 2) + 10, 15, ((player.WATER / divWater * 2) + player.WATERORIG / (divWater)) - 40);

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

	var buyHealth = false;
	var buyWater = false;
	var buyItem = false;
	function drawVillageUI(i) {
		var health;
		var water;
		var item;
		var place = i;
		if (i % 12 == 0) {
			health = villageItems[i];
			water = villageItems[i + 1];
			item = villageItems[i + 2];
		}
		if (i % 12 == 2) {
			health = villageItems[i - 2];
			water = villageItems[i - 1];
			item = villageItems[i];
			place = i - 2;
		}
		if (i % 12 == 4) {
			health = villageItems[i - 4];
			water = villageItems[i - 3];
			item = villageItems[i - 2];
			place = i - 4;
		}
		var healthAmount = "Health Pack: " + health;
		var waterAmount = "ml found: " + water;
		if (item == 0)
			var itemAmount = "Item: Nothing";
		if (item == 1)
			var itemAmount = "Item: Shovel";
		if (item == 2)
			var itemAmount = "Item: planned item";
		if (item == 3)
			var itemAmount = "Item: planned item";
		if (item == 4)
			var itemAmount = "Item: planned item";
		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 10;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "20px Arial";
		c.strokeText("IN VILLAGE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("IN VILLAGE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.strokeText(healthAmount, (canvasWidth / 3), canvasHeight / 3);
		c.fillText(healthAmount, (canvasWidth / 3), canvasHeight / 3);
		c.strokeText(waterAmount, (canvasWidth / 3) + 10, (canvasHeight / 3) + 30);
		c.fillText(waterAmount, (canvasWidth / 3) + 10, (canvasHeight / 3) + 30);
		c.strokeText(itemAmount, (canvasWidth / 3) + 20, (canvasHeight / 3) + 60);
		c.fillText(itemAmount, (canvasWidth / 3) + 20, (canvasHeight / 3) + 60);
		//if player wants to buy health
		if (buyHealth && health > 0 && player.WATER - 1000 > 0) {
			villageItems[place] -= 1;
			player.HEALTH += 10;
			player.WATER -= 1000;
			if (player.HEALTH > 100) {
				player.HEALTH = 100;
			}
			buyHealth = false;
		}
		if (buyWater && water > 0) {
			player.WATER += villageItems[place + 1];
			villageItems[place + 1] -= villageItems[place + 1];
			buyWater = false;
		}
		if (buyItem) {
			if (item == 1)
				player.SHOVEL = true;
			villageItems[place + 2] = 0;
			buyItem = false;
		}

	}

	var hurt = false;
	var drawStart = 60;
	function drawBattleScreen(i, count, playerCount, randDrawSpeed) {
		var drawEnd = Math.random() * (90 - 75) + 75;
		var yourHealth = "Health: " + player.HEALTH;
		var yourWater = "ml: " + player.WATER;
		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 20;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "60px Arial";
		if (count > (drawStart + randDrawSpeed)) {
			c.strokeText("DRAW", (canvasWidth / 2) - 75, (canvasHeight / 2) - 20);
			c.fillText("DRAW", (canvasWidth / 2) - 75, (canvasHeight / 2) - 20);
		}
		c.lineWidth = 10;
		c.font = "20px Arial";
		c.strokeText("IN BATTLE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("IN BATTLE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.strokeText(yourHealth, (canvasWidth / 4), (canvasHeight / 3));
		c.fillText(yourHealth, (canvasWidth / 4), (canvasHeight / 3));
		c.strokeText(yourWater, (canvasWidth / 4) + 10, (canvasHeight / 3) + 30);
		c.fillText(yourWater, (canvasWidth / 4) + 10, (canvasHeight / 3) + 30);
		if ((playerCount > (drawStart + randDrawSpeed)) && (playerCount < (drawEnd + randDrawSpeed)) && playerCount != 0 && hurt == true) {
			humanEnemies[i] = -tiles_dimension;
			humanEnemies[i + 1] = -tiles_dimension;
			playerCount = 0;
			player.WATER += Math.floor((Math.random() * (1000 - 500)) + 500);
			inBattle = false;
		}
		if (hurt == true && ((playerCount > (drawEnd + randDrawSpeed)) || (playerCount < (drawStart + randDrawSpeed))) && playerCount != 0) {
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
		c.strokeText("THE SCORCHING SEA HAS CLAMIED ANOTHER VICTIM", (canvasWidth / 2), (canvasHeight / 2)-60);
		c.fillText("THE SCORCHING SEA HAS CLAMIED ANOTHER VICTIM", (canvasWidth / 2), (canvasHeight / 2)-60);
		c.strokeText(time, (canvasWidth / 2), (canvasHeight / 2) + 60);
		c.fillText(time, (canvasWidth / 2), (canvasHeight / 2) + 60);

	}

	var centerX = tiles_dimension / 2;
	var centerY = tiles_dimension / 2;
	var center = [centerX, centerY];
	drawTiles(center);

	function sq(x) {
		return x * x;
	};

	//-----------------------------------------
	// Create Objects
	//-----------------------------------------

	var rockPos = new Array(200);
	var cactusPos = new Array(100);
	var homeBase = new Array(2);
	var villages = new Array(120);
	var promiseWater = new Array(2);

	var objectSize = rockPos.length + homeBase.length + villages.length + promiseWater.length + cactusPos.length;
	var allObjects = new Array(objectSize);
	var shadows = new Array(objectSize);

	var humanEnemies = new Array(20);

	var villageItems = new Array(villages.length);
	var humanEnemiesStats = new Array(humanEnemies.length);

	var player = {
		X : 3,
		Y : -3,
		WATERORIG : 20000,
		WATER : 20000,
		UVORIG : 50,
		UV : 50,
		HEALTH : 100,
		SHOVEL : false
	};

	var homeBase = {
		WATER : 50000
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
		allObjects[i] = rockPos[j];
		if (!(i % 2 == 0)) {
			shadows[i] = cactusPos[j] + 1;
		} else {
			shadows[i] = cactusPos[j];
		}
		i++;
	}


	//create villages positions
	for (var j = 0; j < villages.length; j = j + 12) {
		villageItems[j] = Math.floor(Math.random() * (5));
		villageItems[j + 1] = Math.floor((Math.random() * (1000 - 500)) + 500);
		villageItems[j + 2] = Math.floor(Math.random() * (5));

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

	//-------------------------------------------
	//helper functions for hookKeys()
	//-------------------------------------------

	function decAll(i) {
		rockPos[i]--;
		cactusPos[i]--;
		shadows[i]--;
		humanEnemies[i]--;
		homeBase[i]--;
		villages[i]--;
		allObjects[i]--;
		promiseWater[i]--;
	}

	function inAll(i) {
		rockPos[i]++;
		cactusPos[i]++;
		shadows[i]++;
		humanEnemies[i]++;
		homeBase[i]++;
		villages[i]++;
		allObjects[i]++;
		promiseWater[i]++;
	}

	//collision if player is near enemy
	function detection(i) {
		for (var j = -1; j <= 1; j++) {
			for (var k = -1; k <= 1; k++) {
				if (humanEnemies[i] + j == player.X && humanEnemies[i + 1] + k == player.Y) {
					//push battle
					inBattle = true;
					enemyPosition = i;
					randomDrawSpeed = Math.random() * 100;
					break;
				}
			}
		}
	}

	//ai movement up down when near +1,-1
	function aiMvmtVert(i) {
		setTimeout(function() {
			if ((humanEnemies[i]) > player.Y - 7 && (humanEnemies[i]) < player.Y) {
				if (player.X - humanEnemies[i - 1] < 7 && player.X - humanEnemies[i - 1] > -7) {
					humanEnemies[i]++;
					detection(i - 1);
				}
				return;
			}
			if ((humanEnemies[i]) < player.Y + 7 && (humanEnemies[i]) > player.Y) {
				if (player.X - humanEnemies[i - 1] < 7 && player.X - humanEnemies[i - 1] > -7) {
					humanEnemies[i]--;
					detection(i - 1);
				}
			}
		}, 500);
	}

	// ai movement left right when near d+1, -1
	function aiMvmtHorz(i) {
		setTimeout(function() {
			if ((humanEnemies[i]) < player.X && (humanEnemies[i]) > player.X - 7) {
				if (player.Y - humanEnemies[i + 1] < 7 && player.Y - humanEnemies[i + 1] > -7) {
					humanEnemies[i]++;
					detection(i);
				}
				return;
			}

			if ((humanEnemies[i]) > player.X && (humanEnemies[i]) < player.X + 7) {
				if (player.Y - humanEnemies[i + 1] < 7 && player.Y - humanEnemies[i + 1] > -7) {
					humanEnemies[i]--;
					detection(i);
				}
				return;
			}
		}, 500);
	}

	function moveUp() {
		if (player.Y > -5) {
			player.Y--;
			for (var i = 1; i < allObjects.length; i += 2) {
				if (allObjects[i] == player.Y && allObjects[i - 1] == player.X) {
					player.Y++;
					hitWall = true;
				}
				if (!hitWall) {
					aiMvmtVert(i);
				}
			}
			hitWall = false;
		} else {
			if (center[1] > 5) {
				center[1] -= 1;
				for (var i = 1; i < allObjects.length; i += 2) {
					inAll(i);
					if (allObjects[i] == player.Y && allObjects[i - 1] == player.X) {
						center[1] += 1;
						hitWall = true;
						for (var j = 1; j < allObjects.length; j += 2) {
							decAll(j);
						}
					}
					if (!hitWall) {
						aiMvmtVert(i);
					}
				}
				hitWall = false;
			}
		}
		if (inSun)
			player.UV--;
	}

	function moveDown() {
		if (player.Y < 0) {
			player.Y++;
			for (var i = 1; i < allObjects.length; i += 2) {
				if (allObjects[i] == player.Y && allObjects[i - 1] == player.X) {
					player.Y--;
					hitWall = true;
				}
				if (!hitWall) {
					aiMvmtVert(i);
				}
			}
			hitWall = false;
		} else {
			if (center[1] < tiles_dimension - 1) {
				center[1] += 1;
				for (var i = 1; i < allObjects.length; i += 2) {
					decAll(i);
					if (allObjects[i] == player.Y && allObjects[i - 1] == player.X) {
						center[1] -= 1;
						hitWall = true;
						for (var j = 1; j < allObjects.length; j += 2) {
							inAll(j);
						}
					}
					if (!hitWall) {
						aiMvmtVert(i);
					}
				}
				hitWall = false;
			}
		}
		if (inSun)
			player.UV--;
	}

	function moveLeft() {
		if (player.X > 0) {
			player.X--;
			for (var i = 0; i < allObjects.length; i += 2) {
				if (allObjects[i] == player.X && allObjects[i + 1] == player.Y) {
					player.X++;
					hitWall = true;
				}
				if (!hitWall) {
					aiMvmtHorz(i);
				}
			}
			hitWall = false;
		} else {
			if (center[0] > 0) {
				center[0] -= 1;
				for (var i = 0; i < allObjects.length; i += 2) {
					inAll(i);
					if (allObjects[i] == player.X && allObjects[i + 1] == player.Y) {
						center[0] += 1;
						hitWall = true;
						for (var j = 0; j < allObjects.length; j += 2) {
							decAll(j);
						}
					}
					if (!hitWall) {
						aiMvmtHorz(i);
					}
				}
			}
			hitWall = false;
		}
		if (inSun)
			player.UV--;
	}

	function moveRight() {
		if (player.X < 5) {
			player.X++;
			for (var i = 0; i < allObjects.length; i += 2) {
				if (allObjects[i] == player.X && allObjects[i + 1] == player.Y) {
					player.X--;
					hitWall = true;
				}
				if (!hitWall) {
					aiMvmtHorz(i);
				}
			}
			hitWall = false;
		} else {
			if (center[0] < tiles_dimension - 6) {
				center[0] += 1;
				for (var i = 0; i < allObjects.length; i += 2) {
					decAll(i);
					if (allObjects[i] == player.X && allObjects[i + 1] == player.Y) {
						center[0] -= 1;
						hitWall = true;
						for (var j = 0; j < allObjects.length; j += 2) {
							inAll(j);
						}
					}
					if (!hitWall) {
						aiMvmtHorz(i);
					}
				}
				hitWall = false;
			}
		}
		if (inSun)
			player.UV--;
	}

	//-------------------------------------------------
	//control player which moves all objects also
	//AI movement is in here UP and DOWN are flipped
	//-------------------------------------------------

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
		ENTER : 13,
		PAUSE : 27,
		SPACE : 32
	};

	var hitWall = false;
	function hookKeys() {
		window.addEventListener('keydown', function(evt) {
			if (!pause) {
				switch (evt.keyCode) {
				case keys.DOWN:
					if (!inVillage && !inBattle && player.HEALTH > 1)
						moveDown();
					break;
				case keys.UP:
					if (!inVillage && !inBattle && player.HEALTH > 1)
						moveUp();
					break;
				case keys.LEFT:
					if (!inVillage && !inBattle && player.HEALTH > 1)
						moveLeft();
					break;
				case keys.RIGHT:
					if (!inVillage && !inBattle && player.HEALTH > 1)
						moveRight();
					break;
				case keys.ONE:
					if (inVillage)
						buyHealth = true;
					break;
				case keys.TWO:
					if (inVillage)
						buyWater = true;
					break;
				case keys.THREE:
					if (inVillage)
						buyItem = true;
					break;
				case keys.ENTER:
					if (!inBattle) {
						enter = !enter;
						if (player.SHOVEL == true)
							dig = true;
					}
					break;
				case keys.PAUSE:
					pause = true;
					break;
				case keys.SPACE:
					if (inBattle) {
						playerCount = count;
						count = 0;
						hurt = true;
						//randomDrawSpeed = Math.random() * 100;
					}
					if(!inBattle){
						drinkCac = true;			
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

	//draw all objects
	function drawAll() {
		//draw floor
		drawTiles(center);
		for (var i = 0; i < allObjects.length; i += 2) {
			drawTile(shadows[i], shadows[i + 1], 1.0);
			drawRock(rockPos[i], rockPos[i + 1]);
			drawCactus(cactusPos[i], cactusPos[i +1]);
			drawEnemy(humanEnemies[i], humanEnemies[i + 1]);
			drawVillage(villages[i], villages[i + 1]);
		}
		drawHomeBase(homeBase[0], homeBase[1]);
		drawPlayer(player.X, player.Y);
	}

	// ----------------------------------------
	//     Animation
	// ----------------------------------------

	var inSun = false;
	var inBattle = false;
	var pause = false;
	var enter = false;
	var inVillage = false;
	var drinkCac = false;	
	var count = 0;
	var playerCount = 0;
	var enemyPosition = -1;
	var randomDrawSpeed = 0;
	var dig = false;
	function animate() {
		requestAnimationFrame(animate);
		console.log(promiseWater[0], promiseWater[1]);
		if (!pause) {
			c.clearRect(0, 0, canvasWidth, canvasHeight);
			drawAll();
			drawUI();
			//---------------------conditions-----------------------
			//if in shadow
			for (var i = 0; i < shadows.length; i += 2) {
				if (shadows[i] == player.X && shadows[i + 1] == player.Y) {
					inSun = false;
					player.UV = player.UVORIG;
					break;
				} else {
					inSun = true;
				}
			}
//if near cactus	
			for (var i = 0; i < cactusPos.length; i += 2) {
				if (cactusPos[i] == player.X && cactusPos[i + 1]+1 == player.Y && drinkCac == true) {
					player.WATER += 1000;
					cactusPos[i] = -tiles_dimension;
					shadows[i + rockPos.length] = -tiles_dimension;
					break;	
				}
			}
			drinkCac = false;
			
			if (inSun) {
				enter = false;
			}

			if (inBattle && !enter) {
				count++;
				drawBattleScreen(enemyPosition, count, playerCount, randomDrawSpeed);
			}

			//if press enter and in village go to a village ui
			if (enter && !inBattle) {
				for (var i = 0; i < villages.length; i += 2) {
					if (player.X == villages[i] && player.Y == villages[i + 1] + 1) {
						drawVillageUI(i);
						
						inVillage = true;
						break;
					}
				}
			}

			//if death
			if (player.HEALTH < 1) {
				gameOverUI();
			}

			//flow of stats based on conditions here
			if (!enter && !inBattle && player.HEALTH > 0) {
				inVillage = false;
				//sun out?
				if ((Math.floor(counter / dayLength)) % 2 == 1) {
					day = false;
					inSun = false;
					player.UV = player.UVORIG;
				}

				if ((Math.floor(counter / dayLength)) % 2 == 0) {
					day = true;
				}

				//decrease water count
				if (inSun && player.WATER > 0 && day) {
					player.WATER -= 7;
				}

				if (!inSun && player.WATER > 0 && day) {
					player.WATER -= 3;
				}

				if (player.WATER > 0 && !day) {
					player.WATER -= 1;
				}

				if (player.WATER < 1 && player.HEALTH > 0) {
					player.HEALTH--;
				}

				//if found sacred water
				if (player.X == promiseWater[0] && player.Y == promiseWater[1] && dig == true) {
					//code
				}
				if (player.UV < 1) {
					player.HEALTH--;
				}
			}

			//if at base, refill water and use base's water supply and press enter
			if (player.X == homeBase[0] && player.Y == homeBase[1] + 1 && enter) {
				homeBase.WATER -= (player.WATERORIG - player.WATER);
				player.WATER = player.WATERORIG;
				enter = false;
			}

			dig = false;

		}
		if (pause && player.HEALTH > 0) {
			c.clearRect(0, 0, canvasWidth, canvasHeight);
			drawAll();
			drawUI();
		}
	}

	animate();
}

