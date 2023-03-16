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
    meta,
    starbucks,
    tesla,
    shopify,
    mahinda,
    sliit,
    carrent,
    jobit,
    tripguide,
    threejs,
    csharp,
    net,
    python,
    netflix,
    af,
    csse,
    ssd,
    git1,
    linkedin,
    facebook,
    twitter,
    mail

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "C#.NET Developer ",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C sharp",
      icon: csharp,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Dot Net",
      icon: net,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];


  const social = [
    {
      name: "github",
      icon: git1,
    },
    {
      name: "Linkedin",
      icon: linkedin,
    },
    {
      name: "facebook",
      icon: facebook,
    },
    {
      name: "twitter",
      icon: twitter,
    },
    {
      name: "mail",
      icon: mail,
    },
        
  ];
  
  const experiences = [
    {
      title: "Mahinda College, Galle",
      //company_name: "Flintec Transducers",
      icon: mahinda,
      iconBg: "#E6DEDD",
      date: "2004 - 2018",
      points: [
        "Passed GENERAL CERTIFICATE EXAMINATION (ORDINARY LEVEL) 2014 with 9As in English medium ",
        "Passed GENERAL CERTIFICATE EXAMINATION(ADVANCED LEVEL) 2018 in Biology Stream",
        ],
    },
    {
      title: "Sri Lanka Insititute of Information Technology",
      //company_name: "Flintec Transducers",
      icon: sliit,
      iconBg: "#E6DEDD",
      date: "January  2019 - March 2023",
      points: [
        "Completed BSC.(HONS) IN INFORMATION TECHNOLOGY SPECIALIZING IN SOFTWARE ENGINEERING ",
        "Able to score a Cumulatve GPA of 3.0",
        "Completed and published Research project Intelligent Herbal Plant Detecting System With Sinhala Supported Social Media Platform",
        "As part of the coursework, I studied DS and other coding languages thoroughly.",
      ],
    },
    {
      title: "Trainee Software Engineer",
      company_name: "Flintec Transducers",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "December 2021 - October 2022",
      points: [
        "Developing and maintaining dekstop and web applications using C# .NET and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  /*  {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SSD Messenger",
      description:
        "A secure Web-based messaging platform that allows users to share and manage messages and files across managers and employees.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: ssd,
      source_code_link: "https://github.com/GamithaManawadu/SSD-Frontend",
    },
    {
      name: "Netflix",
      description:
        "A clone of Netflix application which is implemented by React JS by getting the movie databases from api keys",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/GamithaManawadu/Netflix-clone-App",
    },
    {
      name: "ICAF",
      description:
        "A management system developed for managing a conference with seperate user roles with file sharing options and admin dashboard",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: af,
      source_code_link: "https://github.com/Sanduni-Gamage/AF",
    },

    {
      name: "Fashow",
      description:
        "A web based application created for a gem and jewelry company on behalf of the university module project. Developed both admin side and client side.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: af,
      source_code_link: "https://github.com/GamithaManawadu/fashow-front",
    },

    {
      name: "Transport",
      description:
        "A web based application developed to manage public transportation including buses and routes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: csse,
      source_code_link: "https://github.com/GamithaManawadu/Online-Transport-System-Administration-CSSE",
    },


  ];
  
  export { services, technologies, experiences, testimonials, projects, social };