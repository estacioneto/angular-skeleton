import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../providers/auth.service';

import { buildMerge } from '../../shared/util';
import { Observable, Subscription } from 'rxjs';

import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  redirect$: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.redirect$ = buildMerge({
      params: this.route.paramMap,
      user: this.authService.afAuth.user,
    }).subscribe(({ user, params } = {}) => {
      if (user && params && params.get('redirect')) {
        this.router.navigate([params.get('redirect')]);
      }
    });
  }

  ngOnDestroy(): void {
    this.redirect$.unsubscribe();
  }
}
