import React from "react";
import { Controller, Scene } from "react-scrollmagic";

import "./work3.css";
import Button from "./../button";
import Tag from "./../tag";

import arrow from "./../../assets/images/icon/arrow2.png";

class Work3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainClassName: "work1-main",
    };

    this._renderHTMLText = this._renderHTMLText.bind(this);
    this._renderTag = this._renderTag.bind(this);
  }

  render() {
    return (
      <div className="work3" id={this.props.id}>
        <div className="work3-left">
          <img className="work3-img-bg" src={this.props.data.main.bg} />
          <img className="work3-img-work" src={this.props.data.main.img[0]} />
        </div>
        <div className="work3-right">
          <div className="work3-text-container">
            <h3 className="work3-h3">{this.props.data.name}</h3>
            <div className="work3-line"></div>
            <div className="work3-h3 work3-h3-2">
              {this.props.data.name_info}
            </div>
          </div>
          <div className="work3-text-container">
            <p className="work3-p">{this.props.data.main.info}</p>
          </div>
          <div className="work3-text-container">
            <p className="work3-p work3-p2">{this.props.data.main.content}</p>
          </div>
          <div className="work3-tag-container">{this._renderTag()}</div>
          <div className="work3-button-container">
            <Button
              link={this.props.data.video}
              content={"Demo Video"}
              type={2}
            />
          </div>
        </div>
      </div>
    );
  }

  _renderHTMLText(text) {
    return {
      __html: text,
    };
  }

  _renderTag() {
    let list = [];
    this.props.data.main.tag.forEach((element, index) => {
      list.push(<Tag key={"tag" + index} content={element} />);
    });
    return list;
  }
}

export default Work3;
