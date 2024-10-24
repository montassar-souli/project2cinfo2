import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent {
  //injection de la service(injaction de depandance)
  constructor(private cs: CategoryService) {
    this.categories = this.cs.getCategories();
    this.listCategoryFiltred = this.categories;
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
}
