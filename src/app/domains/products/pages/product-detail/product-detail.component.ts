import { Component, inject, Input, signal } from '@angular/core';
import { ProductService } from '@shared/services/product.service';
import { Product } from '@shared/models/product.model';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [
    CurrencyPipe,
    UpperCasePipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {
  @Input({ required: true }) id?: string;

  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product = signal<Product | null>(null);
  coverImage = signal<string | null>(null);

  ngOnInit() {
    if(this.id) {
      this.productService.getProductById(this.id).subscribe({
        next: (product) => {
          this.product.update(() => product);
          if(product.images.length > 0) {
            this.coverImage.update(() => product.images[0]);
          }
        },
        error: (error) => {
          console.error('Error loading product', error);
        }
      });
    }
  }

  changeCoverImage(image: string) {
    this.coverImage.set(image);
  }

  addToCart() {
    const product = this.product();
    if(product) {
      this.cartService.addToCart(product);
    }
  }
}
