import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export const startAnimations = () => {
  const tlYour = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
  tlYour.to("#your", { duration: 1, text: "your", delay: 1 });
  const tlEnter = gsap.timeline();
  tlEnter.from(".enter", {
    duration: 0.8,
    y: "100%",
    opacity: 0,
    ease: "back.inOut",
  });
};
