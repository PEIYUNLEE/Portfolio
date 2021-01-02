import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./app.css";

import Navigation from "./component/nav";
import Home from "./component/page/home";
import Work1 from "./component/page/work1";
import Footer from "./component/footer";

import worksData from "./data/works";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      works: worksData,
    };

    this._renderWorks = this._renderWorks.bind(this);
  }

  componentDidMount() {}

  render() {
    return (
      <HashRouter className="App">
        <Navigation />
        <Home />
        <div className="web-wrapper" id="web">
        {this._renderWorks()}</div>
        <Switch>
          {/* <Route
            exact
            path="/"
            component={() => (
              <div>
                <Home />
                {this._renderWorks()}
              </div>
            )}
          /> */}
        </Switch>
        <Footer />
      </HashRouter>
    );
  }

  _renderWorks() {
    let list = [];
    this.state.works.forEach((element, index) => {
      list.push(<Work1 id={"web"+(index+1)} key={"work1" + index} data={element} />);
    });
    return list;
  }
}

export default App;
