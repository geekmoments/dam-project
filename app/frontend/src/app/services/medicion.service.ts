/*====================================================================================
    Autor:  Pablo Zizzutti  <pablozizzutti@gmail.com>
    
    Desarrollo de aplicaciones Multiplataforma (DAM)
  
    Fecha: 2021/08
 
    Docente:   Brian Ducca
====================================================================================*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicion } from '../model/Medicion';

@Injectable({
  providedIn: 'root'
})

export class MedicionService
{
    urlBackend = "http://localhost:8000/api/";

    constructor(private _http: HttpClient) 
    {

    }
    // Devuelve todas las mediciones de un disp.
    // Se convierte el request en promesa
    getMediciones(id): Promise <Medicion[]> 
    {
        return this._http.get(this.urlBackend + "medicion/" + id + "/all").toPromise().then((measurement: Medicion[]) => {
            return measurement;
        });
    }
    // Devuelve todas las mediciones recientes del dispositivo
    // Se convierte el request en promesa
    getMedicion(id): Promise <Medicion>
    {     
        return this._http.get(this.urlBackend + "medicion/" + id).toPromise().then((measurement: Medicion) => {
            return measurement;
        });
    }
    // Insertar en la DB una nueva medicion
    // Se convierte el request en promesa
    postMedicion(measurement: Medicion)
    {
        return this._http.post(this.urlBackend + "medicion/add", {fecha: measurement.fecha, valor: measurement.valor, dispositivoId: measurement.dispositivoId}).toPromise().then((result) => {
            return result;
        });
    }
}