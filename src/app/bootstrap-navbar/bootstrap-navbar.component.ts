import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {AppUser} from "../models/app-user";
import {ShoppingCartService} from "../shopping-cart.service";
import {IShoppingCart} from '../models/shopping-cart';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'bootstrap-navbar',
  templateUrl: './bootstrap-navbar.component.html',
  styleUrls: ['./bootstrap-navbar.component.css']
})
export class BootstrapNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<IShoppingCart>;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.auth.logout();
  }
}
