import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtDetailComponent } from '../art-detail/art-detail.component';
import { GalleryComponent } from './gallery.component';

export const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: '/:id', component: ArtDetailComponent}

];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

})
export class GalleryRouing {}
