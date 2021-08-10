import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RayComponent } from './ray.component';
import { RaycvComponent } from '../raycv/raycv.component';

export const routes: Routes = [
  { path: '', component: RayComponent},
  { path: 'gallery', loadChildren: () => import('../gallery/gallery-routing.module').then(m => m.GalleryRouting)},
  { path: 'cv', component: RaycvComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class RayRouting { }
