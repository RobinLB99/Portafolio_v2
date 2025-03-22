import { h } from "preact";

import ColorSchemeButton from "./color_mode";
import Header from "./header";
import Home from "./Home";
import AboutMe from "./aboutme";
import Tecnologies from "./tecnologies";
import Offcanvas from "./offcanvas";

const App = () => (
    <div id="app">
        <ColorSchemeButton />
        <Header />
        <Offcanvas />
        <main>
            <Home path="/" />
            <AboutMe path="/AboutMe" />
            <Tecnologies path="/Tecnologies" />
        </main>
    </div>
);

export default App;
