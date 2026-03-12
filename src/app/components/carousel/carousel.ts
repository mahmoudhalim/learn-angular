import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  scrollToSlide(id: string) {
  const slide = document.getElementById(id);
  if (slide) {
    slide.parentElement?.scrollTo({
      left: slide.offsetLeft,
      behavior: 'smooth'
    });
  }
}
}
