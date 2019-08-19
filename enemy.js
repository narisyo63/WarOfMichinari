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
		
		this.rd;
		this.moveEnemy = true;
		this.setActive = false;
	}

	readImage(image)
	{
		this.image.src=image;
	}
	showImage(px, py)
	{
		this.canvas.drawImage(this.image,this.x-25,this.y-25,50,50);
	}

	hitJudge(player)	//敵との当たり判定
	{
		let distance=Math.sqrt((player.x-this.x)**2+(player.y-this.y)**2);
		if(distance<=50){
			this.hp-=player.damage;
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

class Enemy1 extends Enemy{
	constructor(canvas,image,x,y){
		super(canvas,image,x,y);

		this.damage=10;
		this.speed = 1;
		this.HP = 100;
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
		this.eneCnt = 0;
	}



	generator(){
		this.rd = Math.floor( Math.random() * 50);
		console.log(this.exp);
		this.exp++;
		if(this.rd == 1){
			this.enemy_list[this.eneCnt] = new Enemy(this.canvas,this.image,this.x,this.y);
			this.enemy_list[this.eneCnt].setActive = true;
			this.eneCnt++;
		}
		for(let i = 0; i < this.enemy_list.length; i++){
			if(this.enemy_list[i] != null){
				for(let j = 0; j < player_list.length; j++){
					this.enemy_list[i].hitJudge(player_list[j]);
					this.enemy_list[i].showImage(player_list[j].x,player_list[j].y);
					this.enemy_list[i].move(player_list[j]);
				}
			}
			if(this.enemy_list[i].hp <= 0 && this.enemy_list[i] != null){
				this.enemy_list.splice(i,1);
				this.eneCnt--;
			}
		}
	}

}