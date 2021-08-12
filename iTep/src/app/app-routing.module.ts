import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'ray', loadChildren:() => import('./ray/ray-routing.module').then(m=>m.RayRoutingModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
