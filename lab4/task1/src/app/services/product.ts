import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    return [
      { name: 'TV', price: 250000 },
      { name: 'Tablet', price: 150000 }
    ];
  }
}
