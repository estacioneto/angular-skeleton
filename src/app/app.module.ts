import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MdcTypographyModule } from '@angular-mdc/web';
import { HomePageModule } from './home-page/home-page.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MdcTypographyModule,
    RouterModule.forRoot(appRoutes),
    HomePageModule,
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
