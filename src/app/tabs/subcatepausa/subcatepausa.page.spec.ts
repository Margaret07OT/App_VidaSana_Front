import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubcatepausaPage } from './subcatepausa.page';

describe('SubcatepausaPage', () => {
  let component: SubcatepausaPage;
  let fixture: ComponentFixture<SubcatepausaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubcatepausaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
