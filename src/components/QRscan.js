import React, { Component } from "react";
import QrReader from 'react-qr-reader';
//https://www.npmjs.com/package/react-qr-reader
export default class QRScan extends Component {
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
}