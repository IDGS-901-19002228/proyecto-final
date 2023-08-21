import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms'; // Asegúrate de importar NgForm

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent {

  productos: any[] = []; // Aquí almacenaremos la lista de usuarios

  mostrarFormulario = false;
  productoSeleccionado: any = {}; // Declarar esta variable en tu componente


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  alternarFormulario(producto: any) {
    this.productoSeleccionado = producto; // Asigna los valores del usuario
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  obtenerProductos() {
    this.http.get('https://localhost:7054/api/Productos').subscribe(
      (response: any) => {
        this.productos = response;
      },
      (error) => {
        console.error('Error al obtener proveedores:', error);
      }
    );
  }

  eliminarProducto(id: number) {
    this.http.delete(`https://localhost:7054/api/Productos/${id}`).subscribe(
      () => {
        this.obtenerProductos();
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Producto inhabilitado correctamente'
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo eliminar el producto'
        });
      }
    );
  }

  actualizarProducto(formulario: NgForm) {
    if (formulario.valid) {
      const id = this.productoSeleccionado.id;
      this.http.put(`https://localhost:7054/api/Productos/${id}`, this.productoSeleccionado).subscribe(
        (response) => {
          console.log('Producto agregado:', response);
          // Restablecer el objeto producto después de la actualización
          // this.producto = {id : 0, nombre: '', imagen: '', descripcion: '', precio: 0, stock: 0};
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Producto registrado correctamente'
          });
        },
      );
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo actualizar el producto'
      });
    }
  }
  
  fabricarProducto(productoId: number) {
    this.http.post(`https://localhost:7054/api/Productos/fabricar/${productoId}`, {}).subscribe(
      () => {
        this.obtenerProductos();
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Producto fabricado exitosamente'
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.error
        });
      }
    );
  }

  verReceta(productoId: number) {
    // Aquí podrías implementar la lógica para mostrar la receta del producto
    // Esto podría incluir un modal o una página dedicada para mostrar las recetas y materias primas
    // Dependiendo de cómo desees presentar la información al usuario.
  }
  

}
