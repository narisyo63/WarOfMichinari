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
		for(let i=0;i<enemy.length;i++){
			let distance=Math.sqrt((enemy[i].x-this.x)**2+(enemy[i].y-this.y)**2);
			if(distance<=50){
				this.hp-=enemy[i].damage;
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
		super(canvas,image,x,y,100);

		this.damage=20;
	}

	selectPanel(){
		this.canvas.fillStyle="red";
		this.canvas.fillRect(600,425,50,50);
	}

}class Player2 extends Player{
	constructor(canvas,image,x,y){
		super(canvas,image,x,y,20);

		this.damage=10;
	}

	move(){
		this.x-=2;
	}

	selectPanel(){
		this.canvas.fillStyle="black";
		this.canvas.fillRect(500,425,50,50);
	}

}

class PlayerGenerator{

	constructor(canvas,player1_image,player2_image,x,y){
		this.canvas=canvas;
		this.x=x;
		this.y=y;

		this.player_list=[]
		this.player_list.push(new Player1(this.canvas,player1_image,this.x,this.y));
		this.player_list.push(new Player2(this.canvas,player2_image,this.x,this.y));
	}

	generator(enemy){
		for(let i=0;i<this.player_list.length;i++){
			if(this.player_list[i].hp>0){
				this.player_list[i].showImage();//画像の表示

				if(!this.player_list[i].hitJudge(enemy)){//enemyとの当たり判定
					this.player_list[i].move();//動き
				}else{
					this.player_list[i].attack();//攻撃
				}
			}else{
				this.player_list.splice(i,1);//配列から取り除く
			}
		}
	}
}








