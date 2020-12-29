import React from "react";
import { Link } from "react-router-dom";

import "./nav.css";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navigation">
        <nav></nav>
      </div>
    );
  }
}

export default Navigation;
