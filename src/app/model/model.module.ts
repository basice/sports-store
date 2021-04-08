import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { StaticDatasourceService } from './static-datasource.service';
import { CartService } from './cart.service';
import { Order } from './order.model';
import { OrderService } from './order.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProductService, StaticDatasourceService, CartService, Order, OrderService],
})
export class ModelModule {}
