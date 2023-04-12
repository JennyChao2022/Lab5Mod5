class Logger {
    constructor(id) {
      this.id = id;
    }
  
    log(message) {
      console.log(`Calculator ${this.id}: ${message}`);
    }
  }
  
  module.exports = Logger;