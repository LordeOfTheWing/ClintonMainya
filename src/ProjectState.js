//Import Images
import wm1 from "./img/wm1.png";
import wm2 from "./img/wm2.png";
import mc2 from "./img/mc2.png";
import bmi2 from "./img/bmi2.png";
import mc3 from "./img/mc3.png";
import bmi3 from "./img/bmi3.png";
import weather from '../src/img/weather.png';


export const ProjectState = () => {
  return [
    {
      title: "React-Music-Player",
      mainImg: wm1,
      secondaryImg: wm2,
      url: "/work/react-music-player",
      projectdetail: [
        {
          title: "What it's made of:",
          description:
            "A simple music player with a very nice UI.Made with React,Javascript,Html and CSS . Click The Link Below To Launch The App.",
            link: 'https://wavesmusic.netlify.app/',
        }
      ],
    },
    {
      title: "Vanilla-Javascript-Calculator",
      mainImg: mc2,
      url: "/work/vanilla-js-calculator",
      secondaryImg: mc3,
      projectdetail: [
        {
          title: "What it's made of:",
          description:
            "A very modern Calculator with a nice looking UI.Made with Javascript,Html and CSS.Click link below to launch the App",
            link: 'https://modernjscalculator.netlify.app/',
        }
      ],
    },
    {
      title: "Javascript-BMI-Calculator",
      mainImg: bmi2.png,
      url: "/work/js-bmi-calculator",
      secondaryImg: bmi3.png,
      projectdetail: [
        {
          title: "What its made of:",
          description:
            `A Basic BMI calculator. Made up using vanilla javascript, html and css. Click the link below to view launch the app`,
          link: 'https://bmicalculatorjs.netlify.app/',
        }
      ],
    },
    {
      title: "React-Weather-App",
      mainImg: weather.png,
      url: "/work/react-weather-app",
      secondaryImg: bmi3.png,
      projectdetail: [
        {
          title: "What its made of:",
          description:
            `A Weather app. Made up using React and implements the API Fetching. Click the link below to view launch the app`,
          link: 'https://weatherappclint.netlify.app/',
        }
      ],
    },
  ];
};