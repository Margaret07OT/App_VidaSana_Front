import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElgocacionPageRoutingModule } from './elgocacion-routing.module';

import { ElgocacionPage } from './elgocacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElgocacionPageRoutingModule
  ],
  declarations: [ElgocacionPage]
})
export class ElgocacionPageModule {}
