window.onload=init_time; //最初にロードされる
const id=window.setInterval(update,50); //アップロードされる

let player1;
let enemy;
let stage;
let money;

function init_time()
{
	const cvs = document.getElementById("canvas");
	const canvas = cvs.getContext("2d");

	const player1_image = ["img/player1.png","img/player1_attack.png"];
	const player1_castle_image = "img/player1_castle.png";
	const enemy_image = "img/enemy.png";
	const fgcolor = "lightgreen";
	const bgcolor = "skyblue";
	const ldcolor = "sienna";

	stage = new Stage(canvas, 700, 500, fgcolor, bgcolor, ldcolor);
	enemy = new Enemy(canvas, enemy_image, 50, 350);
	player1 = new Player1(canvas, player1_image, player1_castle_image, 650, 350);
	enemyControllar = new EnemyController(canvas, enemy_image, 50, 350);
	enemy = enemyControllar.enemyData;
	player = new Player(canvas, player_image, player_castle_image, 650, 350);
	enemyControllar = new EnemyController(canvas, enemy_image, 50, 350);
	enemy = enemyControllar.enemyData;
	player = new Player1(canvas, player_image, player_castle_image, 650, 350);
	money=new Money(canvas);

}

function update()
{


	// document.onkeydown=keydown;
	// document.onkeyup=keyup;

	stage.draw_canvas();

	//player1
	if(player1.HP>0){
		player1.showImage();
	}

	if(!player1.hitJudge(enemy)){
		player1.move(player1.speed);
	}else{
		player1.attack();
	}







	//enemy
	if(enemy.hp>0){
		enemy.showImage(player.x,player.y);
		enemy.move(player1);
	}else{
		enemy.setActive = false;
	}
	enemy.hitJudge(player);




	//money
	money.drawMoneyValue();


}


// function keydown(event){
	// if(event.keyCode==38){player1.ArrowUp=true;}
	// if(event.keyCode==40){player1.ArrowDown=true;}
	// if(event.keyCode==39){player1.ArrowRight=true;}
	// if(event.keyCode==37){player1.ArrowLeft=true;}
	// if(event.keyCode==32){player1.Space=true;}
// }

// function keyup(event){
	// if(event.keyCode==38){player1.ArrowUp=false;}
	// if(event.keyCode==40){player1.ArrowDown=false;}
	// if(event.keyCode==39){player1.ArrowRight=false;}
	// if(event.keyCode==37){player1.ArrowLeft=false;}
	// if(event.keyCode==32){player1.Space=false;}
// }



