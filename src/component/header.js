import React from "react";
import { Link } from "react-router-dom";

import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    };
  
  render() {
    return (
      <header>
        <h1 className="header-logo">PEI-YUN</h1>
      </header>
    );
  }
}

export default Header;
