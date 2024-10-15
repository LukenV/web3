import {ProviderWrapper as LanguageProviderWrapper} from "../../contexts/LanguageContext.jsx";
import App from "./App.jsx";

const AppLoader = () => {
    return (
        <LanguageProviderWrapper>
            <App/>
        </LanguageProviderWrapper>
    );
};

export default AppLoader;