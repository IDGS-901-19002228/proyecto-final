import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AdministracionComponent } from "./proyecto/administracion/administracion.component";
import { CatalogoComponent } from "./proyecto/catalogo/catalogo.component";
import { LoginComponent } from "./proyecto/login/login.component";
import { ProveedoresComponent } from "./proyecto/proveedores/proveedores.component";
import { RegistroComponent } from "./proyecto/registro/registro.component";
import { AcercaDeComponent } from "./proyecto/acerca-de/acerca-de.component";
import { ProductosComponent } from "./proyecto/productos/productos.component";
import { MateriaPrimaComponent } from "./proyecto/materia-prima/materia-prima.component";
import { UsuarioComponent } from "./proyecto/usuario/usuario.component";
import { AdministrarComponent } from "./proyecto/usuario/administrar/administrar.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatRadioModule } from "@angular/material/radio";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { CarritoCompraComponent } from "./proyecto/carrito/carrito-compra/carrito-compra.component";
import { PagoComponent } from "./proyecto/carrito/pago/pago.component";
import { VentasComponent } from "./proyecto/ventas/ventas.component";
import { AgregarProductoComponent } from "./proyecto/agregar-producto/agregar-producto.component";
import { ListProveedoresComponent } from "./proyecto/proveedores/list-proveedores/list-proveedores.component";
import { ListProductoComponent } from "./proyecto/agregar-producto/list-producto/list-producto.component";
import { ListMateriaPrimaComponent } from "./proyecto/materia-prima/list-materia-prima/list-materia-prima.component";
import { RecetaComponent } from "./proyecto/receta/receta.component";
import { ComprasComponent } from "./proyecto/compras/compras.component";
import { DashboardComponent } from "./proyecto/dashboard/dashboard.component";

const routes:Routes=[
    {path: '',redirectTo: '/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'AdministracionComponent', component: AdministracionComponent },
    {path: 'CatalogoComponent', component: CatalogoComponent },
    {path: 'LoginComponent', component: LoginComponent },
    {path: 'ListProveedoresComponent', component: ListProveedoresComponent },
    {path: 'ProveedoresComponent', component: ProveedoresComponent },
    {path: 'RegistroComponent', component: RegistroComponent },
    {path: 'AcercaDeComponent', component: AcercaDeComponent },
    {path: 'ProductosComponent', component: ProductosComponent },
    {path: 'MateriaPrimaComponent', component: MateriaPrimaComponent },
    {path: 'ListMateriaPrimaComponent', component: ListMateriaPrimaComponent },
    {path: 'UsuarioComponent', component: UsuarioComponent},
    {path: 'AdministrarComponent', component: AdministrarComponent},
    {path: 'CarritoCompraComponent', component: CarritoCompraComponent},
    {path: 'PagoComponent', component: PagoComponent},
    {path: 'VentasComponent', component: VentasComponent},
    {path: 'AgregarProductoComponent', component: AgregarProductoComponent},
    {path: 'ListProductoComponent', component: ListProductoComponent },
    {path: 'RecetaComponent', component: RecetaComponent },
    {path: 'ComprasComponent', component: ComprasComponent },
    {path: 'DashboardComponent', component: DashboardComponent },
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatRadioModule,
        MatFormFieldModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule{}
