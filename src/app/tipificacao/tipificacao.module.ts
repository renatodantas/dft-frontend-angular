import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TipificacaoRoutingModule } from './tipificacao-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TipificacaoRoutingModule
  ],
})
export class TipificacaoModule { }
