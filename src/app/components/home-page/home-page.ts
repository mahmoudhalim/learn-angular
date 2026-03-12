import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-home-page',
  imports: [Carousel],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
