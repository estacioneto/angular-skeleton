import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppMaterialModule } from '../material.module';
import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
  imports: [CommonModule, AppMaterialModule, ErrorRoutingModule],
  declarations: [ErrorPageComponent],
})
export class ErrorModule {}
