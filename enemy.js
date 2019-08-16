class Enemy
{
	constructor(canvas,image,x,y){
		const HP = 100;
		const X = x;
		const Y = y;

		this.canvas=canvas;
		this.image=new Image();

		this.x = X;
		this.y = Y;

		this.readImage(image);
		this.hp = HP;
		this.setActive = true;
		this.rd;
		this.speed=1;
		this.moveEnemy = true;
		this.damage=1;

	}

	init(){
		this.x = this.X;
		this.y = this.Y;
		this.hp = HP;
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
		let distance=Math.sqrt((player.x-this.x)**2+(player.y-this.y)**2);
		console.log(this.setActive + this.hp);
		if(distance<=50){
			this.hp-=player.damage;
		}
		if(this.setActive == false){
			this.init();
		}
	}
	move(player)
	{
		let distance=Math.sqrt((player.x-this.x)**2+(player.y-this.y)**2);
		if(distance<=50){
			this.moveEnemy = false;
		}else{
			this.x+=1*this.speed;
		}
	}
}

class EnemyController
{

}