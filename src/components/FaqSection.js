import React from 'react';
import styled from 'styled-components';
import {About} from '../Styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import {useScroll} from './useScroll';
import {scrollReveal} from '../animation';



const FaqSection = () => {
    const [element, controls] = useScroll();

    return(
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Any Questions ?<span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title='What do you specifically do?'>
                <div className="answer">
                    <p>I am a frontend developer and also a graphic designer</p>
                    <p>I just love designing and coming up with beautiful web applications.</p>
                </div>
            </Toggle>
            <Toggle title='What are the languages and frameworks you code in?'>            
                <div className="answer">
                    <p>I'm in love with JavaScript.</p>
                    <p>Although I'm very flexible I am willing to  learn any new programming languages</p>
                    <p>
                        I love using React for creation of beautiful front-ends. like this one.;
                    </p>
                </div>
            </Toggle>
            <Toggle title='Are you good with back-end?'>
                <div className="answer">
                    <p>My dream goal is to be full-stack developer</p>
                    <p>At the moment, I am starting to learn about Node js and Express js but I'm good at Firebase.</p>
                </div>
            </Toggle>
            <Toggle title='Do you love what you do?'>
                <div className="answer">
                    <p>Absolutely yes.</p>
                    <p>I love coming up with solutions and solving complex problems.</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
};

const Faq = styled(About)`
    display: block;
    span{
        display:block;

    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding:3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;
export default FaqSection;