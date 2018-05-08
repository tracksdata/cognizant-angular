import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductResolverService} from './product-resolver.service';
import {ProductsService} from './products.service';
import {ProductsResolverService} from './products-resolver.service';
import {HttpModule} from '@angular/http';

import {DataTableModule} from 'primeng/datatable';
import {ProductViewComponent} from './product-view/product-view.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {ReactiveFormsModule} from '@angular/forms';


// ---------------------------------------------------------------------

let routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'all',
    resolve: {
      products: ProductsResolverService
    },
    component: ProductListComponent,
    children: [
      {
        path: 'view/:prodId',
        resolve: {
          product: ProductResolverService
        },
        component: ProductViewComponent
      },
      {
        path: 'edit/:prodId',
        resolve: {
          product: ProductResolverService
        },
        component: ProductFormComponent
      }
    ]
  },
  {
    path: 'new',
    component: ProductFormComponent
  }

];

// ---------------------------------------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    DataTableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductsService,
    ProductsResolverService,
    ProductResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
