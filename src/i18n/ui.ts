import { projectsI18nDict, projectsI18nEnDict } from "../data/index.data";

export const languages = {
  en: 'English',
  es: 'Español',
};

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

const initDate = new Date(2020, 2, 15);
const nowDate = new Date();
const diffTime = nowDate.getTime() - initDate.getTime();
const calculatedYoe = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
const yoe = Math.max(5, calculatedYoe);

export const ui: Record<Lang, any> = {
  "en": {
    "site_title": "Baruch Cerna — Full Stack Web Developer",
    "hero": {
      "technical_details": {
        "automata_status": "Cellular Automata: Active",
        "ruleset_label": "Ruleset",
        "generation_label": "Generation"
      },
      "city": "Mexico City",
      "name": "I am Baruch Cerna",
      "title": "Full Stack Web Developer",
      "tagline": "I craft digital experiences that solve complex problems, accelerate businesses, and delight users.",
      "button_contact": "Let's work together",
      "button_projects": "View projects",
      "badge_text": "Simplicity is the ultimate sophistication.",
      "years_experience": `I have over ${yoe} years of experience designing solutions and writing code that delivers measurable value to companies and users.`
    },
    "nav": {
      "link_logic": "About me",
      "link_stack": "Tech stack",
      "link_build": "Projects",
    },
    "logic": {
      "title": "A simple solution is the most elegant",
      "paragraph_1": "I started programming at 16, discovering that I could bring ideas to life with just a few lines of code. Since then, I have never stopped building, learning, and pushing the boundaries of what is possible on the web.",
      "paragraph_2": `With over ${yoe} years of experience, I architect and build robust, scalable digital systems for modern businesses. From high-converting websites to mission-critical enterprise platforms, I focus on performance, clarity, and lasting impact.`,
      "analysis_trait": "Analysis",
      "analysis_description": "Research & Technical Diagnosis",
      "synthesis_trait": "Synthesis",
      "synthesis_description": "Scalable Systems Architecture",
      "trait_1": "Analytical",
      "trait_2": "Minimalist",
      "trait_3": "Autodidact",
      "timeline_title": `${yoe}+ years engineering digital solutions`,
      "timeline_1_title": "Mar 2020 – Nov 2020 · Full Stack Developer at Maison Maya",
      "timeline_1_desc": "Built a custom inventory and client management platform for the real estate sector, streamlining internal workflows through tailored automation.",
      "timeline_2_title": "Nov 2020 – Present · Co-founder & Lead Web Developer at Zöku",
      "timeline_2_desc": "Co-founded a specialized bank foreclosure platform. Designed the interactive property catalog, implemented technical SEO, and engineered a fast, intuitive interface.",
      "timeline_3_title": "Sep 2022 – Present · Senior Full Stack Developer at Artificial Dynamics",
      "timeline_3_desc": "Engineering high-performance B2B web platforms (formerly Go-Sharp). Optimized geospatial logistics visualizations and large-scale data pipelines for enterprise clients like Nestlé, Sony, and Sigma.",
      "timeline_4_title": "Present · Independent Full Stack Consultant",
      "timeline_4_desc": "Partnering with companies to transform complex business requirements into fast, reliable, and refined digital products."
    },
    "stack": {
      "title": "Clean architecture and strategic execution",
      "subtitle": "Core technologies I use to design, build, and scale modern web applications."
    },
    "projects": {
      "title": "Results-driven digital products",
      "subtitle": "Each project is a concrete business solution built with clean code, thoughtful design, and strategic focus.",
      ...projectsI18nEnDict
    },
    "footer": {
      "cta_question": "Have a project in mind?",
      "cta_action": "Let's turn your vision into a high-impact digital product.",
      "button_contact": "Get in touch",
      "copyright_prefix": "Built with",
      "copyright_suffix": "and Astro by Baruch Cerna"
    }
  },
  "es": {
    "site_title": "Baruch Cerna — Desarrollador Web Full Stack",
    "hero": {
      "technical_details": {
        "automata_status": "Autómata Celular: Activo",
        "ruleset_label": "Regla",
        "generation_label": "Generación"
      },
      "city": "Ciudad de México",
      "name": "Soy Baruch Cerna",
      "title": "Desarrollador Web Full Stack",
      "tagline": "Desarrollo experiencias digitales que resuelven problemas complejos, impulsan negocios y cautivan a los usuarios.",
      "button_contact": "Trabajemos juntos",
      "button_projects": "Ver proyectos",
      "badge_text": "Una solución simple es la más elegante.",
      "years_experience": `Tengo más de ${yoe} años de experiencia diseñando soluciones y escribiendo código que aporta valor real a las empresas y a los usuarios.`
    },
    "nav": {
      "link_logic": "Sobre mí",
      "link_stack": "Tecnologías",
      "link_build": "Proyectos",
    },
    "logic": {
      "title": "Una solución simple es la más elegante",
      "paragraph_1": "Empecé a programar a los 16 años, cuando descubrí que podía dar vida a mis ideas con unas cuantas líneas de código. Desde entonces, no he dejado de construir, aprender y desafiar los límites de lo posible.",
      "paragraph_2": `Con más de ${yoe} años de experiencia, diseño y desarrollo sistemas digitales robustos y escalables. Ya sea un sitio web de alto impacto o una plataforma empresarial a medida, me enfoco en el rendimiento, la claridad técnica y el éxito del proyecto.`,
      "analysis_trait": "Análisis",
      "analysis_description": "Investigación y Diagnóstico Técnico",
      "synthesis_trait": "Síntesis",
      "synthesis_description": "Arquitectura y Diseño de Sistemas",
      "trait_1": "Analítico",
      "trait_2": "Minimalista",
      "trait_3": "Autodidacta",
      "timeline_title": `Más de ${yoe} años creando soluciones digitales`,
      "timeline_1_title": "Mar 2020 – Nov 2020 · Desarrollador Full Stack en Maison Maya",
      "timeline_1_desc": "Desarrollé un sistema a medida para gestionar inventario y clientes en el sector inmobiliario, optimizando la operación mediante automatización personalizada.",
      "timeline_2_title": "Nov 2020 – Presente · Cofundador y Desarrollador Web en Zöku",
      "timeline_2_desc": "Cofundé esta plataforma especializada en remates bancarios. Diseñé el catálogo interactivo, implementé SEO técnico y optimicé la interfaz para ofrecer una experiencia ágil e intuitiva.",
      "timeline_3_title": "Sep 2022 – Presente · Desarrollador Full Stack Senior en Artificial Dynamics",
      "timeline_3_desc": "Desarrollo herramientas B2B de alto rendimiento (antes Go-Sharp). Optimizamos visualizaciones logísticas y aceleramos la carga de datos para empresas como Nestlé, Sony y Sigma Alimentos.",
      "timeline_4_title": "Presente · Consultor y Desarrollador Web Independiente",
      "timeline_4_desc": "Desde sitios web de alto rendimiento hasta sistemas empresariales hechos a medida, transformo ideas complejas en plataformas digitales rápidas, sólidas y elegantes."
    },
    "stack": {
      "title": "Código elegante y visión estratégica",
      "subtitle": "Tecnologías principales con las que diseño, construyo y escalo aplicaciones web modernas."
    },
    "projects": {
      "title": "Productos digitales orientados a resultados",
      "subtitle": "Cada proyecto es una solución concreta, construida con arquitectura limpia y enfoque estratégico.",
      ...projectsI18nDict,
    },
    "footer": {
      "cta_question": "¿Tienes un proyecto en mente?",
      "cta_action": "Transformemos tu idea en un producto digital de alto impacto.",
      "button_contact": "Contáctame",
      "copyright_prefix": "Hecho con",
      "copyright_suffix": "y Astro por Baruch Cerna"
    }
  }
} as const;
