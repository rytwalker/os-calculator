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

const numbers = document.querySelectorAll('.number');
const output = document.querySelector('.output');

numbers.forEach(number => {
  number.addEventListener('click', e => {
    let n = '';
    if (number.textContent === 'C') {
      calculator.clear();
      console.log(calculator.num);
    } else if (number.textContent === '=') {
      console.log(calculator.num);
    } else if (number.textContent === '+') {
      calculator.operation('+');
    } else {
      n += number.textContent;
      output.innerHTML = n;
      // if (calculator.num === 0) {
      //   calculator.update(n);
      // }
    }
    // console.log(number.textContent);
  });
});
