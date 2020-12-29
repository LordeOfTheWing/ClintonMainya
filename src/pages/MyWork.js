import React from 'react';
//IMPORTING STYLES
import styled from 'styled-components';

import { Link } from 'react-router-dom';

//Importing Images
import wm1 from '../img/wm1.png';
import mci1 from '../img/mc1.png';
import bmi1 from '../img/bmi1.png';
import weather from '../img/weather.png';
//Animations
import {motion} from 'framer-motion';
import {sliderContainer ,slider,pageAnimation,fade, photoAnim ,lineAnim} from '../animation';
import{useScroll} from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const MyWork = ()=> {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();

    return (
        <Work 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show"
        exit="exit"
        style={{background:'#000'}}
        >
        <motion.div variants={sliderContainer}>       
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        </motion.div>
            <Movie>
                <motion.h2 variants={fade}>React-Music-Player</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/react-music-player">
                <Hide>
    
                        <motion.img variants={photoAnim} src={wm1} alt=""/>
                </Hide>
                </Link>
                <ScrollTop/>
            </Movie>         
            <Movie >
                <h2>React-Weather-App</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/react-weather-app">
                    <img src={weather} alt=""/>
                </Link>
            </Movie>
             <Movie >
                <h2>Vanilla-Javascript-Calculator</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/vanilla-js-calculator">
                    <img src={mci1} alt=""/>
                </Link>
            </Movie>
               <Movie>
                <h2>Javascript-BMI-Calculator</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/js-bmi-calculator">
                    <img src={bmi1} alt=""/>
                </Link>
            </Movie>
            <ScrollTop/>
        </Work>
    )
};


const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    background:black;
    color:white;
    h2{
        padding: 1rem 0rem;

    }
    @media (max-width: 1300px){
       padding: 2rem 2rem ;
    }

`;
const Movie = styled(motion.div)`
    padding-bottom: 10rem;

    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        object-fit: cover;
        height: 50%;
        padding: 7rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;


`;
//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left:0;
    top:10%;
    width:100%;
    height:100vh;
    background:#fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default MyWork;
