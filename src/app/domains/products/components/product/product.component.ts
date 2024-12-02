import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() price: number = 0;


  @Output() addToCart = new EventEmitter();

  addToCartHandler(product: { title: string, price: number }) {
    this.addToCart.emit(`Product added to cart: ${product.title} $${product.price}`);
  }
}
