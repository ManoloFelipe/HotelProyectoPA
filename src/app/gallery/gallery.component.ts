import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
imagenes = [
  { src: 'assets/gallery/tikal.webp', alt: 'Tikal' },
  { src: 'assets/gallery/antigua.webp', alt: 'Antigua' },
  { src: 'assets/gallery/volcan.webp', alt: 'Volcán' },
  { src: 'assets/gallery/barrilete.webp', alt: 'Barrilete' },
  { src: 'assets/gallery/lago.webp', alt: 'Lago' },
];

}
