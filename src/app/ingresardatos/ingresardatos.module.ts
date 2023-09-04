import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresardatosPageRoutingModule } from './ingresardatos-routing.module';

import { IngresardatosPage } from './ingresardatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IngresardatosPageRoutingModule
  ],
  declarations: [IngresardatosPage]
})
export class IngresardatosPageModule {}
