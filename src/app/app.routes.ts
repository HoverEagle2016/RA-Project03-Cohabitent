
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { journalRoutes } from './components/journal/journal.route';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent }, 
  ...journalRoutes,
  // ...dogRoutes
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);