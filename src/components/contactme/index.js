import Style from "./styles.css";

const ContactMe = () => {
    return (
        <div className={Style.contactMe} id="contact">
            <h1>Contactarme</h1>
            <div className={Style.contactMeContainer}>
                <a
                    href="https://linkedin.com/in/tnlgorobinlugo"
                    className={`${Style.contactMeItem} text-decoration-none`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {/* <img
                        src="../../assets/icons/fontawesome/brands/linkedin.svg"
                        alt="linkedin-logo"
                    /> */}
                    <i className="fa-brands fa-linkedin" />
                    <span>LinkedIn</span>
                </a>
                <a
                    href="mailto:lugoboero1999@gmail.com"
                    className={`${Style.contactMeItem} text-decoration-none`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {/* <img
                        src="../../assets/icons/fontawesome/solid/at.svg"
                        alt="at-logo"
                    /> */}
                    <i className="fa-solid fa-at" />
                    <span>Correo Electrónico</span>
                </a>
            </div>
        </div>
    );
};

export default ContactMe;
