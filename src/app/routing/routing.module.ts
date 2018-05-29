import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from '../home-page/home-page.component';
import { LoginPageComponent } from '../login/login-page/login-page.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RoutingModule {}
