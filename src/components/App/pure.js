import React, { Component } from 'react';
import Hamburger from '../Hamburger';
import InfoBox from '../InfoBox';
import './index.scss';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Hamburger/>
        <InfoBox/>
      </div>
    );
  }
}

export default App;
