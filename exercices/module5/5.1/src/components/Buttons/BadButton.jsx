import {useContext} from 'react'
import {Context as VotesContext} from "../../contexts/VotesContext.jsx";

const BadButton = () => {
    const {increaseBadVotes} = useContext(VotesContext)
    return (
        <button onClick={increaseBadVotes}>
            Increase bad
        </button>
    );
}

export default BadButton;