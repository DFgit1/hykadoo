import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { AuthguardService } from './services/authgaurd.service';


const routes: Routes = [
{
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {path: 'login', component: LoginComponent},
  {
    path: '',
    canActivate: [AuthguardService],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
