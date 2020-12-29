import React from 'react'
//Animations
import {motion} from 'framer-motion';
import {pageAnimation ,titleAnim} from '../animation';
import styled from 'styled-components'; 

const ContactMe = ()=> {
    return (
        <ContactStyle
        variants={pageAnimation} 
        initial="hidden" 
        animate="show"
        exit="exit"
        style={{background:'#131111'}}
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim} >Get In Touch</motion.h2>
                </Hide>
            </Title>
            <div>
            <Hide>
                <Social variants={titleAnim}>
            <Line/>
                <h2>Send Me A Message- 0728413510 , 0778323526</h2>
                </Social> 
            </Hide> 
            <Hide> 
                <Social variants={titleAnim}>
            <Line/>
                <h2>Send Me an E-mail- clintonmainya@gmail.com</h2>
                </Social>
            </Hide>              
            </div>
        </ContactStyle>
    )
}


const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color:white;
    min-height: 90vh;
    @media (max-width: 1300px){
     
     padding: 2rem;
     font-size: 1rem;
    }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color:white;
    @media (max-width: 1300px){
    margin-top: 5rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;
const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
        font-size:2.5rem;
    }
    @media (max-width: 1300px){
    display:flex;
    flex-direction: column;
    padding: 2rem 1rem;
     h2{
        margin: 2rem;
        font-size: 2.5rem; 
    }
    }
`;
const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width:100%;
    margin: 5rem;

    @media(max-width: 1300px){
        left: 0%;
    }
`;

export default ContactMe;