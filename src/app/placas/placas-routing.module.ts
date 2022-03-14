import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacasPage } from './placas.page';

const routes: Routes = [
  {
    path: '',
    component: PlacasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacasPageRoutingModule {}
