import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Error404Component } from './error404.component';


describe('Error404Component', () => {
  let component: Error404Component;
  let fixture: ComponentFixture<Error404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Error404Component]
    });
    fixture = TestBed.createComponent(Error404Component);
    component = fixture.componentInstance;
  });

  it('deve criar uma instância', () => {
    expect(component).toBeTruthy();
  });
});
