import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'app',
    loadChildren: () => import('./components/tabs/tabs.routes').then((m) => m.routes),
  }
];
