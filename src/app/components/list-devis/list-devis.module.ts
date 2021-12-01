import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDevisRoutingModule } from './list-devis-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListDevisComponent } from './list-devis.component';



@NgModule({
  declarations: [ListDevisComponent],
  imports: [
    CommonModule,
    ListDevisRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ListDevisModule { }
