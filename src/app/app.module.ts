import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormClientComponent } from './form-client/form-client.component';
import { HomeComponent } from './home/home.component';
import { VentaComponent } from './venta/venta.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
    declarations: [
        AppComponent,
        FormClientComponent,
        HomeComponent,
        VentaComponent,
        ProductoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { 
    
}
