import {useContext} from 'react'
import {Context as VotesContext} from "../../contexts/VotesContext.jsx";

const ResetButton = () => {
    const {resetVotes} = useContext(VotesContext)
    return (
        <button onClick={resetVotes}>
            Reset scores
        </button>
    );
}

export default ResetButton;