import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { HighlightDirective } from '@shared/directives/highlight.directive';

@Component({
  selector: 'app-product',
  imports: [
    NgOptimizedImage,
    UpperCasePipe,
    CurrencyPipe,
    TimeAgoPipe,
    ReversePipe,
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
