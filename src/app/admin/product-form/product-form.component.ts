import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../shared/services/category.service";
import {ProductService} from "../../shared/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/take';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;

  constructor(
    private categoriesService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {

    this.categories$ = categoriesService.getAll();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
  }

  ngOnInit() {
  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure')) return;
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }
}
