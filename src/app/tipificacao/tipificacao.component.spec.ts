import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipificacaoComponent } from './tipificacao.component';

describe('TipificacaoComponent', () => {
  let component: TipificacaoComponent;
  let fixture: ComponentFixture<TipificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
