/*====================================================================================
    Autor:  Pablo Zizzutti  <pablozizzutti@gmail.com>
    
    Desarrollo de aplicaciones Multiplataforma (DAM)
  
    Fecha: 2021/08
 
    Docente:   Brian Ducca
====================================================================================*/

export class Riego
{
    // Atributos de la clase Riego
    private _logRiegoId: number;
    private _apertura: number;
    private _fecha: Date;
    private _electrovalvulaId: number;

    // Constructor de la clase Riego
    constructor(logRiegoId, apertura, fecha, electrovalvulaId)
    {
        this._logRiegoId = logRiegoId;
        this._apertura = apertura;
        this._fecha = fecha;
        this._electrovalvulaId = electrovalvulaId;
    }

    // Definición de los getters y los setter de la clase Riego
    public get logRiegoId(): number 
    {
        return this._logRiegoId;
    }

    public set logRiegoId(value: number)
    {
        this._logRiegoId = value;
    }

    public get apertura(): number 
    {
        return this._apertura;
    }

    public set apertura(value: number)
    {
        this._apertura = value;
    }

    public get fecha(): Date 
    {
        return this._fecha;
    }

    public set fecha(value: Date)
    {
        this._fecha = value;
    }

    public get electrovalvulaId(): number 
    {
        return this._electrovalvulaId;
    }

    public set electrovalvulaId(value: number)
    {
        this._electrovalvulaId = value;
    }
}