import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../material.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
  imports: [AppMaterialModule, CommonModule],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
