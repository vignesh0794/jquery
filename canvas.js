$(document).ready(function() {
var $myCanvas = $('#myCanvas');
$myCanvas.drawRect({
    fillStyle: 'steelblue',
    strokeStyle: 'blue',
    strokeWidth: 4,
    x: 150, y: 100,
    fromCenter: false,
    width: 200,
    height: 100
  });
})