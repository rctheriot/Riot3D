import { Vector2 } from './Vector2';
import { Vector3 } from './Vector3';

const v1 = new Vector2(5, 5);
const v2 = new Vector2(10, 10);
const v3 = new Vector3(15, 15, 15);

console.log(v2.add(v1));
console.log(v2.multiply(2));
console.log(v3);

let canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
canvas.width = 1024;
canvas.height = 768;
canvas.style.height = `${canvas.height}px`;
canvas.style.width = `${canvas.width}px`;

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
ctx.clearRect(0, 0, canvas.width, canvas.height);

function setPixel(canvasContext: CanvasRenderingContext2D, x: number, y: number, r: number, g: number, b: number, a: number) {
  canvasContext.fillStyle = `rgba(${r},${g}.${b},${a / 255})`;
  canvasContext.fillRect(x, y, 1, 1);
}

function drawLine(canvasContext: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, r: number, g: number, b: number, a: number) {
  let dx, dy, x, y, x_end, p, const1, const2;
  dx = Math.abs(x1 - x2);
  dy = Math.abs(y1 - y2);
  p = 2 * dy - dx;
  const1 = 2 * dy;
  const2 = 2 * (dy - dx);
  if (x1 > x2) {
    x = x2;
    y = y2;
    x_end = x1;
  } else {
    x = x1;
    y = y1;
    x_end = x2;
  }
  setPixel(canvasContext, x, y, r, g, b, a);
  while (x < x_end) {
    x = x + 1;
    if (p < 0) {
      p = p + const1;
    } else {
      y = y + 1;
      p = p + const2;
    }
    setPixel(canvasContext, x, y, r, g, b, a);
  }
}

drawLine(ctx, 150, 150, 200, 200, 255, 155, 20, 255);
