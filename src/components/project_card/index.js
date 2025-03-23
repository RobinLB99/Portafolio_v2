import Style from "./styles.css";

const ProjectCard = ({ project }) => {
    return (
        <div className={`${Style.projectCard}`}>
            <div className={Style.projectCardImage}>
                <img src={project.image} alt={project.title} />
            </div>
            <div className={Style.projectCardContent}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className={`${Style.projectCardTecnologies} d-flex flex-wrap gap-2 mb-3`}>
                    {project.tecnologies.map((tecnology) => (
                        <span key={tecnology}>{tecnology}</span>
                    ))}
                </div>
                <div className={`d-flex gap-3 justify-content-center ${Style.projectCardButtons}`}>
                    {project.url && (
                        <a
                            className={`${Style.projectCardButton} d-flex gap-2`}
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="../../assets/icons/fontawesome/solid/globe.svg"
                                alt={`globe-icon`}
                            />
                            <span>Ver</span>
                        </a>
                    )}
                    {project.github && (
                        <a
                            className={`${Style.projectCardButton} d-flex gap-2`}
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="../../assets/icons/fontawesome/brands/github.svg"
                                alt={`github-icon`}
                            />
                            <span>GitHub</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
