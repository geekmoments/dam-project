/*====================================================================================
    Autor:  Pablo Zizzutti  <pablozizzutti@gmail.com>
    
    Desarrollo de aplicaciones Multiplataforma (DAM)
  
    Fecha: 2021/08
 
    Docente:   Brian Ducca
====================================================================================*/

export class Electrovalvula
{
    // Atributos de la clase Electrovalvula
    private _electrovalvulaId: number;
    private _nombre: string;

    // Constructor de la clase Electrovalvula
    constructor(electrovalvulaId, nombre)
    {
        this._electrovalvulaId = electrovalvulaId;
        this._nombre = nombre;
    }

    // Definición de los getters y los setter de la clase Electrovalvula
    public get electrovalvulaId(): number 
    {
        return this._electrovalvulaId;
    }

    public set electrovalvulaId(value: number)
    {
        this._electrovalvulaId = value;
    }

    public get nombre(): string 
    {
        return this._nombre;
    }

    public set nombre(value: string)
    {
        this._nombre = value;
    }
}