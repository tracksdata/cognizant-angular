
import {Routes} from '@angular/router'
import { AddbookComponent } from './addbook/addbook.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { FindbookComponent } from './findbook/findbook.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
export const myrouters:Routes=[

    {path:'addbook',component:AddbookComponent},
    {path:'listbooks',component:ListbooksComponent},
    {path:'findbook',component:FindbookComponent},
    {path:'updatebook',component:UpdateComponent},
    {path:'deletebook',component:DeleteComponent},

]