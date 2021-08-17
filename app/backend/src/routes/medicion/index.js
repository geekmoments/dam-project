/*====================================================================================
    Autor:  Pablo Zizzutti  <pablozizzutti@gmail.com>
    Desarrollo de aplicaciones Multiplataforma (DAM)
  
    Fecha: 2021/08
 
    Docente:   Brian Ducca
====================================================================================*/
 

// Importacion de dependencias
var express = require('express'); 
var routerMedicion = express.Router(); 
var mysql = require('../../mysql');
 
// solicitud HTTP del tipo GET
// recibe un id como parametro y devuelve la ultima medicion 
routerMedicion.get('/:id', function(req, res) 
{
    mysql.query("SELECT * FROM Mediciones WHERE dispositivoId = ? ORDER BY fecha DESC", [req.params.id], function(err, result) {
        if(err)
        {
            res.send(err).status(400);
        }
        res.send(result[0]);
    });
});

// solicitud HTTP del tipo GET
// recibe un id como parametro y devuelve todas las mediciones  
routerMedicion.get('/:id/all', function(req, res) 
{
    mysql.query("SELECT * FROM Mediciones WHERE dispositivoId = ? ORDER BY fecha ASC", [req.params.id], function(err, result) {
        if(err)
        {
            res.send(err).status(400);
        }
        res.send(result);
    });
});


// solicitud HTTP del tipo POST
// recibe un json e inserta los valores en la tabla mediciones 
routerMedicion.post('/add', function(req, res) 
{
    mysql.query("INSERT INTO Mediciones (fecha, valor, dispositivoId) VALUES (?, ?, ?)", [req.body.fecha, req.body.valor, req.body.dispositivoId], function(err, result) {
        if(err)
        {
            res.send(err).status(400);
        }
        res.send(result);
    });
});

// Exportacion del modulo
module.exports = routerMedicion;
 