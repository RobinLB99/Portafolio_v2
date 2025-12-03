import portafolioV2Img from '../img/projects/portafolio-v2.webp';
import libreriaImg from '../img/projects/libreria.webp';
import tiendaImg from '../img/projects/tienda.webp';
import calculadoraImg from '../img/projects/calculadora.webp';
import portafolioV1Img from '../img/projects/portafolio-v1.webp';

const projects = [
    {
        id: 7,
        title: "ArchiveNest: Gestor Documental",
        description:
            "Software para la digitalización, organización, almacenamiento y búsqueda de documentos.",
        image: "https://placehold.co/600x400",
        tecnologies: ["Java", "Spring Boot", "HTMX", "Thymeleaf", "MariaDB"],
        url: null,
        github: "https://github.com/robinlb99/ArchiveNest/",
        estado: "En desarrollo",
    },
    {
        id: 6,
        title: "Portafolio v2",
        description: "Portafolio personal creado con Preact y Bootstrap.",
        image: portafolioV2Img,
        tecnologies: ["Preact", "Bootstrap"],
        url: null,
        github: "https://github.com/robinlb99/Portafolio_v2/",
        estado: "Terminado",
    },
    {
        id: 5,
        title: "TECHBIT",
        description:
            "Sistema de tickets de soporte Techbit para la gestion de incidencias y solicitudes de los usuarios.",
        image: "https://i.imgur.com/QCFb24S.png",
        tecnologies: ["JakartaEE", "JSP", "MySQL", "HTML", "CSS", "JavaScript"],
        url: null,
        github: "https://github.com/robinlb99/TECHBIT/",
        estado: "Terminado",
    },
    {
        id: 4,
        title: "Software de Gestión de Liberia",
        description: "Software de gestión de librería con base de datos.",
        image: libreriaImg,
        tecnologies: ["JavaEE", "JSP", "MySQL", "HTML", "CSS", "JavaScript"],
        url: null,
        github: "https://github.com/robinlb99/Tienda_de_libros/",
        estado: "Terminado",
    },
    {
        id: 3,
        title: "Software de Gestión de Tienda",
        description: "Software de gestión de tienda con base de datos.",
        image: tiendaImg,
        tecnologies: ["Java", "Java Swing", "MySQL"],
        url: null,
        github: "https://github.com/robinlb99/Tienda/",
        estado: "Terminado",
    },
    {
        id: 2,
        title: "Portafolio v1",
        description:
            "Primera version de mi Portafolio personal creado con HTML, CSS y JavaScript.",
        image: portafolioV1Img,
        tecnologies: ["HTML", "CSS", "JavaScript"],
        url: "https://robinlb99.github.io/Mi-portafolio/",
        github: "https://github.com/robinlb99/Mi-portafolio/",
        estado: "Terminado",
    },
    {
        id: 1,
        title: "Calculadora",
        description: "Calculadora de operaciones matemáticas básicas.",
        image: calculadoraImg,
        tecnologies: ["HTML", "CSS", "JavaScript"],
        url: "https://robinlb99.github.io/Calculadora/",
        github: "https://github.com/robinlb99/Calculadora/",
        estado: "Terminado",
    },
];

export default projects;