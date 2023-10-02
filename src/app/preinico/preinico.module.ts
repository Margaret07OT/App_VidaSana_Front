import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreinicoPageRoutingModule } from './preinico-routing.module';

import { PreinicoPage } from './preinico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreinicoPageRoutingModule
  ],
  declarations: [PreinicoPage]
})
export class PreinicoPageModule {}
