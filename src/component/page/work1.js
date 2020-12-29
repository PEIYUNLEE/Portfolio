import React from "react";

import "./work1.css";
import Button from "./../button";
import Tag from "./../tag";

class Work1 extends React.Component {
  constructor(props) {
    super(props);

    this._renderHTMLText = this._renderHTMLText.bind(this);
    this._renderTag = this._renderTag.bind(this);
  }

  render() {
    const style_bg = {
      backgroundColor: this.props.color,
    };
    return (
      <div className="work1">
        <div className="work1-bg" style={style_bg}></div>
        <div className="work1-content-container">
          <div className="work1-text-container">
            <h3 className="work1-text-h3">{this.props.t1}</h3>
            <div className="work1-text-line"></div>
            <div className="work1-text-h3 work1-text-h3-2">{this.props.t2}</div>
          </div>
          <div className="work1-text-container">
            <p
              dangerouslySetInnerHTML={this._renderHTMLText(this.props.t3)}
            ></p>
          </div>
          <div className="work1-tag-container">{this._renderTag()}</div>
          <div className="work1-button-container">
            <Button
              link={this.props.webUrl}
              content={"View Website"}
              type={2}
            />
            <Button content={"More"} type={1} />
          </div>
        </div>
        <img className="work1-img work1-img-l" src={this.props.imgUrl_L} />
        <img className="work1-img work1-img-m" src={this.props.imgUrl_M} />
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
    this.props.tag.forEach((element, index) => {
      list.push(<Tag key={"tag" + index} content={element} />);
    });
    return list;
  }
}

export default Work1;
