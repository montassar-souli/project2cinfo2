import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http:HttpClient) {}

  getCategories() {
    return this.http.get('http://localhost:3000/categories');
  }
  addCategory(category: Category) {
    this.http.post("http://localhost:3000/categories/", category);
  }
  updateCategory(category: Category) {
    this.http.put(`http://localhost:3000/categories/${category.id}`, category);
  }
  deleteCategory(id: number) {
    this.http.delete(`http://localhost:3000/categories/${id}`);
  }
  getCategoryById(id: number) {
    return this.http.get(`http://localhost:3000/categories/${id}`);
  }
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

}
