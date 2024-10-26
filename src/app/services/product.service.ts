import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:3000/products');
  }
  addProduct(product:Product){
    return this.http.post("http://localhost:3000/products/",product);
  }
  updateProduct(product:Product){
    return this.http.put(`http://localhost:3000/products/${product.id}`,product);
  }
  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  getProductById(id:number){
    return this.http.get(`http://localhost:3000/products/${id}`);
  }
}
