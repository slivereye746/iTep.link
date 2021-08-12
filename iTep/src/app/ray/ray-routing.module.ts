import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RayComponent } from './ray.component';
import { RayGalleryComponent } from './ray-gallery/ray-gallery.component';
import { RaycvComponent } from './raycv/raycv.component';

const routes: Routes = [
  {
    path: '', component:RayComponent,
    children: [
      { path: 'gallery', component: RayGalleryComponent},
      { path: 'cv', component: RaycvComponent}
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RayRoutingModule { }
