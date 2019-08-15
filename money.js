class Money{
	constructor(canvas){
		this.canvas=canvas;
		this.value=0;
	}

	drawMoneyValue(){
		this.canvas.fillStyle="black";
		this.canvas.font="48px serif";
		this.canvas.fillText(this.value+"円",480,50);
	}
}