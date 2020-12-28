import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import './app.css'

import Header from "./component/header";
import Home from "./component/page/home";
import Work1 from "./component/page/work1";
import Footer from "./component/footer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <HashRouter className="App">
        <Header/>
        <Home />
        <Work1 />
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
}

export default App;
