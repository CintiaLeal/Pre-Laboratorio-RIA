import { Component, OnInit } from '@angular/core';
let iniciar = false;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  constructor() {
    
    if(iniciar == false){
      localStorage.clear()
      window.localStorage.setItem('cantCliente','0')
      window.localStorage.setItem('cantProducto','0')
      iniciar = true
    }
    
   }

  ngOnInit(): void {
    
  }

}
