import React, { Component } from 'react';
import './index.scss';

class Hamburger extends Component {
  handleOpenInfobox = () => {
    this.props.onOpenInfobox();
    window.sketchIsActive = false;
    console.log(window.sketchIsActive);
  }

  handleMouseEnter = () => {
    window.sketchIsActive = false;
  }

  handleMouseLeave = () => {
    window.sketchIsActive = true;
  }

  render() {
    const { infoboxIsActive } = this.props;

    return (
      <div className={`hamburger ${infoboxIsActive ? '-active' : ''}`} onClick={this.handleOpenInfobox} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <img className="logo"  src="/img/hashtag.svg" alt=""/>
        <img className="type"  src="/img/hashtag-type.svg" alt=""/>
        <ul className="menu">
          <li>展覽資訊</li>
          <li>購票方式</li>
          <li>交通方式</li>
          <li>聯絡我們</li>
        </ul>

      </div>
    );
  }
}

export default Hamburger;
