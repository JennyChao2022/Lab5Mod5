// for easy housekeeping, I have done exercise 5 in exercise3.js file and fade out the exercise 3 itself
// this code below will be designed solely for exercise 6 to use library Calculator.js

const express = require('express');
const Calculator = require('./Calculator');

const app = express();
const PORT = 3000;

const calculator = new Calculator();
const logger = calculator.logger;

app.get('/add', (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const sum = calculator.add(number1, number2);
  logger.log(`Result of adding ${number1} and ${number2}: ${sum}`);
  res.status(200).json({ result: sum });
});

app.get('/subtract', (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const difference = calculator.subtract(number1, number2);
  logger.log(`Result of subtracting ${number2} from ${number1}: ${difference}`);
  res.status(200).json({ result: difference });
});

app.get('/multiply', (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const product = calculator.multiply(number1, number2);
  logger.log(`Result of multiplying ${number1} and ${number2}: ${product}`);
  res.status(200).json({ result: product });
});

app.get('/divide', (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  let result;
  try {
    result = calculator.divide(number1, number2);
    logger.log(`Result of dividing ${number1} by ${number2}: ${result}`);
    res.status(200).json({ result: result });
  } catch (e) {
    logger.log(`Error dividing ${number1} by ${number2}: ${e.message}`);
    res.status(400).json({ error: e.message });
  }
});

app.get('/power', (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const result = calculator.power(number1, number2);
  logger.log(`Result of raising ${number1} to the power of ${number2}: ${result}`);
  res.status(200).json({ result: result });
});

app.listen(PORT, () => {
  console.log(`Calculator app listening at http://localhost:${PORT}`);
});

// node exercise56.js will start the server and you can navigate 
// to http://localhost:3000/add?num1=4&num2=5 (or any other numbers you'd like to add)

// console.log(myCalc.id);
// console.log(myCalc.add(3, 5));

// const Logger = require('./Logger');
// let logger = new Logger('Calculator');

// let result = 10;
// logger.log('Calculation result', result);