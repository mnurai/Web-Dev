import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list.component';
import { Product } from './product.model';
import { Category } from './category.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  categories: Category[] = [];
  selectedCategoryId?: number;
  filteredProducts: Product[] = [];
  isCategorySelected: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.categories = this.productService.categories;
    this.filteredProducts = [];
    this.isCategorySelected = false;
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.isCategorySelected = true;
    this.filteredProducts = this.productService.getProductsByCategory(id);
  }
}
