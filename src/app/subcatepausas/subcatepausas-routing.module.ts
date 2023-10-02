import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcatepausasPage } from './subcatepausas.page';

const routes: Routes = [
  {
    path: '',
    component: SubcatepausasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcatepausasPageRoutingModule {}
