import React, { Component } from 'react';
import sketch from './sketch';
import './index.scss';
import p5 from 'p5';
import 'p5/lib/addons/p5.dom';

class Sandbox extends Component {
  componentDidMount() {
    document.getElementById('canvas-logo').ondragstart = function() { return false; };
    console.log('didmount');
      new p5(sketch, document.getElementById('canvas'));
  }

  render() {
    return (
      <div className="canvas">
        <div id="canvas">
        </div>
        <img className="logo" src="/img/logo.svg" alt="" id="canvas-logo"/>
      </div>

    );
  }
}

export default Sandbox;
