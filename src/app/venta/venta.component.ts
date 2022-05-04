import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../class/cliente';
import { Producto } from '../class/producto';
import { Venta } from '../class/venta';
import { Router } from '@angular/router';
@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  public cantCliente: number;
  public cantProducto: number;
  public cantVenta: number;
  public clientes: [String];
  public productos: [String];
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.cantCliente = 0
    let aux = window.localStorage.getItem('cantProducto')
    let auxProducto = window.localStorage.getItem('cantProducto')
    let auxCliente = window.localStorage.getItem('cantCliente')
    let auxVenta = window.localStorage.getItem('cantVenta')
    if (auxProducto === null) {
      this.cantProducto = 0
    } else {
      this.cantProducto = parseInt(auxProducto)
    }
    if (auxCliente === null) {
      this.cantCliente = 0
    } else {
      this.cantCliente = parseInt(auxCliente)
    }
    if (auxVenta === null) {
      this.cantVenta = 0
    } else {
      this.cantVenta = parseInt(auxVenta)
    }
    this.clientes = this.getClients()
    this.productos = this.getProductos()

  }


  registerForm = this.formBuilder.group({
    fecha: ["", [Validators.required]],
    cliente: ["", [Validators.required]],
    producto: ["", [Validators.required]]

  })



  ngOnInit(): void {
    //localStorage.clear()

  }

  getClients(): [String] {
    let arr: [String]
    arr = ["Selecciones un cliente"]
    for (let i = 0; i <= this.cantCliente; i++) {
      let aux = window.localStorage.getItem(`client ${i}`)
      if (typeof aux === "string") {
        let client = JSON.parse(aux)
        arr.push(client.documento)
        console.log(arr)
      }
    }
    return arr
  }
  getProductos(): [String] {
    let arr: [String]
    arr = ["Selecciones un producto"]
    for (let i = 0; i <= this.cantProducto; i++) {
      let aux = window.localStorage.getItem(`producto ${i}`)
      if (typeof aux === "string") {
        let produc = JSON.parse(aux)
        arr.push(produc.nombre)
      }
    }
    return arr
  }
  setVenta() {
    let productoElejido
    let clienteElejido
    for (let i = 0; i <= this.cantProducto; i++) {
      let aux = window.localStorage.getItem(`producto ${i}`)
      if (typeof aux === "string") {
        let produc = JSON.parse(aux)
        if (produc.nombre === this.registerForm.value.producto) {
          productoElejido = produc
        }

      }
    }
    for (let i = 0; i <= this.cantCliente; i++) {
      let aux = window.localStorage.getItem(`client ${i}`)
      if (typeof aux === "string") {
        let client = JSON.parse(aux)
        if (client.documento === this.registerForm.value.cliente) {
          clienteElejido = client
        }

      }

    }
    let objPro = {
      fecha: this.registerForm.value.fecha,
      cliente: clienteElejido,
      producto: productoElejido
    }
    window.localStorage.setItem(`venta ${this.cantVenta}`, JSON.stringify(objPro)) 
    this.cantVenta += 1
    window.localStorage.setItem('cantVenta',this.cantVenta.toString())
  }
  
  send(): void {
    let form = this.registerForm.value
    console.log(form.cliente)
    this.setVenta()
    this.alert()
  }
  alert(): void {
    Swal.fire({
      text: 'Compado',
      icon: 'success',
      confirmButtonText: 'Ok',
    })
  }
}

