import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from "../shared/IHotel";
import {HotelsDataSource} from "../shared/HotelsDataSource";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  hotels: IHotel[] = HotelsDataSource.mockedHotels;

  @Output() public hotelClicked: EventEmitter<IHotel> = new EventEmitter();
  selectedHotelPhoto: string;

  ngOnInit() {
    this.hotelClicked.emit(this.hotels[0]);
    this.selectedHotelPhoto = this.hotels[0].picture;
  }
}
