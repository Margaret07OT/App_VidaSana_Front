import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgesoPageRoutingModule } from './progeso-routing.module';

import { ProgesoPage } from './progeso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgesoPageRoutingModule
  ],
  declarations: [ProgesoPage]
})
export class ProgesoPageModule {}
