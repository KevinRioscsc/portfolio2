import Funk from "./Components/Images/ecomm.png";
import eCommerce from "./Videos/eCommerce.mp4";
import demo from "./Videos/Demo.mp4";
import quest from "./Videos/quest.mp4";
import crypto from "./Videos/crypto.mp4";
import KimoWeb from "./Videos/Kimo Gif.mp4";
import Genie from "./Components/Images/GOL.png";
import Kimo from "./Components/Images/Kimo.png";
import Quest from "./Components/Images/questFinal.png";
import Chain from "./Components/Images/blocky.png";

export const projects = [
  {
    projectName: "Kimo Wireless",
    projectDesc:
      "A landing site for a relatively new technology repair shop. I made sure that the client's request was met in every aspect. The client was satisfied and it made an immediate impact to their sales as the website showcases the skills of the repair men. The Site went live last year and it still around because it serves as a connection between the clients and them.",
    projectImg: Kimo,
    projectLive: "https://kimowireless.com",
    projectSource: "https://github.com/KevinRioscsc/Kimo-Wireless",
    technologies: [
      "REACT",
      "RESPONSIVE",
      "CSS",
      "HTML",
      "Google Maps API",
      "UI/UX",
    ],
    gif: KimoWeb,
  },
  {
    projectName: "Quest",
    projectDesc:
      "I created this app with the intentions of creating a workspace board for developers to track their own progress on their own projects or with other miscellaneous  things like creating a PC. Quest lets you create a quest and with that quest you can add any amount of activities that'll help you complete your own quest. It serves as a way to keep track of your own progress.",
    projectImg: Quest,
    projectLive: "https://boring-lalande-65633e.netlify.app",
    projectSource: "https://github.com/KevinRioscsc/quest-board",
    technologies: ["REACT", "SQL", "UI/UX", "POSTGRES", "FIREBASE", "EXPRESS"],
    gif: quest,
  },
  {
    projectName: "BlockChain",
    projectDesc:
      "Blockchain has all the information you need to become a cryptocurrency guru. Blockchain gives you every bit of information of every cryptocurrency in the world. Using the CryptoCurrency API BlockChain allows you to see every bit of information, and current real time news of every cryptocurrency and exchange",
    projectImg: Chain,
    projectLive: "https://block-chain-app.netlify.app",
    projectSource: "https://github.com/KevinRioscsc/Crypto-Info-App",
    technologies: ["REACT", "CSS", "HTML", "RAPID API", "UI/UX"],
    gif: crypto,
  },
  {
    projectName: "E-Commerce Website",
    projectDesc:
      "I wanted to improve my UI/UX skills and found a company whose products I really liked. I decided to undertake a project to create a modern version of their website. This project really challenged my creativity, as I wanted to create a website that was both unique and familiar to the company's existing customers. The most technically challenging part of the project was definitely the animations. There were some animations that I was particularly proud of because I created them from scratch. Overall, I enjoyed the process of redesigning this website and feel that it has helped me improve my UI/UX skills.",
    projectImg: Funk,
    projectLive: "https://gleaming-kringle-d2145c.netlify.app",
    projectSource: "https://github.com/KevinRioscsc/e-comm-site",
    technologies: ["REACT", "API", "FIGMA", "UI/UX"],
    gif: eCommerce,
  },
  {
    projectName: "GOL Circuit",
    projectDesc:
      "As a student, for my senior project, I decided to create a web application for Conway's Game of Life. The Game of Life is a cellular automaton simulation that was invented by the mathematician John Horton Conway in 1970. I wanted to use it as a circuit tool, to make it easier for people to experiment with creating different patterns and designs within the simulation.",
    projectImg: Genie,
    projectLive: "",
    projectSource: "https://github.com/KevinRioscsc/Life-Computer",
    technologies: ["RESPONSIVE", "CSS", "DS", "ALGORITHMS", "UI/UX"],
    gif: demo,
  },
  /*
    {
        projectName: 'Frend',
        projectDesc : "Frend is a social media music sharing app that uses the spotify API to search for your favorite songs to post on the global newsfeed. Everybody could see what songs you recommend along with a little description of what the song makes you feel. The Login and Register feature uses Firebase Auth and post and likes are stored in a postgres database",
        projectImg : Frend,
        projectLive: 'https://frend-app.herokuapp.com',
        projectSource: 'https://github.com/KevinRioscsc/Frend-BackEnd',
        technologies: ['REACT', 'CSS', 'HTML', 'SQL', 'UI/UX', 'POSTGRES','KNEX','SPOTIFY API', 'NODE', 'EXPRESS', 'FIREBASE'],
        gif:''
    
    }*/
];
