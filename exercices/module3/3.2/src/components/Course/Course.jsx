import Total from "../Total/Total.jsx";
import Content from "../Content/Content.jsx";
import Header from "../Header/Header.jsx";

const Course = ({course}) => {
    return (
        <div className="container">
            <Header title={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    );
}

export default Course;