import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hotel} from "../shared/Hotel";
import {HotelsDataSource} from "../shared/HotelsDataSource";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  hotels: Hotel[] = HotelsDataSource.hotelsData;

  @Output() public hotelClicked: EventEmitter<Hotel> = new EventEmitter();
  selectedHotelPhoto: string;

  ngOnInit() {
    this.hotelClicked.emit(this.hotels[0]);
    this.selectedHotelPhoto = this.hotels[0].picture;
  }
}
