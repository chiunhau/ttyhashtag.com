import React, { Component } from 'react';
import './index.scss';

class InfoBox extends Component {
  handleCloseInfobox = () => {
    this.props.onCloseInfobox();
    window.sketchIsActive = true;
  }

  render() {
    const { infoboxIsActive, activePageNum } = this.props;
    return (
      <div className={`info-box ${infoboxIsActive ? '-active' : ''}`}>
        <div className="box">
          {
            activePageNum === 1 ?
            <Page1/>
            :
            activePageNum === 2 ?
            <Page2/>
            :
            activePageNum === 3 ?
            <Page3/>
            :
            activePageNum === 4 ?
            <Page4/>
            :
            ''
          }


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

const Page2 = () => {
  return (
    <div className="page">
      <h2>購票資訊</h2>
      <h3>現場購票＿展覽期間</h3>
      <ol>
        <li>全票＿150元</li>
        <li>學生單人票＿100元</li>
        <li>十五人以上團體票＿80元（全票票面）</li>
        <li>免票＿0元 （65歲以上、身障、12歲以下）</li>
      </ol>
      <h3>預售票＿售票時間4月中</h3>
      <ol>
        <li>雙人票＿150元</li>
        <li>十人以上＿60元</li>
        <li>售票方式：<a href="https://hashtag.kktix.cc/events/taipeiyun2018">KKTIX</a></li>
      </ol>
    </div>
  )
}

const Page3 = () => {
  return (
    <div className="page">
      <h2>交通方式</h2>
      <h3>華山藝文特區</h3>
      <p>紅磚區 西1 西2 西4 館</p>
      <ol>
        <li>忠孝國小：232、232(副)、600、605、605(副)、605(新台五線)、665</li>
        <li>華山公園：699</li>
        <li>華山文創園區：205/232(副)/262(區間)/276/299/600/忠孝新幹線/台北觀光巴士</li>
      </ol>
      <iframe width="100%" height="450" frameBorder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJbSTgI2WpQjQRcVwWB2cnyfE&key=AIzaSyCfuh7qJoiW5c8cSMV4X9UEfuJvlAQYDZ0" allowFullScreen></iframe>
    </div>
  )
}

const Page4 = () => {
  return (
    <div className="page">
      <h2>關於我們</h2>
      <h3>雲科大數位媒體設計系</h3>
      <p>數位媒體設計系致力於研究未來數位媒體與培養最新數位媒體科技應用能力的學子，讓學生們透過產學合作及交流培植企業研發潛力及人才。本系發展方向分別為「電腦動畫設計組」、「互動媒體設計組」以及「數位加值設計組」。電腦動畫設計組運用電腦產生或協助製作的連續聲音影像，廣泛應用於娛樂及其他工商業用途。互動媒體設計組，將遊戲內容導入資訊科技加以開發或整合。數位加值設計將學習內容數位化後，所進行的企劃、產品，數位加值設計組的產品或系統包含：學習內容製作工具、軟體建置服務、學習課程服務、數位內容教學服務等等。</p>

      <h3>北科大互動設計系</h3>
      <p>互動設計系所旨在強調「提升本土藝術，結合最新科技，融入國際市場」。互動科技結合文化創意產業，跨領域人才培訓與合作環境的經營，乃是當前教育的新目標。主要為跨設計、科技、媒體三領域，本系以互動設計為發展的主軸，結合資通訊技術（ICT）產業與創意產業，發展前瞻性跨產業的關鍵能力。互動設計系的核心架構可分成三大領域：「互動設計」科技結合媒體的應用，以使者經驗和介面設計為基礎，將互動科技創新應用於產品、空間與服務之設計。「互動藝術」，將科技應用在藝術創作上，造出數位藝術的美感價值。以及「互動娛樂」，涉足娛樂性的數位內容，例如網路、遊戲、動畫的應用等等。</p>

      <h3>北科大創意設計學士班</h3>
      <p>創意設計學士班成立於2006年，招收對象為對工業設計、產品設計、家具與室內設計、建築設計、都市設計及互動設計等有興趣及具有潛力之學生。創意設計學士班採大一不分系、大二起依興趣選定系組「建築系」、「工業設計系產品設計組」、「工業設計系家具與室內設計組」、「互動設計系視覺傳達設計組」、「互動設計系媒體設計組」等共三系五組之任一系組為主修。</p>

      <h3>台科大設計系</h3>
      <p>台科大設計系之系所組成為「商業設計組」及「工業設計組」。工業設計組以工學、美學、經濟學為基礎對工業產品進行設計，配合不同產業的需求。商業設計組則以平面設計為範疇，向內延伸，以多元、全能的方向，培育設計領域通才。著重於「理論與實務並重」之教學，培養具備獨立思考與判斷能力之高水準工業設計與商業設計人才。理論方面的教學，著重於設計基礎養成和設計相關理論之學習。實務方面配合設計專題之演練和參與建教合作的設計專案等方式，使學生具備足夠之設計技能，良好的設計整合能力，以及協調和諧的工作態度。</p>

      <h3>台科大創意設計學士班</h3>
      <p>國立台灣科技大學創意設計學士班，現已與設計系合併。創意設計學士班包含「建築系」、「工商業設計系工業組」及「工商業設計系商業組」等三個系組。學生入學後，由三個系組中選擇任一系組作為主修，並可選擇設計學院之另一系組，或其他學院之一系作為雙主修或輔系。專業核心課程與台科大設計系相同，培養商業設計與工業設計相關人才為目標。</p>
    </div>
  )
}
