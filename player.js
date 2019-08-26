const player1Value=200;
const player2Value=100;


class Player{
	constructor(canvas,image,x,y,hp){
		this.canvas=canvas;
		this.image=new Array(image.length);
		this.imageChangeNumber=0;
		this.x=x;
		this.y=y;
		this.hp=hp;
		this.readImage(image);
	}

	readImage(image){//画像の読み込み
		for(let i=0;i<image.length;i++){
			this.image[i]=new Image();
			this.image[i].src=image[i];
		}
	}

	showImage(){//画像の表示
		this.canvas.drawImage(this.image[this.imageChangeNumber],this.x-25,this.y-25,50,50);
	}

	move(){//playerの動き
		this.x-=1;
	}

	hitJudge(enemy){//敵との当たり判定

		if(typeof enemy.length == "number"){
			for(let i=0;i<enemy.length;i++){
				let distance=Math.sqrt((enemy[i].x-this.x)**2+(enemy[i].y-this.y)**2);
				if(distance<=50){
					this.hp-=enemy[i].damage;
					return true;
				}else{
					return false;
				}
			}
		}else{
				let distance=Math.sqrt((enemy.x-this.x)**2+(enemy.y-this.y)**2);
				if(distance<=50){
					this.hp-=enemy.damage;
					return true;
				}else{
					return false;
				}
		}
	}

	attack(){//playerの攻撃
		if(this.imageChangeNumber==0){
			this.imageChangeNumber=1;
		}else{
			this.imageChangeNumber=0;
		}
	}
}


class Player1 extends Player{
	constructor(canvas,image,x,y){
		super(canvas,image,x,y,300);

		this.damage=20;
		this.value=player1Value;
	}


}

class Player2 extends Player{
	constructor(canvas,image,x,y){
		super(canvas,image,x,y,100);

		this.damage=1000;
		this.value=player2Value;
	}

	move(){
		this.x-=2;
	}

}

class PlayerCastle extends Player{
	constructor(canvas,player_castle_image,x,y){
		super(canvas,player_castle_image,x,y,5000)
		this.textHP=this.hp;
	}

	showImage(){//画像の表示
		this.canvas.drawImage(this.image[this.imageChangeNumber],this.x-25,this.y-25,50,50);
		this.drawHPValue()
	}


	drawHPValue(){
		this.canvas.fillStyle="black";
		this.canvas.textAlign="right";
		this.canvas.font="12px serif";
		this.canvas.fillText(this.hp+"/"+this.textHP,this.x+25,this.y-25);
	}

}

class PlayerGenerator{
	constructor(cvs,canvas,player1_image,player2_image,player_castle_image,money,x,y){
		this.canvas=canvas;
		this.player1_image=player1_image;
		this.player2_image=player2_image;
		this.money=money;
		this.x=x;
		this.y=y;

		this.player_list=new Array();

		this.playerCastle=new PlayerCastle(this.canvas,player_castle_image,this.x,this.y);
		this.panel=new Panel(canvas);

		cvs.addEventListener("click",onClick,false);
	}

	generator(enemy){

		this.createCastle(enemy);

		for(let i=0;i<this.player_list.length;i++){
			if(this.player_list[i].hp>0){
				this.player_list[i].showImage();//画像の表示

				if(this.player_list[i].hitJudge(enemy) || this.player_list[i].hitJudge(enemyGenerator.enemyCastle)){//enemyとの当たり判定
					this.player_list[i].attack();//攻撃
					console.log("attack");
				}else{
					this.player_list[i].move();//動き
				}

			}else{
				this.player_list.splice(i,1);//配列から取り除く
			}
		}


		this.panel.selectPanel();
	}


	createCastle(){
		this.playerCastle.showImage();
	}

	add1(){
		if(this.money.playerValue-player1Value>0){
			this.money.playerValue=this.money.playerValue-player1Value;
			this.player_list.push(new Player1(this.canvas,this.player1_image,this.x,this.y));
		}
	}

	add2(){
		if(this.money.playerValue-player2Value>0){
			this.money.playerValue=this.money.playerValue-player2Value;
			this.player_list.push(new Player2(this.canvas,this.player2_image,this.x,this.y));
		}
	}

}

function onClick(event){
	let rect = event.target.getBoundingClientRect();
	let px=event.clientX-rect.left;
	let py=event.clientY-rect.top;

	if(px>600 && px<650 && py>425 && py<475){
		playerGenerator.add1();
	}

	if(px>500 && px<550 && py>425 && py<475){
		playerGenerator.add2();
	}

}









