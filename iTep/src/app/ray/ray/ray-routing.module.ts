import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RayComponent } from './ray.component';
import { RayGalleryComponent } from '../ray-gallery/ray-gallery.component';

const routes: Routes = [
  {
    path: '', component: RayComponent,
    children: [
      { path: 'home', redirectTo: ''},
      { path: 'gallery', component: RayGalleryComponent}
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RayRoutingModule { }
