import { Component, OnInit } from '@angular/core';
import { BookService } from '../bookservice';
import { Book } from '../book';

@Component({
  selector: 'app-findbook',
  templateUrl: './findbook.component.html',
  styleUrls: ['./findbook.component.css']
})
export class FindbookComponent implements OnInit {

  constructor(private bookService:BookService) { }



    public book=new Book();

    findResults=false;
 findBook(id:number){
   this.findResults=true;
  this.bookService.findBook(id).then(book=>this.book=book);
 }

  ngOnInit() {
  }

}
