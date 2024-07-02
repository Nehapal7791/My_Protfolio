import { meta, shopify, starbucks, tesla, itt, goloka } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  javalogo,
  mysql,
  leetcode,
  springboot,
  typescript,
} from "../assets/icons";
export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javalogo,
    name: "Java",
    type: "Frontend",
  },
  {
    imageUrl: springboot,
    name: "springboot",
    type: "Backend",
  },
  {
    imageUrl: mysql,
    name: "Sql",
    type: "Database",
  },
];

export const experiences = [
  {
    title: "Software Developer Trainee",
    company_name: "Intimetec",
    icon: itt,
    iconBg: "#accbe1",
    date: "Febuary 2023 - August 2023",
    points: [
      "Build a stong foundation in Object Oriented Programming Language and LLD.",
      "Learn about apis development in python , utilize pytest for testing and validation of functions",
      "Develop System Design of small small project Like Music Library and code it, Enhance Citical Thinking",
    ],
  },
  {
    title: "full stack developer",
    company_name: "Goloka It",
    icon: goloka,
    iconBg: "#fbc3bc",
    date: "Dec 2023 - june 2023",
    points: [
      "Developing web applications using React.js  other related technologies.",
      "Experienced in building back-end systems using Spring Boot and Java. Implemented JWT (JSON Web Token) authentication for secure user sessions and Spring Security for comprehensive application security, ensuring role-based access control and protection against common vulnerabilities.",
      "Expertise in optimizing SQL queries through the use of database indexing. Adept at designing and implementing efficient database schemas, performing query analysis, and employing indexing strategies to enhance query performance and reduce execution time.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contacts",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Nehapal7791",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/nehapalgweca/",
  },
  {
    name: "LeetCode",
    iconUrl: leetcode,
    link: "https://leetcode.com/Neha_Pal/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-blue",
    name: "Sales Analysis System",
    description:
      "Sales Analysis System Development: Designed and developed a comprehensive Sales Analysis System to evaluate daily, monthly, and yearly sales performance. Utilized Spring Boot and Java for the backend, implementing RESTful APIs for data retrieval and manipulation, and SQL for efficient data processing and aggregation. Integrated JasperReports for generating detailed and customizable sales reports in PDF format, supporting both scheduled and on-demand report generation. Developed a user-friendly front-end with React.js, employing Redux for state management and Chart.js for interactive data visualization, enabling users to easily navigate sales metrics and access reports.",
    link: "https://github.com/Nehapal7791/Springboot-Backend-",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Blog Post App",
    description:
      "A Full Stack Application of Blog Post , Where you can create your post based on different categories, Other user can comment and your post",
    link: "https://blogpost-web-app-frontend.vercel.app/",
  },
];
