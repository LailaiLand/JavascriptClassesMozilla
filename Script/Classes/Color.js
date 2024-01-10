class Color {
  #values;

  static {
    Color.grey = "rgb(128, 128, 128)";
    Color.red = "rgb(255, 0, 0)";
  }

  constructor(r, g, b) {
    this.#values = [r, g, b];
  }

  get Red() {
    return this.#values[0];
  }
  set Red(value) {
    this.#checkRange(value);
    this.#values[0] = value;
  }

  get Green() {
    return this.#values[1];
  }
  set Green(value) {
    this.#checkRange(value);
    this.#values[1] = value;
  }

  get Blue() {
    return this.#values[2];
  }
  set Blue(value) {
    this.#checkRange(value);
    this.#values[2] = value;
  }

  #checkRange(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("Value must be a number between 0 and 255");
    }
  }
}
