const express = require("express");
const app = express();
const port = 3000;
const calculatorRouter = require("./exercise3");
app.use("/calculator", calculatorRouter);
const router = require("./exercise3");
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
 '/api-docs',
 swaggerUi.serve,
 swaggerUi.setup(swaggerDocument)
);

app.use("/calculator", router);
app.use(express.static(__dirname + "/public"));

app.get("/calculator", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });