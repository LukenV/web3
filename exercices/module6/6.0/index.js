const express = require('express');
const app = express();

app.use(express.json());

let persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
];

app.get('/', (req, res) => {
    res.send('<h1>Hello World !</h1>');
});

app.get('/info', (req, res) => {
    const currentDate = new Date().toUTCString();
    const countPersons = persons.length;
    const info = `
        <p>Phonebook has info for ${countPersons}</p>
        <p>${currentDate}</p>
    `;

    res.send(info);
});

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    const person = persons.find(person => person.id === id);
    if (!person) {
        return res.status(404).end();
    }

    res.json(person);
});

const generateId = () => {
    const minValue = 1;
    const maxValue = 10000;
    const randomId = Math.floor(Math.random() * maxValue + minValue);
    return String(randomId);
}

app.post('/api/persons', (req, res) => {
    const {body} = req;
    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'Missing name or number'
        });
    }
    const personFound = persons.find(p => p.name === body.name);
    if (personFound) {
        return res.status(409).json({
            error: 'Name must be unique'
        });
    }
    const person = {
        name : body.name,
        number : body.number,
        id : generateId()
    }
    persons = persons.concat(person);
    res.status(201).json(person);
});

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    persons = persons.filter(person => person.id !== id);
    res.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});