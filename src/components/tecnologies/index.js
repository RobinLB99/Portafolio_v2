import Style from './style.css';
import {h} from "preact";
import tecnologias from "../../assets/data/tecnologies";

const Tecnologies = () => {
    return (
        <div className={Style.tecnologies} id="tecnologies">
            <h1 className={Style.titleSeccion}>Tecnologías</h1>
            <div className={Style.listTecnologies}>
                {
                    tecnologias.map(tecnologia => {
                        return (
                            <a target='_blank' href={tecnologia.link} id={Style.tecnologyCard}>
                                <img src={tecnologia.icon} alt={tecnologia.name + "-icon"} height={25} />
                                <span>{tecnologia.name}</span>
                            </a>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Tecnologies;