class Cliente{
    documento: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    direccion: string;
    telefono: string;


constructor(documento: string, nombre: string, apellido:string, fechaNacimiento:Date, direccion:string, telefono:string){
    this.documento = documento;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.direccion = direccion;
    this.telefono = telefono;

}

}