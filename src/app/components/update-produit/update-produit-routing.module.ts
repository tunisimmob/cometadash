import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProduitComponent } from './update-produit.component';


const routes: Routes = [
  {
    path: '',
    component: UpdateProduitComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateProduitRoutingModule { }
