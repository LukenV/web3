import {useState} from "react";

const ClickCounter = ({title, message}) => {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{title}</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>{count >= 10 ? message : ""}</p>
        </>
    )
}

export default ClickCounter;