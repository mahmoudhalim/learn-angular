import { Injectable } from '@angular/core';
import products from '../../../public/assets/products.json';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts() : Product[]{
    return products
  }
}
