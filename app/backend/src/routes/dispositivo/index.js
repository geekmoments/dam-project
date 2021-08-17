/*====================================================================================
    Autor:  Pablo Zizzutti  <pablozizzutti@gmail.com>
    Desarrollo de aplicaciones Multiplataforma (DAM)
  
    Fecha: 2021/08
 
    Docente:   Brian Ducca
====================================================================================*/


// Importacion de dependencias
var express = require('express');
var routerDispositivo = express.Router();
var mysql = require('../../mysql');


// solicitud HTTP del tipo GET
// devolucion de todos los dispositivos
routerDispositivo.get('/', function(req, res) {
    mysql.query("SELECT * FROM Dispositivos", function(err, result) {
        if(err)
        {
            res.send(err).status(400);
        }
        res.send(result);
    });
});

// solicitud HTTP del tipo GET
// recibe un id como parametro y devuelve los datos del mismo
routerDispositivo.get('/:id', function(req, res) {
    mysql.query("SELECT * FROM Dispositivos WHERE dispositivoId = ?", [req.params.id], function(err, result) {
        if(err)
        {
            res.send(err).status(400);
        }
        res.send(result[0]);
    });
});

// solicitud HTTP del tipo GET
// recibe un id como parametro de dispositivo y devuelve el id de la electrovalvula asociada

routerDispositivo.get('/:id/ev', function(req, res) {
    mysql.query("SELECT * FROM Electrovalvulas INNER JOIN Dispositivos ON Electrovalvulas.nombre = Dispositivos.ubicacion WHERE Dispositivos.dispositivoId = ?", [req.params.id], function(err, result) {
        if(err)
        {
            res.send(err).status(400);
        }
        res.send(result[0]);
    });
});

// Exportacion del modulo
module.exports = routerDispositivo;
