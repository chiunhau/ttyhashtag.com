import React, { Component } from 'react';
import sketch from './sketch';
import sketch2 from './sketch2';
import './index.scss';
import p5 from 'p5';
import 'p5/lib/addons/p5.dom';

class Sandbox extends Component {
  componentDidMount() {
    document.getElementById('canvas-logo').ondragstart = function() { return false; };
    console.log('didmount');
      new p5(sketch, document.getElementById('canvas1'));
      // new p5(sketch2, document.getElementById('canvas2'));
  }

  onSetColor = (color) => {
    console.log('clock');
    this.props.handleSetColor(color);
  }

  handleMouseEnter = () => {
    window.sketchIsActive = false;
  }

  handleMouseLeave = () => {
    window.sketchIsActive = true;
  }

  render() {
    return (
      <div className="canvas">
        <div id="canvas1">
        </div>
        <img className="logo" src="/img/logo.svg" alt="" id="canvas-logo"/>
        <div id="canvas2">
        </div>
        <div className="colors">
          <div className="color -blue" onClick={() => this.onSetColor('#00f')} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}></div>
          <div className="color -pink" onClick={() => this.onSetColor('#e4007f')} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}></div>
          <div className="color -white" onClick={() => this.onSetColor('#e9ebee')} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}></div>
        </div>
      </div>

    );
  }
}

export default Sandbox;
