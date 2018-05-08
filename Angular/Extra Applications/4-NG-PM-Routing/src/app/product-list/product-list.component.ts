import {ProductsService} from '../products.service';
import {Component, OnInit} from '@angular/core';
import {Route, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<any> = [];

  constructor(private route: ActivatedRoute, private productService: ProductsService) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.products = data.products;
    });
  }

  deleteItem(id, event) {
    event.preventDefault();
    this.productService.deleteProduct(id)
      .subscribe(resp => {
        this.products = this.products.filter(item => item.id === id)
      });
  }

}
