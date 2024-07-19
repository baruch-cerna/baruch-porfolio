import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export const startAnimations = () => {
  const tlEnter = gsap.timeline();
  tlEnter.from(".enter", {
    duration: 0.6,
    y: "100%",
    opacity: 0,
    ease: "back.inOut",
  });
  const tlYour = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
  tlYour.to("#your", { duration: 0.7, text: "your", delay: 1.6 });
};
