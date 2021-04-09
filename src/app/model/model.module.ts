import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { CartService } from './cart.service';
import { Order } from './order.model';
import { OrderService } from './order.service';
import { DataStorageService } from './data-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    ProductService,
    CartService,
    Order,
    OrderService,
    { provide: DataStorageService, useClass: DataStorageService },
    AuthService,
  ],
})
export class ModelModule {}
