export const languages = {
  en: 'English',
  es: 'Español',
};

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

const initDate = new Date();
initDate.setDate(15);
initDate.setMonth(3);
initDate.setFullYear(2020);
const nowDate = new Date();
const diffTime = nowDate.getTime() - initDate.getTime();
const yoe = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));

export const ui: Record<Lang, any> = {
  "en": {
    "hero": {
      "technical_details": {
        "automata_status": "CELLULAR_AUTOMATA: ACTIVE", // Más relevante que "CELLULAR_AUTOMATA"
        "ruleset_label": "RULESET", // Se alinea con "Clean Architecture" y "SOLID"
        "generation_label": "GENERATION" // Enfocado en impacto de negocio
      },
      "city": "Mexico City, Mexico",
      "name": "I am Baruch Cerna",
      "title": "Web Developer",
      "tagline": "I craft digital experiences that solve complex problems, boost businesses, and delight users.",
      "button_contact": "Let's work together",
      "button_projects": "See projects",
      "badge_text": "A simple solution is the most elegant.",
      "years_experience": `I have over ${yoe} years designing solutions and writing code that adds value to companies and users.`
    },
    "nav": {
      "link_logic": "My Story",
      "link_stack": "Stack",
      "link_build": "Projects",
    },
    "logic": {
      "title": "A simple solution is the most elegant",
      "paragraph_1": "I started programming at 16, discovering I could bring my ideas to life with just a few lines of code. Since then, I haven't stopped building, learning, and challenging the limits of what's possible.",
      "paragraph_2": "I have worked with startups and international corporations, developing everything from custom CRMs to mortgage auction catalogs and sophisticated logistics systems.",
      "trait_1": "Analytical",
      "trait_2": "Minimalist",
      "trait_3": "Autodidact",
      "timeline_title": `${yoe}+ years coding solutions`,
      "timeline_1_title": "Mar 2020 - Nov 2020: Full Stack Developer @ Maison Maya",
      "timeline_1_desc": "Developed an inventory and client management system for the real estate sector. Here, I understood the power of custom automation.",
      "timeline_2_title": "Nov 2020 - Present: Co-founder & Web Developer @ Zöku",
      "timeline_2_desc": "Co-founded this platform for bank auctions. I designed the catalog, implemented technical SEO, and optimized the entire interface for an agile and intuitive user experience.",
      "timeline_3_title": "Sep 2022 - Present: Senior Full Stack Developer @ Artificial Dynamics (formerly Go-Sharp)",
      "timeline_3_desc": "Joined the team to create high-performance B2B tools. We optimized logistics visualizations and improved data loading for companies like Nestlé and Sony/Sigma.",
      "timeline_4_title": "Present: Independent Web Developer",
      "timeline_4_desc": "From static sites to custom enterprise systems, I transform ideas into powerful, fast, and elegant digital platforms."
    },
    "stack": {
      "title": "Elegant code and a strategic vision"
    },
    "projects": {
      "title": "I design results-driven digital products",
      "subtitle": "Every project is a concrete solution, built with elegant code and a strategic vision.",
      "project_1": {
        "title": "ZÖKU",
        "image_alt": "Zöku Project Screenshot",
        "description": "A catalog of bank auctions in Mexico for Maison Maya. My partner Oswaldo and I created this catalog, from the control panel to the landing page and the catalog itself. I added animations to bring it to life.",
        "technologies": "Angular, Typescript, p5.js, Node.js, MongoDB"
      },
      "project_2": {
        "title": "Radyus",
        "image_alt": "Radyus Project Screenshot",
        "description": "A solution to optimize logistics transportation routes. I supported the Go-Sharp web team in improving data loading for clients like Sigma Alimentos and optimizing the user experience for visualizing points of sale on maps, among other tasks.",
        "technologies": "Angular, Typescript, Django, Python, PostgreSQL"
      },
      "project_3": {
        "title": "Go Sharp Plus",
        "image_alt": "Go Sharp Plus Project Screenshot",
        "description": "An Artificial Dynamics solution to optimize point-of-sale strategies for clients like Sony and Ayvi. With the web team, I optimized client information capture, automated PDF report creation, and integrated the Business Intelligence (BI) section.",
        "technologies": "Angular, Typescript, Django, Python, PostgreSQL"
      },
      "project_4": {
        "title": "VIZ",
        "image_alt": "VIZ Project Screenshot",
        "description": "An artificial vision tool to define zones in points of interest for Go-Sharp. I improved the user experience in two main ways: enhancing the method for defining zones and optimizing the real-time simultaneous video information flow.",
        "technologies": "Angular, Typescript, Django, Python, PostgreSQL"
      }
    },
    "footer": {
      "cta_question": "Do you have an idea you want to transform into a digital experience?",
      "cta_action": "Let me help you build it.",
      "button_contact": "Contact me",
      "copyright_text": "Made with ❤️ and Astro by Baruch Cerna"
    }
  },
  "es": {
    "hero": {
      "technical_details": {
        "automata_status": "AUTÓMATA_CELULAR: ACTIVO", // Más relevante que "CELLULAR_AUTOMATA"
        "ruleset_label": "REGLA", // Se alinea con "Clean Architecture" y "SOLID"
        "generation_label": "GENERACIÓN" // Enfocado en impacto de negocio
      },
      "city": "Ciudad de México, México",
      "name": "Soy Baruch Cerna",
      "title": "Desarrollador Web",
      "tagline": "Desarrollo experiencias digitales que resuelven problemas complejos, impulsan negocios y encantan a los usuarios.",
      "button_contact": "Trabajemos juntos",
      "button_projects": "Ver proyectos",
      "years_experience": `Tengo más de ${yoe} años diseñando soluciones y escribiendo código que agrega valor a las empresas y a los usuarios.`
    },
    "nav": {
      "link_logic": "Mi Historia", // Cambiado para reflejar mejor el contenido de la sección
      "link_stack": "Stack",
      "link_build": "Proyectos",
    },
    "logic": {
      "title": "Una respuesta simple es más elegante",
      "paragraph_1": "Empecé a programar a los 16 años, cuando descubrí que podía darle vida a mis ideas con unas cuantas líneas de código. Desde entonces, no he dejado de construir, aprender y desafiar los límites de lo posible.",
      "paragraph_2": "He trabajado con startups y corporativos internacionales desarrollando desde CRMs personalizados hasta catálogos de remates hipotecarios y sistemas de logística.",
      "trait_1": "Analitíco",
      "trait_2": "Minimalista",
      "trait_3": "Autodidacta",
      "timeline_title": `Más de ${yoe} años codificando soluciones`,
      "timeline_1_title": "Mar 2020 - Nov 2020: Desarrollador Full Stack en Maison Maya",
      "timeline_1_desc": "Desarrollé un sistema para gestionar inventario y clientes en el sector inmobiliario. Aquí entendí el poder de la automatización personalizada.",
      "timeline_2_title": "Nov 2020 - Presente: Cofundador y Desarrollador Web en Zöku",
      "timeline_2_desc": "Cofundé esta plataforma de remates bancarios. Diseñé el catálogo, implementé SEO técnico y optimicé toda la interfaz para una experiencia ágil e intuitiva.",
      "timeline_3_title": "Sep 2022 - Presente: Desarrollador Full Stack Senior en Artificial Dynamics (anteriormente Go-Sharp)",
      "timeline_3_desc": "Me sumé al equipo para crear herramientas B2B de alto rendimiento. Optimizamos visualizaciones logísticas y mejoramos la carga de datos para empresas como Nestlé y Sony/Sigma.",
      "timeline_4_title": "Presente: Desarrollador Web independiente",
      "timeline_4_desc": "Desde sitios estáticos hasta sistemas empresariales hechos a medida, transformo ideas en plataformas digitales potentes, rápidas y elegantes."
    },
    "stack": {
      "title": "Código elegante y una visión estratégica"
    },
    "projects": {
      "title": "Diseño productos digitales centrados en resultados",
      "subtitle": "Cada proyecto es una solución concreta, construida con código elegante y una visión estratégica.",
      "project_1": {
        "title": "ZÖKU",
        "image_alt": "[Imagen de la plataforma Zöku]",
        "description": "Es un catálogo de remates bancarios en México de la empresa Maison Maya. Mi amigo Oswaldo y yo creamos este catálogo, desde el panel de control hasta la landing page y el catálogo en sí. Le agregué algunas animaciones para darle vida.",
        "technologies": "Angular, Typescript, p5.js, Node.js, MongoDB"
      },
      "project_2": {
        "title": "Radyus",
        "image_alt": "[Imagen de la solución de ruteo Radyus]",
        "description": "Solución para optimizar rutas de transporte logístico. Apoyé al equipo web de Go-Sharp en mejorar la carga de datos para clientes como Sigma Alimentos y optimizar la experiencia de usuario para la visualización de puntos de venta en mapas, entre otras cosas.",
        "technologies": "Angular, Typescript, Django, Python, PostgreSQL"
      },
      "project_3": {
        "title": "Go Sharp Plus",
        "image_alt": "[Imagen de la plataforma Go Sharp Plus]",
        "description": "Solución de Artificial Dynamics para optimizar estrategias en puntos de venta para clientes como Sony y Ayvi. Con el equipo web, optimicé la captura de información de clientes, automaticé la creación de reportes PDF e integré la sección de inteligencia de negocios (BI).",
        "technologies": "Angular, Typescript, Django, Python, PostgreSQL"
      },
      "project_4": {
        "title": "VIZ",
        "image_alt": "[Imagen de la herramienta de visión artificial VIZ]",
        "description": "Herramienta de visión artificial para definir zonas en puntos de interés para Go-Sharp. Mejoré la experiencia de usuario de dos formas principales: mejorando la forma en que se definen las zonas y optimizando el flujo de información de video en tiempo real simultáneamente.",
        "technologies": "Angular, Typescript, Django, Python, PostgreSQL"
      }
    },
    "footer": {
      "cta_question": "¿Tienes una idea que quieres transformar en experiencia digital?",
      "cta_action": "Te ayudo a construirla.",
      "button_contact": "Contáctame",
      "copyright_text": "Hecho con ❤️ y Astro por Baruch Cerna"
    }
  }
} as const;
