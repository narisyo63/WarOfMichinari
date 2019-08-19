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
	hitJudge(player)	//敵との当たり判定
	{
		for(let i = 0; i < player.length; i++){
			let distance=Math.sqrt((player[i].x-this.x)**2+(player[i].y-this.y)**2);
			if(distance<=50){
				this.hp-=player.damage;
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
		this.damage=2;
		this.speed = 1;
		this.HP = 1000;
	}
}
class Enemy3 extends Enemy{
	constructor(canvas,image,x,y){
		super(canvas,image,x,y);

		this.num = 3
		this.cost = 200;
		this.damage=50;
		this.speed = 0.5;
		this.HP = 200;
	}
}


class EnemyGenerator
{
	constructor(canvas,image,x,y){
		this.canvas = canvas;
		this.image = image;
		this.x = x;
		this.y = y;

		this.exp =0;
		this.enemy_list = new Array();
		let rd;
		this.alleneCnt = 0;
		this.eneCnt = [0,0,0,0];
	}



	generator(player)
	{
		this.rd = Math.floor( Math.random() * 50);
		console.log(this.exp);

		this.exp++;
		if(this.exp >= 50){
			if(this.eneCnt[1] < 2){
				this.enemy_list.push(new Enemy1(this.canvas,this.image,this.x,this.y));	
				this.alleneCnt++;
				this.eneCnt[1]++;
				this.exp -= 50;
			}
			if(this.exp >= 100){
				if(this.eneCnt[2] < 2){
				this.enemy_list.push(new Enemy2(this.canvas,this.image,this.x,this.y));
				this.alleneCnt++;
				this.eneCnt[2]++;
				this.exp -= 100;
				}
				if(this.exp >= 200){
					this.enemy_list.push(new Enemy3(this.canvas,this.image,this.x,this.y));
					this.alleneCnt++;
					this.eneCnt[3]++;
					this.exp -= 200;
				}
			}
		}


		for(let i = 0; i < this.enemy_list.length; i++){
			if(this.enemy_list[i] != null){
				this.enemy_list[i].showImage();
				if(!this.enemy_list[i].hitJudge(player)){
					this.enemy_list[i].move();
				}
			}
			if(this.enemy_list[i].hp <= 0 && this.enemy_list[i] != null){
				this.eneCnt[this.enemy_list[i].num]--;
				this.enemy_list.splice(i,1);
				this.alleneCnt--;
			}
		}
	}
}