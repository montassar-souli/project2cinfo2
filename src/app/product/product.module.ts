import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ListComponent],
  imports: [BrowserModule],
  bootstrap: [ListComponent],
})
export class ProductModule {}
