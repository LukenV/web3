import Person from "./Person.jsx";

const Persons = ({persons, handleDeletePerson}) => {
    return (
        <ul>
            {persons.map(person => {
                return <Person
                    person={person}
                    handleDeletePerson={handleDeletePerson}
                />
            })}
        </ul>
    );
}

export default Persons;