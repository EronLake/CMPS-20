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
// ----------------------------------------
//     Image Import
// ----------------------------------------
var img = new Image();
img.src = 'Images/sand-2.png';

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

var shackImg = new Image();
shackImg.src = 'Images/cool_shack_1.png';
var shackShadowImg = new Image();
shackShadowImg.src = 'Images/cool_shack_1_shadow.png';

var villageImg = new Image();
villageImg.src = 'Images/cool_village.png';
var villageShadowImg = new Image();
villageShadowImg.src = 'Images/cool_village_shadow.png';

var caveImg = new Image();
caveImg.src = 'Images/cool_cave.png';
var caveShadowImg = new Image();
caveShadowImg.src = 'Images/cool_cave_shadow.png';

var boatImg = new Image();
boatImg.src = 'Images/cool_boat.png';
var boatShadowImg = new Image();
boatShadowImg.src = 'Images/cool_boat_shadow.png';

var sunImg = new Image();
sunImg.src = 'Images/cool_sun.png';

var hero1FrontImg = new Image();
hero1FrontImg.src = 'Images/Hero_1_front.png';
var hero1BackImg = new Image();
hero1BackImg.src = 'Images/Hero_1_back.png';
var hero1RightImg = new Image();
hero1RightImg.src = 'Images/Hero_1_right.png';
var hero1LeftImg = new Image();
hero1LeftImg.src = 'Images/Hero_1_left.png';

var hero2FrontImg = new Image();
hero2FrontImg.src = 'Images/Hero_2_front.png';
var hero2BackImg = new Image();
hero2BackImg.src = 'Images/Hero_2_back.png';
var hero2RightImg = new Image();
hero2RightImg.src = 'Images/Hero_2_right.png';
var hero2LeftImg = new Image();
hero2LeftImg.src = 'Images/Hero_2_left.png';

var hero3FrontImg = new Image();
hero3FrontImg.src = 'Images/Hero_3_front.png';
var hero3BackImg = new Image();
hero3BackImg.src = 'Images/Hero_3_back.png';
var hero3RightImg = new Image();
hero3RightImg.src = 'Images/Hero_3_right.png';
var hero3LeftImg = new Image();
hero3LeftImg.src = 'Images/Hero_3_left.png';

var hero4FrontImg = new Image();
hero4FrontImg.src = 'Images/Hero_4_front.png';
var hero4BackImg = new Image();
hero4BackImg.src = 'Images/Hero_4_back.png';
var hero4RightImg = new Image();
hero4RightImg.src = 'Images/Hero_4_right.png';
var hero4LeftImg = new Image();
hero4LeftImg.src = 'Images/Hero_4_left.png';

var heroShadowImg = new Image();
heroShadowImg.src = 'Images/Hero_shadow.png';

var seaHorseLeftImg = new Image();
seaHorseLeftImg.src = 'Images/Sea_Horse_left.png';
var seaHorseRightImg = new Image();
seaHorseRightImg.src = 'Images/Sea_horse_right.png';

var anglerLeftImg = new Image();
anglerLeftImg.src = 'Images/Angler_fish_left.png';
var anglerRightImg = new Image();
anglerRightImg.src = 'Images/Angler_fish_right.png';

var hammerheadLeftImg = new Image();
hammerheadLeftImg.src = 'Images/Hammerhead_shark_left.png';
var hammerheadRightImg = new Image();
hammerheadRightImg.src = 'Images/Hammerhead_Shark_right.png';

var enemy1FrontImg = new Image();
enemy1FrontImg.src = 'Images/Enemy_1_front.png';
var enemy1BackImg = new Image();
enemy1BackImg.src = 'Images/Enemy_1_back.png';
var enemy1RightImg = new Image();
enemy1RightImg.src = 'Images/Enemy_1_right.png';
var enemy1LeftImg = new Image();
enemy1LeftImg.src = 'Images/Enemy_1_left.png';

var enemy2FrontImg = new Image();
enemy2FrontImg.src = 'Images/Enemy_2_front.png';
var enemy2BackImg = new Image();
enemy2BackImg.src = 'Images/Enemy_2_back.png';
var enemy2RightImg = new Image();
enemy2RightImg.src = 'Images/Enemy_2_right.png';
var enemy2LeftImg = new Image();
enemy2LeftImg.src = 'Images/Enemy_2_left.png';

var enemy3FrontImg = new Image();
enemy3FrontImg.src = 'Images/Enemy_3_front.png';
var enemy3BackImg = new Image();
enemy3BackImg.src = 'Images/Enemy_3_back.png';
var enemy3RightImg = new Image();
enemy3RightImg.src = 'Images/Enemy_3_right.png';
var enemy3LeftImg = new Image();
enemy3LeftImg.src = 'Images/Enemy_3_left.png';

var enemy4FrontImg = new Image();
enemy4FrontImg.src = 'Images/Enemy_4_front.png';
var enemy4BackImg = new Image();
enemy4BackImg.src = 'Images/Enemy_4_back.png';
var enemy4RightImg = new Image();
enemy4RightImg.src = 'Images/Enemy_4_right.png';
var enemy4LeftImg = new Image();
enemy4LeftImg.src = 'Images/Enemy_4_left.png';

var friendlyFrontImg = new Image();
friendlyFrontImg.src = 'Images/friendly_front.png';
var friendlyBackImg = new Image();
friendlyBackImg.src = 'Images/friendly_back.png';
var friendlyRightImg = new Image();
friendlyRightImg.src = 'Images/friendly_right.png';
var friendlyLeftImg = new Image();
friendlyLeftImg.src = 'Images/friendly_left.png';

var enemyShadowImg = new Image();
enemyShadowImg.src = 'Images/Enemy_shadow.png';
var fishShadowImg = new Image();
fishShadowImg.src = 'Images/fish_shadow.png';

var foilage1Img = new Image();
foilage1Img.src = 'Images/cool_foilage_1.png';
var foilage2Img = new Image();
foilage2Img.src = 'Images/cool_foilage_2.png';
var foilage3Img = new Image();
foilage3Img.src = 'Images/cool_foilage_3.png';

// ----------------------------------------
//     Sound Import
// ----------------------------------------
var wind = new Audio();
wind.src = "Audio/wind.mp3";
wind.volume = 0.4;

var drinkSound = new Audio();
drinkSound.src = "Audio/drinkSound1.mp3";
drinkSound.volume = 1;

var gunShot = new Audio();
gunShot.src = "Audio/gunShot.mp3";
gunShot.volume = 0.25;

var maleGruntSnd1 = new Audio();
maleGruntSnd1.src = "Audio/maleGruntSnd1.mp3";

var maleGruntSnd2 = new Audio();
maleGruntSnd2.src = "Audio/maleGruntSnd2.mp3";

var overworld = new Audio();
overworld.src = "Audio/overworld2.mp3";
overworld.volume = 0.05;
overworld.loop = true;

var villageTheme = new Audio();
villageTheme.src = "Audio/villageTheme1.mp3";
villageTheme.volume = 0.35;

var whoosh = new Audio();
whoosh.src = "Audio/whoosh.mp3";
whoosh.volume = .5;

var gameOverM = new Audio();
gameOverM.src = "Audio/gameOverM.mp3";
gameOverM.volume = .5;

var femaleGruntSnd1 = new Audio();
femaleGruntSnd1.src = "Audio/femaleGruntSnd1.mp3";

var femaleGruntSnd2 = new Audio();
femaleGruntSnd2.src = "Audio/femaleGruntSnd2.mp3";

var fishBattleTheme = new Audio();
fishBattleTheme.src = "Audio/fishBattleTheme.mp3";
fishBattleTheme.volume = .25;

var swordSlash = new Audio();
swordSlash.src = "Audio/swordSnd.mp3";
swordSlash.volume = 0.5;

var bubbleSound = new Audio();
bubbleSound.src = "Audio/bubbleSound2.mp3";

var getItem = new Audio();
getItem.src = "Audio/getItem.mp3";

var eatingSound = new Audio();
eatingSound.src = "Audio/eatingSound.mp3";

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
		c.textAlign = "center";
		var titleimg = new Image();
		titleimg.src = 'Images/title_page.png';
		c.drawImage(titleimg, 0, 0, canvas.width, canvas.height);
		//display cover image
		c.lineWidth = 15;
		c.font = "40px Arial";
		c.textAlign = "center";
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		//c.strokeText("SCORCHING SEA", canvas.width / 2, canvas.height / 2 - 200);
		//c.fillText("SCORCHING SEA", canvas.width / 2, canvas.height / 2 - 200);
		c.strokeText("Press Spacebar to Play", canvas.width / 2, canvas.height / 2 + 200);
		c.fillText("Press Spacebar to Play", canvas.width / 2, canvas.height / 2 + 200);
	} else if (titleScreen == false && instrScreen == true) {
		c.fillRect(0, 0, canvas.width, canvas.height);
		c.textAlign = "center";
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.font = "40px Arial";
		c.fillText("Instructions", canvas.width / 2, canvas.height / 2 - 220);
		c.font = "25px Arial";
		c.fillText("Use 'A' 'W' 'S' 'D' to move", canvas.width / 2, canvas.height / 2 - 150);
		c.fillText("Spacebar is the main action key and is used to enter and exit villages, cut cacti, talk to travelers, etc.", canvas.width / 2, canvas.height / 2 - 110);
		c.fillText("Press the escape key to pause", canvas.width / 2, canvas.height / 2 - 70);
		c.fillText("Press Spacebar to continue", canvas.width / 2, canvas.height / 2 + 100);
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
	overworld.play();
	hookKeys();
	hookKeys2();

	// ----------------------------------------
	//     Tiles Setup
	// ----------------------------------------
	var tiles_dimension = 500;

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

	//---------------------------
	//variables for menu disply and navigation
	//---------------------------
	//makes sure the kedown is only called once
	var keydown = false;
	//selector for village
	var village_selection = 1;
	var talking_selection = 1;
	var cave_selection = 1;
	var boat_selection = 1;
	//----------------------------

	//-----------------------------------------
	//       Time parameters
	//-----------------------------------------
	/////////////////////////
	//changes dayLength,
	var world_speed = .5;
	/////////////////////////
	var day = true;
	var counter = 0;
	var dayLength = 60 * world_speed;
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
	var viewBackDepth = 13;
	// how many tiles do we show in the front ?
	var viewFrontDepth = 18;
	// how many tiles do we show on the left ?
	var viewLeftDepth = 7;
	// how many tiles do we show on the right ?
	var viewRightDepth = 10;

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
		if (i % 4 == 0) {
			c.drawImage(rock2Img, -55, -38, 92, 64);
			c.transform(1, 0, .7, -1, -18, 28);
			c.drawImage(rock2ShadowImg, -38, -62, 90, 64);
		} else if (i % 6 == 0) {
			c.drawImage(rock3Img, -55, -38, 92, 64);
			c.transform(1, 0, .7, -1, -18, 28);
			c.drawImage(rock3ShadowImg, -38, -62, 90, 64);
		} else {
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
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		if (direction == 1)
			c.drawImage(hero1FrontImg, -30, -43, 50, 50);
		if (direction == 2)
			c.drawImage(hero1LeftImg, -30, -43, 50, 50);
		if (direction == 3)
			c.drawImage(hero1BackImg, -30, -43, 50, 50);
		if (direction == 4)
			c.drawImage(hero1RightImg, -30, -43, 50, 50);
		c.transform(1, 0, .7, -1, -33, 35);
		c.drawImage(heroShadowImg, -15, 5, 44, 25);
		if (colOffset == player.X + .3 && rowOffset == player.Y + .3) {
			c.fillStyle = 'rgba(0, 0, 0, 0.5)';
			c.fillRect(-90 + player.UVORIG / 2, 20, player.UVORIG / 2, 3);
			//c.fillStyle = 'rgba(' + (-player.UV + 125) + ', ' + (-player.UV * 2 + player.UVORIG * 2 + 125) + ', ' + (-player.UV * 2 + player.UVORIG * 2 + 125) + ', 1)';
			c.fillStyle = 'rgba(150,200,250, 1)';
			c.fillRect(-40 + player.UV / 2, 20, -player.UV / 2, 3);
		}
		c.restore();
	}

	function drawPlayer2(colOffset, rowOffset) {
		var pt = [0, 0];
		c.beginPath();
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		if (direction == 1)
			c.drawImage(hero2FrontImg, -30, -43, 50, 50);
		if (direction == 2)
			c.drawImage(hero2LeftImg, -30, -43, 50, 50);
		if (direction == 3)
			c.drawImage(hero2BackImg, -30, -43, 50, 50);
		if (direction == 4)
			c.drawImage(hero2RightImg, -30, -43, 50, 50);
		c.transform(1, 0, .7, -1, -33, 35);
		c.drawImage(heroShadowImg, -15, 5, 44, 25);
		c.restore();
	}

	function drawPlayer3(colOffset, rowOffset) {
		var pt = [0, 0];
		c.beginPath();
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		if (direction == 1)
			c.drawImage(hero3FrontImg, -30, -43, 50, 50);
		if (direction == 2)
			c.drawImage(hero3LeftImg, -30, -43, 50, 50);
		if (direction == 3)
			c.drawImage(hero3BackImg, -30, -43, 50, 50);
		if (direction == 4)
			c.drawImage(hero3RightImg, -30, -43, 50, 50);
		c.transform(1, 0, .7, -1, -33, 35);
		c.drawImage(heroShadowImg, -15, 5, 44, 25);
		c.restore();
	}

	function drawPlayer4(colOffset, rowOffset) {
		var pt = [0, 0];
		c.beginPath();
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		if (direction == 1)
			c.drawImage(hero4FrontImg, -30, -43, 50, 50);
		if (direction == 2)
			c.drawImage(hero4LeftImg, -30, -43, 50, 50);
		if (direction == 3)
			c.drawImage(hero4BackImg, -30, -43, 50, 50);
		if (direction == 4)
			c.drawImage(hero4RightImg, -30, -43, 50, 50);
		c.transform(1, 0, .7, -1, -33, 35);
		c.drawImage(heroShadowImg, -15, 5, 44, 25);
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
		c.drawImage(shackImg, -60, -70, 96, 96);
		c.transform(1, 0, .7, -1, -8, 28);
		c.drawImage(shackShadowImg, -55, -78, 92, 80);
		c.restore();
		c.save();
		c.translate(pt[0], pt[1]);
		c.lineWidth = 5;
		c.font = "10px Arial";
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, .75)';
		c.strokeText(homeWaterLev, -50, -20);
		c.fillText(homeWaterLev, -50, -20);
		c.restore();
	}

	function drawVillage(colOffset, rowOffset, i, i2) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(145, 120, 110)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		if (i % 12 == 0 && i2 % 1 == 0) {
			c.drawImage(villageImg, -95, -125, 295, 150);
			c.transform(1, 0, .7, -1, -8, 28);
			c.drawImage(villageShadowImg, -90, -117, 295, 120);
		}
		c.restore();
	}

	function drawEnemy(colOffset, rowOffset, i, j) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(100, 150, 100)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		if (i == 1) {
			if (j % 4 == 0) {
				c.drawImage(enemy4RightImg, -45, -45, 64, 64);
			} else if (j % 6 == 0) {
				c.drawImage(enemy2RightImg, -45, -45, 64, 64);
			} else if (j % 8 == 0) {
				c.drawImage(enemy3RightImg, -45, -45, 64, 64);
			} else {
				c.drawImage(enemy1RightImg, -45, -45, 64, 64);
			}
		}
		if (i == 2) {
			if (j % 4 == 0) {
				c.drawImage(enemy4LeftImg, -45, -45, 64, 64);
			} else if (j % 6 == 0) {
				c.drawImage(enemy2LeftImg, -45, -45, 64, 64);
			} else if (j % 8 == 0) {
				c.drawImage(enemy3LeftImg, -45, -45, 64, 64);
			} else {
				c.drawImage(enemy1LeftImg, -45, -45, 64, 64);
			}
		}
		if (i == 3) {
			if (j % 4 == 0) {
				c.drawImage(enemy4BackImg, -45, -45, 64, 64);
			} else if (j % 6 == 0) {
				c.drawImage(enemy2BackImg, -45, -45, 64, 64);
			} else if (j % 8 == 0) {
				c.drawImage(enemy3BackImg, -45, -45, 64, 64);
			} else {
				c.drawImage(enemy1BackImg, -45, -45, 64, 64);
			}
		} else {
			if (j % 4 == 0) {
				c.drawImage(enemy4FrontImg, -45, -45, 64, 64);
			} else if (j % 6 == 0) {
				c.drawImage(enemy2FrontImg, -45, -45, 64, 64);
			} else if (j % 8 == 0) {
				c.drawImage(enemy3FrontImg, -45, -45, 64, 64);
			} else {
				c.drawImage(enemy1FrontImg, -45, -45, 64, 64);
			}
		}

		//c.fillStyle = 'rgba(100, 63, 63, 0.5)';
		c.transform(1, 0, .7, -1, -33, 35);
		c.drawImage(enemyShadowImg, -30, -7, 65, 25);
		//c.fillRect(-15, 5, 20, 25);
		c.restore();
	}

	function drawFishEnemy(colOffset, rowOffset, i, j) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(200, 125, 75)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		c.save();
		c.transform(1, 0, -.7, 1, 5, 0);
		c.drawImage(fishShadowImg, -40, -7, 65, 65);
		c.restore();
		if (i == 1) {
			if (j % 4 == 0) {
				c.drawImage(seaHorseRightImg, -45, -45, 64, 64);
			} else if (j % 6 == 0) {
				c.drawImage(hammerheadRightImg, -45, -45, 96, 96);
			} else {
				c.drawImage(anglerRightImg, -45, -45, 80, 80);
			}
		} else {
			if (j % 4 == 0) {
				c.drawImage(seaHorseLeftImg, -45, -45, 64, 64);
			} else if (j % 6 == 0) {
				c.drawImage(hammerheadLeftImg, -45, -45, 96, 96);
			} else {
				c.drawImage(anglerLeftImg, -45, -45, 80, 80);
			}
		}
		c.restore();
	}

	function drawTraveller(colOffset, rowOffset) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(200, 225, 175)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		c.drawImage(friendlyFrontImg, -45, -45, 64, 64);
		c.transform(1, 0, .7, -1, -33, 35);
		c.drawImage(enemyShadowImg, -24, -7, 65, 25);
		c.restore();
	}

	function drawCave(colOffset, rowOffset, i, i2) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(50, 25, 25)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		if (i % 8 == 0 && i2 % 1 == 0) {
			c.drawImage(caveImg, -57, -85, 202, 110);
			c.transform(1, 0, .7, -1, -8, 28);
			c.drawImage(caveShadowImg, -47, -97, 180, 100);
		}
		c.restore();
	}

	function drawBoat(colOffset, rowOffset, i, i2) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(150, 150, 200)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		if (i % 12 == 0 && i2 % 1 == 0) {
			c.save();
			c.transform(1, 0, .7, -1, -8, 28);
			c.drawImage(boatShadowImg, -40, -205, 215, 220);
			c.restore();
			c.drawImage(boatImg, -40, -170, 225, 200);
		}
		c.restore();
	}

	function drawFoilage(colOffset, rowOffset, i) {
		var pt = [0, 0];
		c.beginPath();
		projectFromCenter(colOffset, rowOffset, pt);
		c.fillStyle = 'rgb(0, 0, 0)';
		c.save();
		c.translate(pt[0], pt[1]);
		if (i % 4 == 0)
			c.drawImage(foilage2Img, -20, -20, 50, 50);
		else if (i % 6 == 0)
			c.drawImage(foilage1Img, -20, -20, 50, 50);
		else
			c.drawImage(foilage3Img, -20, -20, 50, 50);
		c.restore();
	}

	// with sprites
	function drawFilledTile(colOffset, rowOffset, tileValue) {
		tileValue = tileValue % 1;
		//1
		var pt = [colOffset - 0.5, rowOffset - 0.5];
		// where is the tile ?
		//var tileBitmapX = (0 | (tileValue / 1)) * 32 * 2;
		//var tileBitmapY = (tileValue % 1) * 32 * 2;//3
		var tileBitmapX = tileValue % 304;
		var tileBitmapY = tileValue / 304;
		//c.drawImage(groundImg, tileBitmapX, tileBitmapY, 64, 64, colOffset - 0.5, rowOffset - 0.5, 1, 1);
		c.drawImage(img, tileBitmapX, tileBitmapY, 304, 304, colOffset - 0.5, rowOffset - 0.5, 1, 1);
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
	var caveX = 0;
	var caveY = 0;
	var cavePos = new Array();
	var boatX = 0;
	var boatY = 0;
	var boatPos = new Array();
	var travelX = 0;
	var travelY = 0;
	var travelPos = new Array();
	// ----------------------------------------
	//     Draw User Interface
	// ----------------------------------------
	function drawUI() {
		//draw ui sun
		if (day) {
			c.drawImage(sunImg, canvasWidth - 203, 0, 203, 242);
			c.fillStyle = "rgba(50, 25, 100, " + (.1 + counter % dayLength) / (dayLength * 3) + ")";
			c.fillRect(0, 0, canvasWidth, canvasHeight);
		} else {
			c.fillStyle = "rgba(50, 25, 100, " + (.4 - (counter % dayLength) / (dayLength * 3)) + ")";
			c.fillRect(0, 0, canvasWidth, canvasHeight);
		}

		if (!pause) {
			var waterLevel = player.WATER;
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
			var space = 0;
			c.lineWidth = 7;
			c.fillStyle = 'rgba(255, 255, 255, 1)';
			c.strokeStyle = 'rgba(0, 0, 0, .75)';
			c.font = "15px Arial";
			if (player.SHOVEL == true || player.DETECTOR == true || player.COMPASS == true || player.MAP == true || player.PEN == true) {
				line += 20;
				c.strokeText("Items:", canvasWidth / 12, canvasHeight / 4 + 20 + line);
				c.fillText("Items:", canvasWidth / 12, canvasHeight / 4 + 20 + line);
				if (player.SHOVEL == true) {
					line += 20;
					c.strokeText("Shovel", canvasWidth / 12 + 20, canvasHeight / 4 + 20 + line);
					c.fillText("Shovel", canvasWidth / 12 + 20, canvasHeight / 4 + 20 + line);
				}
				if (player.DETECTOR == true) {
					line += 20;
					if (promiseWater[0] > -10 && promiseWater[0] < 10 && promiseWater[1] > -10 && promiseWater[1] < 10 && (counter + player.WATER) % 2 == 0) {
						c.fillStyle = 'rgba(255, 100, 100, 1)';
					}
					c.strokeText("Detector", canvasWidth / 12 + 20, canvasHeight / 4 + 20 + line);
					c.fillText("Detector", canvasWidth / 12 + 20, canvasHeight / 4 + 20 + line);
					c.fillStyle = 'rgba(255, 255, 255, 1)';
				}
				if (player.COMPASS == true) {
					line += 20;
					c.strokeText(homeDir, canvasWidth / 12 + 20, canvasHeight / 4 + 20 + line);
					c.fillText(homeDir, canvasWidth / 12 + 20, canvasHeight / 4 + 20 + line);
				}
				if (player.MAP == true) {
					line += 20;
					c.strokeText("Map", canvasWidth / 12 + 20, canvasHeight / 4 + 20 + line);
					c.fillText("Map", canvasWidth / 12 + 20, canvasHeight / 4 + 20 + line);
					c.fillStyle = 'rgba(255, 255, 255, 0.5)';
					c.fillRect(100, 400, tiles_dimension / 5, tiles_dimension / 5);
					c.fillStyle = 'rgba(155, 155, 155, 0.5)';
					c.fillRect(100 + tiles_dimension / 20, 400, 1, tiles_dimension / 5);
					c.fillRect(100 + tiles_dimension / 10, 400, 1, tiles_dimension / 5);
					c.fillRect(100 + tiles_dimension / (20 / 3), 400, 1, tiles_dimension / 5);
					c.fillRect(100, 400 + tiles_dimension / 20, tiles_dimension / 5, 1);
					c.fillRect(100, 400 + tiles_dimension / 10, tiles_dimension / 5, 1);
					c.fillRect(100, 400 + tiles_dimension / (20 / 3), tiles_dimension / 5, 1);
					if (player.PEN == true) {
						c.fillStyle = 'rgba(145, 120, 110, 1)';
						for (var j = 0; j < villagePenPos.length; j += 2) {
							c.fillRect(100 + villagePenPos[j], 400 + villagePenPos[j + 1], 2, 2);
						}
						c.fillStyle = 'rgba(50, 25, 25, 1)';
						for (var j = 0; j < cavePos.length; j += 2) {
							c.fillRect(100 + cavePos[j], 400 + cavePos[j + 1], 2, 2);
						}
						c.fillStyle = 'rgba(200, 275, 175, 1)';
						for (var j = 0; j < travelPos.length; j += 2) {
							c.fillRect(100 + travelPos[j], 400 + travelPos[j + 1], 2, 2);
						}
						c.fillStyle = 'rgba(150, 150, 200, 1)';
						for (var j = 0; j < boatPos.length; j += 2) {
							c.fillRect(100 + boatPos[j], 400 + boatPos[j + 1], 2, 2);
						}
						c.fillStyle = 'rgba(0, 0, 0, 1)';
						c.fillRect(100 + (center[0] + 2) / 5, 400 + (center[1] + 2) / 5, 2, 2);
						c.fillStyle = 'rgba(255, 255, 255, 1)';
					}
				}
				if (player.PEN == true) {
					line += 20;
					c.strokeText("Pen", canvasWidth / 12 + 20, canvasHeight / 4 + 20 + line);
					c.fillText("Pen", canvasWidth / 12 + 20, canvasHeight / 4 + 20 + line);
				}
			}

			//draw water meter
			var divWater = (player.WATERORIG) / (player.WATERORIG / 400);
			c.fillStyle = 'rgba(0, 0, 0, 0.75)';
			c.fillRect(canvasWidth / 12, canvasHeight / 8 + ((-player.WATERORIG / divWater) + player.WATERORIG / divWater) + 5, 25, (player.WATERORIG / divWater + player.WATERORIG / divWater) + 10);
			c.fillStyle = 'rgba(150, 150, 150, 0.75)';
			c.fillRect(canvasWidth / 12 + 5, canvasHeight / 8 + ((-player.WATERORIG / divWater) + player.WATERORIG / divWater) + 10, 15, (player.WATERORIG / divWater + player.WATERORIG / divWater));
			if (!inSun) {
				c.fillStyle = 'rgba(100, 100, 255, 1)';
			} else {
				c.fillStyle = 'rgba(255, 150, 200, 1)';
			}
			c.fillRect(canvasWidth / 12 + 5, canvasHeight / 8 + player.WATERORIG / divWater * 2 - player.WATER / (divWater / 2) + 10, 15, ((player.WATER / divWater * 2) + player.WATERORIG / (divWater)) - 50);
			c.strokeText(waterLevel, canvasWidth / 12 - 20, canvasHeight / 8 + 50);
			c.fillText(waterLevel, canvasWidth / 12 - 20, canvasHeight / 8 + 50);
			//draw health bars
			if (numOfPlayers > 0) {
				space += 30;
				c.fillStyle = 'rgba(0, 0, 0, 0.75)';
				c.fillRect(canvasWidth / 12 + space, canvasHeight / 8 + (-100 + 100) + 5, 25, 100 + 10);
				c.fillStyle = 'rgba(150, 150, 150, 0.75)';
				c.fillRect(canvasWidth / 12 + space + 5, canvasHeight / 8 + (-100 + 100) + 10, 15, 100);
				c.fillStyle = 'rgba(200, ' + player.HEALTH * 2 + ', ' + (player.HEALTH * 2 + 55) + ', 1)';
				if (player.HEALTH > 0)
					c.fillRect(canvasWidth / 12 + space + 5, canvasHeight / 8 + -player.HEALTH + 100 + 10, 15, player.HEALTH);
				c.strokeText("P1", canvasWidth / 12 + space + 5, canvasHeight / 8 + 50);
				c.fillText("P1", canvasWidth / 12 + space + 5, canvasHeight / 8 + 50);
			}
			if (numOfPlayers > 1) {
				space += 25;
				c.fillStyle = 'rgba(0, 0, 0, 0.75)';
				c.fillRect(canvasWidth / 12 + space, canvasHeight / 8 + (-100 + 100) + 5, 25, 100 + 10);
				c.fillStyle = 'rgba(150, 150, 150, 0.75)';
				c.fillRect(canvasWidth / 12 + space + 5, canvasHeight / 8 + (-100 + 100) + 10, 15, 100);
				if (player2.HEALTH > 0)
					c.fillStyle = 'rgba(200, ' + player2.HEALTH * 2 + ', ' + (player2.HEALTH * 2 + 55) + ', 1)';
				c.fillRect(canvasWidth / 12 + space + 5, canvasHeight / 8 + -player2.HEALTH + 100 + 10, 15, player2.HEALTH);
				c.strokeText("P2", canvasWidth / 12 + space + 5, canvasHeight / 8 + 50);
				c.fillText("P2", canvasWidth / 12 + space + 5, canvasHeight / 8 + 50);
			}
			if (numOfPlayers > 2) {
				space += 25;
				c.fillStyle = 'rgba(0, 0, 0, 0.75)';
				c.fillRect(canvasWidth / 12 + space, canvasHeight / 8 + (-100 + 100) + 5, 25, 100 + 10);
				c.fillStyle = 'rgba(150, 150, 150, 0.75)';
				c.fillRect(canvasWidth / 12 + space + 5, canvasHeight / 8 + (-100 + 100) + 10, 15, 100);
				if (player3.HEALTH > 0)
					c.fillStyle = 'rgba(200, ' + player3.HEALTH * 2 + ', ' + (player3.HEALTH * 2 + 55) + ', 1)';
				c.fillRect(canvasWidth / 12 + space + 5, canvasHeight / 8 + -player3.HEALTH + 100 + 10, 15, player3.HEALTH);
				c.strokeText("P3", canvasWidth / 12 + space + 5, canvasHeight / 8 + 50);
				c.fillText("P3", canvasWidth / 12 + space + 5, canvasHeight / 8 + 50);
			}
			if (numOfPlayers > 3) {
				space += 25;
				c.fillStyle = 'rgba(0, 0, 0, 0.75)';
				c.fillRect(canvasWidth / 12 + space, canvasHeight / 8 + (-100 + 100) + 5, 25, 100 + 10);
				c.fillStyle = 'rgba(150, 150, 150, 0.75)';
				c.fillRect(canvasWidth / 12 + space + 5, canvasHeight / 8 + (-100 + 100) + 10, 15, 100);
				if (player4.HEALTH > 0)
					c.fillStyle = 'rgba(200, ' + player4.HEALTH * 2 + ', ' + (player4.HEALTH * 2 + 55) + ', 1)';
				c.fillRect(canvasWidth / 12 + space + 5, canvasHeight / 8 + -player4.HEALTH + 100 + 10, 15, player4.HEALTH);
				c.strokeText("P4", canvasWidth / 12 + space + 5, canvasHeight / 8 + 50);
				c.fillText("P4", canvasWidth / 12 + space + 5, canvasHeight / 8 + 50);
			}
			space += 30;
			c.fillStyle = 'rgba(0, 0, 0, 0.75)';
			c.fillRect(canvasWidth / 12 + space, canvasHeight / 8 + (-player.UVORIG + player.UVORIG) + 5, 25, player.UVORIG + 10);
			c.fillStyle = 'rgba(150, 150, 150, 0.75)';
			c.fillRect(canvasWidth / 12 + space + 5, canvasHeight / 8 + (-player.UVORIG + player.UVORIG) + 10, 15, player.UVORIG);
			//c.fillStyle = 'rgba(' + (-player.UV + 125) + ', ' + (-player.UV * 2 + player.UVORIG * 2 + 125) + ', ' + (-player.UV * 2 + player.UVORIG * 2 + 125) + ', 1)';
			c.fillStyle = 'rgba(150,200,250, 1)';
			c.fillRect(canvasWidth / 12 + space + 5, canvasHeight / 8 + -player.UV + 100 + 10, 15, player.UV);
			c.strokeText("UV", canvasWidth / 12 + space + 5, canvasHeight / 8 + 50);
			c.fillText("UV", canvasWidth / 12 + space + 5, canvasHeight / 8 + 50);

		}
		if (pause) {
			c.fillStyle = "rgba(0,50,50, 0.5)";
			c.fillRect(0, 0, canvasWidth, canvasHeight);
			if (player.MAP == true) {
				c.fillStyle = 'rgba(255, 255, 255, 0.5)';
				c.fillRect(100, 100, tiles_dimension / 2, tiles_dimension / 2);
				c.fillStyle = 'rgba(155, 155, 155, 0.5)';
				c.fillRect(100 + tiles_dimension / 8, 100, 1, tiles_dimension / 2);
				c.fillRect(100 + tiles_dimension / 4, 100, 1, tiles_dimension / 2);
				c.fillRect(100 + tiles_dimension / (8 / 3), 100, 1, tiles_dimension / 2);
				c.fillRect(100, 100 + tiles_dimension / 8, tiles_dimension / 2, 1);
				c.fillRect(100, 100 + tiles_dimension / 4, tiles_dimension / 2, 1);
				c.fillRect(100, 100 + tiles_dimension / (8 / 3), tiles_dimension / 2, 1);
				if (player.PEN == true) {
					c.fillStyle = 'rgba(145, 120, 110, 1)';
					for (var j = 0; j < villagePenPos.length; j += 2) {
						c.fillRect(100 + villagePenPos[j] * (5 / 2), 100 + villagePenPos[j + 1] * (5 / 2), 2, 2);
					}
					c.fillStyle = 'rgba(50, 25, 25, 1)';
					for (var j = 0; j < cavePos.length; j += 2) {
						c.fillRect(100 + cavePos[j] * (5 / 2), 100 + cavePos[j + 1] * (5 / 2), 2, 2);
					}
					c.fillStyle = 'rgba(200, 275, 175, 1)';
					for (var j = 0; j < travelPos.length; j += 2) {
						c.fillRect(100 + travelPos[j] * (5 / 2), 100 + travelPos[j + 1] * (5 / 2), 2, 2);
					}
					c.fillStyle = 'rgba(150, 150, 200, 1)';
					for (var j = 0; j < boatPos.length; j += 2) {
						c.fillRect(100 + boatPos[j] * (5 / 2), 100 + boatPos[j + 1] * (5 / 2), 2, 2);
					}
					c.fillStyle = 'rgba(0, 0, 0, 1)';
					c.fillRect(100 + (center[0] + 2) / 2, 100 + (center[1] + 2) / 2, 2, 2);
					c.fillStyle = 'rgba(255, 255, 255, 0.75)';
				}
			}
			c.lineWidth = 10;
			c.fillStyle = 'rgba(255, 255, 255, 1)';
			c.strokeStyle = 'rgba(0, 0, 0, 1)';
			c.font = "20px Arial";
			c.strokeText("PAUSE", (canvasWidth / 2) - 25, (canvasHeight / 2) - 25);
			c.fillText("PAUSE", (canvasWidth / 2) - 25, (canvasHeight / 2) - 25);
		}
	}

	// ----------------------------------------
	//     Clues Setup
	// ----------------------------------------
	var clues = new Array(20);
	function setClues() {
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
		if ((finalX > tiles_dimension / 2 || finalX < -tiles_dimension / 2) && (finalY > tiles_dimension / 2 || finalY < -tiles_dimension / 2)) {
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
		clues[16] = "Your house is the center of everything, did ya know?";
		clues[17] = "I never get tired at night!";
		clues[18] = "My favorite drink is cactus water.";
		clues[19] = "I heard this area is " + tiles_dimension + "x" + tiles_dimension + " big!";
	}

	//clues to be put in boats
	var bestClues = new Array(10);
	function setBestClues() {
		bestClues[0] = "We were just about " + Math.sqrt(promiseWater[0] * promiseWater[0]) + " away...";
		bestClues[1] = "We were just about " + Math.sqrt(promiseWater[1] * promiseWater[1]) + " away...";
		bestClues[2] = "Go..." + Math.sqrt(promiseWater[0] * promiseWater[0]) + "...then..." + Math.sqrt(promiseWater[1] * promiseWater[1]);
		bestClues[3] = "Go..." + Math.sqrt(promiseWater[1] * promiseWater[1]) + "...then..." + Math.sqrt(promiseWater[0] * promiseWater[0]);
		if (finalX > tiles_dimension / 2 && finalY > tiles_dimension / 2)
			bestClues[4] = "It lays in the South East Quadrant";
		if (finalX > tiles_dimension / 2 && finalY < tiles_dimension / 2)
			bestClues[4] = "It lays in the North East Quadrant";
		if (finalX < tiles_dimension / 2 && finalY > tiles_dimension / 2)
			bestClues[4] = "It lays in the South West Quadrant";
		if (finalX < tiles_dimension / 2 && finalY < tiles_dimension / 2)
			bestClues[4] = "It lays in the North West Quadrant";
		bestClues[5] = "Its at..." + finalX + "...I tell ya!";
		bestClues[6] = "Its at..." + finalY + "...I tell ya!";
		bestClues[7] = "If only we knew where " + finalX + "," + finalY + "was at!";
		bestClues[8] = "Was is " + finalX + "," + finalY + " or " + finalY + "," + finalX + "?";
		bestClues[9] = "Was is " + finalY + "," + finalX + " or " + finalX + "," + finalY + "?";
	}

	// ----------------------------------------
	//     Village Setup
	// ----------------------------------------
	var canDrink = false;
	//used to prevent drinking upon leaving homeUI
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
			var healthAmount = "Food: " + health + " for 1000 ml each";
		else
			var healthAmount = "No food here";
		if (water > 0)
			var waterAmount = "ml found: " + water;
		else
			var waterAmount = "No water here";
		if (item == 0 || item > 5)
			var itemAmount = "No items here";
		if (item == 1)
			var itemAmount = "Item: Shovel for 2500ml";
		if (item == 2)
			var itemAmount = "Item: Detector for 2500ml";
		if (item == 3)
			var itemAmount = "Item: Compass for 2500ml";
		if (item == 4)
			var itemAmount = "Item: Map for 2500ml";
		if (item == 5)
			var itemAmount = "Item: Pen for 2500ml";

		/////////////////////////////
		//draws village menu
		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 10;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "20px Arial";

		addEventListener("keydown", function(key) {
			//-------------------------------------------------------
			//lets you move up options
			if (key.keyCode == "87") {
				console.log('up');
				//d = "up";

				if (inVillage && keydown == false) {
					if (village_selection > 1) {
						village_selection -= 1;
						keydown = true;
					}
					console.log(village_selection);
					//d = "down";
				}

				//---------------------------------------------------------
				//lets you move up options
			} else if (key.keyCode == "83") {
				console.log('down');
				//d = "down";

				if (inVillage && keydown == false) {
					if (village_selection < 4) {
						village_selection += 1;
						keydown = true;
					}
					console.log(village_selection);
					//d = "down";
				}
			}
			//---------------------------------------------------------
		});

		addEventListener("keyup", function(key) {
			//-------------------------------------------------------
			//lets you move up options
			if (key.keyCode == "87") {
				console.log('up');
				//d = "up";

				if (inVillage) {
					keydown = false;
				}

				//---------------------------------------------------------
				//lets you move up options
			} else if (key.keyCode == "83") {
				console.log('down');
				//d = "down";

				if (inVillage) {
					keydown = false;
				}
			}
			//---------------------------------------------------------
		});
		//----------------------------------------------
		c.fillStyle = "rgba(50,0,0, 0.75)";
		c.fillRect((canvasWidth / 3) - 50, (canvasHeight / 3) - 80, 870, 270);
		c.fillStyle = 'rgba(200, 100, 100, 0.75)';
		c.fillRect((canvasWidth / 3) - 40, (canvasHeight / 3) - 70, 850, 250);
		c.fillStyle = "rgb(255,220,210)";

		c.strokeText("ENTER:select", (canvasWidth / 3) + 600, (canvasHeight / 3) - 30);
		c.fillText("ENTER:select", (canvasWidth / 3) + 600, (canvasHeight / 3) - 30);
		//----------------------------------------------

		c.strokeText("VILLAGE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("VILLAGE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		//-------------------------
		c.strokeStyle = 'rgba(0, 0, 0, 1)';

		if (village_selection == 1) {
			c.strokeStyle = 'rgba(0, 200, 0, 1)';
		}
		c.strokeText(healthAmount, (canvasWidth / 3), canvasHeight / 3);
		c.fillText(healthAmount, (canvasWidth / 3), canvasHeight / 3);
		//-------------------------
		c.strokeStyle = 'rgba(0, 0, 0, 1)';

		if (village_selection == 2) {
			c.strokeStyle = 'rgba(0, 200, 0, 1)';
		}
		c.strokeText(waterAmount, (canvasWidth / 3) + 10, (canvasHeight / 3) + 30);
		c.fillText(waterAmount, (canvasWidth / 3) + 10, (canvasHeight / 3) + 30);
		//-------------------------
		c.strokeStyle = 'rgba(0, 0, 0, 1)';

		if (village_selection == 3) {
			c.strokeStyle = 'rgba(0, 200, 0, 1)';
		}
		c.strokeText(itemAmount, (canvasWidth / 3) + 20, (canvasHeight / 3) + 60);
		c.fillText(itemAmount, (canvasWidth / 3) + 20, (canvasHeight / 3) + 60);
		//-------------------------
		c.strokeStyle = 'rgba(0, 0, 0, 1)';

		if (village_selection == 4) {
			c.strokeStyle = 'rgba(0, 200, 0, 1)';
		}
		c.strokeText("Talk", (canvasWidth / 3) + 30, (canvasHeight / 3) + 90);
		c.fillText("Talk", (canvasWidth / 3) + 30, (canvasHeight / 3) + 90);
		c.strokeStyle = 'rgba(0, 0, 0, 1)';

		//if player wants to buy health
		if (buyHealth && health > 0 && player.WATER - 1000 > 0) {
			villageItems[place] -= 1;
			if (player.HEALTH > 0 && numOfPlayers > 0) {
				player.HEALTH += 10;
				eatingSound.play();
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
		//if the player wants to buy water
		if (buyWater && water > 0) {
			player.WATER += villageItems[place + 1];
			villageItems[place + 1] -= villageItems[place + 1];
			buyWater = false;
			bubbleSound.play();
		}
		//if the player wants to buy an item
		if (buyItem && player.WATER > 2500 && !(item == 0 || item > 5)) {
			if (item == 1)
				player.SHOVEL = true;
			getItem.play();
			if (item == 2)
				player.DETECTOR = true;
			getItem.play();
			if (item == 3)
				player.COMPASS = true;
			getItem.play();
			if (item == 4)
				player.MAP = true;
			getItem.play();
			if (item == 5)
				player.PEN = true;
			getItem.play();
			villageItems[place + 2] = 0;
			player.WATER -= 2500;
			buyItem = false;
		}
		// if you have a pen and map, it will draw the village position on the map
		if (player.PEN == true && player.MAP == true) {
			villagePosX = center[0];
			villagePosY = center[1];
			if (villagePenPos[villagePenPos.length - 2] != villagePosX / 5 && villagePenPos[villagePenPos.length - 1] != villagePosY / 5) {
				villagePenPos.push(villagePosX / 5);
				villagePenPos.push(villagePosY / 5);
			}
		}
		//if buys a clue
		if (getClue) {
			setClues();
			if (clue % 12 == 1 && player.PEN == true) {
				villagePosX = center[0];
			}
			if (clue % 12 == 0 && player.PEN == true) {
				villagePosY = center[1];
			}
			c.strokeText(clues[clue], (canvasWidth / 3) + 40, (canvasHeight / 3) + 120);
			c.fillText(clues[clue], (canvasWidth / 3) + 40, (canvasHeight / 3) + 120);
		}
		if (!getClue) {
			pickClue = Math.floor(Math.random() * clues.length);
		}
	}

	//inBattle || gameOver || inVillage || youWin || talking || inCave || inBoat

	// ----------------------------------------
	//     Player moves on screen
	// ----------------------------------------
	function drawTravellerUI(i) {
		if (travellerStats[i + 1] != 0)
			var food = " 1. Here have some of my food: " + travellerStats[i + 1];
		else
			var food = "I need to save my food";
		if (travellerStats[i] != 0)
			var water = "2. Here take this water: " + travellerStats[i];
		else
			var water = "I wish I could give you more water";

		//-------------------------------------------------------
		addEventListener("keyup", function(key) {
			//lets you move up options
			if (key.keyCode == "87") {
				console.log('up');
				//d = "up";

				if (talking && keydown == false) {
					if (talking_selection > 1) {
						talking_selection -= 1;
						keydown = true;
					}
					console.log(talking_selection);
					//d = "down";
				}

				//---------------------------------------------------------
				//lets you move up options
			} else if (key.keyCode == "83") {
				console.log('down');
				//d = "down";

				if (talking && keydown == false) {
					if (talking_selection < 2) {
						talking_selection += 1;
						keydown = true;
					}
					console.log(talking_selection);
					//d = "down";
				}
			}
			//---------------------------------------------------------
		});

		addEventListener("keyup", function(key) {
			//-------------------------------------------------------
			//lets you move up options
			if (key.keyCode == "87") {
				console.log('up');
				//d = "up";

				if (talking) {
					keydown = false;
				}

				//---------------------------------------------------------
				//lets you move up options
			} else if (key.keyCode == "83") {
				console.log('down');
				//d = "down";

				if (talking) {
					keydown = false;
				}
			}
			//---------------------------------------------------------
		});

		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 10;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "20px Arial";

		//----------------------------------------------
		c.fillStyle = "rgba(50,0,0, 0.75)";
		c.fillRect((canvasWidth / 3) - 50, (canvasHeight / 3) - 80, 870, 270);
		c.fillStyle = 'rgba(200, 100, 100, 0.75)';
		c.fillRect((canvasWidth / 3) - 40, (canvasHeight / 3) - 70, 850, 250);
		c.fillStyle = "rgb(255,220,210)";

		c.strokeText("ENTER:select", (canvasWidth / 3) + 600, (canvasHeight / 3) - 30);
		c.fillText("ENTER:select", (canvasWidth / 3) + 600, (canvasHeight / 3) - 30);
		//----------------------------------------------

		c.strokeText("HELLO, STRANGER", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("HELLO, STRANGER", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);

		if (talking_selection == 1) {
			c.strokeStyle = 'rgba(0, 200, 0, 1)';
		}
		c.strokeText(food, (canvasWidth / 3), canvasHeight / 3);
		c.fillText(food, (canvasWidth / 3), canvasHeight / 3);
		c.strokeStyle = 'rgba(0, 0, 0, 1)';

		if (talking_selection == 2) {
			c.strokeStyle = 'rgba(0, 200, 0, 1)';
		}
		c.strokeText(water, (canvasWidth / 3) + 10, (canvasHeight / 3) + 30);
		c.fillText(water, (canvasWidth / 3) + 10, (canvasHeight / 3) + 30);
		c.strokeStyle = 'rgba(0, 0, 0, 1)';

		if (getWater) {
			player.WATER += travellerStats[i];
			travellerStats[i] = 0;
			getWater = false;
			bubbleSound.play();
		}
		if (getFood && travellerStats[i + 1] > 0) {
			if (player.HEALTH > 0 && numOfPlayers > 0) {
				player.HEALTH += 10;
				eatingSound.play();
			}
			if (player2.HEALTH > 0 && numOfPlayers > 1) {
				player2.HEALTH += 10;
				eatingSound.play();
			}
			if (player3.HEALTH > 0 && numOfPlayers > 2) {
				player3.HEALTH += 10;
				eatingSound.play();
			}
			if (player4.HEALTH > 0 && numOfPlayers > 3) {
				player4.HEALTH += 10;
				eatingSound.play();
			}
			travellerStats[i + 1]--;
			getFood = false;
		}
		if (player.PEN == true && player.MAP == true) {
			travelX = center[0];
			travelY = center[1];
			if (travelPos[travelPos.length - 2] != travelX / 5 && travelPos[travelPos.length - 1] != travelY / 5) {
				travelPos.push(travelX / 5);
				travelPos.push(travelY / 5);
			}
		}
	}

	// ----------------------------------------
	//     Draw Cave
	// ----------------------------------------
	//-------------------------------------------------------
	addEventListener("keyup", function(key) {
		//lets you move up options
		if (key.keyCode == "87") {
			console.log('up');
			//d = "up";

			if (inCave && keydown == false) {
				if (cave_selection > 1) {
					cave_selection -= 1;
					keydown = true;
				}
				console.log(cave_selection);
				//d = "down";
				console.log(keydown);

			}

			//---------------------------------------------------------
			//lets you move up options
		} else if (key.keyCode == "83") {
			console.log('down');
			//d = "down";

			if (inCave && keydown == false) {
				if (cave_selection < 4) {
					cave_selection += 1;
					keydown = true;
				}
				console.log(cave_selection);
				//d = "down";
				console.log(keydown);
			}
		}
		//---------------------------------------------------------
	});

	addEventListener("keyup", function(key) {
		//-------------------------------------------------------
		//lets you move up options
		if (key.keyCode == "87") {
			console.log('up');
			//d = "up";

			if (inCave) {
				keydown = false;
				console.log(keydown2);
			}

			//---------------------------------------------------------
			//lets you move up options
		} else if (key.keyCode == "83") {
			console.log('down');
			//d = "down";

			if (inCave) {
				keydown = false;
				console.log(keydown2);
			}
		}
		//---------------------------------------------------------
	});

	function drawCaveUI(i) {
		var water1;
		var water2;
		var water3;
		var water4;
		var place = i;
		if (i % 8 == 0) {
			water1 = caveStats[i];
			water2 = caveStats[i + 1];
			water3 = caveStats[i + 2];
			water4 = caveStats[i + 3];
		}
		if (i % 8 == 2) {
			water1 = caveStats[i - 2];
			water2 = caveStats[i - 1];
			water3 = caveStats[i];
			water4 = caveStats[i + 1];
			place = i - 2;
		}
		if (water1 != 0)
			var water1mes = "1. ml found: " + water1;
		else
			var water1mes = "";
		if (water2 != 0)
			var water2mes = "2. ml found: " + water2;
		else
			var water2mes = "";
		if (water3 != 0)
			var water3mes = "3. ml found: " + water3;
		else
			var water3mes = "";
		if (water4 != 0)
			var water4mes = "4. ml found: " + water4;
		else
			var water4mes = "";

		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 10;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "20px Arial";

		//----------------------------------------------
		c.fillStyle = "rgba(50,0,0, 0.75)";
		c.fillRect((canvasWidth / 3) - 50, (canvasHeight / 3) - 80, 870, 270);
		c.fillStyle = 'rgba(200, 100, 100, 0.75)';
		c.fillRect((canvasWidth / 3) - 40, (canvasHeight / 3) - 70, 850, 250);
		c.fillStyle = "rgb(255,220,210)";

		c.strokeText("ENTER:select", (canvasWidth / 3) + 600, (canvasHeight / 3) - 30);
		c.fillText("ENTER:select", (canvasWidth / 3) + 600, (canvasHeight / 3) - 30);
		//----------------------------------------------

		c.strokeText("CAVE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("CAVE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);

		if (cave_selection == 1) {
			c.strokeStyle = 'rgba(0, 200, 0, 1)';
		}
		c.strokeText(water1mes, (canvasWidth / 3), canvasHeight / 3);
		c.fillText(water1mes, (canvasWidth / 3), canvasHeight / 3);
		c.strokeStyle = 'rgba(0, 0, 0, 1)';

		if (cave_selection == 2) {
			c.strokeStyle = 'rgba(0, 200, 0, 1)';
		}
		c.strokeText(water2mes, (canvasWidth / 3) + 10, (canvasHeight / 3) + 30);
		c.fillText(water2mes, (canvasWidth / 3) + 10, (canvasHeight / 3) + 30);
		c.strokeStyle = 'rgba(0, 0, 0, 1)';

		if (cave_selection == 3) {
			c.strokeStyle = 'rgba(0, 200, 0, 1)';
		}
		c.strokeText(water3mes, (canvasWidth / 3) + 20, (canvasHeight / 3) + 60);
		c.fillText(water3mes, (canvasWidth / 3) + 20, (canvasHeight / 3) + 60);
		c.strokeStyle = 'rgba(0, 0, 0, 1)';

		if (cave_selection == 4) {
			c.strokeStyle = 'rgba(0, 200, 0, 1)';
		}
		c.strokeText(water4mes, (canvasWidth / 3) + 30, (canvasHeight / 3) + 90);
		c.fillText(water4mes, (canvasWidth / 3) + 30, (canvasHeight / 3) + 90);
		c.strokeStyle = 'rgba(0, 0, 0, 1)';

		if (caveWater1) {
			player.WATER += caveStats[place];
			caveStats[place] = 0;
			caveWater1 = false;
			bubbleSound.play();
		}
		if (caveWater2) {
			player.WATER += caveStats[place + 1];
			caveStats[place + 1] = 0;
			caveWater2 = false;
			bubbleSound.play();
		}
		if (caveWater3) {
			player.WATER += caveStats[place + 2];
			caveStats[place + 2] = 0;
			caveWater3 = false;
			bubbleSound.play();
		}
		if (caveWater4) {
			player.WATER += caveStats[place + 3];
			caveStats[place + 3] = 0;
			caveWater4 = false;
			bubbleSound.play();
		}
		if (player.PEN == true && player.MAP == true) {
			caveX = center[0];
			caveY = center[1];
			if (cavePos[cavePos.length - 2] != caveX / 5 && cavePos[cavePos.length - 1] != caveY / 5) {
				cavePos.push(caveX / 5);
				cavePos.push(caveY / 5);
			}
		}

	}

	// ----------------------------------------
	//     Draw Boat
	// ----------------------------------------
	function drawBoatUI(i) {
		var boatItem;
		var boatItemString;
		var boatClue;
		var place = i;
		var foundClue = "2. What does this paper say?";
		if (i % 12 == 0) {
			boatItem = boatStats[i];
			boatClue = boatStats[i + 1];
		}
		if (i % 12 == 2) {
			boatItem = boatStats[i - 2];
			boatClue = boatStats[i - 1];
			place = i - 2;
		}
		if (boatItem == 0)
			var boatItemString = "Nothing in here";
		if (boatItem == 1)
			var boatItemString = "1. Item found: Shovel";
		if (boatItem == 2)
			var boatItemString = "1. Item found: Detector";
		if (boatItem == 3)
			var boatItemString = "1. Item found: Compass";
		if (boatItem == 4)
			var boatItemString = "1. Item found: Map";
		if (boatItem == 5)
			var boatItemString = "1. Item found: Pen";

		//-------------------------------------------------------
		addEventListener("keyup", function(key) {
			//lets you move up options
			if (key.keyCode == "87") {
				console.log('up');
				//d = "up";

				if (inBoat && keydown == false) {
					if (boat_selection > 1) {
						boat_selection -= 1;
						keydown = true;
					}
					console.log(boat_selection);
					//d = "down";
				}

				//---------------------------------------------------------
				//lets you move up options
			} else if (key.keyCode == "83") {
				console.log('down');
				//d = "down";

				if (inBoat && keydown == false) {
					if (boat_selection < 2) {
						boat_selection += 1;
						keydown = true;
					}
					console.log(boat_selection);
					//d = "down";
				}
			}
			//---------------------------------------------------------
		});

		addEventListener("keyup", function(key) {
			//-------------------------------------------------------
			//lets you move up options
			if (key.keyCode == "87") {
				console.log('up');
				//d = "up";

				if (inBoat) {
					keydown = false;
				}

				//---------------------------------------------------------
				//lets you move up options
			} else if (key.keyCode == "83") {
				console.log('down');
				//d = "down";

				if (inBoat) {
					keydown = false;
				}
			}
			//---------------------------------------------------------
		});

		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 10;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "20px Arial";

		//----------------------------------------------
		c.fillStyle = "rgba(50,0,0, 0.75)";
		c.fillRect((canvasWidth / 3) - 50, (canvasHeight / 3) - 80, 870, 270);
		c.fillStyle = 'rgba(200, 100, 100, 0.75)';
		c.fillRect((canvasWidth / 3) - 40, (canvasHeight / 3) - 70, 850, 250);
		c.fillStyle = "rgb(255,220,210)";

		c.strokeText("ENTER:select", (canvasWidth / 3) + 600, (canvasHeight / 3) - 30);
		c.fillText("ENTER:select", (canvasWidth / 3) + 600, (canvasHeight / 3) - 30);
		//----------------------------------------------

		c.strokeText("ABANDONED BOAT", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("ABANDONED BOAT", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);

		if (boat_selection == 1) {
			c.strokeStyle = 'rgba(0, 200, 0, 1)';
		}
		c.strokeText(boatItemString, (canvasWidth / 3), canvasHeight / 3);
		c.fillText(boatItemString, (canvasWidth / 3), canvasHeight / 3);
		c.strokeStyle = 'rgba(0, 0, 0, 1)';

		if (boat_selection == 2) {
			c.strokeStyle = 'rgba(0, 200, 0, 1)';
		}
		c.strokeText(foundClue, (canvasWidth / 3) + 10, (canvasHeight / 3) + 30);
		c.fillText(foundClue, (canvasWidth / 3) + 10, (canvasHeight / 3) + 30);
		c.strokeStyle = 'rgba(0, 0, 0, 1)';

		if (getBoatItem) {
			if (boatItem == 1)
				player.SHOVEL = true;
			getItem.play();
			if (boatItem == 2)
				player.DETECTOR = true;
			getItem.play();
			if (boatItem == 3)
				player.COMPASS = true;
			getItem.play();
			if (boatItem == 4)
				player.MAP = true;
			getItem.play();
			if (boatItem == 5)
				player.PEN = true;
			getItem.play();
			boatStats[place] = 0;
			getBoatItem = false;
		}
		if (getBoatClue) {
			setBestClues();
			c.strokeText(bestClues[boatClue], (canvasWidth / 3) + 20, (canvasHeight / 3) + 60);
			c.fillText(bestClues[boatClue], (canvasWidth / 3) + 20, (canvasHeight / 3) + 60);
		}
		if (player.PEN == true && player.MAP == true) {
			boatX = center[0];
			boatY = center[1];
			if (boatPos[boatPos.length - 2] != boatX / 5 && boatPos[boatPos.length - 1] != boatY / 5) {
				boatPos.push(boatX / 5);
				boatPos.push(boatY / 5);
			}
		}

	}

	// ----------------------------------------
	//     Draw Battle Screen
	// ----------------------------------------
	var hurt = false;
	var drawStart = 40;
	var enemyHp = Math.ceil(Math.random() * (100 - 25) + 25);

	function drawBattleScreen(i, count, playerCount, randDrawSpeed) {
		/*if(humTut) {
		 c.font = "20px Arial";
		 c.strokeText("Instructions", (canvasWidth / 2), (canvasHeight / 3));
		 c.fillText("Instructions", (canvasWidth / 2), (canvasHeight / 3));
		 setInterval(function (){humTut = true;}, 6000)
		 }*/
		if (numOfPlayers == 1)
			var drawEnd = Math.random() * (64 - 48) + 48;
		if (numOfPlayers == 2)
			var drawEnd = Math.random() * (66 - 49) + 49;
		if (numOfPlayers == 3)
			var drawEnd = Math.random() * (68 - 50) + 50;
		if (numOfPlayers == 4)
			var drawEnd = Math.random() * (70 - 52) + 52;
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
			whoosh.play();
			c.fillText("DRAW", (canvasWidth / 2) - 75, (canvasHeight / 2) - 20);
		}
		c.lineWidth = 10;
		c.font = "20px Arial";
		c.strokeText("PREPARE TO DRAW", (canvasWidth / 2) - 80, (canvasHeight / 3) - 30);
		c.fillText("PREPARE TO DRAW", (canvasWidth / 2) - 80, (canvasHeight / 3) - 30);
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
				enemyHp -= Math.floor(Math.random() * (100 - 90) + 90);
			if (numOfPlayers == 3)
				enemyHp -= Math.floor(Math.random() * (90 - 70) + 70);
			if (numOfPlayers == 2)
				enemyHp -= Math.floor(Math.random() * (70 - 50) + 50);
			if (numOfPlayers == 1)
				enemyHp -= Math.floor(Math.random() * (50 - 30) + 30);
			if (enemyHp <= 0) {
				humanEnemies[i] = -tiles_dimension;
				humanEnemies[i + 1] = -tiles_dimension;
				playerCount = 0;
				player.WATER += Math.floor((Math.random() * (500 - 50)) + 50);
				inBattle = false;
				humBat = false;
				humanEnemiesKilled++;
				wind.pause();
				wind.currentTime = 0;
				enemyHp = Math.ceil(Math.random() * (100 - 50) + 50);
			}
		}

		if (hurt == true && ((playerCount > (drawEnd + randDrawSpeed)) || (playerCount < (drawStart + randDrawSpeed))) && playerCount != 0) {
			var who = Math.ceil((Math.random() * numOfPlayers));
			if (who == 1 && numOfPlayers > 0) {
				if (player.HEALTH != 0)
					maleGruntSnd1.play();
				player.HEALTH -= Math.ceil((Math.random() * (20 - numOfPlayers)) + 5);
			}
			if (who == 2 && numOfPlayers > 1) {
				if (player2.HEALTH != 0)
					femaleGruntSnd1.play();
				player2.HEALTH -= Math.ceil((Math.random() * (20 - numOfPlayers)) + 5);
			}
			if (who == 3 && numOfPlayers > 2) {
				if (player3.HEALTH != 0)
					maleGruntSnd2.play();
				player3.HEALTH -= Math.ceil((Math.random() * (20 - numOfPlayers)) + 5);
			}
			if (who == 4 && numOfPlayers > 3) {
				if (player4.HEALTH != 0)
					femaleGruntSnd2.play();
				player4.HEALTH -= Math.ceil((Math.random() * (20 - numOfPlayers)) + 5);
			}
			player.WATER -= Math.floor((Math.random() * (1000 - 500)) + 500);
			playerCount = 0;
		}
		hurt = false;
	}

	// ----------------------------------------
	//     Draw Fish Battle Screen
	// ----------------------------------------

	var fishHealth = 0;

	function drawBattleScreen_fish(i, count, playerCount) {
		if (setHealth == true) {
			if (numOfPlayers == 4)
				fishHealth = 150;
			if (numOfPlayers == 3)
				fishHealth = 100;
			if (numOfPlayers == 2)
				fishHealth = 50;
			if (numOfPlayers == 1)
				fishHealth = 25;
			setHealth = false;
		}
		// Colors the screen darker
		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		// Display prompt fight on screen
		c.lineWidth = 10;
		c.font = "60px Arial";
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.strokeText("FIGHT FOR YOUR LIFE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("FIGHT FOR YOUR LIFE", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);

		// Draw Fish's health bar
		c.fillStyle = 'rgba(0, 0, 0, 0.75)';
		c.fillRect(canvasWidth / 2, canvasHeight / 2 - 15, 110, 25);
		c.fillStyle = 'rgba(150, 150, 150, 0.75)';
		c.fillRect(canvasWidth / 2 + 5, canvasHeight / 2 - 10, 100, 15);
		c.fillStyle = 'rgba(200, ' + fishHealth * 2 + ', ' + (fishHealth * 2 + 55) + ', 1)';
		if (fishHealth > 0 && numOfPlayers == 4)
			c.fillRect(canvasWidth / 2 + 5, canvasHeight / 2 - 10, fishHealth * (2 / 3), 15);
		if (fishHealth > 0 && numOfPlayers == 3)
			c.fillRect(canvasWidth / 2 + 5, canvasHeight / 2 - 10, fishHealth, 15);
		if (fishHealth > 0 && numOfPlayers == 2)
			c.fillRect(canvasWidth / 2 + 5, canvasHeight / 2 - 10, fishHealth * 2, 15);
		c.font = "15px Arial";
		if (fishHealth > 0 && numOfPlayers == 1)
			c.fillRect(canvasWidth / 2 + 5, canvasHeight / 2 - 10, fishHealth * 4, 15);
		c.lineWidth = 3;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, .75)';
		c.strokeText("Enemy Health", canvasWidth / 2 + 5, canvasHeight / 3 + 90);
		c.fillText("Enemy Health", canvasWidth / 2 + 5, canvasHeight / 3 + 90);

		// If you successfuly beat the fish, delete fish from grid and gain reward
		if (fishHealth < 1) {
			fishEnemies[i] = -tiles_dimension;
			fishEnemies[i + 1] = -tiles_dimension;
			playerCount = 0;
			player.WATER += Math.floor((Math.random() * (500 - 50)) + 50);
			inBattle = false;
			fishBat = false;
			keysDone = false;
			fishBattleTheme.pause();
			fishBattleTheme.currentTime = 0;
			hitKeys.length = 0;
			currKey = 0;
			AIKeys.length = 0;
			AIcurrKey = 0;
			fishEnemiesKilled++;
			fishHealth = 100;
			setHealth = true;
			perfectString = 0;
			console.log(fishHealth);
		}
		hurt = false;
	}

	// ----------------------------------------
	//     Initialize Start position
	// ----------------------------------------
	function homeUI() {
		c.fillStyle = "rgba(0,25,75, 0.25)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 5;
		//c.lineJoin="miter";
		//c.miterLimit=20;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "20px Arial";
		c.strokeText("IN HOME", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.fillText("IN HOME", (canvasWidth / 3) - 10, (canvasHeight / 3) - 30);
		c.strokeText("Choose your party size: Decide with '1' '2' '3' '4' ", (canvasWidth / 3) - 50, (canvasHeight / 3));
		c.fillText("Choose your party size: Decide with '1' '2' '3' '4' ", (canvasWidth / 3) - 50, (canvasHeight / 3));
		c.strokeText("Current party size: " + numOfPlayers, (canvasWidth / 3) - 50, (canvasHeight / 3) + 30);
		c.fillText("Current party size: " + numOfPlayers, (canvasWidth / 3) - 50, (canvasHeight / 3) + 30);
		c.strokeText("Find your first village and watch out for bandits", (canvasWidth / 3) - 50, (canvasHeight / 3) + 160);
		c.fillText("Find your first village and watch out for bandits", (canvasWidth / 3) - 50, (canvasHeight / 3) + 160);
		c.strokeText("Press spacebar to continue", (canvasWidth / 3) - 50, (canvasHeight / 3) + 190);
		c.fillText("Press spacebar to continue", (canvasWidth / 3) - 50, (canvasHeight / 3) + 190);
	}

	// ----------------------------------------
	//     When the game is over
	// ----------------------------------------
	function gameOverUI() {
		var time = "Time at sea: " + Math.floor(counter / 60) + " : " + counter % 60;
		var humKilled = "Killed " + humanEnemiesKilled + " bandits";
		var fishKilled = "Killed " + fishEnemiesKilled + " gamma fishes";
		c.textAlign = "center";
		c.fillStyle = "rgba(25, 25, 55, 0.90)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 15;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "30px Arial";
		c.strokeText("THE SCORCHING SEA HAS CLAIMED ANOTHER VICTIM", (canvasWidth / 2), (canvasHeight / 2) - 60);
		c.fillText("THE SCORCHING SEA HAS CLAMIED ANOTHER VICTIM", (canvasWidth / 2), (canvasHeight / 2) - 60);
		c.strokeText(time, (canvasWidth / 2), (canvasHeight / 2) - 20);
		c.fillText(time, (canvasWidth / 2), (canvasHeight / 2) - 20);
		c.strokeText(humKilled, (canvasWidth / 2), (canvasHeight / 2) + 20);
		c.fillText(humKilled, (canvasWidth / 2), (canvasHeight / 2) + 20);
		c.strokeText(fishKilled, (canvasWidth / 2), (canvasHeight / 2) + 60);
		c.fillText(fishKilled, (canvasWidth / 2), (canvasHeight / 2) + 60);
	}

	// ----------------------------------------
	//     When the game is won
	// ----------------------------------------
	function winScreen() {
		var time = "Time at sea: " + Math.floor(counter / 60) + " : " + counter % 60;
		var humKilled = "Killed " + humanEnemiesKilled + " bandits";
		var fishKilled = "Killed " + fishEnemiesKilled + " gamma fishes";
		c.textAlign = "center";
		c.fillStyle = "rgba(225, 255, 255, 0.90)";
		c.fillRect(0, 0, canvasWidth, canvasHeight);
		c.lineWidth = 15;
		c.fillStyle = 'rgba(255, 255, 255, 1)';
		c.strokeStyle = 'rgba(0, 0, 0, 1)';
		c.font = "30px Arial";
		c.strokeText("FOUND ATLANTIS", (canvasWidth / 2), (canvasHeight / 2) - 60);
		c.fillText("FOUND ATLANTIS", (canvasWidth / 2), (canvasHeight / 2) - 60);
		c.strokeText(time, (canvasWidth / 2), (canvasHeight / 2) - 20);
		c.fillText(time, (canvasWidth / 2), (canvasHeight / 2) - 20);
		c.strokeText(humKilled, (canvasWidth / 2), (canvasHeight / 2) + 20);
		c.fillText(humKilled, (canvasWidth / 2), (canvasHeight / 2) + 20);
		c.strokeText(fishKilled, (canvasWidth / 2), (canvasHeight / 2) + 60);
		c.fillText(fishKilled, (canvasWidth / 2), (canvasHeight / 2) + 60);
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
	var rockPos = new Array(2500);
	var cactusPos = new Array(1000);
	var homeBase = new Array(2);
	var promiseWater = new Array(2);
	//multiples of 12
	var villages = new Array(2400);
	//multiples of 8
	var caves = new Array(400);
	//multiples of 12
	var boats = new Array(240);
	//boundaries
	var boundaries = new Array(tiles_dimension * 8);

	var objectSize = boundaries.length + rockPos.length + homeBase.length + villages.length + promiseWater.length + cactusPos.length + caves.length + boats.length;
	var allObjects = new Array(objectSize);
	var shadows = new Array(objectSize);

	//multiples of 2
	var humanEnemies = new Array(500);
	var fishEnemies = new Array(500);
	var fishOrig = new Array(fishEnemies.length);
	var travellers = new Array(100);
	var foilage = new Array(allObjects.length);

	//items/stats
	var travellerStats = new Array(travellers.length);
	var villageItems = new Array(villages.length);
	var humanEnemiesStats = new Array(humanEnemies.length);
	var caveStats = new Array(caves.length);
	var boatStats = new Array(boats.length);

	var numOfPlayers = 4;
	var player = {
		X : 2,
		Y : -2,
		WATERORIG : 20000,
		WATER : 20000,
		UVORIG : 100,
		UV : 100,
		HEALTH : 100,
		ATTACK : 4,
		SHOVEL : false,
		DETECTOR : false,
		COMPASS : false,
		MAP : true,
		PEN : true
	};

	var player2 = {
		X : 2,
		Y : -2,
		HEALTH : 100,
		ATTACK : 4
	};

	var player3 = {
		X : 2,
		Y : -2,
		HEALTH : 100,
		ATTACK : 5
	};

	var player4 = {
		X : 2,
		Y : -2,
		HEALTH : 100,
		ATTACK : 5
	};

	var homeBase = {
		WATER : 20000 * 4
	};

	//------------------------------------------
	// Create Object Random Positions
	//------------------------------------------

	var i = 0;
	//create rocks and shadow positions
	for (; i < rockPos.length; i++) {
		rockPos[i] = Math.floor(Math.random() * (tiles_dimension - 6) - (tiles_dimension / 2) + 3);
		allObjects[i] = rockPos[i];
		if (!(i % 2 == 0)) {
			shadows[i] = rockPos[i] + 1;
		} else {
			shadows[i] = rockPos[i];
		}
	}

	//creates cactus positions
	for (var j = 0; j < cactusPos.length; j++) {
		cactusPos[j] = Math.floor(Math.random() * (tiles_dimension - 6) - (tiles_dimension / 2) + 3);
		allObjects[i] = cactusPos[j];
		if (!(i % 2 == 0)) {
			shadows[i] = cactusPos[j] + 1;
		} else {
			shadows[i] = cactusPos[j];
		}
		i++;
	}

	var inc = 0;
	for (var k = 0; k < boundaries.length; k += 2) {
		if (k >= 0 && k < boundaries.length / 4) {
			boundaries[k] = (-tiles_dimension / 2) + inc;
			boundaries[k + 1] = -tiles_dimension / 2 - 1;

			inc++;
			if (inc > boundaries.length / 4) {
				inc = 0;
			}

		}
		if (k >= boundaries.length / 4 && k < boundaries.length / 2) {
			boundaries[k] = -tiles_dimension / 2 - 1;
			boundaries[k + 1] = (-tiles_dimension / 2) * 3 + inc;
			inc++;
			if (inc > boundaries.length / 4) {
				inc = 0;
			}
		}
		if (k >= boundaries.length / 2 && k < boundaries.length * 3 / 4) {
			boundaries[k] = (tiles_dimension / 2) - inc - 1;
			boundaries[k + 1] = tiles_dimension / 2;
			inc++;
			if (inc > boundaries.length / 4) {
				inc = 0;
			}
		}

		if (k >= boundaries.length * 3 / 4 && k < boundaries.length) {
			boundaries[k] = tiles_dimension / 2;
			boundaries[k + 1] = (-tiles_dimension / 2) * 3 + inc + 1;
			inc++;
			if (inc > boundaries.length / 4) {
				inc = 0;
			}
		}
		allObjects[i] = boundaries[k];
		allObjects[i + 1] = boundaries[k + 1];
		shadows[i] = boundaries[k];
		shadows[i + 1] = boundaries[k + 1] + 1;
		i += 2;
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

		villages[j] = Math.floor(Math.random() * (tiles_dimension - 12) - (tiles_dimension / 2) + 6);
		villages[j + 1] = Math.floor(Math.random() * (tiles_dimension - 12) - (tiles_dimension / 2) + 6);
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
		caveStats[j] = Math.floor((Math.random() * (1000 - 100)) + 100);
		caveStats[j + 1] = Math.floor((Math.random() * (1000 - 100)) + 100);
		caveStats[j + 2] = Math.floor((Math.random() * (1000 - 100)) + 100);
		caveStats[j + 3] = Math.floor((Math.random() * (1000 - 100)) + 100);
		caves[j] = Math.floor(Math.random() * (tiles_dimension - 8) - (tiles_dimension / 2) + 4);
		caves[j + 1] = Math.floor(Math.random() * (tiles_dimension - 8) - (tiles_dimension / 2) + 4);
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
		//item
		boatStats[j] = Math.floor((Math.random() * (6 - 1)) + 1);
		//helpful clues
		boatStats[j + 1] = Math.floor((Math.random() * (11 - 1)) + 1);
		boats[j] = Math.floor(Math.random() * (tiles_dimension - 12) - (tiles_dimension / 2) + 2);
		boats[j + 1] = Math.floor(Math.random() * (tiles_dimension - 12) - (tiles_dimension / 2) + 2);
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
	promiseWater[0] = Math.floor(Math.random() * (tiles_dimension - 4) - (tiles_dimension / 2) + 2);
	promiseWater[1] = Math.floor(Math.random() * (tiles_dimension - 4) - (tiles_dimension / 2) + 2);
	var finalX = promiseWater[0] + tiles_dimension / 2;
	var finalY = promiseWater[1] + tiles_dimension / 2;
	//create human enemy positions
	for (var i = 0; i < humanEnemies.length; i++) {
		humanEnemies[i] = Math.floor(Math.random() * (tiles_dimension - 4) - (tiles_dimension / 2) + 2);
	}

	for (var i = 0; i < fishEnemies.length; i++) {
		fishEnemies[i] = Math.floor(Math.random() * (tiles_dimension - 4) - (tiles_dimension / 2) + 2);
		fishOrig[i] = fishEnemies[i];
	}

	for (var i = 0; i < travellers.length; i++) {
		if (!(i % 2 == 0))
			travellerStats[i] = Math.ceil((Math.random() * 5));
		else
			travellerStats[i] = Math.floor((Math.random() * (1000 - 500)) + 500);
		travellers[i] = Math.floor(Math.random() * (tiles_dimension - 4) - (tiles_dimension / 2) + 2);
	}

	for (var k = 0; k < foilage.length; k++) {
		foilage[k] = Math.random() * (tiles_dimension - 4) - (tiles_dimension / 2) + 2;
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
		boundaries[i] -= moveSpeed;
		foilage[i] -= moveSpeed;
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
		boundaries[i] += moveSpeed;
		foilage[i] += moveSpeed;
	}

	// ----------------------------------------
	//     Fish Fight Mechanics
	// ----------------------------------------
	function setKeys() {
		var keyNum = 0;
		printKeys = true;
		// Set player Keys
		if (resetHumKeys) {
			for (var i = 0; i < 4; ++i) {
				keyNum = Math.random();
				if (keyNum >= 0 && keyNum < .25) {
					hitKeys.push("W");
				} else if (keyNum >= .25 && keyNum < .50) {
					hitKeys.push("A");
				} else if (keyNum >= .50 && keyNum < .75) {
					hitKeys.push("S");
				} else {
					hitKeys.push("D");
				}
			}
			resetHumKeys = false;
		}

		// set AI Keys
		if (resetFishKeys) {
			for (var i = 0; i < 7; ++i) {
				keyNum = Math.random();
				if (keyNum >= 0 && keyNum < .25) {
					AIKeys.push("D");
				} else if (keyNum >= .25 && keyNum < .50) {
					AIKeys.push("S");
				} else if (keyNum >= .50 && keyNum < .75) {
					AIKeys.push("A");
				} else {
					AIKeys.push("W");
				}
			}
			resetFishKeys = false;
		}
	}

	function drawAIKeys(AIKeys) {
		for (var i = 0; i < AIKeys.length; i++) {
			c.lineWidth = 3;
			c.fillStyle = 'rgba(255, 255, 255, 1)';
			c.strokeStyle = 'rgba(0, 0, 0, 1)';
			c.font = "40px Arial";
			c.strokeText(AIKeys[i], (canvasWidth / 6) + (i + 20) * 40, (canvasHeight / 10));
			c.fillText(AIKeys[i], (canvasWidth / 6) + (i + 20) * 40, (canvasHeight / 10));
		}
		for (var i = 0; i < AIcurrKey; i++) {
			//Outline finished keys red
			c.lineWidth = 3;
			c.fillStyle = 'rgba(255, 255, 255, 1)';
			c.strokeStyle = 'rgba(255, 0, 0, 1)';
			c.font = "40px Arial";
			c.strokeText(AIKeys[i], (canvasWidth / 6) + (i + 20) * 40, (canvasHeight / 10));
			c.fillText(AIKeys[i], (canvasWidth / 6) + (i + 20) * 40, (canvasHeight / 10));
		}
		if (AIcurrKey <= AIKeys.length - 1) {
			//Outline current key green
			c.lineWidth = 3;
			c.fillStyle = 'rgba(255, 255, 255, 1)';
			c.strokeStyle = 'rgba(0, 255, 43, 1)';
			c.font = "40px Arial";
			c.strokeText(AIKeys[AIcurrKey], (canvasWidth / 6) + (AIcurrKey + 20) * 40, (canvasHeight / 10));
			c.fillText(AIKeys[AIcurrKey], (canvasWidth / 6) + (AIcurrKey + 20) * 40, (canvasHeight / 10));
		}
	}

	function AIexecKeys() {
		var damageGiven = Math.floor(Math.random() * (15 - 10) + 10);
		if (fishBat && inBattle) {
			calcDamage(damageGiven, true);
			AIcurrKey++;
			if (AIcurrKey == AIKeys.length) {
				damageGiven = Math.floor(Math.random() * (10 - 5) + 5);
				calcDamage(damageGiven, false);
				AIcurrKey = 0;
				AIKeys.length = 0;
				resetFishKeys = true;
				setKeys();
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
		}
	}

	setInterval(AIexecKeys, 3000);

	function changeKeyColor(hitKeys) {
		for (var i = 0; i < currKey; i++) {
			//Outline finished keys red
			c.lineWidth = 3;
			c.fillStyle = 'rgba(255, 255, 255, 1)';
			c.strokeStyle = 'rgba(255, 0, 0, 1)';
			c.font = "40px Arial";
			c.strokeText(hitKeys[i], (canvasWidth / 6) + i * 40, (canvasHeight / 10));
			c.fillText(hitKeys[i], (canvasWidth / 6) + i * 40, (canvasHeight / 10));
		}
		if (currKey <= hitKeys.length - 1) {
			//Outline current key green
			c.lineWidth = 3;
			c.fillStyle = 'rgba(255, 255, 255, 1)';
			c.strokeStyle = 'rgba(0, 255, 43, 1)';
			c.font = "40px Arial";
			c.strokeText(hitKeys[currKey], (canvasWidth / 6) + currKey * 40, (canvasHeight / 10));
			c.fillText(hitKeys[currKey], (canvasWidth / 6) + currKey * 40, (canvasHeight / 10));
		}
	}

	var playerAttack = 0;
	function calcAttack() {
		playerAttack = 0;
		if (numOfPlayers == 4) {
			if (player.HEALTH >= 1)
				playerAttack += player.ATTACK;
			if (player2.HEALTH >= 1)
				playerAttack += player2.ATTACK;
			if (player3.HEALTH >= 1)
				playerAttack += player3.ATTACK;
			if (player4.HEALTH >= 1)
				playerAttack += player4.ATTACK;
		}
		if (numOfPlayers == 3) {
			if (player.HEALTH >= 1)
				playerAttack += player.ATTACK;
			if (player2.HEALTH >= 1)
				playerAttack += player2.ATTACK;
			if (player3.HEALTH >= 1)
				playerAttack += player3.ATTACK;
		}
		if (numOfPlayers == 2) {
			if (player.HEALTH >= 1)
				playerAttack += player.ATTACK;
			if (player2.HEALTH >= 1)
				playerAttack += player2.ATTACK;
		}
		if (numOfPlayers == 1) {
			if (player.HEALTH >= 1)
				playerAttack += player.ATTACK;
		}

		if (perfectString == 3) {
			playerAttack += numOfPlayers * 5;
			perfectString = 0;
		}
	}

	function calcDamage(damage, isEnemy) {
		var chooseP = 0;
		if (isEnemy) {
			chooseP = Math.random();
			if (player.HEALTH >= 1 && chooseP >= 0 && chooseP < .25)
				player.HEALTH -= damage;
			if (player2.HEALTH >= 1 && chooseP >= .25 && chooseP < .50)
				player2.HEALTH -= damage;
			if (player3.HEALTH >= 1 && chooseP >= .50 && chooseP < .75)
				player3.HEALTH -= damage;
			if (player4.HEALTH >= 1 && chooseP >= .75 && chooseP <= 1)
				player4.HEALTH -= damage;
		} else {
			if (player.HEALTH >= 1)
				player.HEALTH -= damage;
			if (player2.HEALTH >= 1)
				player2.HEALTH -= damage;
			if (player3.HEALTH >= 1)
				player3.HEALTH -= damage;
			if (player4.HEALTH >= 1)
				player4.HEALTH -= damage;
		}

	}

	function execKeys(hitKeys, matchKey) {
		// Keeps track of the current index we are at
		var penalty = 3;
		if (hitKeys[currKey] == matchKey) {
			calcAttack();
			console.log(playerAttack);
			fishHealth -= playerAttack;
			swordSlash.play();
			currKey++;
			perfectString++;
			if (currKey == hitKeys.length) {
				currKey = 0;
				hitKeys.length = 0;
				resetHumKeys = true;
				perfectString = 0;
				setKeys();
			}

		} else {
			perfectString = 0;
			hitKeys.length = 0;
			currKey = 0;
			resetHumKeys = true;
			setKeys();
			// Players take some damage for missing keys
			calcDamage(penalty, false);
			//hurt = true;
		}
	}

	var moveSpeed = .25;

	// ----------------------------------------
	//     Move the other characters
	// ----------------------------------------

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

	// ----------------------------------------
	//    Human Enemy AI
	// ----------------------------------------
	var othersSpeed = .25;
	var skip = false;
	var humDir = new Array(humanEnemies.length / 2);
	for (var k = 0; k < humanEnemies.length / 2; k++) {
		humDir[k] = Math.floor((Math.random() * 4)) + 1;
	}
	var humanSpeed = 110 * world_speed;
	setInterval(function() {
		if (!inBattle && !inVillage && !inHome && !talking && !pause && !inCave && !inBoat) {
			for (var i = 0; i < humanEnemies.length; i += 2) {
				if (humanEnemies[i] > player.X && humanEnemies[i] < 9 && humanEnemies[i + 1] > -9 && humanEnemies[i + 1] < 3 && skip == false) {
					humanEnemies[i] -= othersSpeed;
					humDir[i] = 2;
					skip = true;
				}
				if (humanEnemies[i] < player.X && humanEnemies[i] > -3 && humanEnemies[i + 1] > -9 && humanEnemies[i + 1] < 3 && skip == false) {
					humanEnemies[i] += othersSpeed;
					humDir[i] = 1;
					skip = true;
				}
				if (humanEnemies[i + 1] > player.Y && humanEnemies[i + 1] < 3 && humanEnemies[i] > -3 && humanEnemies[i] < 9 && skip == false) {
					humanEnemies[i + 1] -= othersSpeed;
					humDir[i] = 3;
					skip = true;
				}
				if (humanEnemies[i + 1] < player.Y && humanEnemies[i + 1] > -9 && humanEnemies[i] > -3 && humanEnemies[i] < 9 && skip == false) {
					humanEnemies[i + 1] += othersSpeed;
					humDir[i] = 4;
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

	// ----------------------------------------
	//     Fish Enemy AI
	// ----------------------------------------
	var fishSkip = false;
	var fishDir = new Array(fishEnemies.length / 2);
	for (var k = 0; k < fishEnemies.length / 2; k++) {
		fishDir[k] = Math.floor(Math.random() * 2) + 1;
	}
	var fishSpeed = 90 * world_speed;
	setInterval(function() {
		//for loop
		if (!inBattle && !inVillage && !inHome && !day && !talking && !pause && !inCave && !inBoat) {
			for (var i = 0; i < fishEnemies.length; i += 2) {
				if (fishEnemies[i] > player.X && fishEnemies[i] < 10 && fishEnemies[i + 1] > -10 && fishEnemies[i + 1] < 4 && fishSkip == false) {
					fishEnemies[i] -= othersSpeed;
					fishDir[i] = 2;
					fishSkip = true;
				}
				if (fishEnemies[i] < player.X && fishEnemies[i] > -4 && fishEnemies[i + 1] > -10 && fishEnemies[i + 1] < 4 && fishSkip == false) {
					fishEnemies[i] += othersSpeed;
					fishDir[i] = 1;
					fishSkip = true;
				}
				if (fishEnemies[i + 1] > player.Y && fishEnemies[i + 1] < 4 && fishEnemies[i] > -4 && fishEnemies[i] < 10 && fishSkip == false) {
					fishEnemies[i + 1] -= othersSpeed;
					fishSkip = true;
				}
				if (fishEnemies[i + 1] < player.Y && fishEnemies[i + 1] > -10 && fishEnemies[i] > -4 && fishEnemies[i] < 10 && fishSkip == false) {
					fishEnemies[i + 1] += othersSpeed;
					fishSkip = true;
				}
				if (fishEnemies[i] == player.X && fishEnemies[i + 1] == player.Y) {
					inBattle = true;
					fishBat = true;
					enemyPosition = i;
					resetHumKeys = true;
					resetFishKeys = true;
					setKeys();
					break;
				}
				fishSkip = false;
			}
		}
	}, fishSpeed);

	// Player 2 movement
	var direction2 = 1;
	setInterval(function() {

		if (!inVillage && !inBattle && !talking && !pause && !inCave && !inBoat) {
			if (player2.X > player.X) {
				player2.X -= othersSpeed;
				direction2 = 2;
			}
			if (player2.X < player.X) {
				player2.X += othersSpeed;
				direction2 = 4;
			}
			if (player2.Y > player.Y) {
				player2.Y -= othersSpeed;
				direction2 = 3;
			}
			if (player2.Y < player.Y) {
				player2.Y += othersSpeed;
				direction2 = 1;
			}
		}

	}, 50);
	// Player 3 movement
	var direction3 = 1;
	setInterval(function() {
		if (!inVillage && !inBattle && !talking && !pause && !inCave && !inBoat) {
			if (player3.X > player.X) {
				player3.X -= othersSpeed;
				direction3 = 2;
			}
			if (player3.X < player.X) {
				player3.X += othersSpeed;
				direction3 = 4;
			}
			if (player3.Y > player.Y) {
				player3.Y -= othersSpeed;
				direction3 = 3;
			}
			if (player3.Y < player.Y) {
				player3.Y += othersSpeed;
				direction3 = 1;
			}
		}
	}, 50);
	// Player 4 movement
	var direction4 = 1;
	setInterval(function() {

		if (!inVillage && !inBattle && !talking && !pause && !inCave && !inBoat) {
			if (player4.X > player.X) {
				player4.X -= othersSpeed;
				direction4 = 2;
			}
			if (player4.X < player.X) {
				player4.X += othersSpeed;
				direction4 = 4;
			}
			if (player4.Y > player.Y) {
				player4.Y -= othersSpeed;
				direction4 = 3;
			}
			if (player4.Y < player.Y) {
				player4.Y += othersSpeed;
				direction4 = 1;
			}
		}

	}, 50);

	// the lower the faster
	// Player movement, controls all the other objects
	// Move Down
	var direction = 1;
	var playerSpeed = 100 * world_speed;
	setInterval(function() {
		if (goDown) {
			if (center[1] < tiles_dimension + 1) {
				center[1] += moveSpeed;
				moveOthersY(-1);
				for (var i = 1; i < allObjects.length; i += 2) {
					decAll(i);
					if (allObjects[i] > player.Y - 1 && allObjects[i] < player.Y + 1 && allObjects[i - 1] > player.X - 1 && allObjects[i - 1] < player.X + 1) {
						center[1] -= moveSpeed;
						moveOthersY(1);
						for (var j = 1; j < allObjects.length; j += 2) {
							inAll(j);
						}
					}
				}
			}
			if (inSun && player.WATER > 0) {
				if (player.UV > 0) {
					player.UV -= .25;
				}
				player.WATER -= (1 * numOfPlayers - 1) / 4;
			}
			direction = 1;
		}
	}, playerSpeed);
	// Move Up
	setInterval(function() {
		if (goUp) {
			if (center[1] > 2) {
				center[1] -= moveSpeed;
				moveOthersY(1);
				for (var i = 1; i < allObjects.length; i += 2) {
					inAll(i);
					if (allObjects[i] > player.Y - 1 && allObjects[i] < player.Y + 1 && allObjects[i - 1] > player.X - 1 && allObjects[i - 1] < player.X + 1) {
						center[1] += moveSpeed;
						moveOthersY(-1);
						for (var j = 1; j < allObjects.length; j += 2) {
							decAll(j);
						}
					}
				}
			}
			if (inSun && player.WATER > 0) {
				if (player.UV > 0) {
					player.UV -= .25;
				}
				player.WATER -= (1 * numOfPlayers - 1) / 4;
			}
			direction = 3;
		}
	}, playerSpeed);
	// Move Left

	setInterval(function() {
		if (goLeft) {
			if (center[0] > -2) {
				center[0] -= moveSpeed;
				moveOthersX(1);
				for (var i = 0; i < allObjects.length; i += 2) {
					inAll(i);
					if (allObjects[i + 1] > player.Y - 1 && allObjects[i + 1] < player.Y + 1 && allObjects[i] > player.X - 1 && allObjects[i] < player.X + 1) {
						center[0] += moveSpeed;
						moveOthersX(-1);
						for (var j = 0; j < allObjects.length; j += 2) {
							decAll(j);
						}
					}
				}
			}
			if (inSun && player.WATER > 0) {
				if (player.UV > 0) {
					player.UV -= .25;
				}
				player.WATER -= (1 * numOfPlayers - 1) / 4;
			}
			direction = 2;
		}
	}, playerSpeed);
	// Move Right

	setInterval(function() {
		if (goRight) {
			if (center[0] < tiles_dimension - 3) {
				center[0] += moveSpeed;
				moveOthersX(-1);
				for (var i = 0; i < allObjects.length; i += 2) {
					decAll(i);
					if (allObjects[i + 1] > player.Y - 1 && allObjects[i + 1] < player.Y + 1 && allObjects[i] > player.X - 1 && allObjects[i] < player.X + 1) {
						center[0] -= moveSpeed;
						moveOthersX(1);
						for (var j = 0; j < allObjects.length; j += 2) {
							inAll(j);
						}
					}
				}
			}
			if (inSun && player.WATER > 0) {
				if (player.UV > 0) {
					player.UV -= .25;
				}
				player.WATER -= (1 * numOfPlayers - 1) / 4;
			}
			direction = 4;
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
		//DoN_E : 69
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
					if (!inVillage && !inBattle && !gameOver && !inHome && !youWin && !talking && !inCave && !inBoat) {
						goDown = true;
						goLeft = false;
						goRight = false;
						goUp = false;
					} else if (!inVillage && fishBat && inBattle && !gameOver) {
						matchKey = "S";
						execKeys(hitKeys, matchKey);
					}
					break;
				case keys.UP:
					if (!inVillage && !inBattle && !gameOver && !inHome && !youWin && !talking && !inCave && !inBoat) {
						goUp = true;
						goDown = false;
						goRight = false;
						goLeft = false;
					} else if (!inVillage && fishBat && inBattle && !gameOver) {
						matchKey = "W";
						execKeys(hitKeys, matchKey);
					}
					break;
				case keys.LEFT:
					if (!inVillage && !inBattle && !gameOver && !inHome && !youWin && !talking && !inCave && !inBoat) {
						goLeft = true;
						goUp = false;
						goDown = false;
						goRight = false;
					} else if (!inVillage && fishBat && inBattle && !gameOver) {
						matchKey = "A";
						execKeys(hitKeys, matchKey);
					}
					break;
				case keys.RIGHT:
					if (!inVillage && !inBattle && !gameOver && !inHome && !youWin && !talking && !inCave && !inBoat) {
						goRight = true;
						goDown = false;
						goLeft = false;
						goUp = false;
					} else if (!inVillage && fishBat && inBattle && !gameOver) {
						matchKey = "D";
						execKeys(hitKeys, matchKey);
					}
					break;

				///////////////////////////////////
				//this is where you need to continue code
				case keys.ONE:
					if (inHome)
						numOfPlayers = 1;
					break;
				case keys.TWO:
					if (inHome)
						numOfPlayers = 2;
					break;
				case keys.THREE:
					if (inHome)
						numOfPlayers = 3;
					break;
				case keys.FOUR:
					if (inHome)
						numOfPlayers = 4;
					break;
				case keys.ENTER:
					if (inVillage)
						if (village_selection == 1) {
							buyHealth = true;
						}
					if (talking)
						if (talking_selection == 1) {
							getFood = true;
						}
					if (inCave)
						if (cave_selection == 1) {
							caveWater1 = true;
							cave_selection += 1;
							break;
						}
					if (inBoat)
						if (boat_selection == 1) {
							getBoatItem = true;
						}
					//----------------------------------
					if (inVillage)
						if (village_selection == 2) {
							buyWater = true;
						}
					if (talking)
						if (talking_selection == 2) {
							getWater = true;
						}
					if (inCave)
						if (cave_selection == 2) {
							caveWater2 = true;
							cave_selection += 1;
							break;
						}
					if (inBoat)
						if (boat_selection == 2) {
							getBoatClue = true;
						}
					//----------------------------------
					if (inVillage && player.WATER > 1000)
						if (village_selection == 3) {
							buyItem = true;
						}
					if (inCave)
						if (cave_selection == 3) {
							caveWater3 = true;
							cave_selection += 1;

							break;
						}
					//----------------------------------
					if (inVillage) {
						if (village_selection == 4) {
							pickClue = Math.floor(Math.random() * clues.length);
							getClue = true;
						}
					}
					if (inCave)
						if (cave_selection == 4) {
							caveWater4 = true;
							cave_selection -= 1;
							break;
						}
					break;
				case keys.ENTER:
					break;
				case keys.PAUSE:
					if (!gameOver)
						pause = true;
					break;
				/*case keys.DoN_E:
				 if (day)
				 counter = 60;
				 else
				 counter = 0;*/
				case keys.SPACE:
					if (inBattle) {
						playerCount = count;
						count = 0;
						hurt = true;
						if (!gameOver) {
							if (humBat)
								gunShot.play();
						}
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
					if (talking)
						talking = !talking;
					if (inCave)
						inCave = !inCave;
					if (inBoat)
						inBoat = !inBoat;
					if (inVillage) {
						inVillage = !inVillage;
						villageTheme.pause();
						villageTheme.currentTime = 0;
						overworld.play();
					}
					if (getClue)
						getClue = false;
					if (getBoatClue)
						getBoatClue = false;
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

	function drawPlayers() {
		if (player4.HEALTH > 0 && numOfPlayers == 4) {
			if (player3.HEALTH > 0)
				drawPlayer3(player3.X - .3, player3.Y - .3);
			if (player4.HEALTH > 0)
				drawPlayer4(player4.X + .3, player4.Y - .3);
			if (player.HEALTH > 0)
				drawPlayer(player.X - .3, player.Y + .3);
			if (player2.HEALTH > 0)
				drawPlayer2(player2.X + .3, player2.Y + .3);
		} else if (player3.HEALTH > 0 && numOfPlayers == 3) {
			if (player2.HEALTH > 0)
				drawPlayer2(player2.X + .3, player2.Y - .3);
			if (player3.HEALTH > 0)
				drawPlayer3(player3.X - .3, player3.Y - .3);
			if (player.HEALTH > 0)
				drawPlayer(player.X, player.Y + .3);
		} else if (player2.HEALTH > 0 && numOfPlayers == 2) {
			if(player.HEALTH > 0)
				drawPlayer(player.X - .3, player.Y);
			if(player2.HEALTH > 0)
				drawPlayer2(player2.X + .3, player2.Y);
		} else if (player.HEALTH > 0 && numOfPlayers == 1) {
			drawPlayer(player.X, player.Y);
		}
	}

	//draw all objects
	var range = 17;
	// ----------------------------------------
	//     Draws everything
	// ----------------------------------------
	function drawAll() {
		//draw floor
		drawTiles(center);
		for (var i = 0; i < foilage.length; i += 2) {
			if (foilage[i] < range && foilage[i] > -range && foilage[i + 1] < range && foilage[i + 1] > -range)
				drawFoilage(foilage[i], foilage[i + 1], i);
		}
		for (var i = 0; i < allObjects.length; i += 2) {
			if (boundaries[i] < range && boundaries[i] > -range && boundaries[i + 1] < range && boundaries[i + 1] > -range && boundaries[i] <= player.X && boundaries[i + 1] <= player.Y)
				drawRock(boundaries[i], boundaries[i + 1], i);
			if (shadows[i] < range && shadows[i] > -range && shadows[i + 1] < range && shadows[i + 1] > -range) {
				//comment this out when draw all shadow sprites
				//drawTile(shadows[i], shadows[i + 1], 1.0);
			}
			if (rockPos[i] < range && rockPos[i] > -range && rockPos[i + 1] < range && rockPos[i + 1] > -range && rockPos[i] <= player.X && rockPos[i + 1] <= player.Y)
				drawRock(rockPos[i], rockPos[i + 1], i);
			if (cactusPos[i] < range && cactusPos[i] > -range && cactusPos[i + 1] < range && cactusPos[i + 1] > -range && cactusPos[i] <= player.X && cactusPos[i + 1] <= player.Y)
				drawCactus(cactusPos[i], cactusPos[i + 1]);
			if (villages[i] < range && villages[i] > -range && villages[i + 1] < range && villages[i + 1] > -range && villages[i] <= player.X && villages[i + 1] <= player.Y)
				drawVillage(villages[i], villages[i + 1], i, i + 1);
			if (caves[i] < range && caves[i] > -range && caves[i + 1] < range && caves[i + 1] > -range && caves[i] <= player.X && caves[i + 1] <= player.Y)
				drawCave(caves[i], caves[i + 1], i, i + 1);
			if (boats[i] < range && boats[i] > -range && boats[i + 1] < range && boats[i + 1] > -range && boats[i] <= player.X && boats[i + 1] <= player.Y)
				drawBoat(boats[i], boats[i + 1], i, i + 1);
			if (homeBase[i] < range && homeBase[i] > -range && homeBase[i + 1] < range && homeBase[i + 1] > -range && homeBase[i] <= player.X && homeBase[i + 1] <= player.Y)
				drawHomeBase(homeBase[i], homeBase[i + 1]);
			if (humanEnemies[i] < range && humanEnemies[i] > -range && humanEnemies[i + 1] < range && humanEnemies[i + 1] > -range)
				drawEnemy(humanEnemies[i], humanEnemies[i + 1], humDir[i], i);
			if (!day && fishEnemies[i] < range && fishEnemies[i] > -range && fishEnemies[i + 1] < range && fishEnemies[i + 1] > -range)
				drawFishEnemy(fishEnemies[i], fishEnemies[i + 1], fishDir[i], i);
			if (travellers[i] < range && travellers[i] > -range && travellers[i + 1] < range && travellers[i + 1] > -range)
				drawTraveller(travellers[i], travellers[i + 1]);
		}
		drawPlayers();
		for (var i = 0; i < allObjects.length; i += 2) {
			if (boundaries[i] < range && boundaries[i] > -range && boundaries[i + 1] < range && boundaries[i + 1] > -range && boundaries[i] >= player.X && boundaries[i + 1] >= player.Y)
				drawRock(boundaries[i], boundaries[i + 1], i);
			if (rockPos[i] < range && rockPos[i] > -range && rockPos[i + 1] < range && rockPos[i + 1] > -range && rockPos[i] >= player.X && rockPos[i + 1] >= player.Y)
				drawRock(rockPos[i], rockPos[i + 1], i);
			if (cactusPos[i] < range && cactusPos[i] > -range && cactusPos[i + 1] < range && cactusPos[i + 1] > -range && cactusPos[i] >= player.X && cactusPos[i + 1] >= player.Y)
				drawCactus(cactusPos[i], cactusPos[i + 1]);
			if (villages[i] < range && villages[i] > -range && villages[i + 1] < range && villages[i + 1] > -range && villages[i] >= player.X && villages[i + 1] >= player.Y)
				drawVillage(villages[i], villages[i + 1], i, i + 1);
			if (caves[i] < range && caves[i] > -range && caves[i + 1] < range && caves[i + 1] > -range && caves[i] >= player.X && caves[i + 1] >= player.Y)
				drawCave(caves[i], caves[i + 1], i, i + 1);
			if (boats[i] < range && boats[i] > -range && boats[i + 1] < range && boats[i + 1] > -range && boats[i] >= player.X && boats[i + 1] >= player.Y)
				drawBoat(boats[i], boats[i + 1], i, i + 1);
			if (homeBase[i] < range && homeBase[i] > -range && homeBase[i + 1] < range && homeBase[i + 1] > -range && homeBase[i] >= player.X && homeBase[i + 1] >= player.Y)
				drawHomeBase(homeBase[i], homeBase[i + 1]);
		}
		for (var i = 0; i < allObjects.length; i += 2) {
			if (boundaries[i] < range && boundaries[i] > -range && boundaries[i + 1] < range && boundaries[i + 1] > -range && boundaries[i] < player.X && boundaries[i + 1] > player.Y)
				drawRock(boundaries[i], boundaries[i + 1], i);
			if (rockPos[i] < range && rockPos[i] > -range && rockPos[i + 1] < range && rockPos[i + 1] > -range && rockPos[i] < player.X && rockPos[i + 1] > player.Y)
				drawRock(rockPos[i], rockPos[i + 1], i);
			if (cactusPos[i] < range && cactusPos[i] > -range && cactusPos[i + 1] < range && cactusPos[i + 1] > -range && cactusPos[i] < player.X && cactusPos[i + 1] > player.Y)
				drawCactus(cactusPos[i], cactusPos[i + 1]);
			if (villages[i] < range && villages[i] > -range && villages[i + 1] < range && villages[i + 1] > -range && villages[i] < player.X && villages[i + 1] > player.Y)
				drawVillage(villages[i], villages[i + 1], i, i + 1);
			if (caves[i] < range && caves[i] > -range && caves[i + 1] < range && caves[i + 1] > -range && caves[i] < player.X && caves[i + 1] > player.Y)
				drawCave(caves[i], caves[i + 1], i, i + 1);
			if (boats[i] < range && boats[i] > -range && boats[i + 1] < range && boats[i + 1] > -range && boats[i] < player.X && boats[i + 1] > player.Y)
				drawBoat(boats[i], boats[i + 1], i, i + 1);
			if (homeBase[i] < range && homeBase[i] > -range && homeBase[i + 1] < range && homeBase[i + 1] > -range && homeBase[i] < player.X && homeBase[i + 1] > player.Y)
				drawHomeBase(homeBase[i], homeBase[i + 1]);
		}
		for (var i = 0; i < allObjects.length; i += 2) {
			if (boundaries[i] < range && boundaries[i] > -range && boundaries[i + 1] < range && boundaries[i + 1] > -range && boundaries[i] > player.X && boundaries[i + 1] < player.Y)
				drawRock(boundaries[i], boundaries[i + 1], i);
			if (rockPos[i] < range && rockPos[i] > -range && rockPos[i + 1] < range && rockPos[i + 1] > -range && rockPos[i] > player.X && rockPos[i + 1] < player.Y)
				drawRock(rockPos[i], rockPos[i + 1], i);
			if (cactusPos[i] < range && cactusPos[i] > -range && cactusPos[i + 1] < range && cactusPos[i + 1] > -range && cactusPos[i] > player.X && cactusPos[i + 1] < player.Y)
				drawCactus(cactusPos[i], cactusPos[i + 1]);
			if (villages[i] < range && villages[i] > -range && villages[i + 1] < range && villages[i + 1] > -range && villages[i] > player.X && villages[i + 1] < player.Y)
				drawVillage(villages[i], villages[i + 1], i, i + 1);
			if (caves[i] < range && caves[i] > -range && caves[i + 1] < range && caves[i + 1] > -range && caves[i] > player.X && caves[i + 1] < player.Y)
				drawCave(caves[i], caves[i + 1], i, i + 1);
			if (boats[i] < range && boats[i] > -range && boats[i + 1] < range && boats[i + 1] > -range && boats[i] > player.X && boats[i + 1] < player.Y)
				drawBoat(boats[i], boats[i + 1], i, i + 1);
			if (homeBase[i] < range && homeBase[i] > -range && homeBase[i + 1] < range && homeBase[i + 1] > -range && homeBase[i] > player.X && homeBase[i + 1] < player.Y)
				drawHomeBase(homeBase[i], homeBase[i + 1]);
		}
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
					player.HEALTH -= Math.floor(Math.random() * (5 - 1) + 1);
				if (numOfPlayers > 1)
					player2.HEALTH -= Math.floor(Math.random() * (5 - 1) + 1);
				if (numOfPlayers > 2)
					player3.HEALTH -= Math.floor(Math.random() * (5 - 1) + 1);
				if (numOfPlayers > 3)
					player4.HEALTH -= Math.floor(Math.random() * (5 - 1) + 1);
			}

		}
	}, 400);

	setInterval(function() {
		if (!inSun && player.UV < player.UVORIG && !inVillage && !inBoat && !inBattle && !inCave && !talking)
			player.UV++;
	}, 30);

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
	var humTut = true;
	var inSun = false;
	var inBattle = false;
	var printKeys = false;
	var pause = false;
	var enter = false;
	var inVillage = false;
	var drinkCac = false;
	var fishBat = false;
	var humBat = false;
	var keysDone = false;
	var hitKeys = new Array();
	var AIKeys = new Array();
	var setHealth = true;
	var currKey = 0;
	var perfectString = 0;
	var resetFishKeys = true;
	var resetHumKeys = true;
	var AIcurrKey = 0;
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
	var getFood = false;
	var getBoatItem = false;
	var getBoatClue = false;
	var enterCave = false;
	var inCave = false;
	var caveWater1 = false;
	var caveWater2 = false;
	var caveWater3 = false;
	var caveWater4 = false;
	var enterBoat = false;
	var inBoat = false;
	var humanEnemiesKilled = 0;
	var fishEnemiesKilled = 0;
	function animate() {
		requestAnimationFrame(animate);
		//where end game is at
		//console.log(promiseWater[0], promiseWater[1]);
		c.clearRect(0, 0, canvasWidth, canvasHeight);
		drawAll();
		drawUI();
		if (!pause) {
			/*
			if ((goUp == true && goLeft == true) || (goUp == true && goRight == true)) {
			moveSpeed = (.25) / 2;
			} else if ((goDown == true && goLeft == true) || (goDown == true && goRight == true)) {
			moveSpeed = (.25) / 2;
			} else {
			moveSpeed = .25;
			}*/
			//---------------------conditions-----------------------
			//if in shadow
			//if (allObjects[i+1] > player.Y-1 && allObjects[i+1] < player.Y+1 && allObjects[i] > player.X-1 && allObjects[i] < player.X+1) {

			for (var i = 0; i < shadows.length; i += 2) {
				if (shadows[i] > player.X - 1 && shadows[i] < player.X + 1 && shadows[i + 1] > player.Y - 1 && shadows[i + 1] < player.Y + 1) {
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
				if (cactusPos[i] > player.X - 1 && cactusPos[i] < player.X + 1 && cactusPos[i + 1] + 1 > player.Y - 1 && cactusPos[i + 1] + 1 < player.Y + 1 && drinkCac == true) {
					drinkSound.play();
					player.WATER += 500;
					if (player.HEALTH > 0 && numOfPlayers > 0) {
						player.HEALTH += Math.floor(Math.random() * (4 - 1) + 1);
					}
					if (player2.HEALTH > 0 && numOfPlayers > 1) {
						player2.HEALTH += Math.floor(Math.random() * (4 - 1) + 1);
					}
					if (player3.HEALTH > 0 && numOfPlayers > 2) {
						player3.HEALTH += Math.floor(Math.random() * (4 - 1) + 1);
					}
					if (player4.HEALTH > 0 && numOfPlayers > 3) {
						player4.HEALTH += Math.floor(Math.random() * (4 - 1) + 1);
					}
					cactusPos[i] = -tiles_dimension;
					//num of rocks for some reason rocks.length does not work
					allObjects[2500 + i] = -tiles_dimension;
					shadows[2500 + i] = -tiles_dimension;
					break;
				}
			}

			//if near a traveller
			if (talk && !inBattle) {
				for (var i = 0; i < travellers.length; i += 2) {
					if (travellers[i] > player.X - 1 && travellers[i] < player.X + 1 && travellers[i + 1] + 1 > player.Y - 1 && travellers[i + 1] + 1 < player.Y + 1) {
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
					if (caves[i] > player.X - 1 && caves[i] < player.X + 1 && caves[i + 1] + 1 > player.Y - 1 && caves[i + 1] + 1 < player.Y + 1) {
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
					if (boats[i] > player.X - 1 && boats[i] < player.X + 1 && boats[i + 1] + 1 > player.Y - 1 && boats[i + 1] + 1 < player.Y + 1) {
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
				overworld.pause();
				wind.play();
				count++;
				drawBattleScreen(enemyPosition, count, playerCount, randomDrawSpeed);
			}

			// If in a Fish battle, display keys on screen
			if (fishBat && !enter && inBattle && !humBat && !inVillage && !inHome && !gameOver && !youWin) {
				overworld.pause();
				fishBattleTheme.play();
				//console.log("2 currKey: " + currKey + " hitKeys length: " + hitKeys.length);
				count++;
				drawBattleScreen_fish(enemyPosition, count, playerCount);
				drawKeys(hitKeys);
				drawAIKeys(AIKeys);
				changeKeyColor(hitKeys);
				if (currKey == hitKeys.length && hitKeys.length != 0) {
					keysDone = true;
				}
			}

			//if press spacebar and in village go to a village ui
			if (enter && !inBattle) {
				for (var i = 0; i < villages.length; i += 2) {
					if (villages[i] > player.X - 1 && villages[i] < player.X + 1 && villages[i + 1] + 1 > player.Y - 1 && villages[i + 1] + 1 < player.Y + 1) {
						inVillage = true;
						drawVillageUI(i);
						overworld.pause();
						villageTheme.play();
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
				wind.pause();
				overworld.pause();
				fishBattleTheme.pause();
				gameOverM.play();
				gameOverUI();
				gameOver = true;
				pause = false;
			}
			if ((player.HEALTH < 1 && player2.HEALTH < 1 && player3.HEALTH < 1) && numOfPlayers == 3) {
				wind.pause();
				overworld.pause();
				fishBattleTheme.pause();
				gameOverM.play();
				gameOverUI();
				gameOver = true;
				pause = false;
			}
			if ((player.HEALTH < 1 && player2.HEALTH < 1) && numOfPlayers == 2) {
				wind.pause();
				overworld.pause();
				fishBattleTheme.pause();
				gameOverM.play();
				gameOverUI();
				gameOver = true;
				pause = false;
			}
			if ((player.HEALTH < 1) && numOfPlayers == 1) {
				wind.pause();
				overworld.pause();
				fishBattleTheme.pause();
				gameOverM.play();
				gameOverUI();
				gameOver = true;
				pause = false;
			}
			if (inHome == true && nearHome == true && counter == 0) {
				homeUI();
			}
			if (youWin) {
				winScreen();
			}

			//flow of stats based on conditions here
			if (!inBattle && !gameOver && !inHome && !youWin && !inVillage) {
				overworld.play();
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
				if (promiseWater[0] < 10 && promiseWater[0] > -10 && promiseWater[1] < 10 && promiseWater[1] > -10 && dig == true)
					youWin = true;
			}

			//if at base, refill water and use base's water supply and press enter
			if (homeBase[0] > player.X - 1 && homeBase[0] < player.X + 1 && homeBase[1] + 1 > player.Y - 1 && homeBase[1] + 1 < player.Y + 1 && enter && homeBase.WATER > 0) {
				if (inHome == false && canDrink == true)
					drinkSound.play();
				homeBase.WATER -= (player.WATERORIG - player.WATER);
				player.WATER = player.WATERORIG;
				enter = false;
				canDrink = true;
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

