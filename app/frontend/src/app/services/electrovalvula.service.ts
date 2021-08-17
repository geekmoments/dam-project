/*====================================================================================
    Autor:  Pablo Zizzutti  <pablozizzutti@gmail.com>
    
    Desarrollo de aplicaciones Multiplataforma (DAM)
  
    Fecha: 2021/08
 
    Docente:   Brian Ducca
====================================================================================*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Electrovalvula } from '../model/Electrovalvula';

@Injectable({
  providedIn: 'root'
})

export class ElectrovalvulaService
{
    urlBackend = "http://localhost:8000/api/";

    constructor(private _http: HttpClient) 
    {

    }
    // Método que devolverá el id de la electrovalvula asociada al disp con su nombre
    // Se convierte el request en promesa
    getRiego(nombreDisp): Promise <Electrovalvula>
    {     
        return this._http.get(this.urlBackend + "ev/" + nombreDisp).toPromise().then((valve: Electrovalvula) => {
            return valve;
        });
    }
}