import {useState} from "react";

const getLocalStorage = (key) => {
    return localStorage.getItem(key) !== 'undefined' ? JSON.parse(localStorage.getItem(key)) : null;
}

const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const useLocalStorage = (key, initialValue) => {
    let value = getLocalStorage(key);
    if (!value) {
        setLocalStorage(key, initialValue);
        value = initialValue;
    }
    const [stateValue, setStateValue] = useState(value);

    const updateStateValue = (newValue) => {
        setStateValue(newValue);
        console.log("called!");
        setLocalStorage(key, newValue);
    }

    return [stateValue, updateStateValue];

}

export default useLocalStorage;