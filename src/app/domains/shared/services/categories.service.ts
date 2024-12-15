import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private http: HttpClient = inject(HttpClient);

  constructor() { }

  getCategories() {
    return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories');
  }
}
