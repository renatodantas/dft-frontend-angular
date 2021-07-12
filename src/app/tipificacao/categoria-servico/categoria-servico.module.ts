import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaServicoRoutingModule } from './categoria-servico-routing.module';
import { CategoriaServicoService } from './categoria-servico.service';

@NgModule({
  imports: [
    CategoriaServicoRoutingModule,
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  declarations: [
    CategoriaListComponent,
    CategoriaEditComponent
  ],
  providers: [
    CategoriaServicoService,
  ]
})
export class CategoriaServicoModule { }
