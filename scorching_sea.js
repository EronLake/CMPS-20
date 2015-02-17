var resCount = 2;

var img = new Image();
img.onload = launchMe;
img.src = 'http://ccrgeek.files.wordpress.com/2012/11/a2-tiles-with-overlays_2.png?w=512&h=384';

var img2 = new Image();
img2.onload = launchMe;
img2.src = '/Images/village_prototype.png';
//img.src = 'http://people.ucsc.edu/~brlgomez/20/textures/sand.png';

var rockImg = new Image();
rockImg.onload = launchMe;
img2.src = 'http://people.ucsc.edu/~brlgomez/20/textures/rock.png';

window.onload = launchMe;

function launchMe() {
	if (--resCount == 0) {
		main();
	}
}

function main() {
	hookKeys();

	// ----------------------------------------
	//     Canvas Setup
	// ----------------------------------------
	var canvas = document.getElementById('canvas');
	var c = canvas.getContext('2d');
	c.canvas.width = window.innerWidth;
	c.canvas.height = window.innerHeight;
	var canvasWidth = canvas.width;
	var canvasHeight = canvas.height;
	c.textBaseline = 'top';
	c.font = '10px sans-serif';
	c.fillStyle = '#00FFFF';

	// ----------------------------------------
	//     Tiles Setup
	// ----------------------------------------
	var tiles_dimension = 120;

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

	// ----------------------------------------
	//     Display parameters
	// ----------------------------------------
	// center of the display on screen
	var displayCenterX = 1 * canvas.width / 3;
	var displayCenterY = 2 * canvas.height / 3;

	// angle of the x axis. Should be in [0, PI/2]
	var angleX = 0;
	//Math.PI/8
	// angle of the y axis. Should be in [PI/2, PI[
	var angleY = 2.2;
	//2.7

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
	//     Rendering
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

	function drawPlayer(colOffset, rowOffset) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(200, 150, 100)';
		projectFromCenter(colOffset, rowOffset, pt);
		c.save();
		c.translate(pt[0], pt[1]);
		c.fillRect(-15, -30, 20, 35);
		c.restore();
	}

	function drawHomeBase(colOffset, rowOffset) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'rgb(50, 150, 150)';
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

	// with sprites
	function drawFilledTile(colOffset, rowOffset, tileValue) {
		tileValue = tileValue % 13;
		//1
		var pt = [colOffset - 0.5, rowOffset - 0.5];
		// where is the tile ?
		var tileBitmapX = (0 | (tileValue / 4)) * 32 * 2;
		var tileBitmapY = (tileValue % 4) * 32 * 3;
		c.drawImage(img, tileBitmapX, tileBitmapY, 32, 32, colOffset - 0.5, rowOffset - 0.5, 1, 1);
		// c.drawImage(img, 0, 0, 32,32,
		// colOffset - 0.5, rowOffset - 0.5, 1, 1);

	}

	// draw a tile at (colOffset, rowOffset ) centered world coordinates.
	function drawTile(colOffset, rowOffset, tileValue) {
		var pt = [0, 0];
		c.beginPath();
		c.fillStyle = 'hsl(' + (tileValue) + ',75%,75%)';
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
		var drawTileMethod = (experimental_useBitmapTiles) ? drawFilledTile : drawTile;
		// iterate on col/rows
		var pt = [0, 0];
		for (var colIndex = colStart; colIndex < colEnd; colIndex++) {
			var colOffset = colIndex - centerPoint[0];
			for ( rowIndex = rowStart; rowIndex < rowEnd; rowIndex++) {
				var rowOffset = rowIndex - centerPoint[1];
				var thisTile = tileMap[colIndex][rowIndex];
				drawTileMethod(colOffset - remains[0], rowOffset - remains[1], thisTile);
			}
		}
		if (experimental_useBitmapTiles)
			c.restore();

	}

	var centerX = tiles_dimension / 2;
	var centerY = tiles_dimension / 2;
	var center = [centerX, centerY];
	drawTiles(center);

	function sq(x) {
		return x * x;
	};

	var keys = {
		LEFT : 65,
		LEFT2 : 37,
		UP : 83,
		UP2 : 40,
		RIGHT : 68,
		RIGHT2 : 39,
		DOWN : 87,
		DOWN2 : 38
	};

	var rockPos = new Array(200);
	var humanEnemies = new Array(100);
	var homeBase = new Array(2);
	var allObjects = new Array(202);
	var shadows = new Array(200);

	var player = {
		X : 3,
		Y : -3,
		WATERORIG : 20000,
		WATER : 20000,
		UVORIG : 25,
		UV : 25,
		HEALTH : 100,
		SPEED : 10,
		ATTACK : 10
	};
	
	var homeBase = {
		WATER : 200000,
		HEALTHPACK : 5
	};

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

	homeBase[0] = player.X;
	homeBase[1] = player.Y - 1;
	allObjects[i] = homeBase[0];
	shadows[i] = homeBase[0];
	allObjects[++i] = homeBase[1];
	shadows[i] = player.Y;

	//create humand enemy positions
	for (var i = 0; i < humanEnemies.length; i++) {
		humanEnemies[i] = Math.floor(Math.random() * (tiles_dimension) - tiles_dimension / 2);
	}

	function hookKeys() {
		window.addEventListener('keydown', function(evt) {
			switch (evt.keyCode) {
			//actually down
			case keys.UP2:
			case keys.UP:
				if (player.Y < 0) {
					player.Y++;
					for (var i = 1; i < allObjects.length; i += 2) {
						if (allObjects[i] == player.Y && allObjects[i - 1] == player.X) {
							player.Y--;
						}
						//enemy ai going down when near
						if ((humanEnemies[i]) > player.Y - 7 && (humanEnemies[i]) < player.Y + 1) {
							if (player.X - humanEnemies[i - 1] < 7 && player.X - humanEnemies[i - 1] > -7) {
								humanEnemies[i]++;
							}
						}
					}
				} else {
					center[1] += 1;
					for (var i = 1; i < allObjects.length; i += 2) {
						rockPos[i] -= 1;
						shadows[i] -= 1;
						humanEnemies[i] -= 1;
						homeBase[i] -= 1;
						allObjects[i] -= 1;
						if (allObjects[i] == player.Y && allObjects[i - 1] == player.X) {
							center[1] -= 1;
							for (var j = 1; j < allObjects.length; j += 2) {
								rockPos[j] += 1;
								shadows[j] += 1;
								humanEnemies[j] += 1;
								homeBase[j] += 1;
								allObjects[j] += 1;
							}
						}
						//ai going down when near
						if ((humanEnemies[i]) > player.Y - 7 && (humanEnemies[i]) < player.Y + 1) {
							if (player.X - humanEnemies[i - 1] < 7 && player.X - humanEnemies[i - 1] > -7) {
								humanEnemies[i]++;
							}

						}
					}
				}
				if (inSun)
					player.UV--;
				break;
			case keys.DOWN2:
			case keys.DOWN:
				if (player.Y > -5) {
					player.Y--;
					for (var i = 1; i < allObjects.length; i += 2) {
						if (allObjects[i] == player.Y && allObjects[i - 1] == player.X) {
							player.Y++;
						}
						//ai going up when near
						if ((humanEnemies[i]) < player.Y + 7 && (humanEnemies[i]) > player.Y - 1) {
							if (player.X - humanEnemies[i - 1] < 7 && player.X - humanEnemies[i - 1] > -7) {
								humanEnemies[i]--;
							}
						}

					}
				} else {
					center[1] -= 1;
					for (var i = 1; i < allObjects.length; i += 2) {
						rockPos[i] += 1;
						shadows[i] += 1;
						humanEnemies[i] += 1;
						homeBase[i] += 1;
						allObjects[i] += 1;
						if (allObjects[i] == player.Y && allObjects[i - 1] == player.X) {
							center[1] += 1;
							for (var j = 1; j < allObjects.length; j += 2) {
								rockPos[j] -= 1;
								shadows[j] -= 1;
								humanEnemies[j] -= 1;
								homeBase[j] -= 1;
								allObjects[j] -= 1;
							}
						}
						//ai going up when near
						if ((humanEnemies[i]) < player.Y + 7 && (humanEnemies[i]) > player.Y - 1) {
							if (player.X - humanEnemies[i - 1] < 7 && player.X - humanEnemies[i - 1] > -7) {
								humanEnemies[i]--;
							}
						}

					}
				}
				if (inSun)
					player.UV--;
				break;
			case keys.LEFT2:
			case keys.LEFT:
				if (player.X > 0) {
					player.X--;
					for (var i = 0; i < allObjects.length; i += 2) {
						if (allObjects[i] == player.X && allObjects[i + 1] == player.Y) {
							player.X++;
						}
						//ai
						if ((humanEnemies[i]) > player.X - 7 && (humanEnemies[i]) < player.X + 5) {
							if (player.Y - humanEnemies[i + 1] < 7 && player.Y - humanEnemies[i + 1] > -7) {
								humanEnemies[i]++;
								if ((humanEnemies[i]) > player.X) {
									humanEnemies[i] -= 2;
								}
							}
						}
					}
				} else {
					center[0] -= 1;
					for (var i = 0; i < allObjects.length; i += 2) {
						rockPos[i] += 1;
						shadows[i] += 1;
						humanEnemies[i] += 1;
						homeBase[i] += 1;
						allObjects[i] += 1;
						if (allObjects[i] == player.X && allObjects[i + 1] == player.Y) {
							center[0] += 1;
							for (var j = 0; j < allObjects.length; j += 2) {
								rockPos[j] -= 1;
								shadows[j] -= 1;
								humanEnemies[j] -= 1;
								homeBase[j] -= 1;
								allObjects[j] -= 1;
							}

						}
						//ai
						if ((humanEnemies[i]) > player.X - 7 && (humanEnemies[i]) < player.X + 5) {
							if (player.Y - humanEnemies[i + 1] < 7 && player.Y - humanEnemies[i + 1] > -7) {
								humanEnemies[i]++;
								if ((humanEnemies[i]) > player.X) {
									humanEnemies[i] -= 2;
								}
							}
						}
					}

				}
				if (inSun)
					player.UV--;
				break;
			case keys.RIGHT2:
			case keys.RIGHT:
				if (player.X < 5) {
					player.X++;
					for (var i = 0; i < allObjects.length; i += 2) {
						if (allObjects[i] == player.X && allObjects[i + 1] == player.Y) {
							player.X--;
						}
						//ai
						if ((humanEnemies[i]) < player.X + 7 && (humanEnemies[i]) > player.X - 5) {
							if (player.Y - humanEnemies[i + 1] < 7 && player.Y - humanEnemies[i + 1] > -7) {
								humanEnemies[i]--;
								if ((humanEnemies[i]) < player.X) {
									humanEnemies[i] += 2;
								}
							}
						}
					}
				} else {
					center[0] += 1;
					for (var i = 0; i < allObjects.length; i += 2) {
						rockPos[i] -= 1;
						shadows[i] -= 1;
						humanEnemies[i] -= 1;
						homeBase[i] -= 1;
						allObjects[i] -= 1;
						if (allObjects[i] == player.X && allObjects[i + 1] == player.Y) {
							center[0] -= 1;
							for (var j = 0; j < allObjects.length; j += 2) {
								rockPos[j] += 1;
								shadows[j] += 1;
								humanEnemies[j] += 1;
								homeBase[j] += 1;
								allObjects[j] += 1;
							}
						}
						//ai
						if ((humanEnemies[i]) < player.X + 7 && (humanEnemies[i]) > player.X - 5) {
							if (player.Y - humanEnemies[i + 1] < 7 && player.Y - humanEnemies[i + 1] > -7) {
								humanEnemies[i]--;
								if ((humanEnemies[i]) < player.X) {
									humanEnemies[i] += 2;
								}
							}
						}
					}
				}
				if (inSun)
					player.UV--;
				break;
			};
		}, false);
	}

	// ----------------------------------------
	//     Animation
	// ----------------------------------------
	var landMoveSpeed = 0.07;
	var inSun = false;
	var steamX = 10;
	var steamY = 10;
	function animate() {
		requestAnimationFrame(animate);

		c.clearRect(0, 0, canvasWidth, canvasHeight);
		drawTiles(center);

		//draw rocks
		for (var i = 0; i < rockPos.length; i += 2) {
			drawRock(rockPos[i], rockPos[i + 1]);
		}
		//draw shadows
		for (var i = 0; i < shadows.length; i += 2) {
			drawTile(shadows[i], shadows[i + 1], 1.0);
		}
		for (var i = 0; i < shadows.length; i += 2) {
			if (shadows[i] == player.X && shadows[i + 1] == player.Y) {
				inSun = false;
				player.UV = player.UVORIG;
				break;
			} else {
				inSun = true;
			}
		}
		if (inSun && player.WATER > 0) {
			player.WATER -= 3;
		}
		if (!inSun && player.WATER > 0) {
			player.WATER -= 1;
		}
		if (player.WATER < 0) {
			player.WATER == 0;
		}
		//if at base
		if(player.X == homeBase[0] && player.Y == homeBase[1] + 1){
			homeBase.WATER -= (player.WATERORIG - player.WATER);
			player.WATER = player.WATERORIG;
		}
		//draw enemies
		for (var i = 0; i < humanEnemies.length; i += 2) {
			drawEnemy(humanEnemies[i], humanEnemies[i + 1]);
		}
		console.log(player.X, player.Y);
		//main character
		drawHomeBase(homeBase[0], homeBase[1]);
		drawPlayer(player.X, player.Y);

		//text
		var waterLevel = "ml: " + player.WATER;
		var uvLevel = "Integrity: " + player.UV;
		var hpLevel = "Health: " + player.HEALTH;
		var speedLevel = "Speed: " +player.SPEED;
		var attackLevel = "Attack: "+ player.ATTACK;
		var homeWaterLev = homeBase.WATER + " :Home ml";
		c.lineWidth = 7;
		c.fillStyle = 'rgba(255, 255, 255, 0.75)';
		c.strokeStyle = 'rgba(0, 0, 0, 0.75)';
		c.font = "15px Arial";
		c.strokeText(speedLevel, 5, canvasHeight - 100);
		c.fillText(speedLevel, 5, canvasHeight - 100);
		c.strokeText(attackLevel, 5, canvasHeight - 80);
		c.fillText(attackLevel, 5, canvasHeight - 80);
		c.strokeText(hpLevel, 5, canvasHeight - 60);
		c.fillText(hpLevel, 5, canvasHeight - 60);
		c.strokeText(waterLevel, 5, canvasHeight - 40);
		c.fillText(waterLevel, 5, canvasHeight - 40);
		c.strokeText(uvLevel, 5, canvasHeight - 20);
		c.fillText(uvLevel, 5, canvasHeight - 20);
		c.strokeText(homeWaterLev, canvasWidth - 125, canvasHeight - 20);
		c.fillText(homeWaterLev, canvasWidth - 125, canvasHeight - 20);

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
			c.fillStyle = 'rgba(255, 255, 255, 0.9)';
			c.fillRect(steamX, steamY, 5, 5);
			c.fillRect(steamX + 2, steamY - 4, 5, 5);
			c.fillRect(steamX + 4, steamY + 6, 5, 5);
			c.fillRect(steamX + 6, steamY - 3, 5, 5);
			c.fillRect(steamX + 8, steamY + 7, 5, 5);
			c.fillStyle = 'rgba(200, 200, 255, 0.75)';
		}
		c.fillRect(10, +player.WATERORIG / divWater * 2 - player.WATER / (divWater / 2) + 10, 15, ((player.WATER / divWater * 2) + player.WATERORIG / (divWater)) - 40);

	}

	animate();
}

// utils

function sq(x) {
	return x * x;
};

