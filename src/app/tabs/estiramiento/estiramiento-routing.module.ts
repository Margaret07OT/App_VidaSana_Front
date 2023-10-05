import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstiramientoPage } from './estiramiento.page';

const routes: Routes = [
  {
    path: '',
    component: EstiramientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstiramientoPageRoutingModule {}
