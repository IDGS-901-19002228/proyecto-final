import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms'; // Asegúrate de importar NgForm

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  usuario = {id : 0, nombre: '', apellidoPaterno: '', apellidoMaterno: '', 
             edad: 0, sexo: '', telefono: '', direccion: '', usuario: '', 
             contrasenia: '', rolId: 0,  rol: '' }; // Modelo para los datos del formulario

  constructor(private http: HttpClient) {}
  

  submitForm(formulario: NgForm) {
    if (formulario.valid) {
    this.http.post('https://localhost:7054/api/Usuarios', this.usuario).subscribe(
      (response) => {
        console.log('Usuario agregado:', response);
        this.usuario = { id: 0, nombre: '', apellidoPaterno: '', apellidoMaterno: '', 
                         edad: 0, sexo: '', telefono: '', direccion: '', usuario: '', 
                         contrasenia: '', rolId: 0, rol: '' };
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Usuario registrado correctamente'
        });
      },
    );
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes completar todos los campos'
      });
    }
  }

}
