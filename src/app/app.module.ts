import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ErrorModule } from './error/error.module';
import { AppFirebaseModule } from './firebase.module';
import { HomePageModule } from './home-page/home-page.module';
import { LoginModule } from './login/login.module';
import { AppMaterialModule } from './material.module';
import { AppRoutingModule } from './routing/routing.module';
import { AppStoreModule } from './store/store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HomePageModule,
    LoginModule,
    ErrorModule,

    // Config Modules
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
    }),
    AngularFireModule.initializeApp(environment.firebase),

    // Custom App Modules
    AppMaterialModule,
    AppFirebaseModule,
    AppRoutingModule,

    // Redux Modules
    AppStoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
