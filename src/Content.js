import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdApps } from "react-icons/io";

export const content = {
  nav: [
    {
      text: "Home",
      link: "#home",
      icon: IoMdContact,
    },
    {
      text: "Skills",
      link: "#skills",
      icon: HiOutlineLightBulb,
    },
    {
      text: "Projects",
      link: "#projects",
      icon: IoMdApps,
    },
    {
      text: "Contact",
      link: "#contact",
      icon: MdAlternateEmail,
    },
  ],
  hero: {
    title: "Software Developer",
    firstName: "KANISH",
    LastName: "DHAWAN",
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Software development.",
      },
      {
        text: "With track record of successfully delivering user-friendly web applications.",
      },
      
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Frontend",
        para: ["Ext.JS",  "JavaScript", "HTML", "CSS/SCSS"],
      },
      {
        name: "Backend",
        para: ["C#", "Python", "PHP", "C++","Rest APIs"],
      },
      // {
      //   name: "Testing",
      //   para: ["JEST  ", "RTL", "Jasmine"],
      // },
      // {
      //   name: "DevOps",
      //   para: ["Docker", "Kubernetes", "Jenkins", "Gocd", "CI/CD"],
      // }
    ],
    icon: MdArrowForward,
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "kanishdhawan2@gmail.com",
        icon: GrMail,
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=kanishdhawan2@gmail.com",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        text: "+91 9876062575",
        icon: MdCall,
        link: "https://wa.me/9876062575",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        text: "kanish-dhawan",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/kanish-dhawan/",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        text: "Kanish666",
        icon: FaGithub,
        link: "https://github.com/Kanish666",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
};
