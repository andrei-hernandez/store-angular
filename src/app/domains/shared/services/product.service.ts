import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http: HttpClient = inject(HttpClient);

  constructor() { }

  getProducts(category_id?: string) {
    const params = new URLSearchParams();

    if(category_id) {
      params.append('categoryId', category_id)
    }

    return this.http.get<Product[]>(`https://api.escuelajs.co/api/v1/products/?${params.toString()}`);
  }

  getProductById(id: string) {
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
}
