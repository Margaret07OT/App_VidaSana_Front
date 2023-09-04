import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'ingresardatos',
    loadChildren: () => import('./ingresardatos/ingresardatos.module').then( m => m.IngresardatosPageModule)
  },
  {
    path: 'progreso',
    loadChildren: () => import('./progreso/progreso.module').then( m => m.ProgresoPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'subcategoria',
    loadChildren: () => import('./subcategoria/subcategoria.module').then( m => m.SubcategoriaPageModule)
  },
  {
    path: 'iniciar-mi-rutina',
    loadChildren: () => import('./iniciar-mi-rutina/iniciar-mi-rutina.module').then( m => m.IniciarMiRutinaPageModule)
  },
  {
    path: 'tipo-de-ejercicio',
    loadChildren: () => import('./tipo-de-ejercicio/tipo-de-ejercicio.module').then( m => m.TipoDeEjercicioPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
