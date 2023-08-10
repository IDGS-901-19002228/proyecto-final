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

const routes:Routes=[
    {path: '',redirectTo: '/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'AdministracionComponent', component: AdministracionComponent },
    {path: 'CatalogoComponent', component: CatalogoComponent },
    {path: 'LoginComponent', component: LoginComponent },
    {path: 'ProveedoresComponent', component: ProveedoresComponent },
    {path: 'RegistroComponent', component: RegistroComponent },
    {path: 'AcercaDeComponent', component: AcercaDeComponent },
    {path: 'ProductosComponent', component: ProductosComponent },
    {path: 'MateriaPrimaComponent', component: MateriaPrimaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{}
