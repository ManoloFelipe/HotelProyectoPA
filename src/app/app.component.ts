import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { RoomsComponent } from './rooms/rooms.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';

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
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotel DiamondDen';

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
