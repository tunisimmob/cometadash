import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateActualiteComponent } from './update-actualite.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    component: UpdateActualiteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateActualiteRoutingModule { }
