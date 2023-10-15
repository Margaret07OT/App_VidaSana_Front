import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambioconPage } from './cambiocon.page';

describe('CambioconPage', () => {
  let component: CambioconPage;
  let fixture: ComponentFixture<CambioconPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CambioconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
