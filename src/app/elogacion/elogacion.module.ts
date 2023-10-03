import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElogacionPageRoutingModule } from './elogacion-routing.module';

import { ElogacionPage } from './elogacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElogacionPageRoutingModule
  ],
  declarations: [ElogacionPage]
})
export class ElogacionPageModule {}
