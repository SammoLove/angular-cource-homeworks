import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hotel} from "../shared/Hotel";

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  @Input() hotelProfile : Hotel["profile"];

  ngOnInit() {
  }
}
