import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../model/order.service';
import { Order } from '../../model/order.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  orderSent = false;
  submitted = false;

  constructor(private orderService: OrderService, private order: Order) {}

  ngOnInit(): void {}

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.orderService.saveOrder(this.order).subscribe((order) => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
