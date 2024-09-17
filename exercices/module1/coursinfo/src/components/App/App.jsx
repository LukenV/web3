import Header from "components/Header/Header.jsx";
import Content from "components/Content/Content.jsx";
import Total from "components/Total/Total.jsx";
import "./App.css";
function App() {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    return (
        <div>
            <Header title={course}/>
            <Content partOne={part1} partTwo={part2} partThree={part3}
                     countOne={exercises1} countTwo={exercises2} countThree={exercises3}/>
            <Total countOne={exercises1} countTwo={exercises2} countThree={exercises3}/>
        </div>
    )
}

export default App
