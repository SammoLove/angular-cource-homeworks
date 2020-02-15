import { Component } from '@angular/core';
import {IHotel} from "./shared/IHotel";

@Component({
  selector: 'hotels-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'hotels-app';

  selectedHotel: IHotel;

  favouriteHotel: IHotel;

  searchString: string;

  /*handleHotelItemClicked(hotel: Hotel) {
    this.selectedHotel = hotel;
    console.log("App: I know, what hotel clicked: " + hotel.title);
  }*/
  findIt(param: any) {
    console.log(param);
  }

  filterHotels(searchString: string) {
    this.searchString = searchString;
  }
}
