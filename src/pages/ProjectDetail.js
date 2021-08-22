import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {ProjectsState} from '../projectsState';

const ProjectDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [projects, setProjects]= useState(ProjectsState);
    const [project, setProject] = useState(null);

    //use effect
    useEffect(()=> {
        const currentProject = projects.filter((stateProjects)=> stateProjects.url === url );
        setProject(currentProject[0])
    },[projects, url])
    return(
        <>
        {project && (
            <Details>
            <Headline>
                <h2>{project.title}</h2>
                <img src={project.mainImg} alt="my project" />
            </Headline>
            <Tags>
                {project.Tags.map((item)=>(
                    <Tag title={item.title} description={item.description} key={item.title}/>
                ))}
            </Tags>
            <ImageDisplay>
                <img src={project.secondaryImg} alt="Project screen shots" />
            </ImageDisplay>
        </Details>
        )}
        </>
    )
};

const Details = styled.div`
    color: white;
`;

const Tags = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`

const TagStyle = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;

    }
    p{
        padding: 2rem 0rem;
    }
`

const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;

    }
`;


const Tag = ({title, description}) => {
    return (
      <TagStyle>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
      </TagStyle>
    );
  };

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
    }
`  


export default ProjectDetail;