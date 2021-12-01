import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListActualiteRoutingModule } from './list-actualite-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListActualiteComponent } from './list-actualite.component';

@NgModule({
  declarations: [ListActualiteComponent],
  imports: [
    CommonModule,
    ListActualiteRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ListActualiteModule { }
