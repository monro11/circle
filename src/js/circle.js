export default function circle() {

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var time = 0;

  function drawCircle(radius,col,delay) {
  	var centerX = 400;
  	var centerY = 400;
  	var n = 400;

  	ctx.beginPath();

  	for (var i = 0; i<n; i++) {

  		var x = centerX + (radius + 150*Math.sin(13*i*2*Math.PI/(n-1)))*Math.sin(i*2*Math.PI/(n-1)-delay);
  		var y = centerY + (radius + 150*Math.sin(13*i*2*Math.PI/(n-1)))*Math.cos(i*2*Math.PI/(n-1)-delay);	
  	
  		if(i===0) {
        	ctx.moveTo(x,y);
     	 } else{
        	ctx.lineTo(x,y);
      	} 
    }

  	ctx.closePath(); 
  	ctx.fillStyle=col;
    ctx.fill();	 

  }	

  function draw() { 	
  	time++;
    ctx.clearRect(0,0,800,800);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,800,800);

  	for (var i = 0; i < 10; i++) {

  		var col = 'hsl('+i*8+', 80%, 50%)';

  		if(i%2) {
    		drawCircle(180-i*5,col,4*time/(900+50*i));
      	} else{
    		drawCircle(180-i*5,col,(-1*(4*time/(900+50*i))));
      	}	
    }	

    window.requestAnimationFrame(draw);

  }

  draw();
}
