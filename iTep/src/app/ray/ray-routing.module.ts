import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RayComponent } from './ray.component';

export const routes: Routes = [
  { path: '', component: RayComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RayModule { }
