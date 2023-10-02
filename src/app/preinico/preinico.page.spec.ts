import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreinicoPage } from './preinico.page';

describe('PreinicoPage', () => {
  let component: PreinicoPage;
  let fixture: ComponentFixture<PreinicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PreinicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
