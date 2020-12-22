import React from 'react';
import home1 from '../img/home1.png';

const AboutSection = () => {

    return(
        <div>
            <div className="description">
                    <div className="title">
                        <div className="hide">
                            <h2>I Work to make</h2>
                        </div>
                                 <div className="hide">
                            <h2>my <span>dreams</span> come</h2>
                                 </div>
                        <div className="hide">
                            <h2>true.</h2>
                        </div>
                        <p>Contact me for any designing or coding jobs that you may have.
                        I am a professional with amazing skills.
                        </p>
                        <button>Contact Me</button>
                            <div className="image">
                                <img src={home1} alt="Picture of me."/>
                            </div>
                    </div>        
            </div>
        </div>

    )
};

export default AboutSection;