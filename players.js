var player = {
	X : 3,
	Y : -3,
	WATERORIG : 20000,
	WATER : 20000,
	UVORIG : 50,
	UV : 50,
	HEALTH : 100,
	SHOVEL : true,
	DETECTOR : true,
	COMPASS : true,
	MAP : true
};

var player2 = {
	X : 3,
	Y : -3,
	HEALTH : 100
};

var player3 = {
	X : 3,
	Y : -3,
	HEALTH : 100
};

var player4 = {
	X : 3,
	Y : -3,
	HEALTH : 100
};

function normalStats() {
	if (player.HEALTH < 0) {
		player.HEALTH = 0;
	}
	if (player.HEALTH > 100) {
		player.HEALTH = 100;
	}
	if (player2.HEALTH < 0) {
		player2.HEALTH = 0;
	}
	if (player2.HEALTH > 100) {
		player2.HEALTH = 100;
	}
	if (player3.HEALTH < 0) {
		player3.HEALTH = 0;
	}
	if (player3.HEALTH > 100) {
		player3.HEALTH = 100;
	}
	if (player4.HEALTH < 0) {
		player4.HEALTH = 0;
	}
	if (player4.HEALTH > 100) {
		player4.HEALTH = 100;
	}
	if (player.WATER < 0) {
		player.WATER = 0;
	}
	if (player.WATER > player.WATERORIG) {
		player.WATER = player.WATERORIG;
	}
	if (player.UV < 0) {
		player.UV = 0;
	}
}

//decrease variables if situation
var inBattle = false;
setInterval(function() {
	if (!inBattle && !gameOver && !inHome && !pause && !youWin && !inVillage) {
		if (inSun && player.WATER > 0 && day) {
			player.WATER -= 5 * numOfPlayers;
		}

		if (!inSun && player.WATER > 0 && day) {
			player.WATER -= 3 * numOfPlayers;
		}

		if (player.WATER > 0 && !day) {
			player.WATER -= 1 * numOfPlayers;
		}

		if (player.WATER <= 0 || player.UV <= 0) {
			if (numOfPlayers > 0)
				player.HEALTH -= Math.floor(Math.random() * (4 - 1) + 1);
			if (numOfPlayers > 1)
				player2.HEALTH -= Math.floor(Math.random() * (4 - 1) + 1);
			if (numOfPlayers > 2)
				player3.HEALTH -= Math.floor(Math.random() * (4 - 1) + 1);
			if (numOfPlayers > 3)
				player4.HEALTH -= Math.floor(Math.random() * (4 - 1) + 1);
		}
	}
}, 400); 