import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent  implements OnInit{

  receta: any = {
    Nombre: '',
    IdProducto: 0,
    CantidadProducto: 0,
    MateriasPrimas: []
  };

  productos: any[] = [];
  materiasP: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerProductos();
    this.obtenerMateriaPrima();
  }

  agregarMateriaPrima() {
    this.receta.MateriasPrimas.push({ IdMateriaPrima: 0, Cantidad: 0 });
  }

  eliminarMateriaPrima(index: number) {
    this.receta.MateriasPrimas.splice(index, 1);
  }

  submitForm(formulario: NgForm) {
    if (formulario.valid) {
      this.http.post('https://localhost:7054/api/Receta/agregarReceta', this.receta).subscribe(
        () => {
          this.receta = {
            Nombre: '',
            IdProducto: 0,
            CantidadProducto: 0,
            MateriasPrimas: []
          };
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Receta agregada correctamente'
          });
        },
        (error) => {
          console.error('Error al agregar receta:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo agregar la receta'
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes completar todos los campos'
      });
    }
  }

  obtenerProductos() {
    this.http.get('https://localhost:7054/api/Productos').subscribe(
      (response: any) => {
        this.productos = response;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  obtenerMateriaPrima() {
    this.http.get('https://localhost:7054/api/MateriaPrima').subscribe(
      (response: any) => {
        this.materiasP = response;
      },
      (error) => {
        console.error('Error al obtener materias primas:', error);
      }
    );
  }

}
