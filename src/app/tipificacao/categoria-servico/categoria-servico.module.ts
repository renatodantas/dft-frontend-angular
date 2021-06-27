import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriaServicoRoutingModule } from './categoria-servico-routing.module';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriaServicoRoutingModule
  ],
  declarations: [
    CategoriaListComponent,
    CategoriaEditComponent
  ]
})
export class CategoriaServicoModule { }
