import { Component, Input, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input({ required: true }) cart: Product[] = [];

  hideSideMenu = signal<boolean>(true);

  toggleSideMenu() {
    this.hideSideMenu.update((prev) => !prev);
  }
}
