const express = require("express");
const app = express();
let port = 3000;

// Root Path
app.get("/", (req, res) => {
  res.send("Hello! i am root");
});

// about path
app.get("/about", (req, res) => {
  res.send("Hello! this is about page.");
});

// contact us path
app.get("/contact-us", (req, res) => {
  res.send("Hello! this is contact us page");
});

// custom path
app.get("*", (req, res) => {
  res.send("This path does not exist");
});

// post request
app.post("/", (req, res) => {
  res.send("You sent a post request to root");
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
