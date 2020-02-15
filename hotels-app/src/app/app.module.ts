import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {WeatherComponent} from './weather/weather.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {MenuComponent} from './menu/menu.component';
import {HotelCardComponent} from './hotel-card/hotel-card.component';
import {HotelItemComponent} from './hotel-item/hotel-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import {HotelsPipe} from "./menu/hotels-filter.pipe";
import {StarsPipe} from "./menu/stars-filter.pipe";
import { FavouriteHotelsComponent } from './favourite-hotels/favourite-hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WeatherComponent,
    NavBarComponent,
    MenuComponent,
    HotelCardComponent,
    HotelItemComponent,
    HotelSearchComponent,
    HotelsPipe,
    StarsPipe,
    FavouriteHotelsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
