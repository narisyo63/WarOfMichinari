class Stage
{
    constructor(canvas, x, y, fgcolor, bgcolor, ldcolor){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.fgcolor = fgcolor;
        this.bgcolor = bgcolor;
        this.ldcolor = ldcolor; 

        this.canvas.fillStyle=this.bgcolor;
        this.canvas.fillRect(0, 0, this.x, this.y);
    }

    draw_canvas(){
        this.canvas.fillStyle=this.bgcolor;
        this.canvas.fillRect(0, 0, this.x, this.y);
    
        this.canvas.fillStyle=this.fgcolor;
        this.canvas.fillRect(0, 0, this.x, this.y - 100);

        this.canvas.fillStyle=this.ldcolor;
        this.canvas.fillRect(0, 350, this.x, this.y - 450);
    }
}