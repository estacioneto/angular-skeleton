import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../providers/auth.service';

import { buildMerge } from '../../shared/util';
import { Observable, Subscription, combineLatest } from 'rxjs';

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
    this.redirect$ = combineLatest(
      this.route.paramMap,
      this.authService.afAuth.user
    ).subscribe(([params, user]) => {
      if (user && params.get('redirect')) {
        this.router.navigate([params.get('redirect')]);
      }
    });
  }

  ngOnDestroy(): void {
    this.redirect$.unsubscribe();
  }
}
