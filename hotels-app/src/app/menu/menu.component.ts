import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from "../shared/IHotel";
import {DataService} from '../data.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private hotels : IHotel[];

  constructor(private dataService: DataService) {}

  @Input() stars: number;

  @Input() hotelNameSearchString : string;

  @Output() public hotelClicked: EventEmitter<IHotel> = new EventEmitter();
  selectedHotelPhoto: string;

  @Output() private favouriteEmitter: EventEmitter<IHotel> = new EventEmitter<IHotel>();

  ngOnInit() {
    console.log("hotels: " + );
    this.hotelClicked.emit(hotels[0]);
    this.selectedHotelPhoto = hotels[0].picture;
  }
}
