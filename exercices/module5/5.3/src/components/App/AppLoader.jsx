import {ContextProvider as ThemeContextProvider} from "../../contexts/ThemeContext.jsx";
import App from "./App.jsx";

const AppLoader = () => {
    return <ThemeContextProvider>
        <App/>
    </ThemeContextProvider>;
}

export default AppLoader;