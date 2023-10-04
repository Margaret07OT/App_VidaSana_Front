import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgesoPage } from './progeso.page';

describe('ProgesoPage', () => {
  let component: ProgesoPage;
  let fixture: ComponentFixture<ProgesoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProgesoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
