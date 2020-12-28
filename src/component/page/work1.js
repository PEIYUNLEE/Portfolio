import React from "react";

import "./work1.css";
import work_web1 from "./../../assets/images/work/1.png";

class Work1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="work1">
        <div className="work1-bg"></div>
        <img src={work_web1} />
        <div className="work1-text-container">
          <h3 className="work1-text-h3">臺北市市民服務大平台</h3>
          <div></div>
          <div className="work1-text-h3">改造政府網站</div>
          <p>唐鳳政委辦公室公共數位創新空間</p>
          <p>公部門網頁改版計畫 - RAY4.0</p>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Work1;
