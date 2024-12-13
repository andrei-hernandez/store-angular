import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { from } from 'rxjs';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])
  cart = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=1',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 200,
        image: 'https://picsum.photos/640/640?r=2',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 300,
        image: 'https://picsum.photos/640/640?r=3',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=1',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 200,
        image: 'https://picsum.photos/640/640?r=2',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 300,
        image: 'https://picsum.photos/640/640?r=3',
        createdAt: new Date().toISOString()
      }
    ]

    this.products.set(initProducts);
  }


  getImgSource(id: number): string {
    return `https://picsum.photos/640/640?r=${id}`;
  }

  addToCart(product: Product) {
    this.cart.update((prev) => [...prev, product]);
  }

  protected readonly from = from;
}
