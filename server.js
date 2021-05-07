require("dotenv").config();

const express = require("express");
const app = express();


const cors = require("cors");
const cookieParser = require("cookie-parser");


const { response } = require("express");

//Import Routes

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Start a server
app.listen(process.env.DEV_PORT, () => {
    console.log("Server Running!");
});


const func = require("./functions");

func.fetchallDataFromSheet()

const vd = require('./variableData');

app.get("/", (req, res) => {
    res.send("COVID BACKEND");
});


app.get("/getplasma", (req, res) => {
    res.send(vd.getdata().plasma)

});


app.get("/getoxygen", (req, res) => {
    res.send(vd.getdata().oxygen)

});