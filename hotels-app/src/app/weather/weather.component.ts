import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from "../shared/Hotel";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input()
  weather: Hotel["weather"];

  ngOnInit() {
  }
}
