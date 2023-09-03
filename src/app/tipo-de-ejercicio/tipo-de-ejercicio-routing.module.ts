import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoDeEjercicioPage } from './tipo-de-ejercicio.page';

const routes: Routes = [
  {
    path: '',
    component: TipoDeEjercicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoDeEjercicioPageRoutingModule {}
