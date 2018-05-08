import { Component } from '@angular/core';

@Component({
  selector: 'shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'NG-shop-v1';
  tab: number = 1;
  products: Array<any> = [
    {
      name: 'Laptop',
      price: 198000,
      description: 'New Mac pro',
      makeDate: Date.now(),
      canBuy: true,
      discount: 10000,
      image: 'images/Laptop.png'
    },
    {
      name: 'Mobile',
      price: 18000,
      description: 'New  pro',
      makeDate: Date.now(),
      canBuy: true,
      image: 'images/Mobile.png'
    }
  ]


  hanldeTabChange($event: any, tabIdx: number) {
    this.tab = tabIdx;
  }
  isTabSelected(tabIdx: number) {
    return this.tab === tabIdx;
  }


}
