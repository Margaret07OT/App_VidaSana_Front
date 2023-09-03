import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoDeEjercicioPage } from './tipo-de-ejercicio.page';

describe('TipoDeEjercicioPage', () => {
  let component: TipoDeEjercicioPage;
  let fixture: ComponentFixture<TipoDeEjercicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TipoDeEjercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
