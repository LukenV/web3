const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

mongoose.set('strictQuery', false);
mongoose.connect(url).then(result => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Error connecting to MongoDB:', err.message);
});

const personSchema = new mongoose.Schema({
   name: String,
   number: String
});

personSchema.set('toJSON', {
   transform: (document, returnedObject) => {
       returnedObject.id = returnedObject._id.toString();
       delete returnedObject._id;
       delete returnedObject.__v;
   }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;