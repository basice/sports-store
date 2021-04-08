import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { CounterDirective } from './counter.directive';

@NgModule({
  declarations: [StoreComponent, CounterDirective],
  imports: [CommonModule, ModelModule],
  exports: [StoreComponent],
})
export class StoreModule {}
