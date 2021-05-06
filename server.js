require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");

//Import Routes

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Start a server
app.listen(process.env.DEV_PORT, () => {
  console.log("Server Running!");
});

app.get("/", (req, res) => {
  res.send("Covid Backend");
});
