import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RayComponent } from './ray/ray.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [AppComponent,RayComponent, MainComponent, ProjectsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
