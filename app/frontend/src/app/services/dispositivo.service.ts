/*====================================================================================
    Autor:  Pablo Zizzutti  <pablozizzutti@gmail.com>
    
    Desarrollo de aplicaciones Multiplataforma (DAM)
  
    Fecha: 2021/08
 
    Docente:   Brian Ducca
====================================================================================*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';

@Injectable({
    providedIn: 'root'
})

export class DispositivoService
{
	urlBackend = "http://localhost:8000/api/";
    
    constructor(private _http: HttpClient) 
    {
        
    }	
	// Metodo para hacer un GET de todos los dispositivos
    // Se convierte el request en promesa
    getDispositivos(): Promise <Dispositivo[]> 
    { 
        return this._http.get(this.urlBackend + "dispositivo").toPromise().then((listado: Dispositivo[]) => {
            return listado;
        });
    }
	// Método que devolverá el dispositivo especificado a través de su "id".
    // Se convierte el request en promesa
    getDispositivo(id): Promise <Dispositivo>
    {         
		return this._http.get(this.urlBackend + "dispositivo/" + id).toPromise().then((listado: Dispositivo) => {
            return listado;
        });
    }
    // Método que devolverá la valvula asociada al disp. a través de su "id".
    // Se convierte el request en promesa
    getElectrovalvula(id): Promise <Dispositivo>
    {         
        return this._http.get(this.urlBackend + "dispositivo/" + id + "/ev").toPromise().then((listado: Dispositivo) => {
            return listado;
        });
    }

}