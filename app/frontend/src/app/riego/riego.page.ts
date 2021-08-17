/*====================================================================================
    Autor:  Pablo Zizzutti  <pablozizzutti@gmail.com>
    
    Desarrollo de aplicaciones Multiplataforma (DAM)
  
    Fecha: 2021/08
 
    Docente:   Brian Ducca
====================================================================================*/


import { Component, OnInit } from '@angular/core';
import { Riego } from '../model/Riego';
import { RiegoService } from '../services/riego.service'
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-riego',
    templateUrl: './riego.page.html',
    styleUrls: ['./riego.page.scss'],
})

export class RiegoPage implements OnInit 
{
  	// Acumulacion del identificador del dispositivo.
	public idDispositivo: string;
	// Flag del *ngIf.
	public noData: boolean = true;
	// Variable para almacenar la respuesta desde el backend.
	public listadoRiego: Riego[];
	
	constructor(private router: ActivatedRoute, public riegoServ: RiegoService)
	{
		// Obtencion del id del sensor con el evento click
		this.idDispositivo = this.router.snapshot.paramMap.get('id');
		
		this.riegoServ.getRiegos(this.idDispositivo).then((listado) => {
			this.noData = false;
			this.listadoRiego = listado;
		});
	}

	ngOnInit(): void 
	{

	}
}
