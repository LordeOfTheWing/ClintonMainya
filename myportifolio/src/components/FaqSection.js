import React from 'react';
import styled from 'styled-components';
import {About} from '../Styles';




const FaqSection = () => {
    return(
        <Faq>
            <h2>Any Questions ?<span>FAQ</span></h2>
            <div className="question">
                <h4>What do you specifically do?</h4>
                <div className="answer">
                    <p>I am a web developer and also a graphic designer</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What are the languages and frameworks you code in?</h4>
                <div className="answer">
                    <p>I am a JavaScript developer.</p>
                    <p>
                        I love using React for creation of beautiful front-ends like this one.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Are you good with back-end?</h4>
                <div className="answer">
                    <p>My dream goal is to be full-stack developer</p>
                    <p>At the moment, I am starting to learn about node js and Express js</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Do you love what you do?</h4>
                <div className="answer">
                    <p>Absolutely yes.</p>
                    <p>I love coming up with solutions and solving complex problems.</p>
                </div>
                <div className="faq-line"></div>
            </div>
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