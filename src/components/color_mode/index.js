import { useState } from 'preact/hooks';
import ColorScheme from './style.css';

const ColorSchemeButton = () => {
    const [manualTheme, setManualTheme] = useState(null);

    const getEffectiveTheme = () => {
        if (manualTheme) return manualTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const toggleTheme = () => {
        const currentTheme = getEffectiveTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);

        setManualTheme(newTheme);
    };

    return (
        <button className={ColorScheme.button} onClick={toggleTheme}>
            <img src="../../assets/icons/fontawesome/solid/palette.svg" alt="pallet-icon" width={30}  />
        </button>
    );
}

export default ColorSchemeButton;