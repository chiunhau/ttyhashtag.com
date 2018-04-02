import p5 from 'p5';
import 'p5/lib/addons/p5.dom';
import store from '../store';

const s = function(p5) {
  var pink, blue, eraser;
  var currentColor = 0;
  var colors = [];

  p5.setup = () => {
    console.log('setup');
    let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.background('#e9ebee');
  }

  p5.draw = () => {

  }

  p5.mousePressed = () => {
    if (window.sketchIsActive && !store.getState().infobox.isActive) {
      paint(p5.mouseX, p5.mouseY);
    }
  }

  p5.mouseDragged = () => {
    if (window.sketchIsActive && !store.getState().infobox.isActive) {
      paint(p5.mouseX, p5.mouseY);
    }
  }


  function paint(centerX, centerY) {
    for(var i = 0; i < 1000; i ++) {
      p5.noStroke();
      p5.fill(store.getState().canvas.color);
      p5.ellipse(centerX + p5.randomGaussian(0, 35)  , centerY + p5.randomGaussian(0, 35) , 1, 1);
    }
  }
}

export default s;
