import { AngularFireAuth } from 'angularfire2/auth';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppMaterialModule } from './material.module';
import { appRoutes } from './routing/routing.module';
import { LoginModule } from './login/login.module';
import { HomePageModule } from './home-page/home-page.module';

import { AppComponent } from './app.component';
import { AngularFireAuthMock } from './mocks/AngularFire';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        RouterTestingModule.withRoutes(appRoutes),
        HomePageModule,
        LoginModule,
      ],
      providers: [{ provide: AngularFireAuth, useClass: AngularFireAuthMock }],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Skeleton');
  }));

  it('should render title in a div tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div[mdcheadline3]').textContent).toContain(
      'Angular Skeleton'
    );
  }));
});
