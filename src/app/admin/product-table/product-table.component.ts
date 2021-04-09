import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../model/product.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  getProducts(): Product[] {
    return this.productService.getProducts();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }
}
