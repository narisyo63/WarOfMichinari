window.onload=init_time; //最初にロードされる
const id=window.setInterval(update,50); //アップロードされる

let player;
let enemyControllar;
let enemy;
let stage;
let money;

function init_time()
{
	const cvs = document.getElementById("canvas");
	const canvas = cvs.getContext("2d");

	const player_image = ["img/player.png","img/player_attack.png"];
	const player_castle_image = "img/player_castle.png";
	const enemy_image = "img/enemy.png";
	const fgcolor = "lightgreen";
	const bgcolor = "skyblue";
	const ldcolor = "sienna";

	stage = new Stage(canvas, 700, 500, fgcolor, bgcolor, ldcolor);

	enemyControllar = new EnemyController(canvas, enemy_image, 50, 350);
	enemy = enemyControllar.enemyData;
	player = new Player(canvas, player_image, player_castle_image, 650, 350);
	money=new Money(canvas);

}

function update()
{


	// document.onkeydown=keydown;
	// document.onkeyup=keyup;

	stage.draw_canvas();

	//player
	if(player.HP>0){
		player.showImage();
	}

	if(!player.hitJudge(enemy)){
		player.move();
	}else{
		player.attack();
	}







	//enemy
	if(enemy.hp>0){
		enemy.showImage(player.x,player.y);
		enemy.move(player);
	}else{
		enemy.setActive = false;
	}
	enemy.hitJudge(player);




	//money
	money.drawMoneyValue();


}


// function keydown(event){
	// if(event.keyCode==38){player.ArrowUp=true;}
	// if(event.keyCode==40){player.ArrowDown=true;}
	// if(event.keyCode==39){player.ArrowRight=true;}
	// if(event.keyCode==37){player.ArrowLeft=true;}
	// if(event.keyCode==32){player.Space=true;}
// }

// function keyup(event){
	// if(event.keyCode==38){player.ArrowUp=false;}
	// if(event.keyCode==40){player.ArrowDown=false;}
	// if(event.keyCode==39){player.ArrowRight=false;}
	// if(event.keyCode==37){player.ArrowLeft=false;}
	// if(event.keyCode==32){player.Space=false;}
// }



