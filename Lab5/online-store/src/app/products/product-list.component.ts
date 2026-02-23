import {Component, Input} from '@angular/core';
import {Product} from './product.model';
import {CommonModule} from '@angular/common';
import{ProductItemComponent} from './product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  handleRemove(id: number){
    this.products = this.products.filter(product => product.id !== id);
  }
}
