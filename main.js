window.onload=init_time; //最初にロードされる
const id=window.setInterval(update,50); //アップロードされる

let player;
let playerGenerator;

let enemy;
let enemyGenerator;
let stage;
let money;

function init_time()
{
	const cvs = document.getElementById("canvas");
	const canvas = cvs.getContext("2d");

	const player1_image = ["img/player/player1.png","img/player/player1_attack.png"];
	const player2_image = ["img/player/player2.png","img/player/player2_attack.png"];

const player_castle_image = ["img/player/player_castle.png","img/player/player_castle.png"];
	const enemy_castle_image = "img/enemy/castle.png";
	const enemy_image = "img/enemy/enemy.png";
	const fgcolor = "lightgreen";
	const bgcolor = "skyblue";
	const ldcolor = "sienna";

	stage = new Stage(canvas, 700, 500, fgcolor, bgcolor, ldcolor);
	money=new Money(canvas);

	playerGenerator = new PlayerGenerator(cvs,canvas,player1_image,player2_image,player_castle_image,money,650,350);
	player = playerGenerator.player_list;


	enemyGenerator = new EnemyGenerator(canvas, enemy_image,enemy_castle_image, 50, 350);
	enemy = enemyGenerator.enemy_list;

}

function update()
{



	stage.draw_canvas();


	if(playerGenerator.playerCastle.hp>0 && enemyGenerator.enemyCastle.hp>0){
		//money
		money.drawMoneyValue();



		//player
		playerGenerator.generator(enemy);




		//enemy
		enemyGenerator.generator(player);
	}else{
		console.log("ゲーム終了！");
	}





}


