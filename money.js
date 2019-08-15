class Money{
	constructor(canvas,value){
		this.canvas=canvas;
		this.value=value;
	}

	drawMoneyValue(){
		this.canvas.fillStyle="black";
		this.canvas.font="48px serif";
		this.canvas.fillText(this.value+"円",480,50);
	}
}