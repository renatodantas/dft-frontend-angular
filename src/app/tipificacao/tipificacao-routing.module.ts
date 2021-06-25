import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipificacaoComponent } from './tipificacao.component';

const routes: Routes = [
  {
    path: '',
    component: TipificacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipificacaoRoutingModule { }
