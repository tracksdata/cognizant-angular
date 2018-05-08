import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.data.subscribe(data => {
      this.product = data.product;
    })
  }

}
