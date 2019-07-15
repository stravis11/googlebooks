const express = require("express");
const path = require("path");
const PORT = 5000;

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This loads the React index page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/src/index.html"));
});

app.listen(PORT, () => console.log("Listening on port %s", PORT));
