const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const Router = express.Router()
const mongoose = require("mongoose");
const Cage = require("./models/data.js")

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mouseCage";
mongoose.connect(MONGODB_URI);
let db = mongoose.connection;
db.once("open", () => console.log("Connected to database."));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});

Router.post('/createData', (req, res) => {
    const rodent = new Cage({
        url: "http://softmouse.net/smdb/cage/edit.do?cageId=1786261",
        CageSID: "7155",
        CageTag: "Box 1",
        Mouseline: "TLR-2",
        CreateWean: Date,
        MatingSetup: Date,
        Protocol: "1996-067 Cheng",
        pI: "UCLA Radiation Oncology",
        Owner: "Cheng Lab",
        PhoneNumber: "310-825-8896",
        MatingSID: "1981"
    });
    rodent.save();
});
Router.get("/findData", (req, res) => {
    Cage.find({ url: req }, (err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});