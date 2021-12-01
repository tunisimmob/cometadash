import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddActualiteRoutingModule } from './add-actualite-routing.module';
import { AddActualiteComponent } from './add-actualite.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [AddActualiteComponent],
  imports: [
    CommonModule,
    AddActualiteRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class AddActualiteModule { }
