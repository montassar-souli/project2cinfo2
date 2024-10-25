import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private ps: ProductService, private r: Router) {}
  product: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Z][A-Za-z0-9_éàè]*'),
    ]),
    price: new FormControl('', Validators.min(0)),
    image: new FormControl('', [Validators.required]),
  });
  submit() {
    this.ps.addProduct(this.product.value);
    this.r.navigate(['/home']);
  }
  //
}
