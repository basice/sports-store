import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent],
  imports: [CommonModule, ModelModule],
  exports: [StoreComponent],
})
export class StoreModule {}
