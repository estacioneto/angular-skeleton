import { Component, OnInit } from '@angular/core';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userLoaded = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.afAuth.authState.subscribe(data => {
      this.userLoaded = true;
    });
  }
}
