import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {
  @Output() searchInputEvent = new EventEmitter<string>();

  findIt(searchString: string) {
    this.searchInputEvent.emit(searchString);
  }

  ngOnInit() {
  }
}
