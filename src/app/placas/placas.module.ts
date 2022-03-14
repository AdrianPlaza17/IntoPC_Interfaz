import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacasPageRoutingModule } from './placas-routing.module';

import { PlacasPage } from './placas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacasPageRoutingModule
  ],
  declarations: [PlacasPage]
})
export class PlacasPageModule {}
