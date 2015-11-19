window.addEventListener("load", function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    
    var grid = new Grid(800,450,20,20,100,100);
    
    var arrow = new Arrow(400,200,0.1);
    var tempHoek = 0;
    
    (function drawContext(){
        requestAnimationFrame(drawContext);
        context.clearRect(0,0,800,450);
        grid.draw(context);
        arrow.rotation = tempHoek;
        arrow.draw(context);
        //tempHoek += 0.01;
    })();
    
});