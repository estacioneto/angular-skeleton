import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ErrorModule } from './error.module';
import { ErrorPageComponent } from './error-page/error-page.component';

const errorRoutes: Routes = [
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { status: 404, message: 'Are you sure this is the right way?' },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(errorRoutes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
