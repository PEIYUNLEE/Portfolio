import React from "react";
import { Link } from "react-router-dom";

import "./nav.css";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div
        className={
          !this.state.show
            ? "navigation_wrapper"
            : "navigation_wrapper nav-active"
        }
      >
        <nav>
          <a href="/">
            <h1 className="header-logo">PEI-YUN</h1>
          </a>
          <div className="nav-center">{this.props.current}</div>
          <div
            className="hamberger"
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
        <div className="menu-bg"></div>
        <div className="menu">
          <ul>
            <li>
              <a
                href="#web"
                onClick={() => {
                  this.setState({ show: !this.state.show });
                }}
              >
                <div className="line"></div>網頁
              </a>
            </li>
            <li>
              <a
                href="#app"
                onClick={() => {
                  this.setState({ show: !this.state.show });
                }}
              >
                <div className="line"></div>APP
              </a>
            </li>
            <li>
              <a
                href="#game"
                onClick={() => {
                  this.setState({ show: !this.state.show });
                }}
              >
                <div className="line"></div>遊戲
              </a>
            </li>
            <li>
              <a
                href="#device"
                onClick={() => {
                  this.setState({ show: !this.state.show });
                }}
              >
                <div className="line"></div>互動裝置
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
