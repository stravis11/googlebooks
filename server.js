const express = require("express");
const path = require("path");
const PORT = 5000;
const mongoose = require("mongoose");

const app = express();

// app.use(express.static(path.join(__dirname, "client/build")));

app.use(express.static(path.join(__dirname, "client")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This loads the React index page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/public/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/googlebooks", {
  useNewUrlParser: true
});
console.log("Connected to database");

// Starting API server
app.listen(PORT, () => console.log("Listening on port %s", PORT));
