class Enemy
{
	constructor(canvas,image,x,y){
		this.canvas=canvas;
		this.image=new Image();
		this.initX=x;
		this.initY=y;

		this.x = this.initX;
		this.y = this.initY;

		this.readImage(image);
		this.HP = 100;
		this.setActive = true;
		this.rd;
		this.speed=1;
		this.moveEnemy = true;
		this.damage=1;
	}

	init(){
		this.x = this.X;
		this.y = this.Y;
		this.HP = 100;
		this.setActive = true;
	}

	readImage(image)
	{
		this.image.src=image;
	}
	showImage(px, py)
	{
		
		this.canvas.drawImage(this.image,this.x-25,this.y-25,50,50);
	}

	hitJudge(player){//敵との当たり判定
		var distance=Math.sqrt((player.x-this.x)**2+(player.y-this.y)**2);
		if(distance<50){
			this.HP-=player.damage;
			if(this.HP <= 0){
				this.setActive = false;
			}	
		}
		if(this.setActive == false){
			this.init();
		}
	}
	move(player)
	{
		var distance=Math.sqrt((player.x-this.x)**2+(player.y-this.y)**2);
		if(distance<=50){
			this.moveEnemy = false;
		}else{
			this.x+=1*this.speed;
		}
	}
}

class 