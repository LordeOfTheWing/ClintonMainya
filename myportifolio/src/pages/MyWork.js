import React from 'react';
//IMPORTING STYLES
import styled from 'styled-components';

import { Link } from 'react-router-dom';

//Importing Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';


const MyWork = ()=> {
    return (
        <Work 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show"
        exit="exit"
        >
            <Movie>
                <h2>React-Music-Player</h2>
                <div className="line"></div>
                <Link to="/work/react-music-player">
                    <img src={athlete} alt=""/>
                </Link>
            </Movie>
            <Movie>
                <h2>Vanilla-Javascript-Calculator</h2>
                <div className="line"></div>
                <Link to="/work/js-bmi-calculator">
                    <img src={theracer} alt=""/>
                </Link>
            </Movie>
            <Movie>
                <h2>Javascript-BMI-Calculator</h2>
                <div className="line"></div>
                <Link to="/work/vanilla-js-calculator">
                    <img src={goodtimes} alt=""/>
                </Link>
            </Movie>
        </Work>
    )
};


const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;

    }

`;
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }

`;

export default MyWork;
