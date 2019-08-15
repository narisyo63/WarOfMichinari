window.onload=init_time; //最初にロードされる
var id=window.setInterval(update,10); //アップロードされる

var player;
var stage;
var enemy = new Array(3);

function init_time()
{
	var canvas = document.getElementById("canvas").getContext("2d");;

	var player_image = ["img/player.png","img/player_attack.png"];
	var enemy_image = "img/enemy.png";
	var fgcolor = "lightgreen";
	var bgcolor = "paleturquoise";
	var ldcolor = "sienna";

	stage = new Stage(canvas, 700, 500, fgcolor, bgcolor, ldcolor);

	enemy = new Enemy(canvas, enemy_image, 50, 350);

	enemy = new Enemy(canvas, enemy_image, 150, 250);

	player = new Player(canvas, player_image, 600, 350);
	money=new Money(canvas);

}

function update()
{


	// document.onkeydown=keydown;
	// document.onkeyup=keyup;

	stage.draw_canvas();

	//player
	// if(player.HP>0){
		// player.showImage();
		// player.move();
		// for(var i=0; i<enemy.length;i++){
			// player.hitJudge(enemy[i]);
		// }
	// }
	//player.showHP();
	player.showImage();

	for(var i=0; i<enemy.length;i++){
		if(player.hitJudge(enemy[i])){
			player.move();
		}
	}

	console.log(player.hitJudge(enemy[i]));






	//enemy
	for(var i = 0; i < 3; i++){
		if(enemy.setActive){
			enemy.showImage(player.x,player.y);
			enemy.move(player);
		}
		enemy.hitJudge(player);
	}




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



