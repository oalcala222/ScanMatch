import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Match from "./components/Pages/Match";
import Scan from "./components/Pages/Scan";
import ExcelPage from "./components/Pages/ExcelPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import './App.css';
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/match" component={Match} />
            <Route exact path="/scanning" component={Scan} />
            <Route exact path="/upload" component={ExcelPage} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
};
export default App;
