import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddActualiteComponent } from './add-actualite.component';


const routes: Routes = [
  {
    path: '',
    component: AddActualiteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddActualiteRoutingModule { }
