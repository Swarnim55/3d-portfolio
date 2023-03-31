import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  gov,
  smf,
  ttmg,
  tesla,
  paksam,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'UX Developer',
    icon: mobile,
  },
  {
    title: 'UI / UX Designer',
    icon: creator,
  },
  {
    title: 'Frontend Developer',
    icon: backend,
  },
  {
    title: 'Software Engineer',
    icon: web,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'TTMG, Bangalore, India',
    icon: ttmg,
    iconBg: '#fff',
    date: 'July 2022 - Jan 2023',
    points: [
      'Participated in UI research, provided constructive feedback to UI designers and other developers',
      'Developed and maintained user interfaces for CRMs and E-Commerce applications using React.js and other related technologies.',
      'Leaded frontend team on ecommerce projects, guided frontend interns and collaborated with cross-functional teams to create high-quality user interfaces. ',
      'Worked on debugging and optimization of frontend repos before deployment.',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    company_name: 'TTMG, Bangalore, India',
    icon: ttmg,
    iconBg: '#fff',
    date: 'Feb 2022 - July 2022',
    points: [
      'Participated in UI research, provided constructive feedback to other developers.',
      'Developed and maintained user interfaces for CRMs and E-Commerce applications using React.js and other related technologies.',
      'Collaborated with multiple teams including backend, AI/ML, and other developers to create high-quality products.',
      'Implemented responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company_name: 'ServeMeFast, Sikkim, India',
    icon: smf,
    iconBg: '#E6DEDD',
    date: 'October 2020 - December 2021',
    points: [
      'Developing and maintaining web and mobile application using Shopify and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',

      'Implemented Payment Gateway Integration and sms/email notifier API.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Network Administrator (Freelance)',
    company_name: 'Paksam, Sikkim, India',
    icon: paksam,
    iconBg: '#E6DEDD',
    date: 'October 2019 - Dec 2021',
    points: [
      'Implemented network protocols, maintained and administered multi-branch network with RIP, RSVP and FTP',
      'Provided system troubleshooting and consultancy service as per business requirement.',
    ],
  },
  {
    title: 'System / Network Administrator (Volunteering)',
    company_name: 'SDM / LRO Rangpo (Govt of Sikkim)',
    icon: gov,
    iconBg: '#fff',
    date: 'Aug 2020 - Sept 2021',
    points: [
      'Implemented network protocols, maintained and administered multi-branch network with RIP, RSVP and FTP',
      'Provided system troubleshooting and consultancy service as per business requirement.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
