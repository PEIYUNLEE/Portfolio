import React from "react";
import { Link } from "react-router-dom";

import "./button.css";
import arrow from './../assets/images/icon/arrow.png'

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.type === 1) {
      return (
        <button className="button">
          <a href="/" target="_blank">
          {this.props.content}
          </a>
        </button>
      );
    }
    else{
      return (
        <button className="button">
          <a href={this.props.link} target="_blank">
            <div className="button-text">{this.props.content}</div>
            <img className="button-img"src={arrow} />
          </a>
        </button>
      );
    }
  }
}

export default Button;
