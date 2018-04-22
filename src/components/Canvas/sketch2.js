import p5 from 'p5';
import 'p5/lib/addons/p5.dom';
import store from '../store';

const s = function(p5) {
  var pink, blue, eraser;
  var currentColor = 0;
  var colors = [];

  p5.setup = () => {
    let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);

    p5.noStroke();
  }

  p5.draw = () => {
    p5.clear();
    p5.fill(store.getState().canvas.color);
    p5.ellipse(p5.mouseX, p5.mouseY, 8, 8);
  }
}

export default s;
