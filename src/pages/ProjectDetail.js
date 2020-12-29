import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {ProjectState} from '../ProjectState';
//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';




const ProjectDetail = ()=> {
    const history = useHistory();
    const url = history.location.pathname;
    //eslint-disable-next-line
    const [projects, setProjects] = useState(ProjectState);
    const [project, setProject] = useState(null);

    //useEffect
    useEffect(() => {
        const currentProject = projects.filter((stateProject)=> stateProject.url === url)
        setProject(currentProject[0]);
    },[projects, url]);


    return (
        <>
        {project && (
            <Details 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show"
        exit="exit"
        >
            <Headline>
                <h2>{project.title}</h2>
                <img src={project.mainImg} alt="movie"/>
            </Headline>
            <ProjectDetails>
                {project.projectdetail.map((projectdetail) => (
                    <ProjectDescription 
                    title={projectdetail.title} 
                    description={projectdetail.description}
                    link = {projectdetail.link}
                    key={projectdetail.title}/>
                ))};
            </ProjectDetails>
        </Details>
        )}        
        </>
    );
};


const Details =styled(motion.div)`
    color:white;
    `;
const Headline =styled.div`
    min-height: 90vh;
    padding-top: 5vh;
    position: relative;
    h2{
        position: relative;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);

    }
    img{
        width:100%;
        height: 90vh;
        object-fit: cover;
    }
    `;

const ProjectDetails = styled.div`
    min-height:80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1300px){
     display:block;
     margin:2rem 2rem;
    }

`;

const ProjectDescriptionStyle = styled.div`
    padding:5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin:1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;
//Project Component

const ProjectDescription = ({title, description,link}) =>{
    return(
    <ProjectDescriptionStyle>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
        <a href={link}>{link}</a>
    </ProjectDescriptionStyle>
    )
};


export default ProjectDetail;
