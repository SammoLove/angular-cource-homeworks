import {Component, Input, OnInit} from '@angular/core';
import {IHotel} from "../shared/IHotel";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input()
  weather: IHotel["weather"];

  ngOnInit() {
  }
}
