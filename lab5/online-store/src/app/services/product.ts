import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Other' }
  ];

  products:Product[] = [
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
  likes:0,
  categoryId:1
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
  likes:0,
  categoryId:1
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
  likes:0,
  categoryId:1
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
  likes:0,
  categoryId:2
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
  likes:0,
  categoryId:2
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
  likes:0,
  categoryId:4
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
  likes:0,
  categoryId:3
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
  likes:0,
  categoryId:4
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
  likes:0,
  categoryId:4
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
  likes:0,
  categoryId:4
  },
  {
    id: 11,
    name: "Poco X7 Pro 12 ГБ/512 ГБ черный",
    description:
      "Poco X7 Pro — это мощный смартфон с передовыми технологиями и стильным дизайном, созданный для тех, кто ценит высокую производительность и яркий дисплей.",
    price: 247866,
    rating: 4.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/p05/p6a/67021874.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/pe1/p22/19792402.jpeg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p4b/p26/19792403.jpeg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pb5/p29/19792404.jpeg?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/poco-x7-pro-12-gb-512-gb-chernyi-133345346/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1NTjbT8LRvLI3mHEp0B8Xu0ARpdrU-__5KCICYNEwI2S2geH4tnacxoCXeEQAvD_BwE",
  likes:0,
  categoryId:1
  },
  {
    id: 12,
    name: "Meizu Mblu 21 6 ГБ/128 ГБ белый",
    description:
      "Смартфон Meizu Mblu 21 — современное устройство с высокой производительностью и стильным дизайном. Он идеально подходит для повседневного использования, обеспечивая комфорт и функциональность.",
    price: 52900,
    rating: 4.4,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/pa0/pd9/11984226.png?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/peb/pe1/11983871.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p68/pe9/11983897.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p84/pe9/11983898.png?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/meizu-mblu-21-6-gb-128-gb-belyi-131075977/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1NTjbT8LRvLI3mHEp0B8Xu0ARpdrU-__5KCICYNEwI2S2geH4tnacxoCXeEQAvD_BwE",
  likes:0,
  categoryId:1
  },
  {
    id: 13,
    name: "Ноутбук PRYME N5095 15.6 / 16 Гб / SSD 512 Гб / Win 11 Pro / FHK14BK25",
    description:
      "Ноутбук PRYME N5095 15.6” — оптимальное решение для учёбы и работы",
    price: 189990,
    rating: 4.4,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p0b/pfb/45122460.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pee/pfa/45122461.png?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1NTjbT8LRvLI3mHEp0B8Xu0ARpdrU-__5KCICYNEwI2S2geH4tnacxoCXeEQAvD_BwE",
  likes:0,
  categoryId:2
  },
  {
    id: 14,
    name: "Acer Aspire 3 15.6 / 8 Гб / SSD 256 Гб / Win 11 Pro / A325-45 / ZN.N01SI.03K.",
    description:
      "Ноутбук Acer Aspire 3 A325-45 с экраном 15.6 дюймов – отличное решение для работы и учебы. Выпущен в 2025 году, оснащен 8 ГБ оперативной памяти и быстрым SSD NVME на 256 ГБ.",
    price: 160314,
    rating: 4.7,
    image:"https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium",
         images: [
      "https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p62/p4f/30100210.png?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p62/p4f/30100210.png?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-pro-a325-45-zn-n01si-03k--136300221/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1NTjbT8LRvLI3mHEp0B8Xu0ARpdrU-__5KCICYNEwI2S2geH4tnacxoCXeEQAvD_BwE",
  likes:0,
  categoryId:2
  },
  {
    id: 15,
    name: "Ноутбук HYDRA Home H20 15.6 / 12 Гб / SSD 512 Гб / Win 11 / MKII",
    description:
      "Ноутбуки HYDRA это Казахстанский бренд электроники и гаджетов для дома. HYDRA H20 стоит, как обычный ноутбук для повседневного использования, однако это устройство достаточно мощное.",
    price: 135000,
    rating: 0,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pec/p46/69607282.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p08/p47/69607283.jpg?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/hydra-home-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1NTjbT8LRvLI3mHEp0B8Xu0ARpdrU-__5KCICYNEwI2S2geH4tnacxoCXeEQAvD_BwE",
  likes:0,
  categoryId:2
  },
  {
    id: 16,
    name: "Наушники CAT EAR Wireless Headphones P33M розовый",
    description:
      "fafa",
    price: 1969,
    rating: 5,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h80/h3e/64314701807646.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h80/h3e/64314701807646.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h80/h3e/64314701807646.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h80/h3e/64314701807646.jpg?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/naushniki-cat-ear-wireless-headphones-p33m-rozovyi-101740674/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1NTjbT8LRvLI3mHEp0B8Xu0ARpdrU-__5KCICYNEwI2S2geH4tnacxoCXeEQAvD_BwE",
  likes:0,
  categoryId:3
  },
  {
    id: 17,
    name: "Наушники Razer Blackshark V2 X черный",
    description:
      "Сразитесь со врагами в легкой киберспортивной гарнитуре, раскрывающую свои преимущества под давлением",
    price: 15500,
    rating: 3.7,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h21/h98/64136271331358.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/h21/h98/64136271331358.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h8b/h67/64136274280478.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h69/h24/64136374943774.jpg?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/naushniki-razer-blackshark-v2-x-chernyi-100934284/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1NTjbT8LRvLI3mHEp0B8Xu0ARpdrU-__5KCICYNEwI2S2geH4tnacxoCXeEQAvD_BwE",
  likes:0,
  categoryId:3
  },
  {
    id: 18,
    name: "Наушники P9 Pro Max серебристый",
    description:
      "...",
    price: 1385,
    rating: 4.6,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/hc3/hc3/86088747647006.jpg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/hc3/hc3/86088747647006.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/hdb/hbd/86088747712542.jpg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/h30/hf2/86088747778078.jpg?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/naushniki-p9-pro-max-serebristyi-119711854/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1NTjbT8LRvLI3mHEp0B8Xu0ARpdrU-__5KCICYNEwI2S2geH4tnacxoCXeEQAvD_BwE",
  likes:0,
  categoryId:3
  },
  {
    id: 19,
    name: "GoodGame i5-14400F / RTX 5060 Ti 16 Гб / 32 Гб / SSD 1000 Гб / Win 11 Pro",
    description:
      "pepe",
    price: 857000,
    rating: 4.8,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/pc4/p19/35994026.jpeg?format=gallery-medium",
    images: [
      "https://resources.cdn-kaspi.kz/img/m/p/pc4/p19/35994026.jpeg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/p5d/p62/48225124.jpeg?format=gallery-medium",
      "https://resources.cdn-kaspi.kz/img/m/p/pc4/p19/35994026.jpeg?format=gallery-medium",
    ],
    link: "https://kaspi.kz/shop/p/goodgame-i514400f5060ti16gb-belyi-137927437/?c=750000000",
  likes:0,
  categoryId:4
  },
];


  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}