import React, { Component } from 'react';
import './index.scss';

class Hamburger extends Component {
  handleOpenInfobox = pageNum => {
    this.props.onOpenInfobox();
    this.props.onSetActivePage(pageNum)
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
      <div className={`hamburger ${infoboxIsActive ? '-active' : ''}`}  onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <img className="logo"  src="/img/hashtag.svg" alt=""/>
        <img className="type"  src="/img/hashtag-type.svg" alt=""/>
        <ul className="menu">
          <li onClick={() => this.handleOpenInfobox(1)}>展覽資訊</li>
          <li onClick={() => this.handleOpenInfobox(2)}>購票方式</li>
          <li onClick={() => this.handleOpenInfobox(3)}>交通方式</li>
          <li onClick={() => this.handleOpenInfobox(4)}>關於我們</li>
          <li className="fb"><a href="https://www.facebook.com/TTYhashtag/" target="_blank">Facebook</a></li>
        </ul>

      </div>
    );
  }
}

export default Hamburger;
