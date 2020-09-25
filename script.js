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