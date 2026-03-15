import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-page',
  imports: [ProductCard],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage implements OnInit, AfterViewInit, OnDestroy {
  constructor(private productService: ProductService) { }
  products!: Product[];
  ngOnInit() {
    console.log('products fetched from api');
    this.products = this.productService.getProducts();
  }

  ngAfterViewInit() {
    console.log('products rendered');
  }

  ngOnDestroy(): void {
    console.log('products destroyed');
  }

}
