import style from "./style.css";
import logo from "../../assets/img/logo/robinlugo-logo.png";
const Home = () => {
    return (
        <div className={style.presentacion} id="saludo">
            <div className={style.contenedorSaludo}>
                <div className={style.areaSaludo}>
                    <h1>
                        Hola!🤚
                        <br /> Soy Robin, desarrollador de Software.
                    </h1>
                    <div className={style.saludoLinks}>
                        <a
                            href="https://github.com/robinlb99/"
                            target="_blank"
                            className={style.githubLink}
                            rel="noreferrer"
                        >
                            {/* <img
                                src="../../assets/icons/fontawesome/brands/github.svg"
                                alt="github-logo"
                                height={25}
                            /> */}
                            <i className="fa-brands fa-github" />
                            <span>Github</span>
                        </a>
                    </div>
                </div>
                <div className={style.saludoLogo}>
                    <img
                        src={logo}
                        alt="robin-logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
