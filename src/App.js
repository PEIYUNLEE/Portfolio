import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./app.css";

import Header from "./component/header";
import Home from "./component/page/home";
import Work1 from "./component/page/work1";
import Footer from "./component/footer";

import worksData from './data/works'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      works: worksData
    };

    this._renderWorks = this._renderWorks.bind(this);
  }

  componentDidMount() {}

  render() {
    return (
      <HashRouter className="App">
        <Header />
        <Home />
        {this._renderWorks()}
        {/* <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <Home />
              </div>
            )}
          />
        </Switch> */}
        <Footer />
      </HashRouter>
    );
  }

  _renderWorks() {
    let list = [];
    this.state.works.forEach((element, index) => {
      list.push(
        <Work1
          key={"work1"+index}
          t1={element.name}
          t2={element.info}
          t3={element.info2}
          tag={element.tag}
          imgUrl_L={element.imgUrl_L}
          imgUrl_M={element.imgUrl_M}
          color={element.color}
          webUrl={element.webUrl}
        />
      );
    });
    return list;
  }
}

export default App;
