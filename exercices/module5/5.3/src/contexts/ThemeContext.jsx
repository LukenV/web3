import {createContext, useState} from "react";

const Context = createContext(null);

const ContextProvider = ({children}) => {

    const lightThemeStyle = {
        backgroundColor: "white",
        primaryTextColor: "black",
        secondaryTextColor: "grey",
        linkColor: "purple"
    };

    const darkThemeStyle = {
        backgroundColor: "black",
        primaryTextColor: "white",
        secondaryTextColor: "grey",
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
