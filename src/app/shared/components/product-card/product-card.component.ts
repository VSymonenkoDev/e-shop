import {Component, Input} from '@angular/core';
import {IProduct} from '../../models/product';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {IShoppingCart} from '../../models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: IProduct;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: IShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
