'use strict';
console.log('main.js loaded');
console.log('\nwe are from inside the js');
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));
// TODO
//<script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.9.24/paper-full.min.js"></script>
/*
var c1 = Shape.Circle(200, 200, 50);
c1.fillColor = 'green';

var c;
for(var x=35; x<400; x+=25) {
for(var y=35; y<400; y+=25) {
c = Shape.Circle(x, y, 7);
c.fillColor = 'blue';
}
}
*/

let tool = new Tool();
tool.onMouseDown = function(event) {
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello ASHI!';
    
//   var c = Shape.Circle(event.point, 10);
//var c = Shape.Circle(event.point.x, event.point.y, 5);
//c.fillColor = 'red';
};


paper.view.draw();