import './App.css'
import {useState} from "react";

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                The app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            Button press history : {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

function App() {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAllClicks] = useState([]);
    const [total, setTotal] = useState(0);

    const handleLeftClick = () => {
        console.log("left!");
        setAllClicks(allClicks.concat('L'));
        const updatedLeft = left+1;
        setLeft(updatedLeft);
        setTotal(updatedLeft+right);
    }
    const handleRightClick = () => {
        console.log("right!");
        setAllClicks(allClicks.concat('R'));
        const updatedRight = right+1;
        setRight(updatedRight);
        setTotal(left + updatedRight);
    }
    return (
        <div>
            {left}
            <Button handleClick={handleLeftClick} text="Left"/>
            <Button handleClick={handleRightClick} text="Right"/>
            {right}
            <History allClicks={allClicks}/>
            <p>Total : {total}</p>
        </div>
    )
}

export default App
