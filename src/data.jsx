import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';
import VisuMEI from './assets/Visumei.jfif';
import Instagram from './assets/Instagram.jfif';
import Material from './assets/material.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Bruno',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Serrano',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Brazialian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'São Paulo SP',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+55 (11)94996-4321',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'brunons.contato@gmail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'bruno.nogueira',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Portuguese, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '20+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '10+',
    title: 'Qualification <br /> certifications',
  },

  {
    id: 4,
    no: '5+',
    title: ' Awards <br />  at events',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - 2023',
    title: 'Web Developer Front and Back-end<span> Website and Database </span>',
    desc: 'I participated in a project to develop a complete web site, together with a management system, as Dev full stack Jr, using Java Spring, React.Js, SQL and Python.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2022',
    title: 'UI/UX Designer and Web Developer <span> websystem </span>',
    desc: 'I participated in a project to create landing pages for a website using Ract.js and Angular.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2019',
    title: 'Web developer front-end <span> website </span>',
    desc: 'I had the opportunity to participate in the creation of a website focused on publishing sports articles.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023 - 2024 - PRESENT',
    title: 'Degree in systems analysis and development<span> UNINOVE </span>',
    desc: 'Faculty focused on programming using the creation of websites, systems, databases and other technologies.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020 - 2021',
    title: 'Analysis and systems development <span> ETEC Basilides de Godoy </span>',
    desc: 'Technical course aimed at creating websites and systems development',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'Data analysis <span> IOS </span>',
    desc: 'Programming school focused on data analysis',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '85',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '75',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '85',
  },

  {
    id: 4,
    title: 'Python',
    percentage: '50',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '80',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Instagram,
    title: 'Clone Instagram',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone_Instagram',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript, React.Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/brunons28/Clone_Instagram',
      },
    ],
  },

  {
    id: 2,
    img: VisuMEI,
    title: 'Websystem',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Websystem',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'VisuMei',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/brunons28/PlataformVisuMEI',
      },
    ],
  },

  {
    id: 3,
    img: Material,
    title: 'Web Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Material-UI',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript, React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/brunons28/material-ui',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Email automation',
      },
      {
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        title: 'Language : ',
        desc: 'Python',
      },
      {
        title: 'Preview : ',
        desc: 'https://github.com/devOffFuture/sendEmailPyton',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },

  
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
