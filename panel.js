class Panel{
	constructor(canvas){
		this.canvas=canvas;
	}

	selectPanel(){
		this.canvas.fillStyle="red";
		this.canvas.fillRect(600,425,50,50);
	}


}