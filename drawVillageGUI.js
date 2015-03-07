
function drawVillageUI(i, villageItems , buyHealth, buyWater, buyItem, getClue) {
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
	var healthAmount = "1. Food: " + health;
	var waterAmount = "2. ml found: " + water;
	if (item == 0)
		var itemAmount = "3. Item: Nothing";
	if (item == 1)
		var itemAmount = "3. Item: Shovel";
	if (item == 2)
		var itemAmount = "3. Item: Detector";
	if (item == 3)
		var itemAmount = "3. Item: Compass";
	if (item == 4)
		var itemAmount = "3. Item: Map";
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
	c.strokeText("4. Clue", (canvasWidth / 3) + 30, (canvasHeight / 3) + 90);
	c.fillText("4. Clue", (canvasWidth / 3) + 30, (canvasHeight / 3) + 90);
	//if player wants to buy health
	if (buyHealth && health > 0 && player.WATER - 1000 > 0) {
		villageItems[place] -= 1;
		if (player.Health != 0 && numOfPlayers > 0) {
			player.HEALTH += 10;
		}
		if (player2.HEALTH != 0 && numOfPlayers > 1) {
			player2.HEALTH += 10;
		}
		if (player3.HEALTH != 0 && numOfPlayers > 2) {
			player3.HEALTH += 10;
		}
		if (player4.HEALTH != 0 && numOfPlayers > 3) {
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
	if (buyItem) {
		if (item == 1)
			player.SHOVEL = true;
		if (item == 2)
			player.DETECTOR = true;
		if (item == 3)
			player.COMPASS = true;
		if (item == 4)
			player.MAP = true;
		villageItems[place + 2] = 0;
		player.WATER -= 2500;
		buyItem = false;
	}
	if (getClue) {
		c.strokeText("This will be a clue", (canvasWidth / 3) + 40, (canvasHeight / 3) + 120);
		c.fillText("This will be a clue", (canvasWidth / 3) + 40, (canvasHeight / 3) + 120);
		//getClue = true;
	}
}
