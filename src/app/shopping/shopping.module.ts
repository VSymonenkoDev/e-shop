import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingCartSummeryComponent} from "./shopping-cart-summery/shopping-cart-summery.component";
import {ShippingFormComponent} from "./shipping-form/shipping-form.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {CheckOutComponent} from "./check-out/check-out.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrderSuccessComponent} from "./order-success/order-success.component";
import {ProductsComponent} from "./products/products.component";
import {ProductFilterComponent} from "./products/product-filter/product-filter.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "shared/services/auth-guard.service";
import {SharedModule} from "shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ProductsComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
      {path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard]},
      {path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
    ])
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    ProductFilterComponent,
    ShoppingCartSummeryComponent,
    ShippingFormComponent,
    MyOrdersComponent,
    CheckOutComponent
  ]
})
export class ShoppingModule { }
