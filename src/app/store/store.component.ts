import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../model/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  public selectedCategory = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  get products(): Product[] {
    return this.productService.getProducts(this.selectedCategory);
  }

  get categories(): string[] {
    return this.productService.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
}
