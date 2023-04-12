const express = require("express");

const app1 = express();
const app2 = express();
const app3 = express();

app1.get("/", (req, res) => {
  res.send("Hello from server 1!");
});

app2.get("/", (req, res) => {
  res.send("Hello from server 2!");
});

app3.get("/", (req, res) => {
  res.send("Hello from server 3!");
});

app1.listen(3000, () => {
  console.log("Server 1 is listening on port 3000");
});

app2.listen(3001, () => {
  console.log("Server 2 is listening on port 3001");
});

app3.listen(3002, () => {
  console.log("Server 3 is listening on port 3002");
});