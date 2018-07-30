class UI {
  constructor() {
    this.output = document.querySelector('.output');
    this.inputValues = document.querySelectorAll('.input-value');
  }
  updateOutput(inputValue) {
    this.output.innerHTML = inputValue;
  }
  resetOutput() {
    this.output.textContent = 0;
  }
}
