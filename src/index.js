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

const express =  require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('¡Hola Mundo! y dieguito hola')
})

app.listen(port, ()=>{
    console.log('La aplicacion se esta ejecutando por el puerto,'+ `${port}`)
})






// app.get()
// app el objeto, get (leer, obtener); 
// req: request
// res: response