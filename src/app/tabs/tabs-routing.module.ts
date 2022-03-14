import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'producto',
        loadChildren: () => import('../producto/producto.module').then( m => m.ProductoPageModule)
      },
      {
        path: 'placas',
        loadChildren: () => import('../placas/placas.module').then( m => m.PlacasPageModule)
      },
      {
        path: 'guardados',
        loadChildren: () => import('../guardados/guardados.module').then( m => m.GuardadosPageModule)
      },
      {
        path: 'pedido',
        loadChildren: () => import('../pedido/pedido.module').then( m => m.PedidoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
