import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    threejs,
    mui,
    nodejs,
    pricewise,
    react,
    tailwindcss,
    threads,
} from "../assets/icons";

import restNest from '../assets/projects/restNest.png'
import chatAppIcon from '../assets/projects/chatAppIcon.png'
import chatApp from '../assets/projects/chatApp.png'
import currency from '../assets/projects/currency.png'
import currencyIcon from '../assets/projects/currencyIcon.webp'
import restNestIcon from '../assets/projects/restNestIcon.png'



export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
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
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
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
        imageUrl: tailwindcss,
        name: "TailwindCSS",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Threejs",
        type: "Frontend",
    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: restNestIcon,
        image: restNest,
        name: 'restNest',
        description: 'A web application allowing users to list, discover accommodations in various locations.',
        link: 'https://restnest.onrender.com/',
        bgColor: 'purple',
        tech: ["#ejs ","#nodejs ","#express ","#mongodb "]
    },
    {
        iconUrl: chatAppIcon,
        image: chatApp,
        name: 'chatApp',
        description: 'A simple chat application enabling users to send messages and images in real-time.',
        link: 'https://chatapp-jq17.onrender.com/',
        bgColor: 'brown',
        tech: ["#react","#node.js","#express","#mongodb","#socket.io"]
    },
    {
        iconUrl: currencyIcon,
        image: currency,
        name: 'currencyConverter',
        description: 'A straightforward currency converter app that allows users to easily convert between different currencies in real-time.',
        link: 'https://currency-converter-nine-ruddy.vercel.app/',
        bgColor: 'orange',
        tech: ["#html ","#css ","#javascript ","#fetchApi"]
    },

];