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

  signChange = () => {
    let currentDigit = this.currentOperand.value;
    this.currentOperand.value =
      currentDigit > 0 ? -currentDigit : -currentDigit;
  };

  sqrt = () => {
    let currentDigit = this.currentOperand.value;
    if (currentDigit >= 0) {
      this.TempDigit = Math.sqrt(+currentDigit);
      this.currentOperand.value = this.TempDigit;
    } else {
      this.currentOperand.value = 'invalid in';
    }
  };

  calculation = (sign) => {
    if (this.currentOperand.value === 'invalid in')
      this.currentOperand.value = 0;

    let currentDigit = this.currentOperand.value;

    if (this.TempFlag && this.TempSign !== '=') {
      this.currentOperand.value = this.TempDigit;
    } else {
      this.TempFlag = true;
      switch (this.TempSign) {
        case '/':
          this.TempDigit =
            (((this.TempDigit * 10) / parseFloat(currentDigit)) * 100) / 1000;
          break;
        case '*':
          this.TempDigit =
            (this.TempDigit * 10 * parseFloat(currentDigit) * 100) / 1000;
          break;
        case '+':
          this.TempDigit =
            (this.TempDigit * 100 + parseFloat(currentDigit) * 100) / 100;
          break;
        case '-':
          this.TempDigit =
            (this.TempDigit * 100 - parseFloat(currentDigit) * 100) / 100;
          break;
        case '^':
          this.TempDigit =
            parseFloat(this.TempDigit ** parseFloat(currentDigit) * 100000) /
            100000;
          break;
        default:
          this.TempDigit = parseFloat(currentDigit);
          break;
      }
      this.currentOperand.value = this.TempDigit;
      this.TempSign = sign;
    }
  };

  addDecimal = () => {
    if (this.TempFlag) {
      this.currentOperand.value = '0.';
      this.TempFlag = false;
    } else {
      if (this.currentOperand.value.indexOf('.') === -1) {
        this.currentOperand.value = `${this.currentOperand.value}.`;
      }
    }
  };

  styleBtnOff(elem) {
    elem.classList.toggle('btn-shadow-off');
  }
}

const digits = document.querySelectorAll('.number'),
  operators = document.querySelectorAll('.operator'),
  clearBtns = document.querySelectorAll('.clear-btn'),
  btns = document.querySelectorAll('.btn'),
  currentOperand = document.getElementById('display'),
  exp = document.getElementById('exp'),
  sqrt = document.getElementById('sqrt'),
  minus = document.getElementById('minus');

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

decimal.addEventListener('click', () => calculator.addDecimal());

btns.forEach((btn) => {
  btn.addEventListener('mouseup', (e) => calculator.styleBtnOff(e.target));
  btn.addEventListener('mousedown', (e) => calculator.styleBtnOff(e.target));
});

minus.addEventListener('click', () => calculator.signChange());
sqrt.addEventListener('click', () => calculator.sqrt());
