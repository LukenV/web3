import {createContext, useState} from "react";

const Context = createContext(null);

const ContextProvider = ({children}) => {

    const lightThemeStyle = {
        backgroundColor: "#fafaff",
        primaryTextColor: "#1C1C1C",
        secondaryTextColor: "#454955",
        linkColor: "purple"
    };

    const darkThemeStyle = {
        backgroundColor: "#1C1C1C",
        primaryTextColor: "#fafaff",
        secondaryTextColor: "#daddd8",
        linkColor: "blue"
    };

    const [theme, setTheme] = useState("light");
    const [backgroundColor, setBackgroundColor] = useState(lightThemeStyle.backgroundColor);
    const [primaryTextColor, setPrimaryTextColor] = useState(lightThemeStyle.primaryTextColor);
    const [secondaryTextColor, setSecondaryTextColor] = useState(lightThemeStyle.secondaryTextColor);
    const [linkColor, setLinkColor] = useState(lightThemeStyle.linkColor);

    const setDarkTheme = () => {
        setTheme("dark");
        setBackgroundColor(darkThemeStyle.backgroundColor);
        setPrimaryTextColor(darkThemeStyle.primaryTextColor);
        setSecondaryTextColor(darkThemeStyle.secondaryTextColor);
        setLinkColor(darkThemeStyle.linkColor);
    }

    const setLightTheme = () => {
        setTheme("light");
        setBackgroundColor(lightThemeStyle.backgroundColor);
        setPrimaryTextColor(lightThemeStyle.primaryTextColor);
        setSecondaryTextColor(lightThemeStyle.secondaryTextColor);
        setLinkColor(lightThemeStyle.linkColor);
    }

    const toggleTheme = () => {
        theme === "light" ? setDarkTheme() : setLightTheme();
    }

    const getCurrentThemeDetails = () => {
        return {
            backgroundColor,
            primaryTextColor,
            secondaryTextColor,
            linkColor
        };
    }

    const exposedValue = {
        setDarkTheme,
        setLightTheme,
        toggleTheme,
        getCurrentThemeDetails
    }

    return <Context.Provider value={exposedValue}>
        {children}
    </Context.Provider>;
}

export {
    Context,
    ContextProvider
}
