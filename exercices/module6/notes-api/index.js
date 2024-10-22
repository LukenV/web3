const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const Note = require('./models/note');

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

app.get('/', (req, res) => {
   res.send('<h1>Hello World !</h1>')
});

app.get('/api/notes', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes);
    })
});

app.get('/api/notes/:id', (req, res, next) => {
    const {id} = req.params;
    Note.findById(id).then(note => {
        if (note) {
            res.json(note);
        } else {
            res.status(404).end();
        }
    }).catch(err => next(err));
});

app.post('/api/notes', (req, res) => {

    const body = req.body;

    if (!body.content) {
        return res.status(400).json({
            error: 'Content missing'
        });
    }

    const note = new Note({
        content: body.content,
        important: body.important || false,
    });

    note.save().then(savedNote => {
        res.json(savedNote);
    });
});

app.delete('/api/notes/:id', (req, res, next) => {
    const {id} = req.params;
    Note.findByIdAndDelete(id).then(result => {
        res.status(204).end();
    }).catch(err => next(err));
});

app.put('/api/notes/:id', (req, res, next) => {
    const {id} = req.params;
    const {body} = req;

    const note = {
        content: body.content,
        important: body.important
    }

    Note.findByIdAndUpdate(id, note, {new: true}).then(updatedNote => {
        res.json(updatedNote);
    }).catch(err => next(err));
});

const unknownEndpoint = (req, res) => {
    res.status(404).send({
        error: 'Unknown endpoint'
    });
}

app.use(unknownEndpoint);

const errorHandler = (err, req, res, next) => {
    console.error(err.message);

    if (err.name === 'CastError') {
        return res.status(400).send({error: 'Malformatted id'});
    }

    next(err);
}

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});