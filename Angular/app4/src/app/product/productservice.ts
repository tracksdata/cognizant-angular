import { Injectable } from "@angular/core";
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Product } from "../product";

@Injectable()
export class ProductService{

    constructor(private http:Http){

    }


    
    apiUrl:string="http://localhost:3000/api/products";

    private headers = new Headers({ 'Content-Type': 'application/json' });
    getProducts(): Promise<Product[]>{
        return this.http.get(this.apiUrl)
        .toPromise()
        .then(response => response.json() as Product[])
        .catch(this.handleError);
        
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      }

}