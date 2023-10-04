import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcatepausaPage } from './subcatepausa.page';

const routes: Routes = [
  {
    path: '',
    component: SubcatepausaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcatepausaPageRoutingModule {}
