import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperComponent } from './swiper/swiper.component';

import { register } from 'swiper/element/bundle';
import { FlipsliderComponent } from './flipslider/flipslider.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    SwiperComponent,
    FlipsliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
