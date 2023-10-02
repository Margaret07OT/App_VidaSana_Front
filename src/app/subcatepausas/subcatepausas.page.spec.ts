import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubcatepausasPage } from './subcatepausas.page';

describe('SubcatepausasPage', () => {
  let component: SubcatepausasPage;
  let fixture: ComponentFixture<SubcatepausasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubcatepausasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
