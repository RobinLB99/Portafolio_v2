import Style from "./style.css";
import foto from "../../assets/img/profile/FOTO.png";

const AboutMe = () => {
    return (
        <div className={Style.aboutme} id="aboutme">
            <div className={Style.contenedor}>
                <div className={Style.informacion}>
                    <h1 className={Style.titleSeccion}>Sobre mi</h1>
                    <p>
                        Ingeniero de Sistemas en formación con titulación en Tecnología en Redes y Telecomunicaciones, y autodidacta con conocimientos en desarrollo de software y
                        habilidades en la programación, aptitudes de administración de bases de datos y redes de telecomunicaciones. Experiencia en soporte técnico, mantenimiento de infraestructura de TI y gestión analítica de redes. Habilidades en programación con Java y JavaScript y conocimientos en otros lenguajes, así como habilidades en el manejo de bases de datos relacionales y no relacionales. Manejo de herramientas
                        de control de versiones, además de administración de entornos Windows y Linux. Capacidad para la administración de servicios de red y mantenimiento de equipos informáticos.
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
