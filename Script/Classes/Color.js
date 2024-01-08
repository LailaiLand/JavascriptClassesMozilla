class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }

  getRed() {
    console.log("value getRed henter", this.values[0]);
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }

  getGreen() {
    return this.values[1];
  }
  setGreen(value) {
    this.values[1] = value;
  }

  getBlue() {
    return this.values[2];
  }
  setBlue(value) {
    this.values[2] = value;
  }


}
