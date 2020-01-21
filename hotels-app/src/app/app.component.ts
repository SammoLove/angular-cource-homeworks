import { Component } from '@angular/core';
import {Hotel} from "./shared/Hotel";

@Component({
  selector: 'hotels-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'hotels-app';

  selectedHotel: Hotel;

  /*handleHotelItemClicked(hotel: Hotel) {
    this.selectedHotel = hotel;
    console.log("App: I know, what hotel clicked: " + hotel.title);
  }*/
}
