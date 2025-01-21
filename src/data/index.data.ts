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
    title: "UI Frameworks",
    body: "I use tools such as React, Astro, and Angular. It helps me build reusable custom elements and attributes, enabling complex user interfaces and efficient data management.",
  },
  {
    title: "Node.js",
    body: "Allows JavaScript to run on servers. It enables building scalable network applications and backend services for managing data and interacting with databases.",
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

import PortfolioImage from "../../public/media/viz.svg";

export const projects = [
  {
    title: "ZÖKU",
    body: "Es un catálogo de remates bancarios en México de la empresa Maison Maya. Mi amigo Oswaldo y yo creamos este catálogo, desde el panel de control hasta la landing page y el catálogo en sí. Le agregué algunas animaciones para darle vida.",
    href: "https://www.zoku.com.mx",
    image: "https://zoku.com.mx/media/ZOKU_BLANCO.avif",
    technologies: [
      "Angular",
      "HTML",
      "CSS",
      "Typescript",
      "p5.js",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    title: "Radyus",
    body: "Solución para optimizar rutas de transporte logístico. Apoyé al equipo web de Go-Sharp en mejorar la carga de datos para clientes como Sigma Alimentos y optimizar la experiencia de usuario para la visualización de puntos de venta en mapas, entre otras cosas.",
    href: "https://www.radyus.ai/",
    image: "https://www.radyus.ai/assets/image/portfolio/banner/radyus.png",
    technologies: [
      "Angular",
      "HTML",
      "CSS",
      "Typescript",
      "Django",
      "Python",
      "PostgreSQL",
    ],
  },
  {
    title: "Go Sharp Plus",
    body: "Solución de Artificial Dynamics para optimizar estrategias en puntos de venta para clientes como Sony, Ayvi, etc. Con el equipo web, optimicé la captura de información de clientes, automaticé la creación de reportes PDF e integré la sección de inteligencia de negocios (BI).",
    href: "https://www.go-sharp.ai/",
    image: "https://www.go-sharp.ai/assets/image/footer/logos-footer.png",
    technologies: [
      "Angular",
      "HTML",
      "CSS",
      "Typescript",
      "Django",
      "Python",
      "PostgreSQL",
    ],
  },
  {
    title: "VIZ",
    body: "Herramienta de visión artificial para definir zonas en puntos de interés para Go-Sharp. Mejoré la experiencia de usuario de dos formas principales: mejorando la forma en que se definen las zonas y optimizando el flujo de información de video en tiempo real simultáneamente.",
    href: "https://www.go-sharp.ai/solutions/viz-computer-vision",
    image: PortfolioImage,
    technologies: [
      "Angular",
      "HTML",
      "CSS",
      "Typescript",
      "Django",
      "Python",
      "PostgreSQL",
    ],
  },
  // {
  //   title: "Baruch Cerna - Portfolio",
  //   body: "My own portfolio as a showcase for my projects and design.",
  //   href: "https://baruch-cerna.netlify.app",
  //   image: PortfolioImage,
  //   technologies: [
  //     "Javascript",
  //     "HTML",
  //     "CSS",
  //     "Typescript",
  //     "Astro",
  //     "p5.js",
  //     "GSAP",
  //   ],
  // },
];
