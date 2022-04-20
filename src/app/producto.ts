class Producto{
    nombre: string;
    descripcion: string;
    precio: DoubleRange;
    imagen: string;

    constructor(nombre:string, descripcion:string, precio:DoubleRange, imagen: string){
        this.nombre =  nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
}
