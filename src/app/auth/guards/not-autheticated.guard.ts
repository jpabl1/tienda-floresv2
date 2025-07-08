import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthStateService } from '../services/auth-state.service';

export const NotAuthenticatedGuard: CanMatchFn = async (
  route: Route,
  segments: UrlSegment[]
) => {
  const authStateService = inject(AuthStateService);
  const router = inject(Router);
  const isAuthenticated = await firstValueFrom( authStateService.authState() );

  if ( isAuthenticated ) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};