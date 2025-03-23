import { h } from "preact";

import ColorSchemeButton from "./color_mode";
import Header from "./header";
import Home from "./Home";
import AboutMe from "./aboutme";
import Tecnologies from "./tecnologies";
import Offcanvas from "./offcanvas";
import Projects from "./projects";

const App = () => (
    <div id="app">
        <ColorSchemeButton />
        <Header />
        <Offcanvas />
        <main>
            <Home path="/" />
            <AboutMe path="/AboutMe" />
            <Tecnologies path="/Tecnologies" />
            <Projects path="/Projects" />
        </main>
    </div>
);

export default App;
