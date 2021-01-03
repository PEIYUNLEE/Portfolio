import React from "react";
import { Controller, Scene } from "react-scrollmagic";

import Button from "./../button";
import Tag from "./../tag";

import arrow from "./../../assets/images/icon/arrow2.png";

class Work2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainClassName: "work1-main",
    };

    this._renderHTMLText = this._renderHTMLText.bind(this);
    this._renderTag = this._renderTag.bind(this);
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
              <Controller>
                <Scene
                  offset={-150}
                  classToggle="work1-h3-active"
                  triggerElement={"#" + this.props.id + "-main-content"}
                  reverse={false}
                >
                  <h3 className="work1-h3">{this.props.data.name}</h3>
                </Scene>
              </Controller>
              <Controller>
                <Scene
                  offset={-150}
                  classToggle="work1-line-active"
                  triggerElement={"#" + this.props.id + "-main-content"}
                  reverse={false}
                >
                  <div className="work1-line"></div>
                </Scene>
              </Controller>
              <Controller>
                <Scene
                  offset={-150}
                  classToggle="work1-h3-active"
                  triggerElement={"#" + this.props.id + "-main-content"}
                  reverse={false}
                >
                  <div className="work1-h3 work1-h3-2">
                    {this.props.data.name_info}
                  </div>
                </Scene>
              </Controller>
            </div>
            <div className="work1-text-container">
              <Controller>
                <Scene
                  offset={-150}
                  classToggle="p-active"
                  triggerElement={"#" + this.props.id + "-main-content"}
                  reverse={false}
                >
                  <p
                    dangerouslySetInnerHTML={this._renderHTMLText(
                      this.props.data.main.info
                    )}
                  ></p>
                </Scene>
              </Controller>
            </div>
            <div className="work1-text-container work2-cotent-container">
              <Controller>
                <Scene
                  offset={-150}
                  classToggle="p-active"
                  triggerElement={"#" + this.props.id + "-main-content"}
                  reverse={false}
                >
                  <p
                    dangerouslySetInnerHTML={this._renderHTMLText(
                      this.props.data.main.content
                    )}
                  ></p>
                </Scene>
              </Controller>
            </div>
            <Controller>
              <Scene
                offset={-150}
                classToggle="work1-main-tag-container-active"
                triggerElement={"#" + this.props.id + "-main-content"}
                reverse={false}
              >
                <div className="work1-main-tag-container">
                  {this._renderTag()}
                </div>
              </Scene>
            </Controller>
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

export default Work2;
