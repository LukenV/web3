import Part from "../Part/Part.jsx";

const Content = (props) => {
    return (
        <div>
            <Part part={props.partOne} count={props.countOne}/>
            <Part part={props.partTwo} count={props.countTwo}/>
            <Part part={props.partThree} count={props.countThree}/>
        </div>
    );
}

export default Content;