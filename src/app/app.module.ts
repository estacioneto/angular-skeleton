import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgReduxModule } from '@angular-redux/store';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './routing/routing.module';
import { AppMaterialModule } from './material.module';
import { AppFirebaseModule } from './firebase.module';
import { ErrorModule } from './error/error.module';
import { HomePageModule } from './home-page/home-page.module';
import { LoginModule } from './login/login.module';
import { StoreModule } from './store/store.module';

import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { environment } from '../environments/environment';

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
    NgReduxModule,
    StoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
