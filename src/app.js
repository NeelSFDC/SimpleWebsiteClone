
const express = require("express");
const path = require("path");
const app = new express();

const publicFolderPath = path.join(__dirname, "../src");
app.use(express.static(publicFolderPath));

const port = process.env.PORT || 3000;

app.get("*", (req, res) => {
  res.sendFile(path.join(publicFolderPath, "index.html"));
});

app.listen(port, () => {
  console.log("server is listening to listening at http://localhost:" + port);
});