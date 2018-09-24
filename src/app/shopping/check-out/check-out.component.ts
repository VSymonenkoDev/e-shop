import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from 'shared/services/shopping-cart.service';
import {IShoppingCart} from 'shared/models/shopping-cart';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cart$: Observable<IShoppingCart>;

  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }
}
