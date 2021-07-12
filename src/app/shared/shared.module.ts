import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarService } from './components/navbar/navbar.service';
import { Error404Component } from './pages/error404/error404.component';
import { MetodologiaPipe } from './pipes/metodologia.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
  ],
  declarations: [
    NavbarComponent,
    Error404Component,
    MetodologiaPipe,
  ],
  providers: [
    NavbarService
  ],
  exports: [
    NavbarComponent,
    // MetodologiaPipe
  ]
})
export class SharedModule { }
