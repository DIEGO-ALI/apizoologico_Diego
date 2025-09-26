/*
// - npm gestor de paquetes
// - npm i express --save
// -     node_modules  

'use strict';

const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Conten-Type': 'text/plain'});
});

server.listen(5000);
*/
/*
const express =  require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('¡Hola Mundo! y dieguito hola')
})

app.listen(port, ()=>{
    console.log('La aplicacion se esta ejecutando por el puerto,'+ `${port}`)
})

*/




// app.get()
// app el objeto, get (leer, obtener); 
// req: request
// res: response



const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const animalRoutes = require("./routes/animal.js");
const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false })); //permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON
//Gestión de las rutas usando el middleware
app.use("/api", animalRoutes);
app.use(express.json());
//Conexión a la base de datos
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Conexión exitosa"))
.catch((error) => console.log(error));
//Conexión al puerto
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
});
