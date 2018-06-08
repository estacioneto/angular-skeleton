import { Observable, of } from 'rxjs';

export class AngularFireAuthMock {
  authState: Observable<any>;

  constructor() {
    this.authState = of({});
  }
}
