import {ProviderWrapper as VotesProviderWrapper} from "../../contexts/VotesContext.jsx";
import App from "./App.jsx";

const AppLoader = () => {
    return (
        <VotesProviderWrapper>
            <App/>
        </VotesProviderWrapper>
    )
}

export default AppLoader;