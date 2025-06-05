import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

// declare var bootstrap: any;

@Component({
  selector: 'app-buscador-fechas',
  imports: [CommonModule, FormsModule],
  templateUrl: './buscador-fechas.component.html',
  styleUrls: ['./buscador-fechas.component.css']
})


export class BuscadorFechasComponent {
    fechaEntrada: string = '';
  fechaSalida: string = '';
  alojamiento: number = 1;
  adultos: number = 2;
  ninos: number = 0;
  
  @Output() mensajeEnviado = new EventEmitter<string>();
  enviarSolicitud() {
    this.mensajeEnviado.emit('¡Reserva enviada con éxito!');
  }
}
