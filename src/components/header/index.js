import style from './style.css';
import robinLogo from '../../assets/img/logo/robinlugo-logo.png';
import { useEffect, useState } from 'preact/hooks';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={`${style.header} ${isScrolled ? style.scrolled : ''}`}>
			<div className={style.logoMenu}>
				<button type="submit" className={style.menu} data-bs-toggle="offcanvas" data-bs-target="#nav_menu_offcanvas" aria-controls="nav_menu_offcanvas">
					{/* <img className={style.menuImg} src="../../assets/icons/fontawesome/solid/bars.svg" alt="menu" height={32} /> */}
					<i className="fa-solid fa-bars" />
				</button>
				<div className={style.logoContainer}>
					<img src={robinLogo} alt="robin-logo" height="32" />
					<span>Robin Joel Lugo Boero</span>
				</div>
			</div>
			<nav>
				<a activeClassName={style.active} href="#saludo">
					Home
				</a>
				<a activeClassName={style.active} href="#aboutme">
					Acerca de mi
				</a>
				<a activeClassName={style.active} href="#tecnologies">
					Tecnologías
				</a>
				<a activeClassName={style.active} href="#my-projects">
					Proyectos
				</a>
				<a activeClassName={style.active} href="#contact">
					Contactame
				</a>
			</nav>
		</header>
	);
};

export default Header;
