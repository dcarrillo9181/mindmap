import { Col, Row } from 'reactstrap';
import ProjectCard from "./ProjectCard";
import { selectAllProjects } from './projectsSlice';

const ProjectsList = () => {
    const projects = selectAllProjects();

    return (
        <Row className='ms-auto'>
            {projects.map((project) => {
                return (
                        <Col 
                            md='5' 
                            className='m-4' 
                            key={project.id}
                        >
                            <ProjectCard project={project} />
                        </Col>
                    );
                })}
        </Row>
    )
};

export default ProjectsList;