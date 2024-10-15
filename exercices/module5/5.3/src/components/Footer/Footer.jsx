import {useContext} from "react";
import {Context as ThemeContext} from "../../contexts/ThemeContext.jsx";
import "./Footer.css";
const Footer = () => {
    const {toggleTheme, getCurrentThemeDetails} = useContext(ThemeContext);
    const buttonStyle = {
        backgroundColor: getCurrentThemeDetails().primaryTextColor,
        color: getCurrentThemeDetails().backgroundColor
    };
    return (
        <footer>
            <button onClick={toggleTheme} style={buttonStyle}>
                Toggle theme
            </button>
        </footer>
    );
}

export default Footer;