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
		let distance=Math.sqrt((enemy.x-this.x)**2+(enemy.y-this.y)**2);
		if(distance<=50){
			this.hp-=enemy.damage;
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


class Player1 extends Player{
	constructor(canvas,image,x,y){
		super(canvas,image,x,y,100);

		this.damage=20;
	}

}class Player2 extends Player{
	constructor(canvas,image,x,y){
		super(canvas,image,x,y,20);

		this.damage=10;
	}

	move(){
		this.x-=2;
	}
}









