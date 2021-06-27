import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Menu } from '../../models/menu';
import { MenuItem } from '../../models/menu-item';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  menus$: Observable<Menu[]> = this.service.getItems();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private service: NavbarService) { }

  trackByMenu(_: number, item: Menu): string {
    return item.titulo;
  }

  trackByMenuItem(_: number, item: MenuItem): string {
    return item.path as string;
  }
}
