import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MainComponent } from './main/main.component';
import { ProjectComponent } from './ray/project/project.component';

@NgModule({
  declarations: [AppComponent, TestComponent, MainComponent, ProjectComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
