import React,{useEffect} from 'react';

const CanvasDrawing = () => {

    useEffect(() => {
        init();
    }, []);


    var canvas, ctx;

    var prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        color = "lightblue",
        w, h;
    

    function init() {
        canvas = document.getElementById('canvasDrawing');
        ctx = canvas.getContext("2d");
        w = canvas.width;
        h = canvas.height;
        setInterval(erase,50);
    
        canvas.addEventListener("mousemove", function (e) {
            findxy(e)
        }, false);

    }

    function draw(prevX, prevY, currX, currY) {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = color;
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();

    }
    
    function erase() {
        ctx.clearRect(0, 0, w, h);
        //document.getElementById("canvasDrawing").style.display = "none";
            
    }
    
    
    function findxy(e) {
        prevX = currX;
        prevY = currY;    
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        draw(prevX, prevY, currX, currY);
    }
  return (
    <canvas id='canvasDrawing' width="1920" height="954" style={{position:"fixed", top:"0", left:"0", width:"1920", height:"954"}}></canvas>
  );
};

export default CanvasDrawing;

