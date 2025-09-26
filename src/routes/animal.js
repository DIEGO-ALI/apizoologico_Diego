const express = require("express");
const router = express.Router(); //manejador de rutas de express
const animalSchema = require("../models/animalModel.js");
//Nuevo animal
router.post("/animal", (req, res) => {
 const animal = animalSchema(req.body);
 animal
     .save()
     .then((data) => res.json(data))
     .catch((error) => res.json({ message: error }));
});
module.exports = router;
