const express = require("express");
require("dotenv").config();
const personsRoutes = require('./routes/persons');

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

// Disable CORS so that React client can freely access this server
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set("Access-Control-Allow-Methods", "*");
  next()
});

app.use('/persons', personsRoutes);

const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  if (err.name === 'CastError') {
    return res.status(400).send({error: 'Malformatted id'});
  }
  next(err);
}

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
