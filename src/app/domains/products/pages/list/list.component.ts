import { Component, inject, Input, OnChanges, OnInit, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoriesService } from '@shared/services/categories.service';
import { Category } from '@shared/models/category.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent implements OnInit, OnChanges {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoriesService = inject(CategoriesService);

  @Input() category_id?: string;

  products = signal<Product[]>([])
  categories = signal<Category[]>([])

  ngOnInit() {
    this.getCategories()
  }

  ngOnChanges() {
    this.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }

  private getProducts() {
    this.productService.getProducts(this.category_id)
      .subscribe({
        next: (products) => {
          this.products.update(() => products);
        },
        error: (error) => {
          console.error('Error loading products', error);
        }
      });
  }

  private getCategories() {
    this.categoriesService.getCategories().subscribe({
      next: (categories) => {
        this.categories.update(() => categories);
      },
      error: (error) => {
        console.error('Error loading categories', error);
      }
    });
  }
}
