import { CUSTOM_ELEMENTS_SCHEMA, NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperComponent } from './swiper/swiper.component';

import { register } from 'swiper/element/bundle';
import { FlipsliderComponent } from './flipslider/flipslider.component';
import { AtropossliderComponent } from './atroposslider/atroposslider.component';
import { FadesliderComponent } from './fadeslider/fadeslider.component';
import { CubesliderComponent } from './cubeslider/cubeslider.component';
import { CoverflowsliderComponent } from './coverflowslider/coverflowslider.component';
import { CardssliderComponent } from './cardsslider/cardsslider.component';
import { CommonModule } from '@angular/common';
import { StaticatroposComponent } from './staticatropos/staticatropos.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    SwiperComponent,
    FlipsliderComponent,
    AtropossliderComponent,
    FadesliderComponent,
    CubesliderComponent,
    CoverflowsliderComponent,
    CardssliderComponent,
    StaticatroposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
