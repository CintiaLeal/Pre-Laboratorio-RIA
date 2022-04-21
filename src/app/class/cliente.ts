export class Cliente {
    documento: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    direccion: string;
    telefono: string;


    constructor(documento: string, nombre: string, apellido: string, fechaNacimiento: string, direccion: string, telefono: string) {
        this.documento = documento;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    getDocumento() {
        return this.documento
    }
    getNombre() {
        return this.nombre
    }
    getApellido() {
        return this.apellido
    }
    getFechaNacimiento() {
        return this.fechaNacimiento
    }
    getDireccion() {
        return this.direccion
    }
    getTelefono() {
        return this.telefono
    }
}