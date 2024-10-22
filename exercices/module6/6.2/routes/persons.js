const router = require('express').Router()
const Person = require('../models/person')

router.get("/", (req, res, next) => {
  Person.find({}).then(persons => {
    res.json(persons);
  }).catch(err => next(err));
})

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Person.findById(id).then(result => {
    res.json(result);
  }).catch(err => next(err));
})

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Person.findByIdAndDelete(id).then(result => {
    res.status(204).end();
  }).catch(err => next(err));
})

router.post("/", (req, res, next) => {
  const personPayload = req.body;
  const newPerson = new Person({
    ...personPayload,
  });

  const errorMessages = [];
  if (!personPayload.name) {
    errorMessages.push("name must be present");
  }
  if (!personPayload.number) {
    errorMessages.push("number must be present");
  }

  Person.find({name: newPerson.name}).then(result => {
    if (result.length > 0) {
      errorMessages.push("name must be unique");
    }
  }).catch(err => next(err));

  if (errorMessages.length > 0) {
    return res.status(422).json({ errorMessages });
  }
  newPerson.save().then(savedPerson => {
    res.json(savedPerson);
  }).catch(err => next(err));

})

router.put("/:id", (req, res, next) => {
  const personPayload = req.body;
  const id = req.params.id;
  const person = {
    name: personPayload.name,
    number: personPayload.number,
  }
  Person.findByIdAndUpdate(id, person, {new: true}).then(updatedPerson => {
    res.json(updatedPerson);
  }).catch(err => next(err));

})

module.exports = router
