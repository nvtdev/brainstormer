const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/database");
const cors = require("cors");

// DB CONNECTION
mongoose.connect(config.database);
mongoose.connection.on("connected", () => {
  console.log("Connected to database " + config.database);
});
mongoose.connection.on("error", err => {
  console.log("Database error: " + err);
});
// DB CONNECTION

const app = express();
const port = process.env.PORT || 3000;

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

// Routes - begin
app.use(cors());

const sessions = require("./routes/sessions");
app.use("/sessions", sessions);

const ideas = require("./routes/ideas");
app.use("/ideas", ideas);

app.get("/", (req, res) => {
  res.send("Invalid endpoint.");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, function() {
  console.log("Server started on port " + port);
});
