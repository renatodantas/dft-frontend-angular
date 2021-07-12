import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { NavbarComponent } from './navbar.component';
import { NavbarService } from './navbar.service';

describe('NavbarComponent', () => {

  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>

  let breakpoint: jasmine.SpyObj<BreakpointObserver>;
  let serviceSpy: jasmine.SpyObj<NavbarService>;

  beforeEach(() => {
    breakpoint = jasmine.createSpyObj('BreakpointObserver', ['observe'], ['matches']);
    serviceSpy = jasmine.createSpyObj('NavbarService', ['getItems']);

    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatExpansionModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
      ],
      declarations: [NavbarComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: NavbarService, useValue: serviceSpy },
      ]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;

    prepararDados(breakpoint);
  });

  function prepararDados(breakpoint: jasmine.SpyObj<BreakpointObserver>) {
    const bpState: BreakpointState = { matches: true, breakpoints: {} };
    breakpoint.observe.and.returnValue(of(bpState));
  }

  it('deve recuperar os itens do service', () => {
    expect(serviceSpy.getItems.calls.count())
      .withContext('getItems() deveria ser invocado 1 vez')
      .toBe(1);
  });
});
