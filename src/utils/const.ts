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
      en: '<span class="highlight">Frontend Developer</span> specialized in <span class="highlight">React, TypeScript and Tailwind CSS.</span> Creating dynamic web applications with a strong emphasis on design and user experience. Working with libraries like <span class="emphasize">SWR, Zustand, Chart.js, i18n, date-fns, dnd-kit, Formik/React Hook Forms.</span> Conducting unit and e2e testing using <span class="emphasize">Cypress, Jest, and MirageJS.</span> Working under <span class="emphasize">Agile Scrum methodologies</span> with sprints and kanban',
      es: '<span class="highlight">Desarrollador Frontend</span> especializado en <span class="highlight">React, TypeScript y Tailwind CSS.</span> Creando aplicaciones web dinámicas enfocadas en el diseño y la experiencia de usuario. Trabajando con librerías como <span class="emphasize">SWR, Zustand, Chart.js, i18n, date-fns, dnd-kit, Formik/React Hook Forms.</span> Testing unitario y e2e utilizando <span class="emphasize">Cypress, Jest y MirageJS.</span> Trabajando bajo <span class="emphasize">metodologías Agile Scrum</span> con sprints y kanban',
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
      en: '<span class="highlight">Currently working,</span> primarily using <span class="emphasize">React and Node.js</span>',
      es: '<span class="highlight">Trabajando actualmente,</span> usando principalmente <span class="emphasize">React y Node.js</span>',
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
    title: 'Pinta2',
    image: 'pinta2.webp',
    descriptionEn:
      'Play with your friends in this skribbl (draw and guess) game alike',
    subDescriptionEn: 'Only available in spanish at the moment',
    subDescriptionEs: 'Solamente disponible en español',
    descriptionEs:
      'Juega con tus amigos en este juego (de dibujar y adivinar) parecido al pinturillo',
    techs: ['react', 'typescript', 'tailwind', 'socketio', 'nodejs'],
    github: 'https://github.com/Pablo-Aviles-Prieto/pinta2-frontend',
    github2: 'https://github.com/Pablo-Aviles-Prieto/pinta2-backend',
    website: 'https://www.pinta2.pabloaviles.es/',
  },
  {
    title: 'Scrape it!',
    image: 'scrape-it.webp',
    descriptionEn:
      'Web scrapper for the coolmod site, where you can subscribe via email to get the latest item pricing',
    subDescriptionEn:
      'Currently not deployed, even while the code is working 100%',
    descriptionEs:
      'Web scrapper para la página de coolmod, donde puedes subscribirte por email para recibir los últimos precios de un producto',
    subDescriptionEs:
      'Actualmente sin desplegar, aunque el código es 100% funcional',
    techs: ['remix', 'typescript', 'tailwind', 'playwright', 'mongodb'],
    github: 'https://github.com/Pablo-Aviles-Prieto/remix-scrape-it',
  },
  {
    title: 'Hotel Miranda dashboard',
    image: 'dashboard-miranda.webp',
    descriptionEn: `Dashboard to control all the data of the 'Hotel Miranda'`,
    descriptionEs:
      'Dashboard de control para gestionar todos los datos del Hotel Miranda',
    techs: ['react', 'typescript', 'redux', 'cypress', 'nodejs', 'mongodb'],
    github:
      'https://github.com/Pablo-Aviles-Prieto/Hotel-management-dashboard-frontend',
    github2:
      'https://github.com/Pablo-Aviles-Prieto/Hotel-management-dashboard-backend',
    website: 'https://www.miranda-dashboard.pabloaviles.es/',
  },
  {
    title: 'Hotel Miranda website',
    image: 'miranda-public.webp',
    descriptionEn: `Public website of the 'Hotel Miranda'`,
    descriptionEs: 'Página web pública del Hotel Miranda',
    techs: ['php', 'mysql', 'javascript'],
    github: 'https://github.com/Pablo-Aviles-Prieto/Hotel-management-PHP',
    website: 'https://hotelmiranda.000webhostapp.com/',
  },
  {
    title: 'Image finder',
    image: 'img-finder.webp',
    descriptionEn: 'App image finder using the unsplash API',
    descriptionEs: 'Aplicación para buscar imágenes de unsplash',
    techs: ['react', 'typescript', 'redux'],
    github:
      'https://github.com/Pablo-Aviles-Prieto/app-image-finder-unsplash-React-TS',
    website: 'https://www.images.pabloaviles.es/',
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
} as const;
