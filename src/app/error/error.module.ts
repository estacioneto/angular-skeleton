import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppMaterialModule } from '../material.module';

@NgModule({
  imports: [CommonModule, AppMaterialModule, RouterModule],
  declarations: [ErrorPageComponent],
})
export class ErrorModule {}
