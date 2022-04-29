import { Component, OnInit } from '@angular/core';

import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../class/cliente';
import { Producto } from '../class/producto';
import { Venta } from '../class/venta';
import { Router } from '@angular/router';

@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.css', '../../assets/style.css']
})
export class ProductoComponent implements OnInit {
    public cantProducto: number;
    constructor(private formBuilder: FormBuilder, private router: Router) {
        this.cantProducto = 0;
    }
    registerForm = this.formBuilder.group(
        {
            nombre: ["", [Validators.required]],
            descripcion: ["", [Validators.required]],
            precio: ["", [Validators.required]],
            //    img: ["", [Validators.required]]
        })
    ngOnInit(): void {
        localStorage.clear()
    }





    getProductos() {
        let arr = []
        for (let i = 0; i <= this.cantProducto; i++) {
            let aux = window.localStorage.getItem(`produc ${i}`)
            if (typeof aux === "string") {
                let produc = JSON.parse(aux)
                arr.push(new Producto(produc.nombre, produc.descripcion, produc.precio, /*produc.imagen*/))
            }
        }
        return arr
    }


    setProductos(producto: Producto) {
        let objPro = {
            documento: producto.getNombre(),
            nombre: producto.getDescripcion(),
            apellido: producto.getPrecio(),
            // fechaNacimiento: producto.getImagen(),

        }
        window.localStorage.setItem(`client ${this.cantProducto}`, JSON.stringify(objPro))
        this.cantProducto += 1
    }




    send(): void {
        let form = this.registerForm.value
        this.setProductos(new Producto(form.nombre, form.describe, form.precio, /*form.img*/))
        console.log(this.getProductos())
    }
}
