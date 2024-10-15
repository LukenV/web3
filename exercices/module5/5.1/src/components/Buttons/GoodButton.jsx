import {useContext} from 'react'
import {Context as VotesContext} from "../../contexts/VotesContext.jsx";

const GoodButton = () => {
    const {increaseGoodVotes} = useContext(VotesContext)
    return (
        <button onClick={increaseGoodVotes}>
            Increase good
        </button>
    );
}

export default GoodButton;