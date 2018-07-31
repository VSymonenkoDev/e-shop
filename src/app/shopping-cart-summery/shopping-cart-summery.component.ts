import {Component, Input} from '@angular/core';
import {IShoppingCart} from '../shared/models/shopping-cart';

@Component({
  selector: 'shopping-cart-summery',
  templateUrl: './shopping-cart-summery.component.html',
  styleUrls: ['./shopping-cart-summery.component.css']
})
export class ShoppingCartSummeryComponent {
  @Input('cart') cart: IShoppingCart;
}
