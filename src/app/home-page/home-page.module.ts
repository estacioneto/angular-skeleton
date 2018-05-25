import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../material.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
  imports: [AppMaterialModule, CommonModule, RouterModule],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
