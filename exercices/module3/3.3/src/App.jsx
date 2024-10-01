import './App.css'
import {useEffect, useState} from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ];

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
    const [bestVote, setBestVote] = useState(0);
    const [bestSelected, setBestSelected] = useState(0);

    const handleVote = () => {
        const votesCopy = [...votes];
        const updatedVote = ++votesCopy[selected];
        if (updatedVote > bestVote) {
            setBestVote(updatedVote);
            setBestSelected(selected);
        }
        setVotes([...votesCopy]);
    }

    const handleNextAnecdote = () => {
        const randomNumber = Math.floor(Math.random() * anecdotes.length);
        setSelected(randomNumber);
    }

    return (
        <div className="container">
            <div className="row">
                <h1>Anecdote of the day</h1>
                <p>{anecdotes[selected]}</p>
                <p>Has {votes[selected]} votes</p>
            </div>
            <div className="row">
                <button onClick={handleVote}>Vote</button>
                <button onClick={handleNextAnecdote}>Next anecdote</button>
            </div>
            <div className="row">
                <h1>Anecdote with most votes</h1>
                <p>{anecdotes[bestSelected]}</p>
                <p>Has {votes[bestSelected]} votes</p>
            </div>
        </div>
    );
}

export default App