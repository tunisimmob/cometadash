import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProduitRoutingModule } from './update-produit-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { UpdateProduitComponent } from './update-produit.component';


@NgModule({
  declarations: [UpdateProduitComponent],
  imports: [
    CommonModule,
    UpdateProduitRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class UpdateProduitModule { }
