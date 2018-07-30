class Calculator {
  constructor() {
    this.total = 0;
    this.operation = '';
  }
  update(x) {
    this.total = x;
  }
  add(x) {
    return (this.total = this.total + x);
  }
  subtract(x) {
    return (this.total = this.total - x);
  }
  multiply(x) {
    return (this.total = this.total * x);
  }
  divide(x) {
    return (this.total = this.total / x);
  }
  clear() {
    this.total = 0;
  }
}

const ui = new UI();
const calculator = new Calculator();

const inputNumber = document.querySelectorAll('.number');
const output = document.querySelector('.output');
const container = document.querySelector('.container');

container.addEventListener('click', e => {
  console.log(e.target);
});

inputNumber.forEach(value => {
  value.addEventListener('click', () => {
    if (ui.output.textContent === '0') {
      // remove zero from interface
      ui.clearOutput();
      // change text content to C
      ui.clearBtn.textContent = 'C';
      // add totalber to interface
      ui.output.textContent += value.textContent;
    } else if (calculator.operation === '') {
      // add totalber to interface
      ui.output.textContent += value.textContent;
    } else {
      // remove number from interface
      ui.clearOutput();
      // add totalber to interface
      ui.output.textContent += value.textContent;
    }
  });
});

ui.addBtn.addEventListener('click', () => {
  // show engaged
  ui.addBtn.classList.add('highlight');
  // update operation
  calculator.operation = '+';
  // add output value to calculator
  calculator.update(parseInt(ui.output.textContent));
});

ui.equalsBtn.addEventListener('click', () => {
  if (calculator.operation === '+') {
    calculator.add(parseInt(ui.output.textContent));
    ui.output.textContent = calculator.total;
  } else if (calculator.operation === '-') {
    calculator.subtract(parseInt(ui.output.textContent));
  } else if (calculator.operation === '×') {
    calculator.multiply(parseInt(ui.output.textContent));
  } else if (calculator.operation === '÷') {
    calculator.divide(parseInt(ui.output.textContent));
  }
});

/*

inputValue.forEach(value => {
  value.addEventListener('click', e => {
    let n = '';
    if (value.textContent === 'C' || value.textContent === 'AC') {
      calculator.clear();
      console.log(calculator.total);
    } else if (value.textContent === '=') {
      console.log(calculator.total);
    } else if (value.textContent === '+') {
      calculator.update(parseInt(ui.output.textContent))
      calculator.operation('+');
    } else {
      // start of new calculation
      if (ui.output.textContent === '0') {
        ui.clearOutput();
        n += value.textContent;
        output.textContent += n;
      } else {
        n += value.textContent;
        output.textContent += n;
      }

      // if (calculator.total === 0) {
      //   calculator.update(n);
      // }
    }
    // console.log(totalber.textContent);
  });
});

*/
