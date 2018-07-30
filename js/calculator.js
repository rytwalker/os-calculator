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
