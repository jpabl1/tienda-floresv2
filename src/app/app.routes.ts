import { Routes } from '@angular/router';
import { NotAuthenticatedGuard } from './auth/guards/not-autheticated.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import( './auth/auth.routes'),
    canMatch: [
      NotAuthenticatedGuard,
    ],
  },
  {
    path: '',
    loadChildren: () => import('./flower/flower.route')
  }
];
