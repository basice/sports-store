import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../model/order.service';
import { Order } from '../../model/order.model';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
})
export class OrderTableComponent implements OnInit {
  includeShipped = false;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}

  getOrders(): Order[] {
    return this.orderService.getOrders().filter((o) => this.includeShipped || !o.shipped);
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.orderService.updateOrder(order);
  }

  delete(id: number) {
    this.orderService.deleteOrder(id);
  }
}
