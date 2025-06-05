import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    
  @Output() mensajeEnviado = new EventEmitter<string>();
  enviarSolicitud() {
    this.mensajeEnviado.emit('¡Hemos recibido tu mensaje, pronto nos contactaremos contigo!');
  }
}
