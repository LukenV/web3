const Header = (props) => {
    return (
        <h1>
            {props.title}
        </h1>
    );
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.partOne} count={props.countOne}/>
            <Part part={props.partTwo} count={props.countTwo}/>
            <Part part={props.partThree} count={props.countThree}/>
        </div>
    );
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.count}
        </p>
    )
}

const Total = (props) => {
    return (
        <p>
            Number of exercises {props.countOne + props.countTwo + props.countThree}
        </p>
    );
}

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
