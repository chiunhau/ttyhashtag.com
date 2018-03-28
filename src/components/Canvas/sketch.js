import p5 from 'p5';
import 'p5/lib/addons/p5.dom';

const s = function(p5) {
  var pink, blue, eraser;
  var currentColor = 0;
  var colors = [];

  p5.setup = () => {
    console.log('setup');
    let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.background('#e9ebee');
    colors = ['#00f', '#e4007f', '#e9ebee']
    // document.getElementById('blue').addEventListener('click', function() {
    //   currentColor = 0;
    // });
    //
    // document.getElementById('pink').addEventListener('click', function() {
    //   currentColor = 1;
    // })
    //
    // document.getElementById('eraser').addEventListener('click', function() {
    //   currentColor = 2;
    // })
  }

  p5.draw = () => {
  }

  p5.mousePressed = () => {
    if (p5.mouseX > 50 && p5.mouseY > 0) {
      paint(p5.mouseX, p5.mouseY);
    }
  }

  p5.mouseDragged = () => {
    if (p5.mouseX > 50 && p5.mouseY > 0) {
      paint(p5.mouseX, p5.mouseY);
    }
  }


  function paint(centerX, centerY) {
    for(var i = 0; i < 1000; i ++) {
      p5.noStroke();
      p5.fill(colors[currentColor]);
      p5.ellipse(centerX + p5.randomGaussian(0, 35)  , centerY + p5.randomGaussian(0, 35) , 1, 1);
    }
  }
}

export default s;
