class Money{
	constructor(canvas){
		this.canvas=canvas;
		this.playerValue=0;
		this.enemyValue=0;
		
	}

	drawMoneyValue(){
		this.canvas.fillStyle="black";
		this.canvas.textAlign="right";
		this.canvas.font="48px serif";
		this.canvas.fillText(this.playerValue+"円",690,50);

		this.playerValue++;
	}
}