import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListProduitRoutingModule } from './list-produit-routing.module';
import { ListProduitComponent } from './list-produit.component';


@NgModule({
  declarations: [ListProduitComponent],
  imports: [
    CommonModule,
    ListProduitRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ListProduitModule { }
