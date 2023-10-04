import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminataPageRoutingModule } from './caminata-routing.module';

import { CaminataPage } from './caminata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminataPageRoutingModule
  ],
  declarations: [CaminataPage]
})
export class CaminataPageModule {}
