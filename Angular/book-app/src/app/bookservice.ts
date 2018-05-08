import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Book } from "./book";
import { promise } from "protractor";

@Injectable()
export class BookService{

private bookUrl:string="http://localhost:8080/Spring-Rest/book";

private headers=new Headers({'Content-Type':'application/json'});

    constructor(private http:Http){
    }

  //private books:Book[];

  getBooks():Promise<Book[]>{
      return this.http.get(this.bookUrl)
      .toPromise()
      .then(response=>response.json() as Book)
      .catch(this.handleError);
  }

saveBook(book:Book):Promise<Book>{
  return this.http.post(this.bookUrl,book,'{headers:this.headers}')
  .toPromise()
  .catch(this.handleError);
}


findBook(id:number):Promise<Book>{
    const findBookURL=`${this.bookUrl}/${id}`;
    console.log('Find URL: '+findBookURL);
    return this.http.get(findBookURL)
    .toPromise()
    .then(response=>response.json() as Book)
    .catch(this.handleError);
}

updateBook(book:Book):Promise<Book>{
    const updateBookURL=`${this.bookUrl}/${book.id}`;
    return this.http.put(updateBookURL,book,'{headers:this.headers}')
    .toPromise()
    .then(()=>book)
    .catch(this.handleError);

}


deleteBook(book: Book):Promise<Book>{
    const deleteBookURL=`${this.bookUrl}/${book.id}`;
return this.http.delete(deleteBookURL,'{headers:this.headers}')
.toPromise()
.then(()=>null)
.catch(this.handleError)


}


  private handleError(error:any):Promise<any>{
      return Promise.reject(error.message || error);
  }



}