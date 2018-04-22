import React, { Component } from 'react';
import Hamburger from '../Hamburger';
import InfoBox from '../InfoBox';
import Canvas from '../Canvas';
import './index.scss';

class App extends Component {
  componentDidMount() {
    window.sketchIsActive = true;
  }

  render() {
    return (
      <div className="app">
        <Canvas />
        <Hamburger/>
        <InfoBox/>
      </div>
    );
  }
}

export default App;
