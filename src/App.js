import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Match from "./components/Pages/Match";
import Scan from "./components/Pages/Scan";
import Upload from "./components/Pages/UploadXL";
import Nav from "./components/Nav/Nav";
import './App.css';
import QRScan from "./components/QRscan.js";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/match" component={Match} />
          <Route exact path="/scanning" component={Scan} />
          <Route exact path="/upload" component={Upload} />
        </Switch>
      </div>
    </Router>
  );

export default App;
