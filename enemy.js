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
		this.setActive = false;
		this.rd;
		this.speed=1;
		this.moveEnemy = true;
		this.damage=1;

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




class EnemyGenerator
{
	constructor(canvas,image,x,y){
		this.canvas = canvas;
		this.image = image;
		this.x = x;
		this.y = y;
		this.enemyData = new Enemy(canvas,image,x,y);

		this.enemy_list = new Array();
		let rd;
		this.eneCnt = 0;
	}

	generator(){
		this.rd = Math.floor( Math.random() * 50);
		console.log(this.eneCnt);
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









		//旧データ
		if(this.enemyData.hp>0){
			this.enemyData.hitJudge(player1);
			this.enemyData.showImage(player1.x,player1.y);
			this.enemyData.move(player1);
		}else{
			this.enemyData.setActive = false;
		}
		
	
	}
}