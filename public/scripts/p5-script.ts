import p5 from "p5";

const sketch = (p: p5) => {
  p.disableFriendlyErrors = true;

  const points: p5.Vector[] = [];
  const noiseMultiplier = 0.01;
  let cursor: p5.Element | null;

  const setInitialPoints = (body: HTMLBodyElement) => {
    const totalPoints = window.devicePixelRatio * body.offsetHeight;
    for (let i = 0; i < totalPoints; i++) {
      points.push(p.createVector(p.random(p.width), p.random(p.height)));
    }
  };

  p.setup = () => {
    const body = document.getElementsByTagName("body")[0];
    p.createCanvas(body.offsetWidth, body.offsetHeight);
    setInitialPoints(body);
    const from = p.color(92, 99, 115);
    const to = p.color(217, 217, 217);
    const pColor = p.lerpColor(from, to, 0.8);
    p.stroke(pColor);
    cursor = p.select("#v-pointer");
  };

  const outOfCanvas = (item: p5.Vector) =>
    item.x < 0 || item.y < 0 || item.y > p.height || item.x > p.width;

  p.draw = () => {
    p.background(217, 217, 217, 7);
    points.forEach((po) => {
      p.point(po.x, po.y);
      const n = p.noise(po.x * noiseMultiplier, po.y * noiseMultiplier);
      const angle = p.TWO_PI * n;
      po.x += Math.cos(angle);
      po.y += Math.sin(angle);
      if (outOfCanvas(po)) {
        po.x = p.width * Math.random();
        po.y = p.height * Math.random();
      }
    });
  };

  p.windowResized = () => {
    const body = document.getElementsByTagName("body")[0];
    p.resizeCanvas(body.offsetWidth, body.offsetHeight);
  };

  p.mouseMoved = () => {
    if (cursor) cursor.position(p.mouseX, p.mouseY);
  };
};

export const runSketch = () => {
  new p5(sketch);
};
