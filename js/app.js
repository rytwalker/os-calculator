class Calculator {
  constructor() {
    this.num = 0;
    this.operation = '';
  }
  update(x) {
    this.num = x;
  }
  add(x) {
    return (this.num = this.num + x);
  }
  subtract(x) {
    return (this.num = this.num - x);
  }
  multiply(x) {
    return (this.num = this.num * x);
  }
  divide(x) {
    return (this.num = this.num / x);
  }
  clear() {
    this.num = 0;
  }
}

const calculator = new Calculator();

const inputValue = document.querySelectorAll('.input-value');
const output = document.querySelector('.output');

inputValue.forEach(value => {
  value.addEventListener('click', e => {
    let n = '';
    if (value.textContent === 'C' || value.textContent === 'AC') {
      calculator.clear();
      console.log(calculator.num);
    } else if (value.textContent === '=') {
      console.log(calculator.num);
    } else if (value.textContent === '+') {
      calculator.operation('+');
    } else {
      n += value.textContent;
      output.textContent += n;
      // if (calculator.num === 0) {
      //   calculator.update(n);
      // }
    }
    // console.log(number.textContent);
  });
});
