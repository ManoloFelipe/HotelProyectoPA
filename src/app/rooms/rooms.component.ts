import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  habitaciones = [
    {
      nombre: 'Habitación Individual',
      descripcion: 'Diseñada para ejecutivos o viajeros solos. Estilo minimalista elegante con tecnología moderna.',
      imagen: 'assets/habitaciones/individual.png'
    },
    {
      nombre: 'Habitación Doble',
      descripcion: 'Ideal para parejas o amigos. Estética simétrica con tonos azul y beige.',
      imagen: 'assets/habitaciones/doble.png'
    },
    {
      nombre: 'Habitación Familiar',
      descripcion: 'Perfecta para familias con niños. Incluye litera, cama queen, y zona de juegos.',
      imagen: 'assets/habitaciones/familiar.png'
    },
    {
      nombre: 'Suite Principal',
      descripcion: 'Espacio exclusivo para ejecutivos de lujo. Cuenta con cama king, sala lounge y escritorio de mármol.',
      imagen: 'assets/habitaciones/suite.png'
    }
  ];
}
