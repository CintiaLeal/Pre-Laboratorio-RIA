import Swal from 'sweetalert2';
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
        let auxCliente = window.localStorage.getItem('cantCliente')  
        if(auxCliente===null){
          this.cantCliente = 0
        }else{
          this.cantCliente =  parseInt(auxCliente)  
        }
      
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
      //  localStorage.clear()
    }

    getClients() {
        let arr = []
        for (let i = 0; i <= this.cantCliente; i++) {
            let aux = window.localStorage.getItem(`client ${i}`)
            if (typeof aux === "string") {
                let client = JSON.parse(aux)
                arr.push(new Cliente(this.cantCliente, client.documento, client.nombre, client.apellido, client.fechaNacimiento, client.direccion, client.telefono))
            }
        }
        return arr
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
        window.localStorage.setItem('cantCliente',this.cantCliente.toString())

    }
    send(): void {
        let form = this.registerForm.value
        this.setClients(new Cliente(this.cantCliente, form.documento, form.nombre, form.apellido, form.fechaNacimiento, form.direccion, form.telefono))
        console.log(this.getClients())
        this.alert()
    }

    alert(): void {
        Swal.fire({
            text: 'Cliente creado con éxito',
            icon: 'success',
            confirmButtonText: 'Ok',
        })
    }
}
