const Person = ({person, handleDeletePerson}) => {
    return (
        <>
            <li key={person.name}>{person.name} - {person.number}</li>
            <button onClick={() => handleDeletePerson(person.id)}>Delete</button>
        </>
    );
}

export default Person;