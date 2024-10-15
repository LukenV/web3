import {ContextProvider as OpinionsContextProvider} from "../../contexts/OpinionsContext.jsx";
import App from "./App.jsx";

const AppLoader = () => {
    return <OpinionsContextProvider>
        <App/>
    </OpinionsContextProvider>
}

export default AppLoader;