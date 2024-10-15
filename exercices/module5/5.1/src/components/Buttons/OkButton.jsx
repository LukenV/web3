import {useContext} from 'react'
import {Context as VotesContext} from "../../contexts/VotesContext.jsx";

const OkButton = () => {
    const {increaseOkVotes} = useContext(VotesContext)
    return (
        <button onClick={increaseOkVotes}>
            Increase ok
        </button>
    );
}

export default OkButton;