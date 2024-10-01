import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  //activated = new ActivatedRoute(); ==> probléme Couplage fort

  listProducts: Product[] = [
    {
      id: 1,
      name: 'iphone',
      price: 1000,
      image: 'assets/images/phone.jpeg',
      categoryId: 1,
    },
    {
      id: 2,
      name: 'tv',
      price: 3000,
      image: 'assets/images/phone.jpeg',
      categoryId: 2,
    },
    {
      id: 3,
      name: 'iphone',
      price: 1000,
      image: 'assets/images/phone.jpeg',
      categoryId: 1,
    },
  ];

  // Injection de dépendance (patron de conception)
  constructor(private activated: ActivatedRoute) {
    console.log(this.activated.snapshot.params);
  }
}
