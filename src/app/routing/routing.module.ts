import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomePageModule } from '../home-page/home-page.module';
import { LoginModule } from '../login/login.module';
import { ErrorModule } from '../error/error.module';

import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    CommonModule,
    HomePageModule,
    LoginModule,
    ErrorModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
