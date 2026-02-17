import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'

})
export class ProductListComponent {
  products: Product[] = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro 128GB",
    description:
      "Флагманский смартфон Apple с титановым корпусом. Мощный процессор A17 Pro и улучшенная камера.",
    price: 389699,
    rating: 4.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1NTjbT8LRvLI3mHEp0B8Xu0ARpdrU-__5KCICYNEwI2S2geH4tnacxoCXeEQAvD_BwE",
  },

  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra 256GB",
    description:
      "Смартфон премиум-класса с мощной камерой и стилусом S-Pen. Отлично подходит для работы и игр.",
    price: 699000,
    rating: 4.0,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000",
  },

  {
    id: 3,
    name: "Xiaomi Redmi Note 13 Pro 256GB",
    description:
      "Отличный смартфон по доступной цене. Яркий AMOLED экран и мощная камера 200MP.",
    price: 147545,
    rating: 3.5,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h9f/h09/84917646688286.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h9f/h09/84917646688286.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/paf/p60/64520549.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p1b/p63/64520550.png?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-8-gb-256-gb-chernyi-115911365/?c=750000000",
  },

  {
    id: 4,
    name: "Apple MacBook Air 13 M2",
    description:
      "Лёгкий и мощный ноутбук для учебы и работы. Отличная автономность и Retina дисплей.",
    price: 443588,
    rating: 4.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/p37/p87/22158172.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/p37/p87/22158172.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p8c/p5d/22160744.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pff/p5c/22160749.png?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4-133963854/?c=750000000",
  },

  {
    id: 5,
    name: "Lenovo Legion 5 Gaming Laptop",
    description:
      "Игровой ноутбук с мощной видеокартой и быстрым экраном 144Hz. Подходит для современных игр.",
    price: 809990,
    rating: 3.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/p0b/p69/95146120.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/p0b/p69/95146120.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pd3/p68/95146122.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pb7/p68/95146123.jpg?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/lenovo-legion-5-15irx10-15-3-32-gb-ssd-1000-gb-bez-os-83ly007krk-154520455/?c=750000000",
  },

  {
    id: 6,
    name: "Sony PlayStation 5 Slim + геймпад",
    description:
      "Новая версия PS5 в более компактном корпусе. Поддержка 4K-гейминга и эксклюзивных игр Sony.",
    price: 449900,
    rating: 4.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/p9e/pe2/67515155.jpeg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/p9e/pe2/67515155.jpeg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p08/pe6/67515156.jpeg?format=gallery-medium",
      
    ],
    link: "https://kaspi.kz/shop/p/sony-playstation-5-slim-geimpad-charging-station-fc-26-ps5-146496122/?c=750000000",
  },

  {
    id: 7,
    name: "Apple AirPods Pro 2",
    description:
      "Беспроводные наушники с активным шумоподавлением. Отличный звук и удобная посадка.",
    price: 106712,
    rating: 4.8,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000",
  },

  {
    id: 8,
    name: "Samsung Smart TV 55\" UHD 4K",
    description:
      "Большой телевизор с поддержкой 4K и Smart TV. Отлично подходит для фильмов и игр.",
    price: 278590,
    rating: 3.6,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h9f/h2f/85887766233118.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h95/hf0/85887766298654.jpg?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/samsung-ue55du7100uxce-140-sm-chernyi-118907988/?c=750000000",
  },

  {
    id: 9,
    name: "Dyson V15 Detect Absolute SV47",
    description:
      "Мощный беспроводной пылесос премиум-класса. Подсветка пыли и высокая сила всасывания.",
    price: 342488,
    rating: 4.8,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pdc/p32/77965057.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pf8/p32/77965058.jpg?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000",
  },

  {
    id: 10,
    name: "Apple iPad Air 5 256GB",
    description:
      "Планшет с мощным чипом M1. Отлично подходит для учебы, рисования и работы.",
    price: 356850,
    rating: 4.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h59/hb3/86369746649118.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hfa/h6c/86369746681886.png?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/apple-ipad-air-10-9-2022-wi-fi-10-9-djuim-8-gb-256-gb-seryi-104235732/?c=750000000",
  },
];

}
