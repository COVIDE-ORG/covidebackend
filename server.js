require("dotenv").config();

const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");
const https = require("https");

const cors = require("cors");
const cookieParser = require("cookie-parser");

//Import Routes
const volunteersRoutes = require("./routes/volunteers");
const resourceRoutes = require("./routes/resources");
const configRoutes = require("./routes/config");
const helpRoutes = require("./routes/askForHelps");
const impLinkRoutes = require("./routes/impLinks");

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Start a server
app.listen(process.env.DEV_PORT, () => {
  console.log("Server Running!");
});

app.get("/", (req, res) => {
  res.send("Covid Backend!!");
});

app.use("/api/volunteers", volunteersRoutes);
app.use("/api/resource", resourceRoutes);
app.use("/api/config", configRoutes);
app.use("/api/help", helpRoutes);
app.use("/api/implinks", impLinkRoutes);

const httpsServer = https.createServer(
  {
    key: fs.readFileSync(path.resolve(__dirname,'./ssl/privkey.pem')),
    cert: fs.readFileSync(path.resolve(__dirname,'./ssl/fullchain.pem'))
  },
  app
);

httpsServer.listen(443, () => {
  console.log("HTTPS Server running on port 443");
});
