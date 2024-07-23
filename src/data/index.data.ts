export const tools = [
  {
    title: "HTML/CSS",
    body: "The basic tools for creating websites. HTML organizes content (text, images, links), while CSS defines how it looks (colors, layout, styles). Together, they create the structure and appearance of the websites we use daily.",
  },
  {
    title: "JavaScript",
    body: "The programming language that adds interactivity and dynamic behavior to websites. It allows elements to respond to user actions, update content without reloading, and create complex web applications.",
  },
  {
    title: "Angular",
    body: "A framework for building dynamic web applications. It extends HTML with custom elements and attributes, enabling complex user interfaces and efficient data management.",
  },
  {
    title: "Node.js",
    body: "A runtime environment that allows JavaScript to run on servers. It enables building scalable network applications and backend services using JavaScript outside the browser.",
  },
  {
    title: "p5.js",
    body: "A JavaScript library for creative coding. It simplifies creating interactive graphics, animations, and visual elements in web browsers, making it accessible for artists and beginners.",
  },
  {
    title: "GSAP",
    body: "A powerful JavaScript animation library. It enables smooth, high-performance animations of HTML elements, SVGs, and JavaScript objects, ideal for creating engaging web interfaces and motion graphics.",
  },
];

import PortfolioImage from '../../public/media/baruch_cerna.jpg';

export const projects = [
  {
    title: "ZÖKU",
    body: "Web platform for real estate auctions in Mexico, built using Angular, p5.js and Node.js.",
    href: "https://www.zoku.com.mx",
    image: "https://zoku.com.mx/assets/media/video-poster.jpg",
  },
  {
    title: "My portfolio",
    body: "My personal website built using Astro, p5.js and GSAP.",
    href: "https://baruch-cerna.netlify.app",
    image: PortfolioImage,
  },
];
