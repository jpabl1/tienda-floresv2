import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import( './flower/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'catalog',
        loadComponent: () => import( './flower/pages/catalog-page/catalog-page.component')
      },
      {
        path: 'sell',
        loadComponent: () => import( './flower/pages/sell-page/sell-page.component')
      },
      {
        path: '**',
        redirectTo: 'catalog'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
