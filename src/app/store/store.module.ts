import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  imports: [CommonModule, ModelModule],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
})
export class StoreModule {}
