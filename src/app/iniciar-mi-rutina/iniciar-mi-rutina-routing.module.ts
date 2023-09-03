import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarMiRutinaPage } from './iniciar-mi-rutina.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarMiRutinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarMiRutinaPageRoutingModule {}
