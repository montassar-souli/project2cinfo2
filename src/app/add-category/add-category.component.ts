import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  id!: number;
  constructor(
    private cs: CategoryService,
    private r: Router,
    private api: ApiService,
    private ar: ActivatedRoute
  ) {
    this.id = this.ar.snapshot.params['id'];
    if (this.id != undefined) {
      this.api.getBy<Category>('categories', this.id).subscribe({
        next: (data) =>
          this.category.patchValue({
            name: data.name,
            available: data.available,
            image: data.image,
          }),
        error: (err) => console.log(err),
      });
    }
  }
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
    if (this.id != undefined) {
      this.api
        .update<Category>('categories', this.id, this.category.value)
        .subscribe({
          next: () => this.r.navigate(['/home']),
          error: (err) => console.log(err),
        });
    }
    //this.cs.addCategory(this.category.value);
    //this.r.navigate(['/home']);
    this.api.add<Category>('categories', this.category.value).subscribe({
      next: () => this.r.navigate(['/home']),
      error: (err) => console.log(err),
    });
  }
  getButtonMessage() {
    return this.id != undefined ? 'Update Category' : 'Add Category';
  }
}
