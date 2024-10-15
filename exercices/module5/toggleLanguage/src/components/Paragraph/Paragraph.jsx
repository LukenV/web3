import {useContext} from "react";
import { Context as LanguageContext } from "../../contexts/LanguageContext";
const Paragraph = () => {
    const {language} = useContext(LanguageContext);
    return (
        <p>
            {language === "fr" ? "Bonjour !" : ""}
            {language === "en" ? "Hello !" : ""}
        </p>
    );
}

export default Paragraph;