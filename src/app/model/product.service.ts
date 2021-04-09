import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { DataStorageService } from './data-storage.service';

@Injectable()
export class ProductService {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataStorageService: DataStorageService) {
    dataStorageService.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getProducts(category: string = null): Product[] {
    return this.products.filter((p) => category == null || category == p.category);
  }

  getProduct(id: number): Product {
    return this.products.find((p) => p.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.dataStorageService.saveProduct(product).subscribe((p) => {
        this.products.push(p);
      });
    } else {
      this.dataStorageService.updateProduct(product).subscribe((p) => {
        this.products.splice(
          this.products.findIndex((p) => p.id == product.id),
          1,
          product,
        );
      });
    }
  }

  deleteProduct(id: number) {
    this.dataStorageService.deleteProduct(id).subscribe((p) => {
      this.products.splice(
        this.products.findIndex((p) => p.id == id),
        1,
      );
    });
  }
}
