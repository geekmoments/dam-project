/*====================================================================================
    Autor:  Pablo Zizzutti  <pablozizzutti@gmail.com>
    
    Desarrollo de aplicaciones Multiplataforma (DAM)
  
    Fecha: 2021/08
 
    Docente:   Brian Ducca
====================================================================================*/

export class Medicion
{
    // Atributos de la clase Medicion
    private _medicionId: number;
    private _fecha: Date; 
    private _valor: number;
    private _dispositivoId: number;

    // Constructor de la clase Medicion
    constructor(medicion, fecha, valor, dispositivoId)
    {
        this._medicionId = medicion;
        this._fecha = fecha;
        this._valor = valor;
        this._dispositivoId = dispositivoId;
    }

    // Definición de los getters y los setter de la clase Medicion
    public get medicionId(): number
    {
        return this._medicionId;
    }

    public set medicionId(value: number) 
    {
        this._medicionId = value;
    }

    public get fecha(): Date 
    {
        return this._fecha;
    }

    public set fecha(value: Date) 
    {
        this._fecha = value;
    }

    public get valor(): number 
    {
        return this._valor;
    }

    public set valor(value: number) 
    {
        this._valor = value;
    }
    
    public get dispositivoId(): number 
    {
        return this._dispositivoId;
    }
    
    public set dispositivoId(value: number) 
    {
        this._dispositivoId = value;
    }
}