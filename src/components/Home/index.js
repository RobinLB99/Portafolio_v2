import { h } from "preact";
import style from "./style.css";

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
                            <img
                                src="../../assets/icons/fontawesome/brands/github.svg"
                                alt="github-logo"
                                height={25}
                            />
                            <span>Github</span>
                        </a>
                        <a
                            href="https://docs.google.com/document/d/1TykjHesgyH-2p8eJYwe0WRX-3WXGagCu/edit?usp=sharing&ouid=113282831848628091773&rtpof=true&sd=true"
                            target="_blank"
                            className={style.downloadLink}
                            rel="noreferrer"
                        >
                            <img
                                src="../../assets/icons/fontawesome/solid/file.svg"
                                alt="github-logo"
                                height={25}
                            />
                            <span>CV</span>
                        </a>
                    </div>
                </div>
                <div className={style.saludoLogo}>
                    <img
                        src="../../assets/img/logo/robinlugo-logo.png"
                        alt="robin-logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
