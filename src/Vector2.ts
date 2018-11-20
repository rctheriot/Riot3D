export class Vector2 {

  /** The X component of THIS Vector2 */
  public x: number;
  /** The Y component of THIS Vector2 */
  public y: number;

  /**  A Vector2 that is equal to Vector2(0, -1) */
  public static down = new Vector2(0, -1);
  /**  A Vector2 that is equal to Vector2(0, 1). */
  public static up = new Vector2(0, 1);
  /**  A Vector2 that is equal to Vector2(-1, 0). */
  public static left = new Vector2(-1, 0);
  /**  A Vector2 that is equal to Vector2(1, 0). */
  public static right = new Vector2(1, 0);
  /**  A Vector2 that is equal to Vector2(1, 1). */
  public static one = new Vector2(1, 1);
  /**  A Vector2 that is equal to Vector2(0, 0). */
  public static zero = new Vector2(0, 0);

  /**
   * Creates a new Vector2 that has X,Y components.
   * @param {number} x - The X component of the Vector2
   * @param {number} y - The Y component of the Vector2 
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /** Add a Vector2 to THIS Vector2.
   * @param {Vector2} v1 - The Vector2 to add.
   * @returns {Vector2} Returns THIS Vector2.
   */
  public add(v1: Vector2): Vector2 {
    this.x += v1.x;
    this.y += v1.y;
    return this;
  }

  /** Add a Vector2 to THIS Vector2.
   * @param {Vector2} v1 - The Vector2 to add.
   * @returns {Vector2} Returns THIS Vector2.
   */
  public subtract(v1: Vector2): Vector2 {
    this.x -= v1.x;
    this.y -= v1.y;
    return this;
  }

  /** Multiply THIS Vector2 by a number.
   * @param {number} v1 - The number to multply by.
   * @returns {Vector2} Returns THIS Vector2.
   */
  public multiply(num: number): Vector2 {
    this.x *= num;
    this.y *= num;
    return this;
  }

  /** Divide THIS Vector2 by a number.
   * @param {number} v1 - The number to divide by.
   * @returns {Vector2} Returns THIS Vector2.
   */
  public divide(num: number): Vector2 {
    this.x /= num;
    this.y /= num;
    return this;
  }

  /** Returns the length of the Vector2. */
  public getMagnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /** Returns a new Vector2 with length 1 keeping the same direction as THIS Vector2.
   * @returns {Vector2} A new Vector2
    */
  public getNormalizedVector(): Vector2 {
    const mag = this.getMagnitude();
    return new Vector2(this.x / mag, this.y / mag);
  }

  /** Returns a new Vector2 that is the sum of the two supplied Vector2s.
   * @param {Vector2} v1 - The 1st Vector2.
   * @param {Vector2} v2 - The 2nd Vector2.
   * @returns {Vector2} A new Vector2 that is the sum v1 and v2.
   */
  public static addTwoVectors(v1: Vector2, v2: Vector2): Vector2 {
    return new Vector2(v1.x + v2.x, v1.y + v2.y);
  }

  /**
   * The distance between two Vector2s.
   * @param {Vector2} v1 - 1st Vector2.
   * @param {Vector2} v2 - 2nd Vector2.
   * @returns {number} - The distance between v1 and v2.
   */
  public static distance(v1: Vector2, v2: Vector2): number {
    return Math.sqrt(Math.exp(v1.x - v2.x) + Math.exp(v1.y - v2.y));
  }
}