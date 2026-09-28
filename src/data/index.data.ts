export const tools = [
  {
    title: "HTML & CSS",
    body: "The foundational technologies of the web. HTML structures semantic content, while modern CSS defines layout, responsive behavior, and visual refinement.",
  },
  {
    title: "JavaScript & TypeScript",
    body: "The core language of interactive web applications, paired with static type systems to deliver reliable, maintainable, and scalable software.",
  },
  {
    title: "UI Frameworks",
    body: "I work extensively with React, Astro, and Angular. They enable modular component architectures, complex user interfaces, and efficient state management.",
  },
  {
    title: "Node.js",
    body: "Powers scalable server-side applications, RESTful APIs, and backend services designed for high-throughput data processing and database integration.",
  },
  {
    title: "p5.js",
    body: "A creative coding library for interactive generative graphics, custom canvas visualizations, and dynamic algorithmic art in the browser.",
  },
  {
    title: "GSAP",
    body: "A high-performance animation engine for crafting fluid timeline choreographies, scroll-driven interactions, and refined motion design.",
  },
];

import PortfolioImage from "../../public/media/viz.svg";
import MaisonImage from "../../public/media/173x57white.webp";

export const projects = [
  {
    title: "Maison Maya",
    body: "Sitio web oficial de Maison Maya, firma especializada en remates bancarios en México. Desarrollé la plataforma desde cero con Astro para maximizar la velocidad y el rendimiento, integrando un sistema de gestión de contenidos (CMS) para agilizar la administración de propiedades.",
    href: "https://maison.mx",
    image: MaisonImage,
    technologies: [
      "Astro",
      "HTML",
      "CSS",
      "TypeScript",
      "Node.js",
      "MongoDB"
    ],
  },
  {
    title: "ZÖKU",
    body: "Plataforma y catálogo digital de remates bancarios en México para Maison Maya. Co-desarrollado junto a Oswaldo, abarcando desde el panel administrativo hasta la página de aterrizaje y el buscador interactivo, enriquecido con animaciones fluidas e interfaz intuitiva.",
    href: "https://www.zoku.com.mx",
    image: "https://zoku.com.mx/media/ZOKU_BLANCO.avif",
    technologies: [
      "Angular",
      "HTML",
      "CSS",
      "TypeScript",
      "p5.js",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    title: "Radyus",
    body: "Plataforma de optimización de rutas y transporte logístico. Colaboré con el equipo web de Go-Sharp mejorando el procesamiento y carga de datos para clientes como Sigma Alimentos y optimizando la experiencia de usuario en la visualización geoespacial de puntos de venta.",
    href: "https://www.radyus.ai/",
    image: "https://www.radyus.ai/assets/image/portfolio/banner/radyus.png",
    technologies: [
      "Angular",
      "HTML",
      "CSS",
      "TypeScript",
      "Django",
      "Python",
      "PostgreSQL",
    ],
  },
  {
    title: "Go Sharp Plus",
    body: "Solución empresarial de Artificial Dynamics para optimizar estrategias en puntos de venta de marcas como Sony y Ayvi. Junto al equipo web, optimicé la captura de datos en campo, automaticé la generación de reportes en PDF e integré el módulo de Inteligencia de Negocios (BI).",
    href: "https://www.go-sharp.ai/",
    image: "https://www.go-sharp.ai/assets/image/footer/logos-footer.png",
    technologies: [
      "Angular",
      "HTML",
      "CSS",
      "TypeScript",
      "Django",
      "Python",
      "PostgreSQL",
    ],
  },
  {
    title: "VIZ",
    body: "Herramienta de visión artificial para la delimitación de zonas de interés en Go-Sharp. Elevé la experiencia de usuario rediseñando la interfaz de trazado de polígonos y optimizando la transmisión simultánea de flujos de video en tiempo real.",
    href: "https://www.go-sharp.ai/solutions/viz-computer-vision",
    image: PortfolioImage,
    technologies: [
      "Angular",
      "HTML",
      "CSS",
      "TypeScript",
      "Django",
      "Python",
      "PostgreSQL",
    ],
  },
];


export const projectsI18nDict = projects.reduce((acc, project, i) => {
  acc[`project_${i}`] = {
    title: project.title,
    imageAlt: `Imagen de ${project.title}`,
    description: project.body,
    technologies: project.technologies,
    image: project.image,
    href: project.href,
  }
  return acc;
}, {} as Record<string, any>);

export const projectsEn = [
  {
    title: "Maison Maya",
    body: "Official website for Maison Maya, a real estate and bank foreclosure firm in Mexico. Built from the ground up with Astro to maximize speed and performance, featuring a custom Content Management System (CMS) for seamless property updates.",
    href: "https://maison.mx",
    image: MaisonImage,
    technologies: [
      "Astro",
      "HTML",
      "CSS",
      "TypeScript",
      "Node.js",
      "MongoDB"
    ],
  },
  {
    title: "ZÖKU",
    body: "Digital catalog and platform for bank foreclosures in Mexico created for Maison Maya. Co-developed with my partner Oswaldo—spanning the administrative dashboard, landing page, and interactive property catalog—enhanced with fluid motion and an intuitive interface.",
    href: "https://www.zoku.com.mx",
    image: "https://zoku.com.mx/media/ZOKU_BLANCO.avif",
    technologies: [
      "Angular",
      "HTML",
      "CSS",
      "TypeScript",
      "p5.js",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    title: "Radyus",
    body: "Logistics route optimization platform. Collaborated with the Go-Sharp web team to accelerate large-scale data loading for enterprise clients like Sigma Alimentos and refine the interactive map visualization of points of sale.",
    href: "https://www.radyus.ai/",
    image: "https://www.radyus.ai/assets/image/portfolio/banner/radyus.png",
    technologies: [
      "Angular",
      "HTML",
      "CSS",
      "TypeScript",
      "Django",
      "Python",
      "PostgreSQL",
    ],
  },
  {
    title: "Go Sharp Plus",
    body: "Enterprise solution by Artificial Dynamics designed to optimize point-of-sale execution for brands such as Sony and Ayvi. Partnered with the web team to streamline field data capture, automate PDF report generation, and integrate the Business Intelligence (BI) module.",
    href: "https://www.go-sharp.ai/",
    image: "https://www.go-sharp.ai/assets/image/footer/logos-footer.png",
    technologies: [
      "Angular",
      "HTML",
      "CSS",
      "TypeScript",
      "Django",
      "Python",
      "PostgreSQL",
    ],
  },
  {
    title: "VIZ",
    body: "Computer vision tool for defining zones of interest at Go-Sharp. Enhanced the user experience by redesigning the interactive zone-mapping workflow and optimizing simultaneous real-time video streaming performance.",
    href: "https://www.go-sharp.ai/solutions/viz-computer-vision",
    image: PortfolioImage,
    technologies: [
      "Angular",
      "HTML",
      "CSS",
      "TypeScript",
      "Django",
      "Python",
      "PostgreSQL",
    ],
  },
];

export const projectsI18nEnDict = projectsEn.reduce((acc, project, i) => {
  acc[`project_${i}`] = {
    title: project.title,
    imageAlt: `${project.title} Project Screenshot`,
    description: project.body,
    technologies: project.technologies,
    image: project.image,
    href: project.href,
  }
  return acc;
}, {} as Record<string, any>);