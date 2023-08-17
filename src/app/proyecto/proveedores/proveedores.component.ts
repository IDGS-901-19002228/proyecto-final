import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms'; // Asegúrate de importar NgForm

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {

  proveedor = {id : 0, nombre: '', empresa: '', rfc: '', 
               telefono: '', correo: ''}; // Modelo para los datos del formulario

  constructor(private http: HttpClient) {}
  

  submitForm(formulario: NgForm) {
    if (formulario.valid) {
    this.http.post('https://localhost:7054/api/Proveedor', this.proveedor).subscribe(
      (response) => {
        console.log('Usuario agregado:', response);
        this.proveedor = { id: 0, nombre: '', empresa: '', rfc: '', 
                          telefono: '', correo: ''};
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
