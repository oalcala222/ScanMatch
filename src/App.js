import React, { Component } from 'react';
import './App.css';
import QRScan from "./components/QRscan.js";

class App extends Component {
  state = {

  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideScan = (window.innerWidth <= 760);
    if (currentHideScan !== this.state.hideScan) {
      this.setState({ hideScan: currentHideScan });
    }
  }
  isMobile() {
    if (this.state.hideScan) {
      return <QRScan />
    }
    else {
      return <div>QR Functionality on smartphones.</div>
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.isMobile()}
        </header>
      </div>
    );
  }
}

export default App;
