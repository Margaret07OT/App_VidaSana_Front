import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElgocacionPage } from './elgocacion.page';

describe('ElgocacionPage', () => {
  let component: ElgocacionPage;
  let fixture: ComponentFixture<ElgocacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElgocacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
