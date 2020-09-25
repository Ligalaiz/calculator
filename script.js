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

  print = (num) => {
    if (this.TempFlag) {
      this.currentOperand.value = num;
      this.TempFlag = false;
    } else {
      this.currentOperand.value =
        this.currentOperand.value === 'invalid in'
          ? 0
          : this.currentOperand.value;
      this.currentOperand.value === '0'
        ? (this.currentOperand.value = num)
        : (this.currentOperand.value += num);
    }
  };

  clear = (value) => {
    if (value === 'ce') {
      this.TempFlag = true;
      this.currentOperand.value = 0;
    } else if (value === 'c') {
      this.TempDigit = 0;
      this.currentOperand.value = 0;
      this.TempFlag = false;
      this.TempSign = '';
    }
  };

  calculation = (sign) => {
    this.currentOperand.value =
      this.currentOperand.value === 'invalid in'
        ? 0
        : this.currentOperand.value;
    let currentDigit = this.currentOperand.value;
    if (this.TempFlag && this.TempSign !== '=') {
      this.currentOperand.value = this.TempDigit;
    } else if (sign === '^' || sign === '√' || sign === '+/-') {
      switch (sign) {
        case '^':
          this.TempDigit = parseInt((+currentDigit) ** 2 * 100) / 100;
          this.currentOperand.value = this.TempDigit;
          break;
        case '√':
          if (this.TempDigit >= 0) {
            this.TempDigit = Math.sqrt(+currentDigit);
            this.currentOperand.value = this.TempDigit;
          } else {
            this.currentOperand.value = 'invalid in';
          }
          break;
        case '+/-':
          this.TempDigit = -currentDigit;
          this.currentOperand.value = this.TempDigit;
          break;
      }
    } else {
      this.TempFlag = true;
      switch (this.TempSign) {
        case '/':
          this.TempDigit /= +currentDigit;
          break;
        case '*':
          this.TempDigit *= +currentDigit;
          break;
        case '+':
          this.TempDigit = (this.TempDigit * 100 + +currentDigit * 100) / 100;
          break;
        case '-':
          this.TempDigit = (this.TempDigit * 100 - +currentDigit * 100) / 100;
          break;
        default:
          this.TempDigit = +currentDigit;
          break;
      }
      this.currentOperand.value = this.TempDigit;
      this.TempSign = sign;
    }
  };
}

const digits = document.querySelectorAll('.number'),
  operators = document.querySelectorAll('.operator'),
  clearBtns = document.querySelectorAll('.clear-btn'),
  btns = document.querySelectorAll('.btn'),
  currentOperand = document.getElementById('display'),
  exp = document.getElementById('exp'),
  sqrt = document.getElementById('sqrt');

const calculator = new Calculator(currentOperand);

digits.forEach((digit) => {
  digit.addEventListener('click', (e) =>
    calculator.print(e.target.textContent)
  );
});

clearBtns.forEach((clearBtn) => {
  clearBtn.addEventListener('click', (e) =>
    calculator.clear(e.target.textContent)
  );
});

operators.forEach((operator) => {
  operator.addEventListener('click', (e) =>
    calculator.calculation(e.target.textContent)
  );
});