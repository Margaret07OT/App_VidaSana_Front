import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElogacionPage } from './elogacion.page';

describe('ElogacionPage', () => {
  let component: ElogacionPage;
  let fixture: ComponentFixture<ElogacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElogacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
