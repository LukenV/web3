import { useState } from 'react'
import './App.css'

const Loading = () => {
    return <p>Loading...</p>
}

const Button = ({handler, text}) => {
    return (
        <button onClick={handler}>
            {text}
        </button>
    );
}

const Statistics = ({good, neutral, bad, total, average, positivePercentage}) => {
    if (total === 0) {
        return <p>No feedback given</p>
    }
    return (
        <>
            <table>
                <tbody>
                    <StatisticLine text="Good" value={good}/>
                    <StatisticLine text="Neutral" value={neutral}/>
                    <StatisticLine text="Bad" value={bad}/>
                    <StatisticLine text="All" value={total}/>
                    <StatisticLine text="Average" value={average / total}/>
                    <StatisticLine text="Positive" value={(positivePercentage / total)*100}/>
                </tbody>
            </table>
        </>
    );
}

const StatisticLine = ({value, text}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [average, setAverage] = useState(0);
    const [positivePercentage, setPositivePercentage] = useState(0);
    const [loading, setLoading] = useState(true);

    const time = 3000;
    const timeOutClock = setTimeout(() => {
        setLoading(false);
        clearTimeout(timeOutClock);
    }, time);

    const handlerGood = () => {
        const updatedGood = good + 1;
        setGood(updatedGood);
        const updatedTotal = total + 1;
        setTotal(updatedTotal);
        setAverage(average + 1);
        setPositivePercentage(positivePercentage+1);
    }
    const handlerNeutral = () => {
        const updateNeutral = neutral + 1;
        setNeutral(updateNeutral);
        const updatedTotal = total + 1;
        setTotal(updatedTotal);
    }
    const handlerBad = () => {
        const updateBad = bad + 1;
        setBad(updateBad);
        const updatedTotal = total + 1;
        setTotal(updatedTotal);
        setAverage(average - 1);
    }

    if (loading) {
        return <Loading/>;
    }

    return (
        <div>
            <h1>Give feedback</h1>
                <Button handler={handlerGood} text="Good"/>
                <Button handler={handlerNeutral} text="Neutral"/>
                <Button handler={handlerBad} text="Bad"/>
            <h1>Statistics</h1>

            <Statistics total={total} good={good}
                        neutral={neutral} bad={bad} average={average}
                        positivePercentage={positivePercentage}/>
        </div>
    );
}

export default App
