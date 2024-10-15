import {useContext} from 'react'
import {Context as ThemeContext} from "../../contexts/ThemeContext.jsx";
import Footer from "../Footer/Footer.jsx";
import "./App.css";
import PrimaryText from "../PrimaryText/PrimaryText.jsx";
import SecondaryText from "../SecondaryText/SecondaryText.jsx";

function App() {
    const {getCurrentThemeDetails} = useContext(ThemeContext);
    const appStyles = {
        backgroundColor: getCurrentThemeDetails().backgroundColor,
    };

    return (
        <div className="app" style={appStyles}>
            <PrimaryText content="Bienvenue !"/>
            <SecondaryText content="Voici un petit projet React permettant de changer le thème général du site"/>
            <Footer/>
        </div>
    );
}

export default App
