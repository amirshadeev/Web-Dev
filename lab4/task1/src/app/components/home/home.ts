import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],   
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  products = [
    { name: 'Laptop', price: 300000 },
    { name: 'Phone', price: 200000 },
    { name: 'Headphones', price: 50000 }
  ];

  show = true;
}
