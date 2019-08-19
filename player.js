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


}

class Player2 extends Player{
	constructor(canvas,image,x,y){
		super(canvas,image,x,y,20);

		this.damage=10;
	}

	move(){
		this.x-=2;
	}

}

class PlayerGenerator{
	constructor(cvs,canvas,player1_image,player2_image,x,y){
		this.cvs=cvs;
		this.canvas=canvas;
		this.player1_image=player1_image;
		this.player2_image=player2_image;
		this.x=x;
		this.y=y;

		this.player_list=new Array();
		//this.player_list.push(new Player1(this.canvas,player1_image,this.x,this.y));
		//this.player_list.push(new Player2(this.canvas,player2_image,this.x,this.y));

		this.panel=new Panel(this.canvas);

		//this.cvs.addEventListener("click",this.click.bind(event),false);
		this.cvs.addEventListener("click",this.onClick,false);

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


		this.panel.selectPanel();

	}

	onClick(event){
		let rect = event.target.getBoundingClientRect();
		let px=event.clientX-rect.left;
		let py=event.clientY-rect.top;

		if(px>600 && px<650 && py>425 && py<475){
			//player_list.push(new Player1(this.canvas,this.player1_image,this.x,this.y));
			this.add();
		}
	}

	add(){
		console.log("YES");
	}

}








