import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';


//------------------------------------------------------
let routes: Routes = [
  // { path: '', redirectTo:'login' , pathMatch:'full'},
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },

  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule' // Lazy Module Moduling.
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];
//------------------------------------------------------


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    HomeComponent,
    ContactComponent,
    LoginComponent,
    NotFoundComponent
  ]
})
export class AppRoutingModule { }
