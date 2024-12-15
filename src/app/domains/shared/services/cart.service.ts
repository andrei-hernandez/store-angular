import { computed, Injectable, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  cartTotal = computed(() =>
    this.cart().reduce((acc, product) => acc + product.price, 0)
  );

  constructor() { }

  addToCart(product: Product) {
    this.cart.update((prev) => [...prev, product]);
  }


}
