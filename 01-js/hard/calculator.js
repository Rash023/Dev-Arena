class Calculator {
  constructor(result) {
    if (result == undefined) {
      this.result = 0;
    } else {
      this.result = result;
    }
  }
  throwErrorIfNotANmber(number, opertion) {
    if (typeof number != "number") {
      throw new Error(`Invalid Number ${number}, I can't perform ${opertion}`);
    }
  }
  add(number) {
    this.throwErrorIfNotANmber(number, "addition");
    this.result += number;
  }
  subtract(number) {
    this.throwErrorIfNotANmber(number, "substraction");
    this.result -= number;
  }
  multiply(number) {
    this.throwErrorIfNotANmber(number, "multiplication");
    this.result *= number;
  }
  divide(number) {
    this.throwErrorIfNotANmber(number, "division");
    if (number == 0) {
      throw new Error(`Devide by 0 not allowed`);
    }
    this.result /= number;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(exp) {
    this.clear();
    //calculate
    exp = exp.replace(/\s/g, "");
    let tempResult = eval(exp);
    if (tempResult != Infinity) {
      this.result = eval(exp);
    } else {
      throw new Error(`Invalid operation ${number}`);
    }
  }
}

module.exports = Calculator;
