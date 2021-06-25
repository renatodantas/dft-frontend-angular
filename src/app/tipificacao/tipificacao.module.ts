import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TipificacaoRoutingModule } from './tipificacao-routing.module';
import { TipificacaoComponent } from './tipificacao.component';

@NgModule({
  imports: [
    CommonModule,
    TipificacaoRoutingModule
  ],
  declarations: [
    TipificacaoComponent
  ],
})
export class TipificacaoModule { }
