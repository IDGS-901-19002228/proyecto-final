import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css']
})
export class AdministrarComponent {

  usuarios: any[] = []; // Aquí almacenaremos la lista de usuarios

  mostrarFormulario = false;
  usuarioSeleccionado: any = {}; // Declarar esta variable en tu componente


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerUsuarios();
  }

  alternarFormulario(usuario: any) {
    this.usuarioSeleccionado = usuario; // Asigna los valores del usuario
    this.mostrarFormulario = !this.mostrarFormulario;
}


  obtenerUsuarios() {
    this.http.get('https://localhost:7049/api/Grupos').subscribe(
      (response: any) => {
        this.usuarios = response;
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

}
