export class Cursor {
  options: {
    cursor: string;
    dot: string;
  };
  cursor: HTMLElement | null;
  dot: HTMLElement | null;

  constructor() {
    this.options = {
      cursor: ".v-cursor",
      dot: ".v-dot",
    };
    this.cursor = document.querySelector(`${this.options.cursor}`);
    this.dot = document.querySelector(`${this.options.dot}`);

    window.addEventListener("mousemove", (e) => {
      if (!this.cursor || !this.dot) return;

      let X = e.x,
        Y = e.y,
        rect = this.cursor?.getBoundingClientRect(),
        rectd = this.dot?.getBoundingClientRect();
      this.dot.style.top = Y - rectd.height / 2 + "px";
      this.dot.style.left = X - rectd.width / 2 + "px";
    });
  }
}
