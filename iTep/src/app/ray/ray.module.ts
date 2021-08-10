import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { RayComponent } from './ray.component';
import { RaycvComponent } from '../raycv/raycv.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { RayRouting } from './ray-routing.module';

@NgModule({
  declarations: [RayComponent, GalleryComponent, RaycvComponent],
  imports: [
    CommonModule,
    RouterModule,
    RayRouting,
    BrowserModule
  ]
})
export class RayModule { }
