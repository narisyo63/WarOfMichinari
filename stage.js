class Stage
{
    constructor(canvas, x, y, fgcolor, bgcolor){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.fgcolor = fgcolor;
        this.bgcolor = bgcolor;

        this.canvas.fillStyle=this.bgcolor;
        this.canvas.fillRect(0, 0, this.x, this.y);
    }

    draw_canvas(){
        this.canvas.fillStyle=this.bgcolor;
        this.canvas.fillRect(0, 0, this.x, this.y);
    
        this.canvas.fillStyle=this.fgcolor;
        this.canvas.fillRect(0, 100, this.x, this.y - 200);
    
    }
}