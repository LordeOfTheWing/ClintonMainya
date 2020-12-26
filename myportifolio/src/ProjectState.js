//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const ProjectState = () => {
  return [
    {
      title: "React-Music-Player",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/react-music-player",
      projectdetail: [
        {
          title: "What it's made of:",
          description:
            "A simple music player with a very nice UI.Made with React,Javascript,Html and CSS . Click below to view the GitHub repo.",
            link: 'https://github.com/LordeOfTheWing/react-music-player',
        }
      ],
    },
    {
      title: "Vanilla-Javascript-Calculator",
      mainImg: goodtimes,
      url: "/work/vanilla-js-calculator",
      secondaryImg: goodtimes2,
      projectdetail: [
        {
          title: "What it's made of:",
          description:
            "A very modern Calculator with a nice looking UI.Made with Javascript,Html and CSS.Click link below to view the Github repo",
            link: 'https://github.com/LordeOfTheWing/Javascript-Calculator',
        }
      ],
    },
    {
      title: "Javascript-BMI-Calculator",
      mainImg: theracer,
      url: "/work/js-bmi-calculator",
      secondaryImg: theracer2,
      projectdetail: [
        {
          title: "What its made of:",
          description:
            `A Basic BMI calculator. Made up using vanilla javascript, html and css. Click the link below to view :)`,
          link: 'https://github.com/LordeOfTheWing/BMI-Calculator',
        }
      ],
    },
  ];
};