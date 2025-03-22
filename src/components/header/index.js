import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<div className={style.logoMenu}>
			<button type="submit" className={style.menu} data-bs-toggle="offcanvas" data-bs-target="#nav_menu_offcanvas" aria-controls="nav_menu_offcanvas">
				<img className={style.menuImg} src="../../assets/icons/fontawesome/solid/bars.svg" alt="menu" height={32} />
			</button>
			<div className={style.logoContainer}>
				<img src="../../assets/img/logo/robinlugo-logo.png" alt="robin-logo" height="32" />
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
			<a activeClassName={style.active} href="#projects">
				Proyectos
			</a>
			<a activeClassName={style.active} href="#contact">
				Contactame
			</a>
		</nav>
	</header>
);

export default Header;
