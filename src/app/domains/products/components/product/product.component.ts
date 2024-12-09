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
  @Input({ required: true }) img: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) price: number = 0;


  @Output() addToCart = new EventEmitter();

  addToCartHandler(product: { title: string, price: number }) {
    this.addToCart.emit(`Product added to cart: ${product.title} $${product.price}`);
  }
}
