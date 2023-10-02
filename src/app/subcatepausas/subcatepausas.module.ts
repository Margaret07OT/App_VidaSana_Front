import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubcatepausasPageRoutingModule } from './subcatepausas-routing.module';

import { SubcatepausasPage } from './subcatepausas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubcatepausasPageRoutingModule
  ],
  declarations: [SubcatepausasPage]
})
export class SubcatepausasPageModule {}
