import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { ToastService } from '../../message/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<any>();

  constructor(
    public authService: AuthService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  login() {
    this.authService
      .loginWithGoogle()
      .then(info => {
        this.toastService.show({ message: `You're logged in!`, action: 'OK' });
        return info;
      })
      .then(this.loggedIn.emit);
  }

  logout() {
    this.authService.logout();
  }
}
