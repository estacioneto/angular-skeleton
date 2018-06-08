import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  exports: [
    // Firebase Modules
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
})
export class AppFirebaseModule {}
