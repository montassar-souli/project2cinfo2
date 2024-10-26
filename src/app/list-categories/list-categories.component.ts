import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent {
  //injection de la service(injaction de depandance)
  constructor(private cs: CategoryService, private api: ApiService) {
    // this.categories = this.cs.getCategories();
    // this.listCategoryFiltred = this.categories;
    this.api.get<Category[]>('categories').subscribe({
      next: (data) => {
        this.categories = data;
        this.listCategoryFiltred = this.categories;
      },
      error: (err) => console.log(err),
    });
  }
  //two-way DataBinding
  searchText: string = '';
  title: string = 'List des Categories';
  category: Category = {
    id: 1,
    name: 'phone',
    available: true,
    image: 'assets/images/star.jpg',
  };
  categories: Category[] = [];

  afficher(name: string) {
    alert(name);
  }

  onChangeInput(event: Event) {
    alert((event.target as HTMLInputElement).value);
  }

  listCategoryFiltred: Category[] = this.categories;
  searchCategory() {
    this.listCategoryFiltred = [];
    this.categories.forEach((element) => {
      if (element.name.includes(this.searchText)) {
        this.listCategoryFiltred.push(element);
      }
    });
  }
  deleteCategory(id: number) {
    this.api.delete<Category>('categories', id).subscribe({
      next: () => {
        this.listCategoryFiltred = this.listCategoryFiltred.filter(
          (c) => c.id !== id
        );
      },
      error: (err) => console.log(err),
    });
  }
}
