import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './main-home.component';

export const routes: Routes = [
  { path: '', component: MainHomeComponent},
  { path: 'gallery', loadChildren: () => import('./main-gallery/main-gallery.routing').then(m => m.MainGalleryRouting)}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]

})
export class MainHomeRouting { }
