import { Component } from '@angular/core';
import { ProductService } from './services/product';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone:true,
  imports:[
    CommonModule,
    ProductListComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.selectedProducts =
      this.productService.getProductsByCategory(categoryId);
  }
}