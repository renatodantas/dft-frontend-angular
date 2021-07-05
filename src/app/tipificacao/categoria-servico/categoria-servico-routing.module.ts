import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaListResolver } from './categoria-list/categoria-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: CategoriaListComponent,
    resolve: {
      itens: CategoriaListResolver
    }
  },
  {
    path: ':id',
    component: CategoriaEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaServicoRoutingModule { }
