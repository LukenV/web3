const PersonForm = ({handleSubmitForm, handleChangeNameInput, handleChangeNumberInput, newName, newNumber}) => {
    return (
        <form onSubmit={handleSubmitForm}>
            <div>
                Name : <input value={newName} onChange={handleChangeNameInput}/>
            </div>
            <div>
                Number : <input value={newNumber} onChange={handleChangeNumberInput}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
}

export default PersonForm;