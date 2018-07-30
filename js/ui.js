class UI {
  constructor() {
    this.output = document.querySelector('.output');
    this.clearBtn = document.querySelector('#clearBtn');
    this.equalsBtn = document.querySelector('#equalsBtn');
    // operations
    this.operations = document.querySelectorAll('.operation');
    this.addBtn = document.querySelector('#addBtn');
    this.subtractBtn = document.querySelector('#subtractBtn');
    this.multiplyBtn = document.querySelector('#multiplyBtn');
    this.divideBtn = document.querySelector('#divideBtn');
  }
  updateOutput(inputValue) {
    this.output.innerHTML = inputValue;
  }
  resetOutput() {
    this.output.textContent = '0';
  }

  clearOutput() {
    this.output.textContent = '';
  }
}
