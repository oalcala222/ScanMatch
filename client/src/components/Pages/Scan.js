import React from "react";
import QRScan from "../QRscan";
import Nav from "../Nav/Nav";


function Scan() {
  return (
    <>
      <Nav />
      <div className="container">
        <h1>Scan</h1>
        <QRScan />
      </div>
    </>
  );
}

export default Scan;