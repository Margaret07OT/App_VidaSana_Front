import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubcatepausaPageRoutingModule } from './subcatepausa-routing.module';

import { SubcatepausaPage } from './subcatepausa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubcatepausaPageRoutingModule
  ],
  declarations: [SubcatepausaPage]
})
export class SubcatepausaPageModule {}
