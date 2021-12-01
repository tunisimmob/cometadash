import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateActualiteRoutingModule } from './update-actualite-routing.module';
import { UpdateActualiteComponent } from './update-actualite.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [UpdateActualiteComponent],
  imports: [
    CommonModule,
    UpdateActualiteRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgxPaginationModule,
    SharedModule
  ]
})
export class UpdateActualiteModule { }
