import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

import { MenuComponent } from './proyecto/menu/menu.component';
import { AdministracionComponent } from './proyecto/administracion/administracion.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './proyecto/login/login/login.module';
import { RouterModule } from '@angular/router';
import { RegistroModule } from './proyecto/registro/registro/registro.module';
import { AcercaDeModule } from './proyecto/acerca-de/acerca-de/acerca-de.module';
import { FooterComponent } from './proyecto/footer/footer.component';
import { MateriaPrimaComponent } from './proyecto/materia-prima/materia-prima.component';
import { UsuarioModule } from './proyecto/usuario/usuario/usuario.module';
import { AdministrarModule } from './proyecto/usuario/administrar/administrar/administrar.module';
import { PagoComponent } from './proyecto/carrito/pago/pago.component';
import { CarritoCompraComponent } from './proyecto/carrito/carrito-compra/carrito-compra.component';
import { VentasComponent } from './proyecto/ventas/ventas.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AdministracionComponent,
    MateriaPrimaComponent,
    CarritoCompraComponent,
    PagoComponent,
    VentasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    LoginModule,
    RegistroModule,
    AcercaDeModule,
    UsuarioModule,
    AdministrarModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
