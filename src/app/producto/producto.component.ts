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
        let auxProducto = window.localStorage.getItem('cantProducto')  
        if(auxProducto===null){
          this.cantProducto = 0
        }else{
          this.cantProducto =  parseInt(auxProducto)  
        }  
    }




    registerForm = this.formBuilder.group(
        {
            nombre: ["", [Validators.required]],
            descripcion: ["", [Validators.required]],
            precio: ["", [Validators.required]],
            imagen: [""]
        })
    ngOnInit(): void {
      //  localStorage.clear()
    }

    getProductos() {
        let arr = []
        for (let i = 0; i <= this.cantProducto; i++) {
            let aux = window.localStorage.getItem(`produc ${i}`)
            if (typeof aux === "string") {
                let produc = JSON.parse(aux)
                arr.push(new Producto(produc.nombre, produc.descripcion, produc.precio, produc.imagen))
            }
        }
        return arr
    }


    setProductos(producto: Producto) {
        let objPro = {
            nombre: producto.getNombre(),
            describe: producto.getDescripcion(),
            precio: producto.getPrecio(),
            imagen: producto.getImagen(),

        }
        window.localStorage.setItem(`producto ${this.cantProducto}`, JSON.stringify(objPro))
        this.cantProducto += 1
        window.localStorage.setItem('cantProducto',this.cantProducto.toString())
    }

    send(): void {
         let form = this.registerForm.value
         this.setProductos(new Producto(form.nombre, form.describe, form.precio, form.imagen))
         console.log(this.getProductos())
    }
}
