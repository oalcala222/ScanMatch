import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Match from "./components/Pages/Match";
import Scan from "./components/Pages/Scan";
import Upload from "./components/Pages/UploadXL";
import Signup from "./components/Signup";
import Login from "./components/Login";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/match" component={Match} />
            <Route exact path="/scanning" component={Scan} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
};
export default App;
