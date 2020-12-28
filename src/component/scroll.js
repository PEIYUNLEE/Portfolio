import React from "react";

import "./scroll.css";

class Scroll extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="scroll">
        <div className="scroll-text">SCROLL</div>
        <div className="scroll-line"></div>
      </div>
    );
  }
}

export default Scroll;
