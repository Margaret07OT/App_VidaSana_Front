import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciarMiRutinaPage } from './iniciar-mi-rutina.page';

describe('IniciarMiRutinaPage', () => {
  let component: IniciarMiRutinaPage;
  let fixture: ComponentFixture<IniciarMiRutinaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IniciarMiRutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
