import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientComponent } from './form-client/form-client.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { VentaComponent } from './venta/venta.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cliente', component: FormClientComponent },
    { path: 'venta', component: VentaComponent },
    { path: 'producto', component: ProductoComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
