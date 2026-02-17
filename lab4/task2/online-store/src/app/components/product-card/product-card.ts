import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {

  @Input() product!: Product;

  currentImageIndex: number = 0;

  // ⭐ Stars
  get starsArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  // Главное изображение
  get currentImage(): string {
    return this.product.images[this.currentImageIndex];
  }

  // Выбор миниатюры
  selectImage(index: number) {
    this.currentImageIndex = index;
  }

  // ◀ Предыдущее
  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.product.images.length - 1;
    }
  }

  // ▶ Следующее
  nextImage() {
    if (this.currentImageIndex < this.product.images.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  // Share WhatsApp
  shareWhatsapp() {
    const url =
      'https://wa.me/?text=' +
      encodeURIComponent('Check out this product: ' + this.product.link);

    window.open(url, '_blank');
  }

  // Share Telegram
  shareTelegram() {
    const url =
      'https://t.me/share/url?url=' +
      encodeURIComponent(this.product.link) +
      '&text=' +
      encodeURIComponent(this.product.name);

    window.open(url, '_blank');
  }
}
