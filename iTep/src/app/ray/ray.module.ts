import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes } from '@angular/router';
import { RayComponent } from './ray.component';

const routes: Routes = [
  {
    path: '', component: RayComponent,
    children: [
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RayModule { }
