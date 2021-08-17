/*====================================================================================
    Autor:  Pablo Zizzutti  <pablozizzutti@gmail.com>
    Desarrollo de aplicaciones Multiplataforma (DAM)
  
    Fecha: 2021/08
 
    Docente:   Brian Ducca
====================================================================================*/
 
// Importacion de dependencias
var express = require('express');
var routerRiego = express.Router();
var mysql = require('../../mysql');
 

// solicitud HTTP del tipo GET
// recibe un id como parametro y devuelve la ultima medicion
routerRiego.get('/:id', function(req, res) 
{
    mysql.query("SELECT * FROM Log_Riegos WHERE electrovalvulaId = ? ORDER BY fecha DESC", [req.params.id], function(err, result) {
        if(err)
        {
            res.send(err).status(400);
        }
        res.send(result[0]);
    });
});

// solicitud HTTP del tipo GET
// recibe un id como parametro y devuelve todas las mediciones
routerRiego.get('/:id/all', function(req, res) 
{
    mysql.query("SELECT * FROM Log_Riegos WHERE electrovalvulaId = ? ORDER BY fecha ASC", [req.params.id], function(err, result) {
        if(err)
        {
            res.send(err).status(400);
        }
        res.send(result);
    });
});

// solicitud HTTP del tipo POST
// recibe un json e inserta los valores en la tabla mediciones 
routerRiego.post('/add', function(req, res) 
{
    mysql.query("INSERT INTO Log_Riegos (apertura, fecha, electrovalvulaId) VALUES (?, ?, ?)", [req.body.apertura, req.body.fecha, req.body.electrovalvulaId], function(err, result) {
        if(err)
        {
            res.send(err).status(400);
        }
        res.send(result);
    });
});

// Exportacion del modulo
module.exports = routerRiego;
 