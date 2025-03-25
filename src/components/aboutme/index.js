import Style from "./style.css";
import foto from "../../assets/img/profile/FOTO.png";

const AboutMe = () => {
    return (
        <div className={Style.aboutme} id="aboutme">
            <div className={Style.contenedor}>
                <div className={Style.informacion}>
                    <h1 className={Style.titleSeccion}>Sobre mi</h1>
                    <p>
                    Soy un desarrollador de software en formación, apasionado por crear soluciones innovadoras y eficientes. Mi enfoque se centra en transformar ideas en código funcional, utilizando mis habilidades en Java, JavaScript y bases de datos para desarrollar aplicaciones robustas y escalables. Mi compromiso con la calidad y mi constante búsqueda de aprendizaje. Si buscas un profesional proactivo y con ganas de aportar valor a tus proyectos, ¡contáctame! Estoy listo para trabajar contigo y convertir tus ideas en realidad.
                    </p>
                </div>
                <div className={Style.foto}>
                    <img
                        src={foto}
                        alt="foto-perfil"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
