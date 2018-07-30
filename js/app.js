// Init ui and calculator
const ui = new UI();
const calculator = new Calculator();

const inputNumber = document.querySelectorAll('.number');
const container = document.querySelector('.container');

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

ui.clearBtn.addEventListener('click', () => {
  if (ui.clearBtn.textContent === 'AC') {
    ui.output.textContent = '0';
    calculator.total = 0;
    calculator.operation = '';
    ui.operations.forEach(operation => operation.classList.remove('highlight'));
  } else if (calculator.total === 0) {
    ui.output.textContent = '0';
    ui.clearBtn.textContent = 'AC';
  } else {
    calculator.total = 0;
    calculator.operation = '';
    ui.output.textContent = '0';
    ui.clearBtn.textContent = 'AC';
  }
});

// OPERATION EVENT LISTENERS

// add
ui.addBtn.addEventListener('click', () => {
  // show engaged
  ui.addBtn.classList.add('highlight');
  // update operation
  calculator.operation = '+';
  // add output value to calculator
  calculator.update(parseInt(ui.output.textContent));
});

// subtract
ui.subtractBtn.addEventListener('click', () => {
  // show engaged
  ui.subtractBtn.classList.add('highlight');
  // update operation
  calculator.operation = '-';
  // add output value to calculator
  calculator.update(parseInt(ui.output.textContent));
});

// multiply
ui.multiplyBtn.addEventListener('click', () => {
  // show engaged
  ui.multiplyBtn.classList.add('highlight');
  // update operation
  calculator.operation = '×';
  // add output value to calculator
  calculator.update(parseInt(ui.output.textContent));
});

// divide
ui.divideBtn.addEventListener('click', () => {
  // show engaged
  ui.divideBtn.classList.add('highlight');
  // update operation
  calculator.operation = '÷';
  // add output value to calculator
  calculator.update(parseInt(ui.output.textContent));
});

// equals button event listener
ui.equalsBtn.addEventListener('click', () => {
  if (calculator.operation === '+') {
    // update total
    calculator.add(parseInt(ui.output.textContent));
    // update operation to none
    calculator.operation = '';
    // show in ui
    ui.output.textContent = calculator.total;
    // remove highlight class from operation
    ui.addBtn.classList.remove('highlight');
  } else if (calculator.operation === '-') {
    calculator.subtract(parseInt(ui.output.textContent));
    ui.output.textContent = calculator.total;
    ui.subtractBtn.classList.remove('highlight');
  } else if (calculator.operation === '×') {
    calculator.multiply(parseInt(ui.output.textContent));
    ui.output.textContent = calculator.total;
    ui.multiplyBtn.classList.remove('highlight');
  } else if (calculator.operation === '÷') {
    calculator.divide(parseInt(ui.output.textContent));
    ui.output.textContent = calculator.total;
    ui.divideBtn.classList.remove('highlight');
  }
});
