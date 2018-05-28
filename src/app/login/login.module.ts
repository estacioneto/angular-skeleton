import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../material.module';
import { MessageModule } from '../message/message.module';

import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthService } from '../providers/auth.service';

@NgModule({
  imports: [CommonModule, AppMaterialModule, MessageModule],
  providers: [AuthService],
  declarations: [LoginComponent, LoginPageComponent],
})
export class LoginModule {}
