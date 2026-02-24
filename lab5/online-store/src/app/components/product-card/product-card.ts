import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {

  @Input() product!: Product;
  @Output() onRemove = new EventEmitter<number>();

  currentImageIndex: number = 0;

  get starsArray(): number[] {
    return [1,2,3,4,5];
  }

  get currentImage(): string {
    return this.product.images[this.currentImageIndex];
  }

  selectImage(index: number) {
    this.currentImageIndex = index;
  }

  prevImage() {
    this.currentImageIndex =
      this.currentImageIndex > 0 ? this.currentImageIndex - 1 : this.product.images.length - 1;
  }

  nextImage() {
    this.currentImageIndex =
      this.currentImageIndex < this.product.images.length - 1 ? this.currentImageIndex + 1 : 0;
  }

  like() {
    this.product.likes++;
  }

  remove() {
    this.onRemove.emit(this.product.id);
  }

  shareWhatsapp() {
    const url = 'https://wa.me/?text=' + encodeURIComponent('Check out this product: ' + this.product.link);
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = 'https://t.me/share/url?url=' + encodeURIComponent(this.product.link) +
                '&text=' + encodeURIComponent(this.product.name);
    window.open(url, '_blank');
  }

}