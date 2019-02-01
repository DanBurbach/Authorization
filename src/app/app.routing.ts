import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { PublicComponent } from './public/public.component'

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'public',
    component: PublicComponent
  },
  ]
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
