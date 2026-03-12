import { Component } from '@angular/core';
import products from '../../../../public/assets/products.json';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-page',
  imports: [ProductCard],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  products = products;

}
