import { Component, OnInit, OnDestroy } from '@angular/core';
import {ProductService} from "../../product.service";
import {Subscription} from "rxjs/Subscription";
import {IProduct} from "../../models/product";
import {DataTableResource} from "angular5-data-table";

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: IProduct[];
  items: IProduct[] = [];
  subscription: Subscription;
  tableResource: DataTableResource<IProduct>;
  itemCount: number;

  constructor(private productSevice: ProductService) {
    this.subscription = this.productSevice.getAll()
      .subscribe(products => {
        this.products = products;
        this.initTable(products);
      });
  }

  private initTable(products: IProduct[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({offset: 0})
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) return;
    this.tableResource.query(params)
      .then(items => this.items = items);
  }

  filter(query: string) {
    const filteredProducts = (query) ?
      this.products.filter(p => p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) :
      this.products;
    this.initTable(filteredProducts);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
