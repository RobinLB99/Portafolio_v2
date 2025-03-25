//import { useEffect } from "preact/hooks";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "./style.css";

const OffCanvas = () => {
    //useEffect(() => {
    //    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    //}, []);

    return (
        <div
            className={`offcanvas offcanvas-start ${styles.nav_menu_offcanvas}`}
            tabIndex="-1"
            id="nav_menu_offcanvas"
            aria-labelledby="offcanvasExampleLabel"
            style={{ width: "250px" }}
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                    Robin Joel Lugo Boero
                </h5>
                <button
                    type="button"
                    className="btn"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{ fontSize: "1.5rem" }}
                >
                    {/* <img src="../../assets/icons/fontawesome/solid/xmark.svg" alt="close-logo" height={20} /> */}
                    <i className="fa-solid fa-xmark" />
                </button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#saludo" className="nav-link d-flex align-items-center gap-2">
                            {/* <img className={styles.img_link_offcanvas} src="../../assets/icons/fontawesome/solid/house.svg" alt="home-logo" height={20} /> */}
                            <i className="fa-solid fa-house" />
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#aboutme" className="nav-link d-flex align-items-center gap-2">
                            {/* <img className={styles.img_link_offcanvas} src="../../assets/icons/fontawesome/solid/user.svg" alt="user-logo" height={20} /> */}
                            <i className="fa-solid fa-user" />
                            <span>Sobre mi</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#tecnologies" className="nav-link d-flex align-items-center gap-2">
                            {/* <img className={styles.img_link_offcanvas} src="../../assets/icons/fontawesome/solid/code.svg" alt="code-logo" height={20} /> */}
                            <i className="fa-solid fa-code" />
                            <span>Tecnologías</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#my-projects" className="nav-link d-flex align-items-center gap-2">
                            {/* <img className={styles.img_link_offcanvas} src="../../assets/icons/fontawesome/solid/folder.svg" alt="folder-logo" height={20} /> */}
                            <i className="fa-solid fa-folder" />
                            <span>Proyectos</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link d-flex align-items-center gap-2">
                            {/* <img className={styles.img_link_offcanvas} src="../../assets/icons/fontawesome/solid/envelope.svg" alt="envelope-logo" height={20} /> */}
                            <i className="fa-solid fa-envelope" />
                            <span>Contactame</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OffCanvas;
