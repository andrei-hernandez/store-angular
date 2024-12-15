import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [
    NgOptimizedImage,
    UpperCasePipe,
    CurrencyPipe,
    TimeAgoPipe,
    ReversePipe,
    RouterLink,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}
