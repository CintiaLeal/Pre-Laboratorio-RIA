import { Cliente } from "./cliente";
import { Producto } from "./producto";

export class Venta {
    fecha : Date;
    cliente : Cliente;
    producto : Producto;


    constructor(fecha: Date, cliente: Cliente, producto:Producto) {
        this.fecha = fecha;
        this.cliente = cliente;
        this.producto = producto;
       
    }
    getFecha() {
        return this.fecha
    }
    getCliente() {
        return this.cliente
    }
    getProducto(){
        return this.producto
    }
  
}
