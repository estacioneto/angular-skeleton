import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<any>();

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.loginWithGoogle().then(this.loggedIn.emit);
  }

  goHome() {
    this.loggedIn.emit({ redirect: true });
  }

  logout() {
    this.authService.logout();
  }
}
