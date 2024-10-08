const Filter = ({filterName, handleChangeFilterNameInput}) => {
    return (
        <div>
            Filter shown with <input value={filterName} onChange={handleChangeFilterNameInput}/>
        </div>
    );
}

export default Filter;