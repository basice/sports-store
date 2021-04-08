import { Injectable } from '@angular/core';
import { StaticDatasourceService } from './static-datasource.service';
import { Order } from './order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];

  constructor(private dataSource: StaticDatasourceService) {}

  getOrders(): Order[] {
    return this.orders;
  }
  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
