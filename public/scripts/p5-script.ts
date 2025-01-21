import p5 from "p5";
import "./../../node_modules/p5/lib/p5";

const getDeviceType = () => {
  const ua = navigator.userAgent;
  const tabletRegex = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i;
  const mobRegex =
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/;

  if (tabletRegex.test(ua)) return "tablet";
  if (mobRegex.test(ua)) return "mobile";
  return "desktop";
};

const sketch = (p: p5) => {
  p.disableFriendlyErrors = true;

  const points: p5.Vector[] = [];
  const noiseMultiplier = 0.01;
  const speedMouse = 0.2;
  let cursor: p5.Element | null;
  let x = 0;
  let y = 0;

  const setInitialPoints = (body: HTMLBodyElement) => {
    const totalPoints = 0.2 * body.offsetWidth / window.devicePixelRatio;
    for (let i = 0; i < totalPoints; i++) {
      points.push(p.createVector(p.random(p.width), p.random(p.height)));
    }
  };

  p.setup = () => {
    // p.frameRate(45);
    // const body = document.getElementsByTagName("body")[0];
    // p.createCanvas(body.offsetWidth, body.offsetHeight);
    // setInitialPoints(body);
    const from = p.color(89, 89, 88, 20);
    p.stroke(from);
    const isDesktop = getDeviceType() === "desktop";
    // p.strokeWeight(isDesktop ? 4 : 6);
    // p.frameRate(isDesktop ? 50 : 30);
    cursor = isDesktop ? p.select("#v-pointer") : null;
  };

  const outOfCanvas = (item: p5.Vector) =>
    item.x < 0 || item.y < 0 || item.y > p.height || item.x > p.width;

  p.draw = () => {
    if (cursor) {
      x = p.lerp(x, p.mouseX, speedMouse);
      y = p.lerp(y, p.mouseY, speedMouse);
      cursor.position(x, y);
    }
    // p.background(1, 13, 0);
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
};

export const runSketch = () => {
  new p5(sketch);
};
