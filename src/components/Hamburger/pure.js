import React, { Component } from 'react';
import './index.scss';

class Hamburger extends Component {
  handleOpenInfobox = () => {
    this.props.onOpenInfobox();
  }

  render() {
    const { infoboxIsActive } = this.props;

    return (
      <div className={`hamburger ${infoboxIsActive ? '-active' : ''}`} onClick={this.handleOpenInfobox}>
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
