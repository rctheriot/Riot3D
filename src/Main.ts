import { Vector2 } from './Vector2';
import { Vector3 } from './Vector3';
import { Color } from './Color';

const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
canvas.width = 800;
canvas.height = 600;
canvas.style.height = `${canvas.height}px`;
canvas.style.width = `${canvas.width}px`;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
ctx.clearRect(0, 0, canvas.width, canvas.height);

const color1 = new Color(0.5, 0.5, 0.25, 1.0);

const imageData = new ImageData(canvas.width, canvas.height);

function setPixel(image: ImageData, x: number, y: number, color: Color) {
  const idx = y * (canvas.width * 4) + x * 4;
  image.data[idx] = color.r * 255;
  image.data[idx + 1] = color.g * 255;
  image.data[idx + 2] = color.b * 255;
  image.data[idx + 3] = color.a * 255;
}

function drawLine(x1: number, y1: number, x2: number, y2: number, color: Color) {
  const dx = Math.abs(x2 - x1);
  const dy = Math.abs(y2 - y1);
  const sx = (x1 < x2) ? 1 : -1;
  const sy = (y1 < y2) ? 1 : -1;
  let err = dx - dy;
  setPixel(imageData, x1, y1, color);
  while (!(x1 == x2 && y1 == y2)) {
    setPixel(imageData, x1, y1, color);
    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x1 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y1 += sy;
    }
  }
}

drawLine(50, 50, 50, 100, color1);
drawLine(50, 100, 100, 100, color1);
drawLine(100, 100, 100, 50, color1);
drawLine(100, 50, 50, 50, color1);
ctx.putImageData(imageData,0,0);