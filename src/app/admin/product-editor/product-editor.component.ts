import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../model/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
})
export class ProductEditorComponent implements OnInit {
  editing = false;
  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.editing = this.route.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      Object.assign(this.product, this.productService.getProduct(this.route.snapshot.params['id']));
    }
  }

  save(form: NgForm) {
    this.productService.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
