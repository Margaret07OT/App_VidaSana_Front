import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarMiRutinaPageRoutingModule } from './iniciar-mi-rutina-routing.module';

import { IniciarMiRutinaPage } from './iniciar-mi-rutina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarMiRutinaPageRoutingModule
  ],
  declarations: [IniciarMiRutinaPage]
})
export class IniciarMiRutinaPageModule {}
