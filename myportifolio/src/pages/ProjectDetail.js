import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {ProjectState} from '../ProjectState';




const ProjectDetail = ()=> {
    const history = useHistory();
    const url = history.location.pathname;
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
            <Details>
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


const Details =styled.div`
    color:white;
    `;
const Headline =styled.div`
    min-height: 90vh;
    padding-top: 20vh;
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

`;
//Project Component

const ProjectDescription = ({title, description,link}) =>{
    return(
    <div>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
        <a href={link}>{link}</a>
    </div>
    )
};

export default ProjectDetail;
