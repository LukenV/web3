import Person from "./Person.jsx";

const Persons = ({persons}) => {
    return (
        <ul>
            {persons.map(person => {
                return <Person person={person}/>
            })}
        </ul>
    );
}

export default Persons;