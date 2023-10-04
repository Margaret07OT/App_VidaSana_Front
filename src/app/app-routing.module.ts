import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },

  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/bienvenida.module').then(m => m.BienvenidaPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalPageModule)
  },

  {
    path: 'preinico',
    loadChildren: () => import('./preinico/preinico.module').then( m => m.PreinicoPageModule)
  },

  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

