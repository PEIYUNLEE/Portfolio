import React from "react";
import { Controller, Scene } from "react-scrollmagic";

import "./work1.css";
import Button from "./../button";
import Tag from "./../tag";

import arrow from "./../../assets/images/icon/arrow2.png";

class Work1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainClassName: "work1-main",
      infoClassName: "work1-info",
    };

    this._renderHTMLText = this._renderHTMLText.bind(this);
    this._renderTag = this._renderTag.bind(this);
    this._renderInfoLeft = this._renderInfoLeft.bind(this);
    this._renderInfoButton = this._renderInfoButton.bind(this);
    this._renderInfoRight = this._renderInfoRight.bind(this);
    this._renderInfoName = this._renderInfoName.bind(this);
    this._renderInfoRightContent = this._renderInfoRightContent.bind(this);
    this._renderInfoTag = this._renderInfoTag.bind(this);
  }

  render() {
    const style_bg = {
      backgroundColor: this.props.data.color,
    };
    return (
      <div className="work1" id={this.props.id}>
        <div className={this.state.mainClassName}>
          <div className="work1-main-bg" style={style_bg}></div>
          <div
            className="work1-main-content-container"
            id={this.props.id + "-main-content"}
          >
            <div className="work1-text-container">
              {/* <Controller>
                <Scene
                  offset={-150}
                  classToggle="work1-h3-active"
                  triggerElement={"#" + this.props.id + "-main-content"}
                  reverse={false}
                > */}
                  <h3 className="work1-h3">{this.props.data.name}</h3>
                {/* </Scene>
              </Controller>
              <Controller>
                <Scene
                  offset={-150}
                  classToggle="work1-line-active"
                  triggerElement={"#" + this.props.id + "-main-content"}
                  reverse={false}
                > */}
                  <div className="work1-line"></div>
                {/* </Scene>
              </Controller>
              <Controller>
                <Scene
                  offset={-150}
                  classToggle="work1-h3-active"
                  triggerElement={"#" + this.props.id + "-main-content"}
                  reverse={false}
                > */}
                  <div className="work1-h3 work1-h3-2">
                    {this.props.data.name_info}
                  </div>
                {/* </Scene>
              </Controller> */}
            </div>
            <div className="work1-text-container">
              {/* <Controller>
                <Scene
                  offset={-150}
                  classToggle="p-active"
                  triggerElement={"#" + this.props.id + "-main-content"}
                  reverse={false}
                > */}
                  <p
                    dangerouslySetInnerHTML={this._renderHTMLText(
                      this.props.data.main.info
                    )}
                  ></p>
                {/* </Scene>
              </Controller> */}
            </div>
            {/* <Controller>
              <Scene
                offset={-150}
                classToggle="work1-main-tag-container-active"
                triggerElement={"#" + this.props.id + "-main-content"}
                reverse={false}
              > */}
                <div className="work1-main-tag-container">
                  {this._renderTag()}
                </div>
              {/* </Scene>
            </Controller> */}
                <div className="work1-main-button-container">
                  <Button
                    link={this.props.data.website}
                    content={"View Website"}
                    type={2}
                  />
                  <button
                    className="button"
                    onClick={() => {
                      this.setState({
                        mainClassName: "work1-main work1-main-anim-hide",
                        infoClassName: "work1-info work1-info-anim-show",
                      });
                    }}
                  >
                    <a>More</a>
                  </button>
                </div>
          </div>
          <Controller>
            <Scene
              classToggle="work1-main-img-active"
              triggerElement={"#" + this.props.id}
              reverse={false}
            >
              <img
                className="work1-main-img work1-main-img-l"
                src={this.props.data.main.img[0]}
              />
            </Scene>
            <Scene
              classToggle="work1-main-img-active"
              triggerElement={"#" + this.props.id}
              reverse={false}
            >
              <img
                className="work1-main-img work1-main-img-m"
                src={this.props.data.main.img[1]}
              />
            </Scene>
          </Controller>
        </div>
        <div className={this.state.infoClassName}>
          <div className="work1-info-bg"></div>
          <div className="work1-info-content">
            {this._renderInfoLeft()}
            {this._renderInfoRight()}
            <div
              className="work1-info-back"
              onClick={() => {
                this.setState({
                  mainClassName: "work1-main work1-main-anim-show",
                  infoClassName: "work1-info work1-info-anim-hide",
                });
              }}
            >
              <img src={arrow} className="work1-info-img-arrow" />
              BACK
            </div>
          </div>
          <img src={this.props.data.info.bg} className="work1-info-img" />
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

  _renderInfoLeft() {
    let list = [];
    list.push(
      <div className="work1-info-left">
        <img src={this.props.data.info.demo} className="work1-info-demo" />
        <div className="work1-info-tag">{this._renderInfoTag(0)}</div>
        <div className="work1-info-tag">{this._renderInfoTag(1)}</div>
        <div className="work1-info-button-container">
          {this._renderInfoButton()}
        </div>
      </div>
    );
    return list;
  }

  _renderInfoRight() {
    let list = [];
    list.push(
      <div className="work1-info-right">
        <div className="work1-text-container work1-info-text-container">
          {this._renderInfoName()}
        </div>
        <div className="work1-text-container work1-info-text-container">
          {this._renderInfoRightContent()}
        </div>
      </div>
    );
    return list;
  }

  _renderInfoRightContent() {
    let list = [];
    let content = this.props.data.info.content;

    if (this.props.data.index == 0) {
      content.forEach((element) => {
        if (element.h != undefined) {
          list.push(
            <div>
              <div className="work1-smallh">{element.h}</div>
              <img src={element.img} className="work1-info-img-sus" />
            </div>
          );
        } else if (element.img != undefined) {
          list.push(<img src={element.img} className="work1-info-img-flow" />);
        } else if (element.p != undefined) {
          list.push(
            <p dangerouslySetInnerHTML={this._renderHTMLText(element.p)}></p>
          );
        }
      });
    } else {
      content.forEach((element) => {
        if (element.h != undefined) {
          list.push(<div className="work1-smallh">{element.h}</div>);
        }
        if (element.p != undefined) {
          list.push(
            <p dangerouslySetInnerHTML={this._renderHTMLText(element.p)}></p>
          );
        }
      });
    }
    return list;
  }

  _renderInfoName() {
    let list = [];
    list.push(
      <div className="work1-h3 work1-info-h3">{this.props.data.name}</div>
    );

    if (this.props.data.index != 0) {
      list.push(<div className="work1-line"></div>);
      list.push(
        <div className="work1-h3 work1-h3-2">{this.props.data.name_info}</div>
      );
    }
    return list;
  }

  _renderInfoButton() {
    let list = [];
    list.push(
      <Button
        link={this.props.data.website}
        content={"View Website"}
        type={2}
      />
    );

    let button = this.props.data.info.button;
    if (button != undefined) {
      list.push(
        <Button
          link={this.props.data.info.button[1]}
          content={this.props.data.info.button[0]}
          type={2}
        />
      );
    }
    return list;
  }

  _renderInfoTag(index) {
    let list = [];
    this.props.data.info.tag[index].forEach((element, index) => {
      list.push(<Tag content={element} />);
    });
    return list;
  }
}

export default Work1;
