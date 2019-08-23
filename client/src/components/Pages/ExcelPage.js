import React, { Component } from "react"; 
import React from "react";
import Nav from "../Nav/Nav";
import { Table, Button, Popconfirm, Row, Col, Icon, Upload } from "antd"; 
import { ExcelRenderer } from "react-excel-renderer"; 


export default class ExcelPage extends Component {
  render() {
  return (
    <>
      <Nav />
      <div className="container">
        <h1>Upload Page!</h1>
        <h1>Importing Excel Component</h1>
      </div>
    </>
  );
}
}


export default ExcelPage;