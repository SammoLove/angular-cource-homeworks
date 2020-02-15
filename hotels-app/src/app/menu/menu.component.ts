import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from "../shared/IHotel";
import {HotelsDataSource} from "../shared/HotelsDataSource";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private hotels: IHotel[] = HotelsDataSource.mockedHotels;

  @Input() stars: number;

  @Input() hotelNameSearchString : string;

  @Output() public hotelClicked: EventEmitter<IHotel> = new EventEmitter();
  selectedHotelPhoto: string;

  @Output() private favouriteEmitter: EventEmitter<IHotel> = new EventEmitter<IHotel>();

  ngOnInit() {
    this.hotelClicked.emit(this.hotels[0]);
    this.selectedHotelPhoto = this.hotels[0].picture;
  }
}
