// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Pavan MG",
  tagline: "I build things for web",
  img: profile,
  about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/brayden-murphy-6677b41a2/",
  github: "https://github.com/BrayMurph",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Full Stack Web Developer Certificate",
    Company: "University at North Carolina at Charlotte",
    Location: "Online",
    Type: "Part Time",
    Duration: "April 2023 - October 2023",
  },
  {
    Position: "Associates in Engineering",
    Company: `Central Piedmont Community College`,
    Location: "Charlotte",
    Type: "Full Time",
    Duration: "Aug 2018 - June 2021",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Dict Pic",
    image: projectImage1,
    description: `A website in which the user searches a word and gets GIFs and definitions generated on the screen.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://braymurph.github.io/Dict-Pic/",
    githubLink: "https://github.com/BrayMurph/Dict-Pic",
  },
  {
    title: "Venues XP",
    image: projectImage2,
    description: `A website in when the user searches they get venues in the area in which they searched.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://enigmatic-tundra-58761-13359ac3882e.herokuapp.com/",
    githubLink: "https://github.com/BrayMurph/JABIS",
  },
  {
    title: "BITS Review",
    image: projectImage3,
    description: `A website in which the user can make an account to leave reviews on games.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://dashboard.heroku.com/apps/limitless-cliffs-63157",
    githubLink: "https://github.com/BrayMurph/BITS-Review",
  },
  {
    title: "Password Generator",
    image: projectImage4,
    description: `A website in which when a button is pressed it generated a random character password`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://braymurph.github.io/Password-Generator/",
    githubLink: "https://github.com/BrayMurph/Password-Generator",
  },
  {
    title: "Daily Scheduler",
    image: projectImage5,
    description: `A website in which the user can schedule their work day.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://braymurph.github.io/Day-Work-Scheduler/",
    githubLink: "https://github.com/BrayMurph/Day-Work-Scheduler",
  },
  {
    title: "Employee Tracker",
    image: projectImage6,
    description: `A MySQL application that manages an employee database.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://github.com/BrayMurph/Employee-Tracker#video-demonstration",
    githubLink: "https://github.com/BrayMurph/Employee-Tracker",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "brayxmurph@gmail.com",
  phone: "(704)-232-8023",
};
