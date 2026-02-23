import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Product} from './product.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product?: Product;
  @Output() remove = new EventEmitter<number>();

  onLike(){
    if(this.product){
      this.product.likes = (this.product.likes || 0) + 1;
    }
  }

  onDelete(){
    if(this.product){
      this.remove.emit(this.product.id);
    }
  }

  share(platform: string){
    if(!this.product) return;
    const url = encodeURIComponent(this.product.link ?? '');
    const text = encodeURIComponent(this.product.name);
    const link = platform === 'wa'
      ? `https://wa.me/?text=${text}%20${url}`
      : `https://t.me/share/url?url=${url}&text=${text}`;
    window.open(link, '_blank');
  }
}
