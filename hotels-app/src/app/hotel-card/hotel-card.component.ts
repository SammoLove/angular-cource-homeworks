import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from "../shared/IHotel";

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  @Input() hotelProfile : IHotel["profile"];

  ngOnInit() {
  }
}
