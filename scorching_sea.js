var resCount = 2;

var img = new Image();
img.onload = launchMe;
img.src = 'http://ccrgeek.files.wordpress.com/2012/11/a2-tiles-with-overlays_2.png?w=512&h=384';
//img.src = 'http://people.ucsc.edu/~brlgomez/20/textures/sand.png';

window.onload = launchMe;

function launchMe() {
	if (--resCount == 0){
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
	var canvasWidth = canvas.width;
	var canvasHeight = canvas.height;
	c.textBaseline = 'top';
	c.font = '10px sans-serif';
	c.fillStyle = '#00FFFF';
	

	// ----------------------------------------
	//     Tiles Setup
	// ----------------------------------------
	var tiles_dimension = 100;

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
	var viewBackDepth = 10;
	//13
	// how many tiles do we show in the front ?
	var viewFrontDepth = 15;
	//14
	// how many tiles do we show on the left ?
	var viewLeftDepth = 6;
	//10
	// how many tiles do we show on the right ?
	var viewRightDepth = 8;
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

	// with sprites
	function drawFilledTile(colOffset, rowOffset, tileValue) {
		tileValue = tileValue % 13; //1
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
	
	var centerX = tiles_dimension/2;
	var centerY = tiles_dimension/2;
	var center = [centerX, centerY];
	drawTiles(center);
	
	/*
	// ----------------------------------------
	//     Mouse handling
	// ----------------------------------------
	var mousePos = [0, 0];
	var mouseDown = false;

	var rect = canvas.getBoundingClientRect();

	function getMousePos(canvas, evt) {
		mousePos[0] = evt.clientX - rect.left;
		mousePos[1] = evt.clientY - rect.top;
	}

	canvas.addEventListener('mousedown', function(evt) {
		mouseDown = true;
		getMousePos(canvas, evt);
	}, false);

	canvas.addEventListener('mouseup', function(evt) {
		mouseDown = false;
		getMousePos(canvas, evt);
	}, false);

	canvas.addEventListener('mouseout', function(evt) {
		mouseDown = false;
	}, false);

	canvas.addEventListener('mousemove', function(evt) {
		getMousePos(canvas, evt);
	}, false);
	*/
	
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
	
	var rockPos = new Array (200);
	var shadows = new Array (200);
	
	var player = {
		WATER : 100,
		UV : 100
	};
	
	for(var i = 0; i < rockPos.length; i++){
		rockPos[i] = Math.floor(Math.random() * (tiles_dimension) - tiles_dimension/2);
		if(!(i%2 == 0)){
			shadows[i] = rockPos[i] + 1;
		}
		else{
			shadows[i] = rockPos[i];
		}
	}
	
	function hookKeys() {
		window.addEventListener('keydown', function(evt) {
			switch (evt.keyCode) {
			case keys.UP2:
			case keys.UP:
				center[1] += 1;
				for(var i = 1; i < rockPos.length; i+=2){
					rockPos[i] -= 1;
					shadows[i] -= 1;
					rockPos[i] = Math.floor(rockPos[i]);
					if(rockPos[i] == -1 && rockPos[i-1] == 2){
						center[1] -= 1;
						for(var j = 1; j < rockPos.length; j+=2){
							rockPos[j] += 1;
							shadows[j] += 1;
						}
					}
				}	
				center[1] = Math.floor(center[1]);		
				break;
			case keys.DOWN2:
			case keys.DOWN:
				center[1] -= 1;
				for(var i = 1; i < rockPos.length; i+=2){
					rockPos[i] += 1;
					shadows[i] += 1;
					rockPos[i] = Math.floor(rockPos[i]);
					if(rockPos[i] == -1 && rockPos[i-1] == 2){
						center[1] += 1;
						for(var j = 1; j < rockPos.length; j+=2){
							rockPos[j] -= 1;
							shadows[j] -= 1;
						}
					}
				}
				center[1] = Math.floor(center[1]);
				break;
			case keys.LEFT2:
			case keys.LEFT:
				center[0] -= 1;
				for(var i = 0; i < rockPos.length; i+=2){
					rockPos[i] += 1;
					shadows[i] += 1;
					rockPos[i] = Math.floor(rockPos[i]);
					if(rockPos[i] == 2 && rockPos[i+1] == -1){
						center[0] += 1;
						for(var j = 0; j < rockPos.length; j+=2){
							rockPos[j] -= 1;
							shadows[j] -= 1;
						}
					}
				}	
				center[0] = Math.floor(center[0]);	
				break;
			case keys.RIGHT2:
			case keys.RIGHT:
				center[0] += 1;
				for(var i = 0; i < rockPos.length; i+=2){
					rockPos[i] -= 1;
					shadows[i] -= 1;
					rockPos[i] = Math.floor(rockPos[i]);
					if(rockPos[i] == 2 && rockPos[i+1] == -1){
						center[0] -= 1;
						for(var j = 0; j < rockPos.length; j+=2){
							rockPos[j] += 1;
							shadows[j] += 1;
						}
					}
				}	
				center[0] = Math.floor(center[0]);	
				break;
			};
		}, false);
	}

	// ----------------------------------------
	//     Animation
	// ----------------------------------------
	var landMoveSpeed = 0.07;
	function animate() {
		requestAnimationFrame(animate);
		
		var waterLevel = "Water Level: " + player.WATER;
        var uvLevel = "UV Level: " + player.UV;
        c.fillStyle = '#000';
        c.fillText(waterLevel, 5, canvasHeight - 15);
        c.fillText(uvLevel, 5, canvasHeight - 5);
		
		c.clearRect(0, 0, canvasWidth, canvasHeight);
		drawTiles(center);
		//draw rocks
		for(var i = 0; i < rockPos.length; i+=2){
			drawTile(rockPos[i], rockPos[i+1], 50.0);
			drawTile(shadows[i], shadows[i+1], 10.0);
		}
		//main character
		drawTile(2, -1, 50.0);
		console.log(rockPos[0], rockPos[1]);
		//console.log(center[0], center[1]);
		
	}
	animate();
}

// utils

function sq(x) {
	return x * x;
};

