import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  changeMainImage = (imageSrc: string): void => {
    const mainImage = document.getElementById('main-image') as HTMLImageElement | null;
    if (mainImage) {
      mainImage.src = imageSrc;
    }
  };

}
