import React, { Component } from 'react';
import './App.css';
import QRScan from "./components/QRscan.js";

class App extends Component {
  state = {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <QRScan />
        </header>
      </div>
    );
  }
}

export default App;
