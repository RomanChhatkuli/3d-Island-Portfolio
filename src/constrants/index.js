import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    threejs,
    mui,
    nodejs,
    react,
    tailwindcss,
    postman,
    zustand
} from "../assets/icons";

import restNest from '../assets/projects/restNest.png'
import chatAppIcon from '../assets/projects/chatAppIcon.png'
import chatApp from '../assets/projects/chatApp.png'
import hamropasal from '../assets/projects/hamropasal.png'
import hamropasalIcon from '../assets/projects/hamropasalIcon.webp'
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
    {
        imageUrl: postman,
        name: "Postman",
        type: "Frontend",
    },
    {
        imageUrl: zustand,
        name: "Zustand",
        type: "Frontend",
    },
];


export const projects = [
    {
        iconUrl: hamropasalIcon,  
        image: hamropasal,
        name: 'HamroPasal',
        description: 'An online shopping platform, offering a seamless eCommerce experience with product listings, cart management, and secure payments.',
        link: 'https://hamropasal-1.onrender.com',
        bgColor: 'orange',
        tech: ["#react ","express ","#zustand","#esewa ","#mongodb","#cloudnary ","#jwt "]
    },
    {
        iconUrl: chatAppIcon,
        image: chatApp,
        name: 'ChatApp',
        description: 'A real-time messaging app supporting text and image sharing with WebSocket-based instant communication..',
        link: 'https://chatapp-jq17.onrender.com',
        bgColor: 'brown',
        tech: ["#react","#node.js","#express","#mongodb","#socket.io"]
    },
    {
        iconUrl: restNestIcon,
        image: restNest,
        name: 'RestNest',
        description: 'A web application allowing users to list, discover accommodations in various locations.',
        link: 'https://restnest.onrender.com',
        bgColor: 'purple',
        tech: ["#ejs ","#nodejs ","#express ","#mongodb ", "#cloudinary","#passport.js "]
    },

];