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
    Error404Component
  ],
  providers: [
    NavbarService
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
