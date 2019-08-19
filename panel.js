class Panel{
	constructor(canvas){
		this.canvas=canvas;
	}

	selectPanel(){
		this.canvas.fillStyle="red";
		this.canvas.fillRect(600,425,50,50);

		this.canvas.fillStyle="green";
		this.canvas.fillRect(500,425,50,50);
	}


}