import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'phone',
      available: true,
      image: 'assets/images/phone.jpeg',
    },
    {
      id: 2,
      name: 'PC',
      available: true,
      image: 'assets/images/pc.jpeg',
    },
    {
      id: 3,
      name: 'clavier',
      available: false,
      image: 'assets/images/clavier.jpg',
    },
  ];

  constructor() {}

  getCategories() {
    return this.categories;
  }
  addCategory(category: Category) {
    this.categories.push(category);
  }
}
