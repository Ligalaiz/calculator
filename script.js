const options = {
  TempDigit: 0,
  TempFlag: false,
  TempSign: '',
};

class Calculator {
  constructor(currentOperand) {
    this.currentOperand = currentOperand;
    this.TempDigit = options.TempDigit;
    this.TempFlag = options.TempFlag;
    this.TempSign = options.TempSign;
    this.clear();
  }
}

const digits = document.querySelectorAll('.number'),
  operators = document.querySelectorAll('.operator'),
  clearBtns = document.querySelectorAll('.clear-btn'),
  btns = document.querySelectorAll('.btn'),
  currentOperand = document.getElementById('display'),
  exp = document.getElementById('exp'),
  sqrt = document.getElementById('sqrt');

const calculator = new Calculator(currentOperand);
