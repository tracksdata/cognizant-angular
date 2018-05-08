import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { Product } from './product/product';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  private headers=new Headers({'content-Type':'application/json'});
  private apiUrl:string="http://localhost:3000/api/products";

  
  getProducts():Promise<Product[]>{
    return this.http.get(this.apiUrl)
    .toPromise()
    .then(response=>response.json() as Product[])
    .catch(this.handleError);
  }

  private handleError(error:any):Promise<any>{
    console.log('Error: An internal error is occured');
    return Promise.reject(error.message || error);

  }

}
