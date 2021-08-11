import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RayComponent } from './ray.component';
import { RayCvComponent } from '../ray-cv/ray-cv.component';

import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    RayComponent,
    RayCvComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [RouterModule]
})
export class RayModule { }
