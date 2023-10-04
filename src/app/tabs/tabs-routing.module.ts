import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'progeso',
        loadChildren: () => import('./progeso/progeso.module').then( m => m.ProgesoPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'categoria',
        loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
      },
      {
        path: 'subcatepausa',
        loadChildren: () => import('./subcatepausa/subcatepausa.module').then( m => m.SubcatepausaPageModule)
      },
      {
        path: 'elgocacion',
        loadChildren: () => import('./elgocacion/elgocacion.module').then( m => m.ElgocacionPageModule)
      },
      {
        path: 'ejercicios',
        loadChildren: () => import('./ejercicios/ejercicios.module').then( m => m.EjerciciosPageModule)
      },
      {
        path: 'caminata',
        loadChildren: () => import('./caminata/caminata.module').then( m => m.CaminataPageModule)
      },
    ]

  },
  {
    path: 'progeso',
    loadChildren: () => import('./progeso/progeso.module').then( m => m.ProgesoPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'subcatepausa',
    loadChildren: () => import('./subcatepausa/subcatepausa.module').then( m => m.SubcatepausaPageModule)
  },
  {
    path: 'elgocacion',
    loadChildren: () => import('./elgocacion/elgocacion.module').then( m => m.ElgocacionPageModule)
  },
  {
    path: 'ejercicios',
    loadChildren: () => import('./ejercicios/ejercicios.module').then( m => m.EjerciciosPageModule)
  },
  {
    path: 'caminata',
    loadChildren: () => import('./caminata/caminata.module').then( m => m.CaminataPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
