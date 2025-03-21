import Style from './style.css';

const AboutMe = () => {

    return (
        <div className={Style.aboutme} id="aboutme">
            <div className={Style.contenedor}>
                <div className={Style.informacion}>
                    <h1 className={Style.titleSeccion}>Sobre mi</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc augue,laoreet eget nibh id, molestie hendrerit magna.Proin bibendum vestibulum aliquet. Ut cursus efficitur tempor. Mauris consequat arcu sit amet lobortis commodo. Suspendisse nec rhoncus ipsum. Phasellus semper risus nisl, vel elementum tortor sollicitudin nec.</p>
                </div>
                <div className={Style.foto}>
                    <img src='../../assets/img/profile/FOTO.png' alt='foto-perfil' />
                </div>
            </div>
        </div>
    );

}

export default AboutMe;