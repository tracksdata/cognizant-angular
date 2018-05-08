import { ProductsService } from './products.service';
import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class ProductResolverService implements Resolve<any> {

  constructor(private productsService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let prodId = route.params['prodId'];
    return this.productsService.loadProduct(prodId);
  }

}
