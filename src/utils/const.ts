import type { PrevWork } from '../interfaces/prevWorks';
import {
  Cypress,
  JavaScript,
  MongoDB,
  MySQL,
  NodeJS,
  PHP,
  Playwright,
  React,
  Redux,
  TypeScript,
  Tailwind,
  Socketio,
  Remix,
  NextJS,
  Zod,
} from '../components/svgs/technologies';

export const timelineData = [
  {
    year: '2012\n\r-\n\r2014',
    text: {
      en: `<span class="highlight">Studied</span> Higher Technician in <span class="emphasize">Computer Network Systems Management</span>`,
      es: '<span class="highlight">Estudié</span> el ciclo superior en <span class="emphasize">administración de sistemas en red</span>',
    },
    subtitle: {
      en: 'IES Fernando Wirtz, A Coruña, Spain',
      es: 'IES Fernando Wirtz, A Coruña, España',
    },
    type: 'it',
  },
  {
    year: '2014',
    text: {
      en: '<span class="highlight">Internship</span> of the <span class="emphasize">computer network systems management</span> studies',
      es: '<span class="highlight">Prácticas</span> de los estudios de <span class="emphasize">administración de sistemas en red</span>',
    },
    subtitle: { en: 'CHUAC, A Coruña, Spain', es: 'CHUAC, A Coruña, España' },
    type: 'it',
  },
  {
    year: '2015\n\r-\n\r2016',
    text: {
      en: 'Remote <span class="highlight">technical support</span> to companies and individuals <span class="emphasize">troubleshooting hardware and software incidents for Dell</span> computers, laptops and servers',
      es: '<span class="highlight">Soporte técnico informático</span> en remoto a empresas y particulares resolviendo <span class="emphasize">incidencias de hardware y software</span> en ordenadores y servidores de la compañía <span class="emphasize">Dell</span>',
    },
    subtitle: {
      en: 'Convergys, A Coruña, Spain',
      es: 'Convergys, A Coruña, España',
    },
    type: 'it',
  },
  {
    year: '2016\n\r-\n\r2019',
    text: {
      en: '<span class="highlight">Professional esports player</span> in the game <span class="emphasize">Counter-Strike: Global Offensive (CS:GO)</span>, for Baskonia Atlantis, Team Heretics, and Arctic Gaming',
      es: '<span class="highlight">Jugador profesional de esports</span> en el juego <span class="emphasize">Counter-Strike: Global offensive (CS:GO)</span>, para Baskonia Atlantis, Team Heretics y Arctic Gaming',
    },
    subtitle: {
      en: 'Remote, Spain',
      es: 'Remoto, España',
    },
    type: 'gaming',
  },
  {
    year: '2019\n\r-\n\r2022',
    text: {
      en: 'Remote <span class="highlight">technical support</span> orientated to <span class="highlight">networking and systems</span> to companies in two <span class="emphasize">Internet Service Providers</span> (Mundo-r and Telecable)',
      es: '<span class="highlight">Soporte técnico de sistemas y telecomunicaciones</span> en remoto para grandes cuentas de los clientes Mundo-R y Telecable (<span class="emphasize">proveedores de servicios de internet</span>)',
    },
    subtitle: {
      en: 'Indra, A Coruña, Spain',
      es: 'Indra, A Coruña, España',
    },
    type: 'it',
  },
  {
    year: '2022',
    text: {
      en: 'I have <span class="highlight">studied</span> and obtained certifications in <span class="highlight">frontend and backend development</span>, with a focus on React and JavaScript, through courses on <span class="emphasize">Udemy and freeCodeCamp</span>',
      es: '<span class="highlight">Estudié</span> y obtuve certificaciones en <span class="highlight">desarrollo frontend y backend</span>, enfocándome en React y JavaScript, a través de cursos en <span class="emphasize">Udemy y freeCodeCamp</span>',
    },
    subtitle: {
      en: 'Udemy and freeCodeCamp',
      es: 'Udemy y freeCodeCamp',
    },
    type: 'dev',
  },
  {
    year: '2022\n\r-\n\r2023',
    text: {
      en: '<span class="highlight">Developing</span> in both the <span class="emphasize">backend and frontend</span>, working with:\n\r<span class="highlight">Frontend:</span> ReactJS, TypeScript, JavaScript, Styled-Componentes, Jest and Cypress\n\r<span class="highlight">Backend:</span> NodeJS, ExrpressJS, TypeScript, JavaScript, MongoDB, JWT, Jest and SuperTest',
      es: '<span class="highlight">Desarrollando</span> tanto en el <span class="emphasize">backend</span> como en el <span class="emphasize">frontend</span>, trabajando con:\n\r<span class="highlight">Frontend:</span> ReactJS, TypeScript, JavaScript, Styled-Componentes, Jest y Cypress\n\r<span class="highlight">Backend:</span> NodeJS, ExrpressJS, TypeScript, JavaScript, MongoDB, JWT, Jest y SuperTest',
    },
    subtitle: {
      en: 'OXYGEN, remote (Madrid), Spain',
      es: 'OXYGEN, remoto (Madrid), España',
    },
    type: 'dev',
  },
  {
    year: '2023',
    text: {
      en: '<span class="highlight">Frontend Developer</span> with expertise in <span class="highlight">React, TypeScript and Tailwind CSS.</span> building dynamic web apps focused on design and user experience. Worked with tools like <span class="emphasize">SWR, Zustand and Chart.js,</span> and conducted <span class="emphasize">unit/e2e testing</span> with <span class="emphasize">Cypress and Jest.</span> Followed Agile methodologies (Scrum, sprints, Kanban).',
      es: '<span class="highlight">Desarrollador Frontend</span> con experiencia en <span class="highlight">React, TypeScript y Tailwind CSS.</span> creando aplicaciones web dinámicas enfocadas en diseño y experiencia de usuario. Utilización de herramientas como <span class="emphasize">SWR, Zustand y Chart.js,</span> y realización de <span class="emphasize">pruebas unitarias/e2e</span> con <span class="emphasize">Cypress y Jest.</span> Metodologías ágiles seguidas (Scrum, sprints, Kanban).',
    },
    subtitle: {
      en: 'Flat 101, remote (Zaragoza), Spain',
      es: 'Flat 101, remoto (Zaragoza), España',
    },
    type: 'dev',
  },
  {
    year: '2023\n\r-\n\rPresent',
    text: {
      en: '<span class="highlight">Frontend Developer</span> working on a SaaS app (<span class="highlight">DataPocket</span>) and integrating with platforms like <span class="highlight">Canva and Adobe Express</span>. Mainly using <span class="emphasize">React, TypeScript, and Tailwind CSS.</span> Worked with frameworks like <span class="emphasize">Next.js and Remix</span>, and tools like <span class="emphasize">Zustand, Tanstack React Query, and Shadcn UI.</span> Some backend experience with <span class="emphasize">Next.js and Strapi (Node.js).</span>',
      es: '<span class="highlight">Desarrollador Frontend</span> en una app SaaS (<span class="highlight">DataPocket</span>) integrando con <span class="highlight">Canva y Adobe Express</span>. Uso principal de <span class="emphasize">React, TypeScript y Tailwind CSS.</span> He trabajado con <span class="emphasize">Next.js, Remix</span>, y herramientas como <span class="emphasize">Zustand y Tanstack React Query.</span> Algo de experiencia en backend con <span class="emphasize">Next.js y Strapi (Node.js).</span>',
    },
    subtitle: {
      en: 'Ovixia, hybrid (A Coruña), Spain',
      es: 'Ovixia, híbrido (A Coruña), España',
    },
    type: 'dev',
  },
];

export const timelineBground = {
  it: 'bg-blue-950',
  gaming: 'bg-sky-950',
  dev: 'bg-indigo-950',
};

export const TIMELINE_SLOT_WIDTH = 350;
export const TIMELINE_SLOT_MARGIN = 50;
export const TIMELINE_BORDER = 4;

export const prevWorks: PrevWork[] = [
  {
    title: 'Expense Tracker',
    image: 'expense-tracker.webp',
    descriptionEn: 'Manage your transactions and subscriptions with ease',
    descriptionEs:
      'Administra todas tus transacciones y subscripciones facilmente',
    techs: ['nextjs', 'typescript', 'tailwind', 'zod', 'mongodb'],
    github: 'https://github.com/pablo-aviles-prieto/expense-tracker',
    website: 'https://www.expense-tracker.pabloaviles.es/',
  },
  {
    title: 'Pinta2',
    image: 'pinta2.webp',
    descriptionEn:
      'Play with your friends in this skribbl (draw and guess) game alike',
    subDescriptionEn: 'Only available in spanish at the moment',
    descriptionEs:
      'Juega con tus amigos en este juego (de dibujar y adivinar) parecido al pinturillo',
    subDescriptionEs: 'Solamente disponible en español',
    techs: ['react', 'typescript', 'tailwind', 'socketio', 'nodejs'],
    github: 'https://github.com/pablo-aviles-prieto/pinta2-frontend',
    github2: 'https://github.com/pablo-aviles-prieto/pinta2-backend',
    website: 'https://www.pinta2.pabloaviles.es/',
  },
  {
    title: 'Scrape it!',
    image: 'scrape-it.webp',
    descriptionEn:
      'Web scrapper for the coolmod site, where you can subscribe via email to get the latest item pricing',
    descriptionEs:
      'Web scrapper para la página de coolmod, donde puedes subscribirte por email para recibir los últimos precios de un producto',
    techs: ['remix', 'typescript', 'tailwind', 'playwright', 'mongodb'],
    github: 'https://github.com/pablo-aviles-prieto/remix-scrape-it',
    website: 'https://www.scrapeit.pabloaviles.es/',
  },
  {
    title: 'Hotel Miranda dashboard',
    image: 'dashboard-miranda.webp',
    descriptionEn: `Dashboard to control all the data of the 'Hotel Miranda'`,
    subDescriptionEn: 'Currently not deployed',
    descriptionEs:
      'Dashboard de control para gestionar todos los datos del Hotel Miranda',
    subDescriptionEs: 'Actualmente sin desplegar',
    techs: ['react', 'typescript', 'redux', 'cypress', 'nodejs', 'mongodb'],
    github:
      'https://github.com/pablo-aviles-prieto/Hotel-management-dashboard-frontend',
    github2:
      'https://github.com/pablo-aviles-prieto/Hotel-management-dashboard-backend',
  },
  {
    title: 'Hotel Miranda website',
    image: 'miranda-public.webp',
    descriptionEn: `Public website of the 'Hotel Miranda'`,
    subDescriptionEn: 'Currently not deployed',
    descriptionEs: 'Página web pública del Hotel Miranda',
    subDescriptionEs: 'Actualmente sin desplegar',
    techs: ['php', 'mysql', 'javascript'],
    github: 'https://github.com/pablo-aviles-prieto/Hotel-management-PHP',
  },
  {
    title: 'Image finder',
    image: 'img-finder.webp',
    descriptionEn: 'App image finder using the unsplash API',
    subDescriptionEn: 'Currently not deployed',
    descriptionEs: 'Aplicación para buscar imágenes de unsplash',
    subDescriptionEs: 'Actualmente sin desplegar',
    techs: ['react', 'typescript', 'redux'],
    github:
      'https://github.com/pablo-aviles-prieto/app-image-finder-unsplash-React-TS',
  },
];

export const techs = {
  cypress: Cypress,
  javascript: JavaScript,
  mongodb: MongoDB,
  mysql: MySQL,
  nodejs: NodeJS,
  php: PHP,
  playwright: Playwright,
  react: React,
  redux: Redux,
  typescript: TypeScript,
  tailwind: Tailwind,
  socketio: Socketio,
  remix: Remix,
  nextjs: NextJS,
  zod: Zod,
} as const;
