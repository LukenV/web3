import {useContext} from "react";
import {Context as ThemeContext} from "../../contexts/ThemeContext.jsx";

const SecondaryText = ({content}) => {
    const {getCurrentThemeDetails} = useContext(ThemeContext);
    const secondaryTextStyles = {
        color: getCurrentThemeDetails().secondaryTextColor,
    };
    return (
        <p style={secondaryTextStyles}>
            {content}
        </p>
    );
}

export default SecondaryText;