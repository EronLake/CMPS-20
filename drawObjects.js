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
