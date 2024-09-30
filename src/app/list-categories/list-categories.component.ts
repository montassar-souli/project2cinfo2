import { Component } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent {
  //two-way DataBinding
  searchText: string = '';
  title: string = 'List des Categories';
  category: Category = {
    id: 1,
    name: 'phone',
    available: true,
    image: 'assets/images/star.jpg',
  };
  categories: Category[] = [
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
