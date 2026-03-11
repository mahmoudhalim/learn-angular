import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Carousel } from './components/carousel/carousel';
import { ProductCard } from './components/product-card/product-card';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Carousel, ProductCard, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
