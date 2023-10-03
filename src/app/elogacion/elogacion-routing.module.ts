import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElogacionPage } from './elogacion.page';

const routes: Routes = [
  {
    path: '',
    component: ElogacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElogacionPageRoutingModule {}
