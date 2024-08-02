import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export const startAnimations = () => {
  const tlEnter = gsap.timeline();
  tlEnter.from(".enter", {
    duration: 0.6,
    y: "100%",
    opacity: 0,
    ease: "power4.in",
  });

  const tlYour = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
  tlYour.to("#your", { duration: 0.7, text: "your", delay: 1.6 });

  const tools: gsap.DOMTarget[] = gsap.utils.toArray(".tool");
  tools.forEach((tool, i) => {
    gsap.to(tool, {
      scrollTrigger: tool,
      delay: (i + 1) * 0.1,
      scale: 1,
      duration: 0.7,
      ease: "bounce.out",
    });
  });
};
