class Enemy
{
	constructor(canvas,image,x,y){
		this.canvas=canvas;
		this.image=new Image();
		this.readImage(image);

		this.x = x;
		this.y = y;

		this.cost=10;
		this.hp = 100;	
		this.speed=1;
		this.damage=1;
		this.num = 0;
		
		this.rd;
		this.n=0;
		this.moveEnemy = true;
		this.setActive = false;
	}
	readImage(image)
	{
		this.image.src=image;
	}
	showImage()
	{
		this.canvas.drawImage(this.image,(this.n%2)*32,(this.num-1)*32,32,32,this.x-25,this.y-25,50,50);		
		this.n++;
	}
	hitJudge(player,num)	//敵との当たり判定
	{	
		if(num == 0){
			for(let i = 0; i < player.length; i++){
				let distance=Math.sqrt((player[i].x-this.x)**2+(player[i].y-this.y)**2);
				if(distance<=50){
					this.hp-=player[i].damage;
					return true;
				}else{
					return false;
				}
			}
		}else{
			let distance=Math.sqrt((player.x-this.x)**2+(player.y-this.y)**2);
			if(distance<=50){
				return true;
			}else{
				return false;
			}
		}
	}
	move()
	{
		this.x+=1*this.speed;
	}
}
class Enemy1 extends Enemy{
	constructor(canvas,image,x,y){
		super(canvas,image,x,y);

		this.num = 1;
		this.cost = 50;
		this.damage=10;
		this.speed = 1.5;
		this.HP = 100;

	}
}
class Enemy2 extends Enemy{
	constructor(canvas,image,x,y){
		super(canvas,image,x,y);

		this.num = 2;
		this.cost = 100;
		this.damage=5;
		this.speed = 1;
		this.HP = 500;
	}
}
class Enemy3 extends Enemy{
	constructor(canvas,image,x,y){
		super(canvas,image,x,y);

		this.num = 3
		this.cost = 200;
		this.damage=30;
		this.speed = 0.5;
		this.HP = 100;
	}
}

class enemy_castle
{
	constructor(canvas, castle_image,x,y){
		this.canvas=canvas;
		this.image=new Image();
		this.readImage(castle_image);

		this.x = x;
		this.y = y;
		this.damage = 0;
		this.initHP = 10000;
		this.hp = this.initHP;	
	}
	readImage(image)
	{
		this.image.src=image;
	}
	showImage()
	{
		this.canvas.drawImage(this.image,this.x-25,this.y-25,50,50);
	}
	hitJudge(player)	//敵との当たり判定
	{
		for(let i = 0; i < player.length; i++){
			let distance=Math.sqrt((player[i].x-this.x)**2+(player[i].y-this.y)**2);
			if(distance<=50){
				this.hp-=player[i].damage;
			}
		}
	}
	drawHP()
	{
		this.canvas.fillStyle="black";
		this.canvas.textAlign="center";
		this.canvas.font="12px serif";
		this.canvas.fillText(this.hp + "/" + this.initHP,this.x,this.y-30);
	}
	move()
	{
		return 0;
	}

}

class EnemyGenerator
{
	constructor(canvas,enemy_image,castle_image,x,y){
		this.canvas = canvas;
		this.enemy_image = enemy_image;
		this.x = x;
		this.y = y;

		this.exp =0;
		this.enemy_list = new Array();
		let rd;
		this.alleneCnt = 0;
		this.eneCnt = [0,0,0,0];
		this.enemyCastle = new enemy_castle(canvas, castle_image,x,y);
		this.enemy_list= new Array();
	}

	createCastle(player){
		if(this.enemyCastle.hp > 0){
			this.enemyCastle.showImage();
			this.enemyCastle.hitJudge(player);
			this.enemyCastle.drawHP();
		}
	}

	generator(player)
	{
		//this.rd = Math.floor( Math.random() * 50);
		this.createCastle(player);
		this.exp++;
		if(this.exp >= 50){
			if(this.eneCnt[1] < 2){
				this.enemy_list.push(new Enemy1(this.canvas,this.enemy_image,this.x,this.y));	
				this.alleneCnt++;
				this.eneCnt[1]++;
				this.exp -= 50;
			}
			if(this.exp >= 100){
				if(this.eneCnt[2] < 2){
				this.enemy_list.push(new Enemy2(this.canvas,this.enemy_image,this.x,this.y));
				this.alleneCnt++;
				this.eneCnt[2]++;
				this.exp -= 100;
				}
				if(this.exp >= 200){
					this.enemy_list.push(new Enemy3(this.canvas,this.enemy_image,this.x,this.y));
					this.alleneCnt++;
					this.eneCnt[3]++;
					this.exp -= 200;
				}
			}
		}

		for(let i = 0; i < this.enemy_list.length; i++){
			if(this.enemy_list[i].hp > 0){
				this.enemy_list[i].showImage();
				if(!this.enemy_list[i].hitJudge(player, 0) && !this.enemy_list[i].hitJudge(playerGenerator.playerCastle, 1)){
					this.enemy_list[i].move();
				}
			}else{
				this.eneCnt[this.enemy_list[i].num]--;
				this.enemy_list.splice(i,1);
				this.alleneCnt--;
			}
		}	
	}
}