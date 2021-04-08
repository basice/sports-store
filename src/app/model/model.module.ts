import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { StaticDataSource } from './static.datasource';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProductService, StaticDataSource],
})
export class ModelModule {}
