/*====================================================================================
    Autor:  Pablo Zizzutti  <pablozizzutti@gmail.com>
    Desarrollo de aplicaciones Multiplataforma (DAM)
  
    Fecha: 2021/08
 
    Docente:   Brian Ducca
====================================================================================*/


// Importacion de dependencias
var express = require('express'); 
var routerValvula = express.Router(); 
var mysql = require('../../mysql');

// solicitud HTTP del tipo GET
// recibe un id como parametro y devuelve la ultima medicion

routerValvula.get('/:id', function(req, res) 
{
    mysql.query("SELECT electrovalvulaid FROM Electrovalvulas WHERE nombre = ?", [req.params.id], function(err, result) {
        if(err)
        {
            res.send(err).status(400);
        }
        res.send(result);
    });
});

// Exportacion del modulo
module.exports = routerValvula;
