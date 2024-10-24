import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  constructor(private cs: CategoryService, private r: Router) {}
  //create input
  //name: nom d'input
  name: FormControl = new FormControl();
  //create form
  category: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.nullValidator,
    ]),
    available: new FormControl(),
    image: new FormControl(),

    // adresse: new FormGroup({
    //   street: new FormControl(),
    //   city: new FormControl(),
    // }),
  });

  submit() {
    this.cs.addCategory(this.category.value);
    this.r.navigate(['/home']);
  }
}
