import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductsService {

  apiUrl = 'http://localhost:3000/api/products';

  constructor(private _http: Http) {}

  loadAllProducts() {
    return this._http.get(this.apiUrl)
      .map(resp => resp.json());
  }

  loadProduct(id) {
    return this._http.get(this.apiUrl + "/" + id)
      .map(resp => resp.json());
  }

  submitProduct(product) {
    return this._http.post(this.apiUrl, product)
      .map(resp => resp.json());
  }

  submitProductForUpdate(product) {
    return this._http.put(this.apiUrl + "/" + product.id, product)
      .map(resp => resp.json());
  }

  deleteProduct(id) {
    return this._http.delete(this.apiUrl + "/" + id)
      .map(resp => resp.json());
  }

}
