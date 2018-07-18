import {Component, Input} from '@angular/core';
import {IProduct} from "../models/product";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: IProduct;
  @Input('show-actions') showActions = true;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }
}
