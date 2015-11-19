function Arrow(x,y,rotation,color){
    
    this.x = x;
    this.y = y;
    this.rotation = rotation || 0;
    this.color = color || "#ff0000";
    
    this.draw = function(context){
        context.save();
        
        context.translate(this.x,this.y);
        context.rotate(this.rotation);
        context.fillStyle = "rgba(0, 0, 255, 0.5)";
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(-100,-50);
        context.lineTo(100,-50);
        context.lineTo(100,-100);
        context.lineTo(200,0);
        context.lineTo(100,100);
        context.lineTo(100,50);
        context.lineTo(-100,50);
        context.lineTo(-100,-50);
        context.stroke();
        context.fill();
        context.closePath();
        context.beginPath();
        context.fillStyle = "#000" 
        context.arc(0,0,10,0,2*Math.PI);
        context.fill();
        context.closePath();
        context.restore();
    }
}