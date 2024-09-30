import Part from "components/Part/Part.jsx";

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => <Part key={part.id} part={part}/>)}
        </div>
    );
}

export default Content;