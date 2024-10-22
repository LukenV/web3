const mongoose = require('mongoose');
require('dotenv').config();
const password = process.env.PASSWORD;
const username = process.env.USER_NAME;
const collection = process.env.COLLECTION;
const database = process.env.DATABASE;
const appName = process.env.APP_NAME;

const url =
    `mongodb+srv://${username}:${password}@${database}.x572d.mongodb.net/${collection}?retryWrites=true&w=majority&appName=${appName}`;

mongoose.set('strictQuery', false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
});

const Note = mongoose.model('Note', noteSchema);

/*const note = new Note({
    content: 'HTML is easy',
    important: true
});

note.save().then(result => {
   console.log('Note saved !');
   mongoose.connection.close();
});*/

Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note);
    });
    mongoose.connection.close();
});