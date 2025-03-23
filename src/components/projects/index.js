import Style from './styles.css';
import projects from '../../assets/data/proyectos';
import ProjectCard from '../project_card';

const Projects = () => {
    return (
        <div className={Style.projects} id="my-projects">
            <h1 className={Style.titleSeccion}>Proyectos</h1>
            <div className={`d-flex flex-row align-items-center ${Style.projectsContainer}`}>
                {projects.map((project) => (
                    project.estado === 'Terminado' && (
                        <ProjectCard key={'project-'.concat(project.id)} project={project} />
                    )
                ))}
            </div>
        </div>
    )
}

export default Projects;