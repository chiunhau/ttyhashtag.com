import React, { Component } from 'react';
import './index.scss';

class InfoBox extends Component {
  handleCloseInfobox = () => {
    this.props.onCloseInfobox();
  }

  render() {
    const { infoboxIsActive } = this.props;
    return (
      <div className={`info-box ${infoboxIsActive ? '-active' : ''}`}>
        <div className="box">
          <Page1 />

        </div>
        <div className="cancel" onClick={this.handleCloseInfobox}>
          <img src="/img/cancel.svg" alt=""/>
        </div>
      </div>
    );
  }
}

export default InfoBox;

const Page1 = () => {
  return (
    <div className="page -1">
      <h2>展覽資訊</h2>
      <p>『2018三校聯合設計展』之主題名為＃Hashtag，是以深度交流為核心概念，意旨在互相交集中發現更多作品與更多人交流，也是舉辦本次展覽的目的！</p>
      <p>『＃』符號係指從各方互相交集在一起，其原本用意是把各篇社群網站之獨立貼文連為一體，透過標註出關鍵字進而讓使用者快速方便地發現来自各地的相關文章及內容，一同瀏覽與討論。</p>
    </div>
  )
}
