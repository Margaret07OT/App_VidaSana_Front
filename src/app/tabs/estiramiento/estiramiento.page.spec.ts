import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstiramientoPage } from './estiramiento.page';

describe('EstiramientoPage', () => {
  let component: EstiramientoPage;
  let fixture: ComponentFixture<EstiramientoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstiramientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
