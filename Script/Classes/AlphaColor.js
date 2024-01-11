class AlphaColor extends Color {
  #alpha;
  constructor(r, g, b, a) {
    super(r, g, b);
    this.#alpha = a;
  }
  get alpha() {
    return this.#alpha;
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha must be between 1 and 0");
    }
    this.#alpha = value;
  }
  toString() {
    let colorString = super.toString();
    colorString = colorString.substring(0, colorString.length - 1);
    colorString += ", ";
    colorString += this.#alpha;
    colorString += ")";
    return colorString;
  }
}
