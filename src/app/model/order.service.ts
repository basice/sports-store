import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Observable } from 'rxjs';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];
  private loaded = false;

  constructor(private dataStorageService: DataStorageService) {}

  loadOrders() {
    this.loaded = true;
    this.dataStorageService.getOrders().subscribe((orders) => (this.orders = orders));
  }

  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataStorageService.saveOrder(order);
  }

  updateOrder(order: Order) {
    this.dataStorageService.updateOrder(order).subscribe((order) => {
      this.orders.splice(
        this.orders.findIndex((o) => o.id == order.id),
        1,
        order,
      );
    });
  }

  deleteOrder(id: number) {
    this.dataStorageService.deleteOrder(id).subscribe((order) => {
      this.orders.splice(
        this.orders.findIndex((o) => o.id == order.id),
        1,
      );
    });
  }
}
