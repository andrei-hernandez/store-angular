import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { from } from 'rxjs';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  products = signal<Product[]>([])

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.update(() => products);
      },
      error: (error) => {
        console.error('Error loading products', error);
      }
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }

  protected readonly from = from;
}
