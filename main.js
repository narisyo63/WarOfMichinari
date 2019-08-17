window.onload=init_time; //最初にロードされる
const id=window.setInterval(update,50); //アップロードされる

let player_list;
let player1;
let player2;
let enemy;
let enemyControllar;
let stage;
let money;

function init_time()
{
	const cvs = document.getElementById("canvas");
	const canvas = cvs.getContext("2d");

	const player1_image = ["img/player1.png","img/player1_attack.png"];
	const player2_image = ["img/player2.png","img/player2_attack.png"];

	const player1_castle_image = "img/player1_castle.png";
	const enemy_image = "img/enemy.png";
	const fgcolor = "lightgreen";
	const bgcolor = "skyblue";
	const ldcolor = "sienna";

	stage = new Stage(canvas, 700, 500, fgcolor, bgcolor, ldcolor);

	player_list=[];
	player_list.push(new Player1(canvas, player1_image, 650, 350));
	player_list.push(new Player2(canvas, player2_image, 650, 350));
	// player1 = new Player1(canvas, player1_image, 650, 350);
	// player2 = new Player2(canvas, player2_image, 650, 350);

	enemyGenerator = new EnemyGenerator(canvas, enemy_image, 50, 350);
	enemy = enemyControllar.enemyData;
	money=new Money(canvas);

}

function update()
{


	// document.onkeydown=keydown;
	// document.onkeyup=keyup;

	stage.draw_canvas();


	//player

	for(let i=0;i<player_list.length;i++){
		if(player_list[i].hp>0){
			player_list[i].showImage();
		}

		if(!player_list[i].hitJudge(enemy)){
			player_list[i].move();
		}else{
			player_list[i].attack();
		}
	}





	//enemy
	enemyGontrollar.generator();



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



