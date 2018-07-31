import {Component} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {OrderService} from '../shared/services/order.service';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;

  constructor(private authService: AuthService, private orderService: OrderService) {
    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }

  orderData(date: number) {
    return new Date(date).toISOString().slice(0, 10);
  }
}
