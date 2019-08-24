import React, { Component } from "react";
import Nav from "../Nav/Nav";
import { Table, Button, Popconfirm, Row, Col, Icon, Upload } from "antd";
import { EditableFormRow, EditableCell } from "../../utils/editable";
import { ExcelRenderer } from "react-excel-renderer";


class ExcelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: [],
      rows: [],
      errorMessage: null,
      columns: [
        {
          title: "CageSID",
          dataIndex: "cagesid",
          editable: true
        },
        {
          title: "CageTag",
          dataIndex: "cagetag",
          editable: true
        },
        {
          title: "CageType",
          dataIndex: "cagetype",
          editable: true
        },
        {
          title: "# of Mice",
          dataIndex: "mousecount",
          editable: true
        },
        {
          title: "Disposition",
          dataIndex: "disposition",
          editable: true
        },
        {
          title: "Mouseline",
          dataIndex: "mouseline",
          editable: true
        },
        {
          title: "Protocol",
          dataIndex: "protocol",
          editable: true
        },
        /* {
          title: "Mice Tags",
          dataIndex: "micetags",
          editable: true
        },
        {
          title: "Genotypes",
          dataIndex: "genotypes",
          editable: true
        }, */
        {
          title: "Comment",
          dataIndex: "comment",
          editable: true
        },
        {
          title: "Set up Date",
          dataIndex: "setupdate",
          editable: true
        },
        {
          title: "Mouse Owner",
          dataIndex: "owner",
          editable: true
        },
        {
          title: "Action",
          dataIndex: "action",
          render: (text, record) =>
            this.state.rows.length >= 1 ? (
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => this.handleDelete(record.key)}
              >
                <Icon
                  type="delete"
                  theme="filled"
                  style={{ color: "red", fontSize: "20px" }}
                />
              </Popconfirm>
            ) : null
        }
      ]
    };
  }


  handleSave = row => {
    const newData = [...this.state.rows]
    const index = newData.findIndex(item => row.key === item.key)
    const item = newData[index]
    newData.splice(index, 1, {
      ...item,
      ...row,
    })
    this.setState({ rows: newData })
  }


  checkFile(file) {
    let errorMessage = "";
    if (!file || !file[0]) {
      return;
    }
    const isExcel =
      file[0].type === "application/vnd.ms-excel" ||
      file[0].type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    if (!isExcel) {
      errorMessage = "You can only upload Excel file!";
    }
    console.log("file", file[0].type);
    const isLt2M = file[0].size / 1024 / 1024 < 2;
    if (!isLt2M) {
      errorMessage = "File must be smaller than 2MB!";
    }
    console.log("errorMessage", errorMessage);
    return errorMessage;
  }



  fileHandler = fileList => {
    console.log("fileList", fileList)
    let fileObj = fileList
    if (!fileObj) {
      this.setState({
        errorMessage: "No file uploaded!",
      })
      return false
    }
    console.log("fileObj.type:", fileObj.type)
    if (
      !(
        fileObj.type === "application/vnd.ms-excel" ||
        fileObj.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      )
    ) {
      this.setState({
        errorMessage: "Unknown file format. Only Excel files are uploaded!",
      })
      return false
    }


    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err)
      } else {
        let newRows = []
        resp.rows.slice(1).map((row, index) => {
          if (row && row !== "undefined") {
            newRows.push({
              key: index,
              cagesid: row[0],
              cagetag: row[1],
              cagetype: row[2],
              mousecount: row[3],
              disposition: row[4],
              mouseline: row[5],
              protocol: row[6],
              //micetags: row[7],
              //genotypes: row[8],
              comment: row[7],
              setupdate: row[8],
              owner: row[9]
            })
          }
        })
        if (newRows.length === 0) {
          this.setState({
            errorMessage: "No data found in file!",
          })
          return false
        } else {
          this.setState({
            cols: resp.cols,
            rows: newRows,
            errorMessage: null,
          })
        }
      }
    })
    return false
  }


  handleSubmit = async () => {
    console.log("submitting: ", this.state.rows)
    //submit to API
    //if successful, banigate and clear the data
    //this.setState({ rows: [] })
  }


  handleDelete = key => {
    const rows = [...this.state.rows]
    this.setState({ rows: rows.filter(item => item.key !== key) })
  }
  handleAdd = () => {
    const { count, rows } = this.state
    const newData = {
      key: count,
      cagesid: "1234",
      url: "http://softmouse.net/smdb/cage/edit.do?cageId=1234567",
      cagetag: "null",
      mouseline: "ABC-1"
    }
    this.setState({
      rows: [newData, ...rows],
      count: count + 1,
    })
  }

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    }
    const columns = this.state.columns.map(col => {
      if (!col.editable) {
        return col
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      }
    });
    return (
      <>
        <Nav />
        <div className="container">
          <h1>Importing Excel Component</h1>
          <Row gutter={16} justify="space-between">
            <Col
              span={8}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "5%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="page-title">Upload Data</div>
              </div>
            </Col>
            <Col span={8}>
              <a
                href="https://res.cloudinary.com/bryta/raw/upload/v1562751445/Sample_Excel_Sheet_muxx6s.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Sample excel sheet
    </a>
            </Col>
            <Col
              span={8}
              align="right"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {this.state.rows.length > 0 && (
                <>
                  <Button
                    onClick={this.handleAdd}
                    size="large"
                    type="info"
                    style={{ marginBottom: 16 }}
                  >
                    <Icon type="plus" />
                    Add a row
        </Button>{" "}
                  <Button
                    onClick={this.handleSubmit}
                    size="large"
                    type="primary"
                    style={{ marginBottom: 16, marginLeft: 10 }}
                  >
                    Submit Data
        </Button>
                </>
              )}
            </Col>
          </Row>

          <div>
            <Upload
              name="file"
              beforeUpload={this.fileHandler}
              onRemove={() => this.setState({ rows: [] })}
              multiple={false}
            >
              <Button>
                <Icon type="upload" /> Click to Upload Excel File
    </Button>
            </Upload>
          </div>

          <div style={{ marginTop: 20 }}>
            <Table
              components={components}
              rowClassName={() => "editable-row"}
              dataSource={this.state.rows}
              columns={columns}
            />
          </div>

        </div>
      </>
    );
  }
}
export default ExcelPage;