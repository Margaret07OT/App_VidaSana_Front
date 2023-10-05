import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstiramientoPageRoutingModule } from './estiramiento-routing.module';

import { EstiramientoPage } from './estiramiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstiramientoPageRoutingModule
  ],
  declarations: [EstiramientoPage]
})
export class EstiramientoPageModule {}
