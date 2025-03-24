import Style from "./styles.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={Style.footer}>
            <p>© 2025 {currentYear == 2025 ? "" : `- ${currentYear}`} Robin Joel Lugo Boero. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
