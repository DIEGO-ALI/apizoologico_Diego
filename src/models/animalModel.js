/*const mongoose = require("mongoose"); // Importando el componente Mogoose

const aniamSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
    },
    edad: {
        type: Number,
        requiered:true,
    }// CONTINUAR CON LAS DEAPSOTIVAS DIEGO
})*/

const mongoose = require("mongoose"); // importando el componente mongoose
const animalSchema = mongoose.Schema({
    nombre:{
    type: String,
    requiered: true,
    },
    edad:{
        type:Number,
        requiered: true,
    },
    tipo: {
        type: String,
        requiered: true,
    },
    fecha: {
        type: Date,
        requiered:true
    }
});
module.exports = mongoose.model("Animal", animalSchema)