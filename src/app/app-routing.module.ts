import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from './produits/produits.component';
import {LivresComponent} from './livres/livres.component';
import {GeneralComponent} from './general/general.component';

import {NewProductComponent} from './new-product/new-product.component';


const routes: Routes = [{
  path:"general",component:GeneralComponent
},
{
path:"produit",component:ProduitsComponent
},
  {
    path:"new-product",component:NewProductComponent
  },
  {
  path:"livre/:p1/:p2",component:LivresComponent
},
{
path:"livre",redirectTo:"/livre/1/0",pathMatch:'full'
},
  {
  path:"",redirectTo:"/general",pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
