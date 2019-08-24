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
        let currentHideScan = (window.innerWidth <= 768);
        if (currentHideScan !== this.state.hideScan) {
            this.setState({ hideScan: currentHideScan });
        }
    }
    //Scan Functions
    handleScan = data => {
        if (data) {
            //Function for retrieving related data is pending.
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
                <div className="row justify-content-around">
                    <div className="col-sm-8">
                        <QrReader
                            delay={500}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: '100%', border: "solid .2em #000" }}
                        />
                        <div id="labrats" style={{ border: "solid .2em #000", backgroundColor: "#fff" }}>
                            <p>{this.state.testScan}</p>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <>
                    <div className="row  justify-content-around">
                        <div className="col-sm-4">
                            <img src="qrphone.png" width="300px" />
                        </div>
                    </div>
                    <div className="row  justify-content-around">
                        <div className="col-sm-6">
                            <strong>Smartphone users can go to this page to scan QR codes for item information.</strong>
                        </div>
                    </div>
                </>
            )
        }
    }
}