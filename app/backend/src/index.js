/*====================================================================================
    Autor:  Pablo Zizzutti  <pablozizzutti@gmail.com>
    
    Desarrollo de aplicaciones Multiplataforma (DAM)
  
    Fecha: 2021/08
 
    Docente:   Brian Ducca
====================================================================================*/
 
// Exportacion del modulo - conexion al puerto 3000
var express = require('express');
var app = express();
var puerto = 3000;

// Importacion de CORS.
var cors = require('cors');

// Se realizan las importaciones de las rutas 
var dispositivoRoute = require('./routes/dispositivo');
var meidicionRoute = require('./routes/medicion');
var riegoRoute = require('./routes/riego');
var valvulaRoute = require('./routes/electrovalvula');
app.use(express.json());
 

// Permito conexiones desde cualquier dominio en CORS.
var corsOptions = {origin: '*', optionSuccessStatus: "200"};


app.use(cors(corsOptions));

// direccionamiento de las rutas
app.use('/api/dispositivo', dispositivoRoute);

app.use('/api/medicion', meidicionRoute);

app.use('/api/ev', valvulaRoute);

app.use('/api/riego', riegoRoute);

// Se levanta la api en el puerto indicado
app.listen(puerto, function(req, res) {
    console.log("API Ok!");
});
 