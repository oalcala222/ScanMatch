import React, { Component } from "react";
import QrReader from 'react-qr-reader';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import scanner from "./components/scanner/scanner.js";

class App extends Component {
  state = {
    testScan: ""
  }
  handleScan = data => {
    if (data) {
      console.log(data)
      this.setState({ testScan: data })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <Router>
        <div>
          {/*<Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>*/}
        </div>
        <div style={{ width: "300px" }}>
          <QrReader
            delay={500}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
          />
          <p>[{this.state.testScan}]</p>
          <div id="labrats">

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
