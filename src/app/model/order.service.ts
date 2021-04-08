import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Observable } from 'rxjs';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];

  constructor(private dataStorageService: DataStorageService) {}

  getOrders(): Order[] {
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataStorageService.saveOrder(order);
  }
}
