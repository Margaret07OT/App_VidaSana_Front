import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Registrop2Page } from './registrop2.page';

describe('Registrop2Page', () => {
  let component: Registrop2Page;
  let fixture: ComponentFixture<Registrop2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Registrop2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
