import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RayGalleryComponent } from './ray-gallery/ray-gallery.component';
import { ExpComponent } from './ex/exp/exp.component';
import { HpComponent } from './ex/hp/hp.component';
import { RaycvComponent } from './ray/raycv/raycv.component';
import { StoreComponent } from './store/store/store.component';
import { ItemDetailComponent } from './store/item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpComponent,
    HpComponent,
    RaycvComponent,
    StoreComponent,
    ItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
