import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgReduxModule } from '@angular-redux/store';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RoutingModule } from './routing/routing.module';
import { AppMaterialModule } from './material.module';
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
    AppMaterialModule,
    HomePageModule,
    LoginModule,
    ErrorModule,
    RoutingModule,

    // Config Modules
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
    }),

    // Firebase Modules
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    // Redux Modules
    NgReduxModule,
    StoreModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
