export class Color {
  /** The Red component of THIS Color */
  public r: number;
  /** The Green component of THIS Color */
  public g: number;
  /** The Blue component of THIS Color */
  public b: number;
  /** The Alpha component of THIS Color */
  public a: number;

  /**
   * Creates a new Color with Red, Green, Blue, and Alpha Components.
   * All values are between 0.0 - 1.0
   * @param {number} r - The Red component
   * @param {number} g - The Green component
   * @param {number} b - The Blue component
   * @param {number} a - The Alpha component 
   */
  constructor(r: number, g: number, b: number, a: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  /**
   * Returns THIS Color as a CSS string. Ex. `rgba(0.5, 0.25, 1.0, 1.0)`
   * @returns A string of THIS color in a CSS valid format.
   */
  toCSSString(): string {
    return `rgba(${Math.round(this.r * 255)},${Math.round(this.g * 255)}.${Math.round(this.b * 255)},${this.a})`;
  }

  toUInt8Array(): Uint8Array {
    const colorArray = new Uint8Array(4);
    colorArray[0] = this.r;
    colorArray[1] = this.b;
    colorArray[2] = this.g;
    colorArray[3] = this.a;
    return colorArray;
  }


}