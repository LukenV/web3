import axios from 'axios';
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    const result = axios.get(baseUrl);
    return result.then(response => response.data);
}

const create = (newPerson) => {
    const result = axios.post(baseUrl, newPerson);
    return result.then(response => response.data);
}

const remove = (id) => {
    const result = axios.delete(`${baseUrl}/${id}`);
    return result.then(response => response.data);
}

const update = (id, newPerson) => {
    const result = axios.put(`${baseUrl}/${id}`, newPerson);
    return result.then(response => response.data);
}

export default {
    getAll,
    create,
    remove,
    update
}