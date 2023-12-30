export const timelineData = [
  {
    year: '2012\n\r-\n\r2014',
    text: {
      en: 'Studied Higher Technician in Computer Network Systems Management',
      es: 'Estudié el ciclo superior en administración de sistemas en red',
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
      en: 'Internship of the computer network systems management studies',
      es: 'Prácticas de los estudios de administración de sistemas en red',
    },
    subtitle: { en: 'CHUAC, A Coruña, Spain', es: 'CHUAC, A Coruña, España' },
    type: 'it',
  },
  {
    year: '2015\n\r-\n\r2016',
    text: {
      en: 'Remote technical support to companies and individuals troubleshooting hardware and software incidents for Dell computers, laptops and servers',
      es: 'Soporte técnico informático en remoto a empresas y particulares resolviendo incidencias de hardware y software en ordenadores y servidores de la compañía Dell',
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
      en: 'Professional esports player in the game Counter-Strike: Global Offensive (CS:GO), for Baskonia Atlantis, Team Heretics, and Arctic Gaming',
      es: 'Jugador profesional de esports en el juego Counter-Strike: Global offensive (CS:GO), para Baskonia Atlantis, Team Heretics y Arctic Gaming',
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
      en: 'Remote technical support orientated to networking and systems to companies in two Internet Service Providers (Mundo-r and Telecable)',
      es: 'Soporte técnico de sistemas y telecomunicaciones en remoto para grandes cuentas de los clientes Mundo-R y Telecable (proveedores de servicios de internet)',
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
      en: 'I have studied and obtained certifications in frontend and backend development, with a focus on React and JavaScript, through courses on Udemy and freeCodeCamp',
      es: 'He estudiado y obtenido certificaciones en desarrollo frontend y backend, enfocándome en React y JavaScript, a través de cursos en Udemy y freeCodeCamp',
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
      en: 'Developing in both the backend and frontend, working with:\n\rFrontend: ReactJS, TypeScript, JavaScript, Styled-Componentes, Jest and Cypress\n\rBackend: NodeJS, ExrpressJS, TypeScript, JavaScript, MongoDB, JWT, Jest and SuperTest',
      es: 'Desarrollando tanto en el backend como en el frontend, trabajando con:\n\rFrontend: ReactJS, TypeScript, JavaScript, Styled-Componentes, Jest y Cypress\n\rBackend: NodeJS, ExrpressJS, TypeScript, JavaScript, MongoDB, JWT, Jest y SuperTest',
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
      en: 'Frontend Developer specialized in React, TypeScript and Tailwind CSS. Creating dynamic web applications with a strong emphasis on design and user experience. Working with libraries like SWR, Zustand, Chart.js, i18n, date-fns, dnd-kit, Formik/React Hook Forms. Conducting unit and e2e testing using Cypress, Jest, and MirageJS. Working under Agile Scrum methodologies with sprints and Kanban',
      es: 'Desarrollador Frontend especializado en React, TypeScript y Tailwind CSS. Creando aplicaciones web dinámicas enfocadas en el diseño y la experiencia de usuario. Trabajando con librerías como SWR, Zustand, Chart.js, i18n, date-fns, dnd-kit, Formik/React Hook Forms. Testing unitario y e2e utilizando Cypress, Jest y MirageJS. Trabajando bajo metodologías agile scrum con sprints y kanban',
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
      en: 'Currently working, primarily using React and Node.js',
      es: 'Trabajando actualmente, usando principalmente React y Nodejs',
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

export const prevWorks = [
  {
    title: 'Pinta2',
    descriptionEn:
      'Play with your friends in this skribbl (draw and guess) game alike',
    subDescriptionEn: 'Only available in spanish at the moment',
    descriptionEs:
      'Juega con tus amigos en este juego (de dibujar y adivinar) parecido al pinturillo',
    techs: ['react', 'typescript', 'tailwind', 'socketio', 'nodejs'],
    github: 'https://github.com/Pablo-Aviles-Prieto/pinta2-frontend',
    github2: 'https://github.com/Pablo-Aviles-Prieto/pinta2-backend',
    website: 'https://www.pinta2.pabloaviles.es/',
  },
  {
    title: 'Scrape it!',
    descriptionEn:
      'Web scrapper for the coolmod site, where you can subscribe via email to get the latest item pricing',
    subDescriptionEn:
      'Currently not deployed, even when the code is working 100%',
    descriptionEs:
      'Web scrapper para la página de coolmod, donde puedes subscribirte por email para recibir los últimos precios de un producto',
    subDescriptionEs:
      'Actualmente sin desplegar, aunque el código es 100% funcional',
    techs: ['remix', 'typescript', 'tailwind', 'playwright', 'mongodb'],
    github: 'https://github.com/Pablo-Aviles-Prieto/remix-scrape-it',
  },
  {
    title: 'Hotel Miranda dashboard',
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
    descriptionEn: `Public website of the 'Hotel Miranda'`,
    descriptionEs: 'Página web pública del Hotel Miranda',
    techs: ['php', 'mysql', 'javascript'],
    github: 'https://github.com/Pablo-Aviles-Prieto/Hotel-management-PHP',
    website: 'https://hotelmiranda.000webhostapp.com/',
  },
  {
    title: 'Image finder',
    descriptionEn: 'App image finder using the unsplash API',
    descriptionEs: 'Aplicación para buscar imágenes de unsplash',
    techs: ['react', 'typescript', 'redux'],
    github:
      'https://github.com/Pablo-Aviles-Prieto/app-image-finder-unsplash-React-TS',
    website: 'https://www.images.pabloaviles.es/',
  },
];
