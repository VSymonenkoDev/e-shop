import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from 'shared/components/product-card/product-card.component';
import {ProductQuantityComponent} from 'shared/components/product-quantity/product-quantity.component';
import {AuthGuard} from 'shared/services/auth-guard.service';
import {ProductService} from 'shared/services/product.service';
import {ShoppingCartService} from 'shared/services/shopping-cart.service';
import {OrderService} from 'shared/services/order.service';
import {UserService} from 'shared/services/user.service';
import {AuthService} from 'shared/services/auth.service';
import {CategoryService} from 'shared/services/category.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule {
}
