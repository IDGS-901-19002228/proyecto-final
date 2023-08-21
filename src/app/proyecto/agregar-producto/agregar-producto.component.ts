import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms'; // Asegúrate de importar NgForm

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  producto = {id : 0, nombre: '', imagen: '', descripcion: '', 
             precio: 0, stock: 0}; // Modelo para los datos del formulario

  constructor(private http: HttpClient) {}
  

  submitForm(formulario: NgForm) {
    if (formulario.valid) {
    this.http.post('https://localhost:7054/api/Productos', this.producto).subscribe(
      (response) => {
        console.log('Producto agregado:', response);
        this.producto = {id : 0, nombre: '', imagen: '', descripcion: '', 
                          precio: 0, stock: 0};
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Producto registrado correctamente'
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
