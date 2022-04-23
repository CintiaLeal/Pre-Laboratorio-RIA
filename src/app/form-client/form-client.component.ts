import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../class/cliente';
import { Producto } from '../class/producto';
import { Venta } from '../class/venta';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form-client',
    templateUrl: './form-client.component.html',
    styleUrls: ['./form-client.component.css']
})


export class FormClientComponent implements OnInit {
    public cantCliente: number;
    constructor(private formBuilder: FormBuilder, private router: Router) {
        this.cantCliente = 0
    }

    registerForm = this.formBuilder.group({
        documento: ["", [Validators.required]],
        nombre: ["", [Validators.required]],
        apellido: ["", [Validators.required]],
        fechaNacimiento: ["", [Validators.required]],
        direccion: ["", [Validators.required]],
        telefono: ["", [Validators.required]]
    })

    ngOnInit(): void {
        localStorage.clear()
    }

    getClients() {
        let arr = []
        for (let i = 0; i <= this.cantCliente; i++) {
            let aux = window.localStorage.getItem(`client ${i}`)
            if (typeof aux === "string") {
                let client = JSON.parse(aux)
                arr.push(new Cliente(client.documento, client.nombre, client.apellido, client.fechaNacimiento, client.direccion, client.telefono))
            }
        }
        return arr
    }

    getVentas() {
    }

    getProductos() {
        let storage = window.localStorage.getItem("arrProductos")
        if (storage) {
            let arrStorage = storage.split(',')
            let arrProducts = [];
            for (let i in arrStorage) {
                let produc = JSON.parse(arrStorage[i])
                arrProducts.push(new Producto(produc.nombre, produc.descripcion, produc.precio, produc.imagen))
            }
            return arrProducts

        }
        return []
    }

    setClients(cliente: Cliente) {
        let objClient = {
            documento: cliente.getDocumento(),
            nombre: cliente.getNombre(),
            apellido: cliente.getApellido(),
            fechaNacimiento: cliente.getFechaNacimiento(),
            direccion: cliente.getDireccion(),
            telefono: cliente.getTelefono()
        }
        window.localStorage.setItem(`client ${this.cantCliente}`, JSON.stringify(objClient))
        this.cantCliente += 1
    }

    setVentas(venta: Venta) {

    }

    setProductos(producto: Producto) {
        let storage = window.localStorage.getItem("arrProductos")

        let objProducts = {
            nombre: producto.getNombre(),
            descripcion: producto.getDescripcion(),
            precio: producto.getPrecio(),
            imagen: producto.getImagen()
        }

        if (storage) {
            storage += "," + JSON.stringify(objProducts)
            window.localStorage.setItem("arrProductos", storage)

        }
        else
            window.localStorage.setItem("arrProductos", JSON.stringify(objProducts))
    }

    send(): void {
        let form = this.registerForm.value
        this.setClients(new Cliente(form.documento, form.nombre, form.apellido, form.fechaNacimiento, form.direccion, form.telefono))
        console.log(this.getClients())
    }
}
