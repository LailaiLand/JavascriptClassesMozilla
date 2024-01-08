class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }

  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    this.#checkRange(value);
    this.#values[0] = value;
  }

  getGreen() {
    return this.#values[1];
  }
  setGreen(value) {
    this.#checkRange(value);
    this.#values[1] = value;
  }

  getBlue() {
    return this.#values[2];
  }
  setBlue(value) {
    this.#checkRange(value);
    this.#values[2] = value;
  }

  #checkRange(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("Value must be a number between 0 and 255");
    }
  }
}
