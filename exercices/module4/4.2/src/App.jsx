import { useState, useEffect } from 'react';
import './App.css';
import Persons from "./components/Persons.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Filter from "./components/Filter.jsx";
import personsService from "./services/persons";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filterName, setFilterName] = useState('');

    useEffect(() => {
        personsService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons);
            });
    }, []);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (persons.find(person => person.name === newName)) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)) {
                const personToUpdate = persons.find(person => person.name === newName);
                const updatedPerson = {
                    ...personToUpdate,
                    number : newNumber
                }
                personsService
                    .update(updatedPerson.id, updatedPerson)
                    .then(personUpdated =>
                        setPersons(persons.map(p => p.id === personUpdated.id ? personUpdated : p))
                    );
            }
            return;
        }

        const newPerson = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        personsService
            .create(newPerson)
            .then(createdPerson => {
                setPersons(persons.concat(createdPerson));
            });

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

    const handleDeletePerson = (id) => {
        const personName = persons.find(person => person.id === id).name;
        if (window.confirm(`Delete ${personName} ?`)) {
            personsService
                .remove(id)
                .then(deletedPerson => {
                    setPersons(persons.filter(p => p.id !== deletedPerson.id));
                });
        }
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
                handleDeletePerson={handleDeletePerson}
            />
        </div>
    );
}

export default App;