import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { FindbookComponent } from './findbook/findbook.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BookService } from './bookservice';
import {RouterModule} from '@angular/router';
import { myrouters } from './myrouts';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    ListbooksComponent,
    FindbookComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(myrouters)

  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
