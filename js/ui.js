class UI {
  constructor() {
    this.output = document.querySelector('.output');
    this.inputValues = document.querySelectorAll('.input-value');
    this.clearBtn = document.querySelector('#clearBtn');
    this.addBtn = document.querySelector('#addBtn');
    this.equalsBtn = document.querySelector('#equalsBtn');
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
