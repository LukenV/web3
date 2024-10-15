import {createContext, useState} from "react";

const Context = createContext(null)

const ProviderWrapper = (props) => {
    const [language, setLanguage] = useState("fr");

    const pickLanguage = (newLanguage) => {
        if (newLanguage !== "fr" && newLanguage !== "en") {
            throw "Invalid language selected : " + newLanguage;
        }
        setLanguage(newLanguage);
    }

    const exposedValue = {
        language,
        pickLanguage
    };

    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>;
}
export {
    Context,
    ProviderWrapper
};
