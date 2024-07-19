import p5 from "p5";

const body = document.getElementsByTagName("body")[0];
const points: any[] = [];
const totalPoints = body.offsetWidth;
const noiseMultiplier = 0.01;

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(body.offsetWidth, body.offsetHeight);
    for (let i = 0; i < totalPoints; i++) {
      points.push(p.createVector(p.random(p.width), p.random(p.height)));
    }
    const from = p.color(92, 99, 115);
    const to = p.color(217, 217, 217);
    const pColor = p.lerpColor(from, to, 0.1);
    p.stroke(pColor);
  };

  const outOfCanvas = (item: p5.Vector) =>
    item.x < 0 || item.y < 0 || item.y > p.height || item.x > p.width;

  p.draw = () => {
    p.background(23, 23, 24, 5);
    for (const po of points) {
      p.point(po.x, po.y);
      const n = p.noise(po.x * noiseMultiplier, po.y * noiseMultiplier);
      const angle = p.TWO_PI * n;
      po.x += p.cos(angle);
      po.y += p.sin(angle);
      po.z += 0.02;
      if (outOfCanvas(po)) {
        po.x = p.random(p.width);
        po.y = p.random(p.height);
      }
    }
  };
};

export const runSketch = ()  => {
  new p5(sketch);
}