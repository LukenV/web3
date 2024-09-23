import {useState} from "react";

const ClickCounter = ({title, message}) => {
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")))
    const [mouseEntered, setMouseEntered] = useState(false);

    const clickMeMessage = "Please click on me now !";

    const handleMouseEnter = () => {
        setMouseEntered(true);
    }

    const handleMouseLeave = () => {
        setMouseEntered(false);
    }

    const handleClick = () => {
        setCount((count) => count + 1);
        localStorage.setItem("count", JSON.stringify(count+1));
    }

    return (
        <>
            <h1>{title}</h1>
            <div className="container">
                {!mouseEntered && (
                    <div className="clickMeMessage">
                        {clickMeMessage}
                    </div>
                )}
                <button id="clickCounter" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                    count is {count}
                </button>
            </div>
            <p>{count >= 10 ? message : ""}</p>
        </>
    )
}

export default ClickCounter;