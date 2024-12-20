const mongoose = require('mongoose')

const url = process.env.MONGODB_URI;

mongoose.set('strictQuery',false)
mongoose.connect(url).then(result => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.log('Error connecting to MongoDB:', err.message);
    });

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
});

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;