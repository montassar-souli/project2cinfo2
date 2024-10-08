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
  id!: number;

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
      name: 'tv samsung',
      price: 1000,
      image: 'assets/images/phone.jpeg',
      categoryId: 2,
    },
    {
      id: 4,
      name: 'iphone',
      price: 2000,
      image: 'assets/images/phone.jpeg',
      categoryId: 2,
    },
  ];

  // Injection de dépendance (patron de conception)
  constructor(private activated: ActivatedRoute) {
    this.id = this.activated.snapshot.params['id'];
    this.listProducts = this.listProducts.filter(
      (p) => p.categoryId == this.id
    );
    console.log(this.activated.snapshot.params);
  }
}
