import { useState } from 'react';
import './App.css';
import Persons from "./components/Persons.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Filter from "./components/Filter.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filterName, setFilterName] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (persons.find(person => person.name === newName)) {
            return alert(`${newName} is already added the list`);
        }
        setPersons(persons.concat({
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }));
        setNewName('');
        setNewNumber('');
    }

    const handleChangeNameInput = (e) => {
        setNewName(e.target.value);
    }
    const handleChangeNumberInput = (e) => {
        setNewNumber(e.target.value);
    }
    const handleChangeFilterNameInput = (e) => {
        setFilterName(e.target.value);
    }

    const filteredList = filterName.length === 0 ? persons : persons.filter(person => {
        return person.name.toLowerCase().includes(filterName.toLowerCase());
    });

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter
                filterName={filterName}
                handleChangeFilterNameInput={handleChangeFilterNameInput}
            />
            <h2>Add new person</h2>
            <PersonForm
                handleChangeNameInput={handleChangeNameInput}
                handleChangeNumberInput={handleChangeNumberInput}
                handleSubmitForm={handleSubmitForm}
                newNumber={newNumber}
                newName={newName}
            />
            <h2>Numbers</h2>
            <Persons
                persons={filteredList}
            />
        </div>
    );
}

export default App;