import { Component, inject, signal } from '@angular/core';
import { CartService } from '@shared/services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  cartTotal = this.cartService.cartTotal;

  hideSideMenu = signal<boolean>(true);

  toggleSideMenu() {
    this.hideSideMenu.update((prev) => !prev);
  }
}
