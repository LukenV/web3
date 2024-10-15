import {useContext} from 'react'
import {Context as VotesContext} from "../../contexts/VotesContext.jsx";
import GoodButton from "../Buttons/GoodButton.jsx";
import OkButton from "../Buttons/OkButton.jsx";
import BadButton from "../Buttons/BadButton.jsx";
import ResetButton from "../Buttons/ResetButton.jsx";

function App() {
  const {goodVotes, okVotes, badVotes} = useContext(VotesContext)

  return (
      <>
          <ul>
              <li>
                  Good : {goodVotes}
                  <GoodButton/>
              </li>
              <li>
                  Ok : {okVotes}
                  <OkButton/>
              </li>
              <li>
                  Bad : {badVotes}
                  <BadButton/>
              </li>
          </ul>
          <ResetButton/>
      </>
  )
}

export default App
