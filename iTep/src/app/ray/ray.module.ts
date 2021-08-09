import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RayComponent } from './ray.component';
import { RaycvComponent } from './raycv/raycv.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RayComponent, GalleryComponent, RaycvComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RayModule { }
