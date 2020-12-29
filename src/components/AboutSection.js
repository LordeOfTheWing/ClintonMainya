import React from 'react';
import clinton from '../img/clinton.jpg';
//Styled components
import {About, Description, Hide, Image} from '../Styles';

//Framer motion

import {motion} from 'framer-motion';
import {titleAnim, fade,photoAnim} from '../animation';

import Wave from './Wave';
import { Link, Route } from 'react-router-dom';
const AboutSection = () => {
    return(
        <About>
            <Description>
                    <motion.div className="title">
                        <Hide>
                            <motion.h2 
                            variants= {titleAnim}
                            >
                            I Work to make
                            </motion.h2>
                        </Hide>
                                <Hide>
                            <motion.h2 
                            variants= {titleAnim}
                            >
                                my <span>dreams</span> come
                            </motion.h2>
                        </Hide>
                        <Hide>
                            <motion.h2 
                            variants= {titleAnim}
                            >true.</motion.h2>
                        </Hide>
                        </motion.div>
                        <motion.p variants={fade}>Contact me for any designing or coding jobs that you may have.
                        I am a professional with amazing skills.
                        </motion.p>
                        <Route>
                        <Link to="/contact">
                        <motion.button variants={fade}>Contact Me</motion.button>
                        </Link>
                        </Route>
            </Description>
                            <Image>
                                <motion.img  variants={photoAnim} src={clinton} alt="me pic."/>
                            </Image>   
            <Wave/>
        </About>
    );
};

//Styled Components

export default AboutSection;