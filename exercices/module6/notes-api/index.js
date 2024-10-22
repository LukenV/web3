const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());

morgan.token('body', (req, res) => {
    return JSON.stringify(req.body);
});

app.use(morgan(':method :url :status :res[content-length] :response-time ms :body'));

const requestLogger = (req, res, next) => {
    console.log('Method:', req.method);
    console.log('Path:', req.path);
    console.log('Body:', req.body.body);
    next();
}

app.use(requestLogger);

let notes = [
    {
        id: "1",
        content: "HTML is easy",
        important: true
    },
    {
        id: "2",
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: "3",
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }
];

app.get('/', (req, res) => {
   res.send('<h1>Hello World !</h1>')
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    const note = notes.find(node => node.id === id);
    if (!note) {
        return res.status(404).end();
    }
    res.json(note);
});

const generateId = () => {
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => Number(n.id)))
        : 0;
    return String(maxId + 1);
}

app.post('/api/notes', (req, res) => {

    const body = req.body;

    if (!body.content) {
        return res.status(400).json({
            error: 'Content missing'
        });
    }

    const note = {
        content: body.content,
        important: Boolean(body.important) || false,
        id : generateId()
    }

    notes = notes.concat(note);
    res.json(note);
});

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    notes = notes.filter(node => node.id !== id);
    res.status(204).end();
});

const unknownEndpoint = (req, res) => {
    res.status(404).send({
        error: 'Unknown endpoint'
    });
}

app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});