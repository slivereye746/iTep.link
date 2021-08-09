import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGalleryComponent } from './main-gallery.component';

export const routes: Routes = [
  { path: '', component: MainGalleryComponent}
];

@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MainGalleryRouting {}
