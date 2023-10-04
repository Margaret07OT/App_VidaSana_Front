import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaminataPage } from './caminata.page';

describe('CaminataPage', () => {
  let component: CaminataPage;
  let fixture: ComponentFixture<CaminataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaminataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
