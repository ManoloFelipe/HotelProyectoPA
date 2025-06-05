import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { RoomsComponent } from './rooms/rooms.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { BuscadorFechasComponent } from './buscador-fechas/buscador-fechas.component';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContactComponent,
    FooterComponent,
    GalleryComponent,
    HeaderComponent,
    HeroComponent,
    RoomsComponent,
    ServiceComponent,
    TestimonialsComponent,
    RouterOutlet,
    BuscadorFechasComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotel DiamondDen';

  
  mensajeToast: string = '';

  @ViewChild('toastElement', { static: false }) toastElement!: ElementRef;

  mostrarToast(mensaje: string) {
    this.mensajeToast = mensaje;
    const toast = new bootstrap.Toast(this.toastElement.nativeElement);
    toast.show();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const hero = document.getElementById('inicio');
    const button = document.getElementById('backToTop');

    if (!hero || !button) return;

    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const scrollPos = window.scrollY || window.pageYOffset;

    if (scrollPos > heroBottom - 100) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
}
}
