import React, { Component } from "react";
import QrReader from 'react-qr-reader';
//https://www.npmjs.com/package/react-qr-reader
export default class QRScan extends Component {
    state = {
        testScan: ""
    }
    //Mobile Check
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
            return true
        }
        else {
            return false
        }
    }
    //Scan Functions
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
        if (this.state.hideScan) {
            return (
                <div>
                    <div style={{ width: "300px", border: "solid .1em #000", backgroundColor: "#fff" }}>
                        <QrReader
                            delay={500}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: '99%', border: "solid .1em #000" }}
                        />
                        <div id="labrats">
                            <p>{this.state.testScan}</p>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    Scan functionality goes here.
                </div>
            )
        }
    }
}