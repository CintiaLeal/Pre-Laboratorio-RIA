import { Component, OnInit } from '@angular/core';
import { Cliente } from '../class/cliente';
import { Producto } from '../class/producto';
import { Venta } from '../class/venta';

@Component({
    selector: 'app-form-client',
    templateUrl: './form-client.component.html',
    styleUrls: ['./form-client.component.css']
})

export class FormClientComponent implements OnInit {

    ngOnInit(): void {

    }

    getClients() {
        let storage = window.localStorage.getItem("arrClients")
        if (storage) {
            let arrStorage = storage.split(',')
            let arrClient = []; //Es lo que tengo que devolver. DEVUELVE (Cliente[])
            for (let i in arrStorage) {
                let client = JSON.parse(arrStorage[i])
                arrClient.push(new Cliente(client.documento, client.nombre, client.apellido, client.fechaNacimiento, client.direccion, client.telefono))
            }
            return arrClient
        }
        return []

    }

    getVentas() {
    }

    getProductos() {
        window.localStorage.getItem("arrProductos")
    }

    setClients(cliente: Cliente) {
        let storage = window.localStorage.getItem("arrClients")

        let objClient = {
            documento: cliente.getDocumento(),
            nombre: cliente.getNombre(),
            apellido: cliente.getApellido(),
            fechaNacimiento: cliente.getFechaNacimiento(),
            direccion: cliente.getDireccion(),
            telefono: cliente.getTelefono()
        }

        if (storage) {
            storage += "," + JSON.stringify(objClient)
            window.localStorage.setItem("arrClients", storage)
        }
        else
            window.localStorage.setItem("arrClients", JSON.stringify(objClient))
    }

    setVentas(venta: Venta) {

    }

    setProductos(producto: Producto) {
    }
}
