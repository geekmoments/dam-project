/*====================================================================================
    Autor:  Pablo Zizzutti  <pablozizzutti@gmail.com>
    
    Desarrollo de aplicaciones Multiplataforma (DAM)
  
    Fecha: 2021/08
 
    Docente:   Brian Ducca
====================================================================================*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Riego } from '../model/Riego';

@Injectable({
  providedIn: 'root'
})

export class RiegoService
{
    urlBackend = "http://localhost:8000/api/";

    constructor(private _http: HttpClient) 
    {

    }

    // Devuelve todas las mediciones de un disp.
    // Se convierte el request en promesa
    getRiegos(id): Promise <Riego[]> 
    {
        return this._http.get(this.urlBackend + "riego/" + id + "/all").toPromise().then((sprinkle: Riego[]) => {
            return sprinkle;
        });
    }
    // Devuelve todas las mediciones de un disp.
    // Se convierte el request en promesa
    getRiego(id): Promise <Riego>
    {     
        return this._http.get(this.urlBackend + "riego/" + id).toPromise().then((sprinkle: Riego) => {
            return sprinkle;
        });
    }
    // Insertar en la DB una nueva medicion
    // Se convierte el request en promesa
    postRiego(sprinkle: Riego)
    {
        // Convertimos el "request" HTTP de observable a promesa.
        return this._http.post(this.urlBackend + "riego/add", {apertura: sprinkle.apertura, fecha: sprinkle.fecha, electrovalvulaId: sprinkle.electrovalvulaId}).toPromise().then((result) => {
            return result;
        });
    }
}