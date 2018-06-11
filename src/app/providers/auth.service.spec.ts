import { inject, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireAuthMock } from './../mocks/AngularFire';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useClass: AngularFireAuthMock },
      ],
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
