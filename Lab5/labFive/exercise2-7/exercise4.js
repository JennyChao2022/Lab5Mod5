  exports.add = (req, res) => {
    const { num1, num2 } = req.query;
    const result = +num1 + +num2;
    res.json({ result });
  };
  
  exports.subtract = (req, res) => {
    const { num1, num2 } = req.query;
    const result = num1 - num2;
    res.json({ result });
  };
  
  exports.multiply = (req, res) => {
    const { num1, num2 } = req.query;
    const result = num1 * num2;
    res.json({ result });
  };
  
  exports.divide = (req, res) => {
    const { num1, num2 } = req.query;
    const result = num1 / num2;
    res.json({ result });
  };

  exports.exponent = (req, res) => {
    const { num1, num2 } = req.query;
    const result = Math.pow(num1, num2);
    res.json({ result });
  };