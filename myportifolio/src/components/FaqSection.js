import React from 'react';


const FaqSection = () => {
    return(
        <div className="faq">
            <h2>Any Questions ?<span>FAQ</span></h2>
            <div className="question">
                <h4>What do you specifically do?</h4>
                <div className="answer">
                    <p>I am a web developer and also a graphic designer</p>
                </div>
            </div>
            <div className="question">
                <h4>What are the languages and frameworks you code in?</h4>
                <div className="answer">
                    <p>I am a JavaScript developer.</p>
                    <p>
                        I love using React for creation of beautiful front-ends like this one.
                    </p>
                </div>
            </div>
            <div className="question">
                <h4>Are you good with back-end?</h4>
                <div className="answer">
                    <p>My dream goal is to be full-stack developer</p>
                    <p>At the moment, I am starting to learn about node js and Express js</p>
                </div>
            </div>
            <div className="question">
                <h4>Do you love what you do?</h4>
                <div className="answer">
                    <p>Absolutely yes.</p>
                    <p>I love coming up with solutions and solving complex problems.</p>
                </div>
            </div>
        </div>
    )
};

export default FaqSection;