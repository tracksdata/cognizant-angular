import { Injectable } from "@angular/core";
import { PRODUCTS } from "../products";

@Injectable()
export class ProductService{

    getProducts(){
        return Promise.resolve(PRODUCTS);
    }

}