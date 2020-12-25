import React from 'react';
import hacker from '../img/hacker.png';
//Styled components
import {About, Description, Hide} from '../Styles';

//Framer motion

import {motion} from 'framer-motion';


const AboutSection = () => {
    return(
        <About>
            <Description>
                    <motion.div className="title">
                        <Hide>
                            <motion.h2>
                            I Work to make
                            </motion.h2>
                        </Hide>
                                <Hide>
                            <motion.h2 >
                                my <span>dreams</span> come
                            </motion.h2>
                        </Hide>
                        <Hide>
                            <motion.h2 >true.</motion.h2>
                        </Hide>
                        </motion.div>
                        <p>Contact me for any designing or coding jobs that you may have.
                        I am a professional with amazing skills.
                        </p>
                        <button>Contact Me</button>
            </Description>
                            <image>
                                <img src={hacker} alt="me pic."/>
                            </image>        
        </About>
    );
};

//Styled Components

export default AboutSection;