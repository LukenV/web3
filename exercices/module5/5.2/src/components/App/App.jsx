import {useContext, useState} from 'react'
import {Context as OpinionsContext} from "../../contexts/OpinionsContext.jsx";

function App() {
  const {sortedOpinions, addOpinion, voteOpinion} = useContext(OpinionsContext);
  const [opinionText, setOpinionText] = useState("");

  const onOpinionTextChange = (e) => {
      setOpinionText(e.target.value);
  }

  const onAddOpinionClick = () => {
      addOpinion(opinionText);
      setOpinionText("");
  }

  return (
    <>
        <ul>
            {sortedOpinions.map(o => {
                return (
                    <li key={o.id}>
                        {o.opinion} : {o.votes}
                        <button onClick={() => voteOpinion(o.id)}>
                            Vote
                        </button>
                    </li>
                );
            })}
        </ul>
        <input value={opinionText} onChange={onOpinionTextChange}/>
        <button onClick={onAddOpinionClick}>
            Add opinion
        </button>
    </>
  )
}

export default App
