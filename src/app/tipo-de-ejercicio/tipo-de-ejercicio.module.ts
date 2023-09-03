import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoDeEjercicioPageRoutingModule } from './tipo-de-ejercicio-routing.module';

import { TipoDeEjercicioPage } from './tipo-de-ejercicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoDeEjercicioPageRoutingModule
  ],
  declarations: [TipoDeEjercicioPage]
})
export class TipoDeEjercicioPageModule {}
