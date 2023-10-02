import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreinicoPage } from './preinico.page';

const routes: Routes = [
  {
    path: '',
    component: PreinicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreinicoPageRoutingModule {}
