import React from "react";
import { Link } from "react-router-dom";

import './header.css'
import Navigation from './nav'

class Header extends React.Component {
  constructor(props) {
    super(props);
    };
  
  render() {
    return (
      <header>
        <h1 className="header-logo">PEI-YUN</h1>
        {/* <Navigation /> */}
      </header>
    );
  }
}

export default Header;
