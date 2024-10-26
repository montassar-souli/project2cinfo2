import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'listCategotie',
    component: ListCategoriesComponent,
  },
  {
    path: 'products/:id',
    component: ProductsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'category/add',
    component: AddCategoryComponent,
  },
  {
    path: 'category/update/:id',
    component: AddCategoryComponent,
  },
  {
    path: 'product/add',
    component: AddProductComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
