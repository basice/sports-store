import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { StaticDataSource } from './static.datasource';
import { CartService } from './cart.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProductService, StaticDataSource, CartService],
})
export class ModelModule {}
