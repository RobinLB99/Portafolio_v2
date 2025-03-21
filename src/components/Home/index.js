import { h } from 'preact';
import style from './style.css';

const Home = () => {
	return (
		<div className={style.presentacion} id="saludo">
			<div className={style.contenedorSaludo}>
				<div className={style.areaSaludo}>
					<h1>Hola!🤚<br /> Soy Robin, desarrollador de Software.</h1>
					<div className={style.saludoLinks}>
						<a href="https://github.com/robinlb99/" target='_blank' className={style.githubLink}>
							<img src="../../assets/icons/fontawesome/brands/github.svg" alt="github-logo" height={25} />
							<span>Github</span>
						</a>
						<a href="#" className={style.downloadLink}>
							<img src="../../assets/icons/fontawesome/solid/file.svg" alt="github-logo" height={25} />
							<span>CV</span>
						</a>
					</div>
				</div>
				<div className={style.saludoLogo}>
					<img src="../../assets/img/logo/robinlugo-logo.png" alt="robin-logo" />
				</div>
			</div>
		</div>
	);
};

export default Home;
