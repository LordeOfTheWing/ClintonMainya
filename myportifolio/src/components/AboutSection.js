import React from 'react';
import home1 from '../img/home1.png';
//Styled components
import styled from 'styled-components';
import {About, Description, Image, Hide} from '../Styles';


const AboutSection = () => {
    return(
        <About>
            <Description>
                    <div className="title">
                        <Hide>
                            <h2>I Work to make</h2>
                        </Hide>
                                <Hide>
                            <h2>
                                my <span>dreams</span> come
                            </h2>
                        </Hide>
                        <Hide>
                            <h2>true.</h2>
                        </Hide>
                        </div>
                        <p>Contact me for any designing or coding jobs that you may have.
                        I am a professional with amazing skills.
                        </p>
                        <button>Contact Me</button>
            </Description>
                            <image>
                                <img src={home1} alt="Picture of me."/>
                            </image>        
        </About>
    );
};

//Styled Components

export default AboutSection;