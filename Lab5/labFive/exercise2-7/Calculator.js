
class Calculator {
    constructor() {
      this.id = this.generateId();
      this.logger = new Logger(this.id);
    }
  
    generateId() {
      const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let id = '';
      for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * chars.length);
        id += chars[index];
      }
      return id;
    }
  
    add(a, b) {
      this.logger.log(`Calculator ${this.id}: Adding ${a} and ${b}`);
      return a + b;
    }
  
    subtract(a, b) {
      this.logger.log(`Calculator ${this.id}: Subtracting ${b} from ${a}`);
      return a - b;
    }
  
    multiply(a, b) {
      this.logger.log(`Calculator ${this.id}: Multiplying ${a} by ${b}`);
      return a * b;
    }
  
    divide(a, b) {
      this.logger.log(`Calculator ${this.id}: Dividing ${a} by ${b}`);
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    }
  
    power(a, b) {
      this.logger.log(`Calculator ${this.id}: Calculating ${a} to the power of ${b}`);
      return Math.pow(a, b);
    }
  }
  
  module.exports = Calculator;