import { Component } from '@angular/core';
import {IHotel} from "./shared/IHotel";
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'hotels-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'hotels-app';

  selectedHotel: IHotel;

  /*handleHotelItemClicked(hotel: Hotel) {
    this.selectedHotel = hotel;
    console.log("App: I know, what hotel clicked: " + hotel.title);
  }*/
  findIt(param: any) {
    console.log(param);
  }
}
