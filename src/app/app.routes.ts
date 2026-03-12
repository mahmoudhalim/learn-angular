import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { ProductPage } from './components/product-page/product-page';
import { ContactPage } from './components/contact-page/contact-page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage, title: 'Coffee | Home' },
  { path: 'products', component: ProductPage, title: 'Coffee | Products' },
  { path: 'contact', component: ContactPage, title: 'Coffee | Contact' },
];
