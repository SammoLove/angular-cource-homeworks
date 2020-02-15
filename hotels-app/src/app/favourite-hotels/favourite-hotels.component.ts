import {Component, Input, OnInit} from '@angular/core';
import {IHotel} from "../shared/IHotel";

@Component({
  selector: 'app-favourite-hotels',
  templateUrl: './favourite-hotels.component.html',
  styleUrls: ['./favourite-hotels.component.css']
})
export class FavouriteHotelsComponent implements OnInit {

  @Input() addToFavourite: IHotel;

  constructor() { }

  ngOnInit() {
  }
}
