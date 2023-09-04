import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresardatosPage } from './ingresardatos.page';

describe('IngresardatosPage', () => {
  let component: IngresardatosPage;
  let fixture: ComponentFixture<IngresardatosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresardatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
