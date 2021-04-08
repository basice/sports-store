import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';

@NgModule({
  declarations: [StoreComponent],
  imports: [CommonModule, ModelModule],
  exports: [StoreComponent],
})
export class StoreModule {}
