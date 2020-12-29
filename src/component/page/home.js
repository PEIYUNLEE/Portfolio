import React from "react";
// import { Link } from "react-router-dom";

import "./home.css";

import Scroll from "./../scroll";

import icon_codepen from "./../../assets/images/icon/codepen 1.png";
import icon_fb from "./../../assets/images/icon/facebook 1.png";
import icon_github from "./../../assets/images/icon/github (1) 1.png";
import icon_medium from "./../../assets/images/icon/image 11.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <div className="home-year">
          <div className="home-year-line"></div>
          <div className="home-year-text">1999</div>
          <div className="home-year-line"></div>
        </div>
        <h2 className="home-name">李佩芸</h2>
        <h2 className="home-name">PEI-YUN LEE</h2>
        <div className="home-school">國立臺北教育大學 - 數位科技設計學系</div>
        <ul>
          <li>
            <a href="http://facebook.com/may3256" target="_blank">
              <img src={icon_fb} />
            </a>
          </li>
          <li>
            <a href="https://github.com/PEIYUNLEE" target="_blank">
              <img src={icon_github} />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/may3256/" target="_blank">
              <img src={icon_codepen} />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@may1092200258" target="_blank">
              <img src={icon_medium} />
            </a>
          </li>
        </ul>
        <Scroll />
      </div>
    );
  }
}

export default Home;
