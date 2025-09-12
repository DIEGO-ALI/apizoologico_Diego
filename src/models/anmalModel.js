const mongoose = require("mongoose"); // Importando el componente Mogoose

const aniamSchea = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
    },
    edad: {
        type: Number,
        requiered:true,
    }// CONTINUAR CON LAS DEAPSOTIVAS DIEGO
})