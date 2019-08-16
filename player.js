class Player{
	constructor(canvas,x,y){
		this.canvas=canvas;
		this.x=x;
		this.y=y;
	}

	move(speed){//playerの動き
		this.x-=speed;
	}

}

class Player1 extends Player{
	constructor(canvas,image,x,y){
		super(canvas,x,y);

		this.image=new Array(image.length);
		this.imageChangeNumber=0;
		this.speed=1;
		this.HP=100;
		this.damage=20;

		this.ArrowUp=this.ArrowDown=this.ArrowRight=this.ArrowLeft=false;
		this.Space=false;

		this.readImage(image,castle_image);
	}

	readImage(image,castle_image){//画像の読み込み
		for(let i=0;i<image.length;i++){
			this.image[i]=new Image();
			this.image[i].src=image[i];
		}
	}

	showImage(){//画像の表示
		this.canvas.drawImage(this.image[this.imageChangeNumber],this.x-25,this.y-25,50,50);
	}

	showHP(){//HPの表示
		this.canvas.fillStyle="white";
		this.canvas.font="48px serif";
		this.canvas.fillText(this.HP,10,50);
	}

	hitJudge(enemy){//敵との当たり判定
		let distance=Math.sqrt((enemy.x-this.x)**2+(enemy.y-this.y)**2);
		if(distance<=50){
			this.HP-=enemy.damage;
			return true;
		}else{
			return false;
		}
	}


	attack(){
		if(this.imageChangeNumber==0){
			this.imageChangeNumber=1;
		}else{
			this.imageChangeNumber=0;
		}
	}

}









