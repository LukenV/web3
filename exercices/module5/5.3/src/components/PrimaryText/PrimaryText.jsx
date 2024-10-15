import {useContext} from "react";
import {Context as ThemeContext} from "../../contexts/ThemeContext.jsx";

const PrimaryText = ({content}) => {
    const {getCurrentThemeDetails} = useContext(ThemeContext);
    const primaryTextStyles = {
        color: getCurrentThemeDetails().primaryTextColor,
    };
    return (
        <h1 style={primaryTextStyles}>
            {content}
        </h1>
    );
}

export default PrimaryText;