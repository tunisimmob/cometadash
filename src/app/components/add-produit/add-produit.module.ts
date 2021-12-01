import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProduitRoutingModule } from './add-produit-routing.module';
import { AddProduitComponent } from './add-produit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [AddProduitComponent],
  imports: [
    CommonModule,
    AddProduitRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class AddProduitModule { }
