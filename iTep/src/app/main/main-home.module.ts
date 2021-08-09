import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeRouting } from './main-home.routing';
import { MainHomeComponent } from './main-home.component';



@NgModule({
  declarations: [MainHomeComponent],
  imports: [
    CommonModule,
    MainHomeRouting
  ]
})
export class MainHomeModule { }
