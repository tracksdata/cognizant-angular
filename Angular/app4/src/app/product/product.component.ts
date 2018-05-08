import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from './productservice';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

products:Product[];

  constructor(private _prodService:ProductService) { }

   getProducts(){
     this._prodService.getProducts().then(prods=>this.products=prods);
   }

  ngOnInit() {

   this.getProducts();
    //this.products=PRODUCTS;
  }

}
