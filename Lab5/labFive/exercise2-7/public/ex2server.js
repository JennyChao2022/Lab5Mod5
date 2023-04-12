const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/calculator/add', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) + parseFloat(num2);
  res.json({result});
});

app.get('/calculator/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) - parseFloat(num2);
  res.json({result});
});

app.get('/calculator/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) * parseFloat(num2);
  res.json({result});
});

app.get('/calculator/divide', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) / parseFloat(num2);
  res.json({result});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
