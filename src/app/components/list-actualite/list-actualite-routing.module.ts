import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListActualiteComponent } from './list-actualite.component';


const routes: Routes = [
  {
    path: '',
    component: ListActualiteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListActualiteRoutingModule { }
