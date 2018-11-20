export class Vector3 {

  /** The X component of THIS Vector3 */
  public x: number;
  /** The Y component of THIS Vector3 */
  public y: number;
  /** The Z component of THIS Vector3 */
  public z: number;

  /**  A Vector3 that is equal to Vector3(0, -1, 0). */
  public static down = new Vector3(0, -1, 0);
  /**  A Vector3 that is equal to Vector3(0, 1, 0). */
  public static up = new Vector3(0, 1, 0);
  /**  A Vector3 that is equal to Vector3(0, 0, -1). */
  public static back = new Vector3(0, 0, -1);
  /**  A Vector3 that is equal to Vector3(0, 0, 1). */
  public static forward = new Vector3(0, 0, 1);
  /**  A Vector3 that is equal to Vector3(-1, 0, 0). */
  public static left = new Vector3(-1, 0, 0);
  /**  A Vector3 that is equal to Vector3(1, 0, 0). */
  public static right = new Vector3(1, 0, 0);
  /**  A Vector3 that is equal to Vector3(1, 1, 1). */
  public static one = new Vector3(1, 1, 1);
  /**  A Vector3 that is equal to Vector3(0, 0, 0). */
  public static zero = new Vector3(0, 0, 0);

  /**
   * Creates a new Vector3 that has X,Y,Z components.
   * @param {number} x - The X component of the Vector3
   * @param {number} y - The Y component of the Vector3
   * @param {number} z - The Z component of the Vector3 
   */
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /** Add a Vector3 to THIS Vector3.
   * @param {Vector3} v1 - The Vector3 to add.
   * @returns {Vector3} Returns THIS Vector3.
   */
  public add(v1: Vector3): Vector3 {
    this.x += v1.x;
    this.y += v1.y;
    this.z += v1.z;
    return this;
  }

  /** Subtract a Vector3 to THIS Vector3.
   * @param {Vector3} v1 - The Vector3 to subtract.
   * @returns {Vector3} Returns THIS Vector3.
   */
  public subtract(v1: Vector3): Vector3 {
    this.x -= v1.x;
    this.y -= v1.y;
    this.z -= v1.z;
    return this;
  }

  /** Multiply THIS Vector3 by a number.
   * @param {number} v1 - The number to multply by.
   * @returns {Vector3} Returns THIS Vector3.
   */
  public multiply(num: number): Vector3 {
    this.x *= num;
    this.y *= num;
    this.z *= num;
    return this;
  }

  /** Divide THIS Vector3 by a number.
   * @param {number} v1 - The number to divide by.
   * @returns {Vector3} Returns THIS Vector3.
   */
  public divide(num: number): Vector3 {
    this.x /= num;
    this.y /= num;
    this.z /= num;
    return this;
  }

  /** Returns the length of the Vector3. */
  public getMagnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  /** Returns a new Vector3 with length 1 keeping the same direction as THIS Vector3.
   * @returns {Vector3} A new Vector3
    */
  public getNormalizedVector(): Vector3 {
    const mag = this.getMagnitude();
    return new Vector3(this.x / mag, this.y / mag, this.z / mag);
  }

  /** Returns a new Vector3 that is the sum of the two supplied Vector3s.
   * @param {Vector3} v1 - The 1st Vector3.
   * @param {Vector3} v2 - The 2nd Vector3.
   * @returns {Vector3} A new Vector3 that is the sum v1 and v2.
   */
  public static addTwoVectors(v1: Vector3, v2: Vector3): Vector3 {
    return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
  }

  /**
   * The distance between two Vector3s.
   * @param {Vector3} v1 - 1st Vector3.
   * @param {Vector3} v2 - 2nd Vector3.
   * @returns {number} - The distance between v1 and v2.
   */
  public static distance(v1: Vector3, v2: Vector3): number {
    return Math.sqrt(Math.exp(v1.x - v2.x) + Math.exp(v1.y - v2.y) + Math.exp(v1.z - v2.z));
  }
}