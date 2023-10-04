import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminataPage } from './caminata.page';

const routes: Routes = [
  {
    path: '',
    component: CaminataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminataPageRoutingModule {}
