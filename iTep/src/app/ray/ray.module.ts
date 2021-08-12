import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RayComponent } from './ray.component';
import { RayGalleryComponent } from './ray-gallery/ray-gallery.component';
import { RaycvComponent } from './raycv/raycv.component';


@NgModule({
  declarations: [RayComponent, RayGalleryComponent, RaycvComponent],
  imports: [CommonModule]
})
export class RayModule { }
