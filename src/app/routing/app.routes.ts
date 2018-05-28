import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { LoginPageComponent } from '../login/login-page/login-page.component';
import { ErrorPageComponent } from '../error/error-page/error-page.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { status: 404, message: 'Are you sure this is the right way?' },
  },
  { path: '**', redirectTo: 'not-found' },
];
