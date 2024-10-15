import {useContext} from "react";
import { Context as LanguageContext } from "../../contexts/LanguageContext";

const ToggleButton = () => {
    const {language, pickLanguage} = useContext(LanguageContext);

    const onButtonClick = () => {
        const newLanguage = language === "fr" ? "en" : "fr";
        pickLanguage(newLanguage);
    }
    return (
        <button onClick={onButtonClick}>
            Pick {language === "fr" ? "english" : "french"} language
        </button>
    );
}

export default ToggleButton;